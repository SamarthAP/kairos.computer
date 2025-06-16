"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { LiveAPIProvider } from "./contexts/LiveApiContext";
import { getCreateWorkflowWebSocketUrl } from "./lib/livestream/websocket-connection";
import { WorkflowRecorder } from "./components/WorkflowRecorder";
import { logger } from "./lib/log";

type RecordingState =
  | "INITIAL"
  | "RECORDING"
  | "POST_RECORDING"
  | "PROCESSING"
  | "WORKFLOW_READY";

interface WorkflowData {
  id: string;
  name: string;
  description: string;
  outline?: string;
  metadata?: {
    inputs?: Array<{ key: string; value: string }>;
    secure_inputs?: Array<{ key: string; value: string }>;
    integrations?: string[];
    [key: string]: unknown;
  };
}

function HomeContent() {
  const [recordingState, setRecordingState] =
    useState<RecordingState>("INITIAL");
  const [generatedWorkflow, setGeneratedWorkflow] =
    useState<WorkflowData | null>(null);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [recordingError, setRecordingError] = useState<string | null>(null);
  const [processingStatus, setProcessingStatus] = useState<string>("");
  const mediaBlobUrlRef = useRef<string | null>(null);

  // Initialize the workflow recorder
  const workflowRecorder = WorkflowRecorder({
    onRecordingComplete: (blob: Blob) => {
      setRecordedBlob(blob);
      setRecordingState("POST_RECORDING");
      setRecordingError(null);
      logger.info("Recording complete, blob size:", blob.size);
    },
    onStateChange: (state) => {
      if (state === "idle") {
        setRecordingState("INITIAL");
      } else if (state === "recording") {
        setRecordingState("RECORDING");
      }
    },
  });

  // Clean up blob URL on unmount
  useEffect(() => {
    return () => {
      if (mediaBlobUrlRef.current) {
        URL.revokeObjectURL(mediaBlobUrlRef.current);
      }
    };
  }, []);

  // Handlers for recording flow
  const handleStartRecording = async () => {
    setRecordingError(null);
    // Reset the workflow recorder state to clear any previous errors
    if (workflowRecorder.streamError) {
      // Force a clean state by resetting everything
      handleStartNew();
      // Small delay to ensure cleanup completes
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    try {
      await workflowRecorder.handleStartStreaming();
    } catch (error) {
      console.error("Failed to start recording:", error);
      setRecordingError(
        "Failed to start screen recording. Please ensure you grant screen sharing permission."
      );
      setRecordingState("INITIAL");
    }
  };

  const handleStopRecording = () => {
    workflowRecorder.handleStopStreaming();
  };

  const handleConfirm = async () => {
    if (!recordedBlob) {
      setRecordingError("No recording found");
      return;
    }

    setRecordingState("PROCESSING");
    setRecordingError(null);
    setProcessingStatus("Creating workflow...");

    try {
      // 1. Create a new workflow
      logger.info("Creating workflow...");
      const createResponse = await fetch("/api/create-workflow", {
        method: "POST",
      });

      if (!createResponse.ok) {
        throw new Error("Failed to create workflow");
      }

      const { data: workflow } = await createResponse.json();
      logger.info("Workflow created:", workflow.id);

      // 2. Get presigned URL
      setProcessingStatus("Getting upload URL...");
      logger.info("Getting presigned URL...");
      const presignedResponse = await fetch(
        `/api/presigned-url?id=${workflow.id}`
      );

      if (!presignedResponse.ok) {
        throw new Error("Failed to get presigned URL");
      }

      const { presigned_url } = await presignedResponse.json();
      logger.info("Got presigned URL");

      // 3. Upload video to presigned URL
      setProcessingStatus("Uploading video...");
      logger.info("Uploading video...");
      const uploadResponse = await fetch(presigned_url, {
        method: "PUT",
        body: recordedBlob,
        headers: {
          "Content-Type": recordedBlob.type || "video/mp4",
        },
      });

      if (!uploadResponse.ok) {
        throw new Error(`Failed to upload video: ${uploadResponse.statusText}`);
      }
      logger.info("Video uploaded successfully");

      // 4. Poll for workflow processing completion
      setProcessingStatus("Processing your workflow...");
      logger.info("Polling for workflow processing...");
      let processedWorkflow: WorkflowData | null = null;
      const maxAttempts = 60; // 60 attempts, 2 seconds each = 2 minutes max
      let attempts = 0;

      while (attempts < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 seconds

        const getWorkflowResponse = await fetch(
          `/api/get-workflow?id=${workflow.id}`
        );

        if (!getWorkflowResponse.ok) {
          logger.warn("Failed to get workflow status, retrying...");
          attempts++;
          continue;
        }

        const { data: workflowData } = await getWorkflowResponse.json();

        if (workflowData.outline) {
          logger.info("Workflow processing complete!");
          processedWorkflow = workflowData;
          break;
        }

        setProcessingStatus(
          `Processing your workflow... (${Math.round(
            (attempts / maxAttempts) * 100
          )}%)`
        );
        logger.info(
          `Still processing... (attempt ${attempts + 1}/${maxAttempts})`
        );
        attempts++;
      }

      if (!processedWorkflow) {
        throw new Error("Workflow processing timed out");
      }

      // 5. Show the processed workflow
      setGeneratedWorkflow(processedWorkflow);
      setRecordingState("WORKFLOW_READY");

      // Save workflow ID to cookie for app.kairos.computer
      // Set expiration to 7 days from now
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 7);

      document.cookie = `homepage_workflow_id=${
        processedWorkflow.id
      }; path=/; domain=.kairos.computer; expires=${expirationDate.toUTCString()}; SameSite=Lax`;
    } catch (err) {
      logger.error("Error processing workflow:", err);
      setRecordingError(
        err instanceof Error ? err.message : "Failed to process workflow"
      );
      setRecordingState("POST_RECORDING");
    }
  };

  const handleRerecord = () => {
    // Clean up previous recording
    if (mediaBlobUrlRef.current) {
      URL.revokeObjectURL(mediaBlobUrlRef.current);
      mediaBlobUrlRef.current = null;
    }
    setRecordedBlob(null);
    setRecordingError(null);
    handleStartRecording();
  };

  const handleRunWorkflow = () => {
    // In production, ensure workflow data is in cookies before redirect
    window.location.href =
      process.env.NODE_ENV === "production"
        ? "https://app.kairos.computer"
        : "http://app-dev.kairos.computer";
  };

  const handleStartNew = () => {
    // Clean up
    if (mediaBlobUrlRef.current) {
      URL.revokeObjectURL(mediaBlobUrlRef.current);
      mediaBlobUrlRef.current = null;
    }
    if (workflowRecorder.screenCaptureBlobUrl) {
      URL.revokeObjectURL(workflowRecorder.screenCaptureBlobUrl);
    }
    setRecordingState("INITIAL");
    setGeneratedWorkflow(null);
    setRecordedBlob(null);
    setRecordingError(null);
    setProcessingStatus("");
  };

  // Example workflows data
  const workflowCategories = [
    "Sales & CRM",
    "Finance",
    "HR & Recruiting",
    "Data Entry",
  ];

  const exampleWorkflows = {
    "Sales & CRM": [
      {
        title: "Lead Enrichment",
        description:
          "Research new leads and update your CRM with company info, contact details, and more.",
        time: "Saves 2 hours/day",
      },
      {
        title: "Meeting Follow-ups",
        description:
          "Send personalized follow-up emails after meetings with action items and next steps.",
        time: "Saves 30 min/meeting",
      },
      {
        title: "Pipeline Updates",
        description:
          "Update deal stages and add notes in your CRM based on email conversations.",
        time: "Saves 1 hour/day",
      },
    ],
    Finance: [
      {
        title: "Invoice Processing",
        description:
          "Extract invoice data from emails and PDFs, then organize in spreadsheets and cloud storage.",
        time: "Saves 3 hours/week",
      },
      {
        title: "Expense Reports",
        description:
          "Compile receipts from various sources into formatted expense reports.",
        time: "Saves 2 hours/month",
      },
    ],
    "HR & Recruiting": [
      {
        title: "Resume Screening",
        description:
          "Review resumes against job requirements and organize qualified candidates.",
        time: "Saves 5 hours/week",
      },
      {
        title: "Interview Scheduling",
        description:
          "Coordinate calendars and send interview invites with all necessary details.",
        time: "Saves 1 hour/day",
      },
      {
        title: "Onboarding Tasks",
        description:
          "Send welcome emails, and assign initial tasks for new hires.",
        time: "Saves 2 hours/hire",
      },
    ],
    "Data Entry": [
      {
        title: "Form to Spreadsheet",
        description:
          "Transfer data from online forms into organized spreadsheets with validation.",
        time: "Saves 4 hours/week",
      },
      {
        title: "Document Extraction",
        description:
          "Extract key information from PDFs and enter into databases or CRMs.",
        time: "Saves 3 hours/day",
      },
      {
        title: "Contact Updates",
        description:
          "Update contact information across multiple systems from a single source.",
        time: "Saves 2 hours/week",
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState(
    workflowCategories[0]
  );

  return (
    <div className="min-h-screen bg-stone-950 text-stone-50 font-[family-name:var(--font-geist-mono)]">
      {/* Hidden canvas for video processing */}
      <canvas
        ref={workflowRecorder.videoFrameCanvasRef}
        style={{ display: "none" }}
      />

      {/* Header */}
      <header className="max-w-4xl mx-auto pt-8 px-8">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-amber-500">KAIROS</div>
          <Link
            href="https://app.kairos.computer"
            className="text-sm text-stone-400 hover:text-amber-500"
          >
            Sign in →
          </Link>
        </div>
      </header>

      {/* Main content area - changes based on recording state */}
      <main className="max-w-4xl mx-auto px-8 py-16">
        {recordingState === "INITIAL" && (
          <>
            {/* Hero Section */}
            <div className="text-center py-16">
              <h1 className="text-4xl sm:text-6xl mb-6 font-bold leading-tight">
                Turn Repetitive Tasks into
                <br />
                <span className="text-amber-500">Automated Workflows</span>
              </h1>
              <p className="text-stone-400 text-xl mb-24 max-w-2xl mx-auto">
                Record your screen once. Kairos handles it forever.
                <br />
                No coding. No complex setup. Just show and tell.
              </p>

              {/* Primary CTA */}
              <div className="p-8 rounded-lg max-w-md mx-auto">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold">Try it right now</h2>
                </div>
                <button
                  onClick={handleStartRecording}
                  disabled={workflowRecorder.liveAPIConnected}
                  className="w-full px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-sm font-bold text-lg cursor-pointer transition-all transform hover:scale-105 disabled:opacity-50 shadow-lg"
                >
                  Start Recording Your Workflow
                </button>
              </div>

              {(recordingError || workflowRecorder.streamError) && (
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-sm max-w-md mx-auto">
                  <p className="text-red-400 text-sm">
                    {recordingError || workflowRecorder.streamError}
                  </p>
                </div>
              )}
            </div>
          </>
        )}

        {recordingState === "RECORDING" && (
          <div className="text-center">
            <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-sm">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-400">
                {workflowRecorder.liveAPIConnected
                  ? "Streaming in progress"
                  : "Connecting..."}
              </span>
            </div>
            <h2 className="text-3xl mb-4 font-bold">
              {workflowRecorder.liveAPIConnected
                ? "Say hello to get started!"
                : "Setting up your session..."}
            </h2>
            {workflowRecorder.liveAPIConnected ? (
              <div className="text-stone-400 mb-8 max-w-2xl mx-auto">
                <p className="text-lg mb-2">
                  <span className="text-amber-500 font-semibold">Step 1:</span>{" "}
                  Say &quot;Hi&quot; or &quot;Hello&quot;
                </p>
                <p className="text-sm mb-4 text-stone-500">
                  Kairos will introduce itself and ask what you want to automate
                </p>
                <p className="text-lg mb-2">
                  <span className="text-amber-500 font-semibold">Step 2:</span>{" "}
                  Show your workflow
                </p>
                <p className="text-sm mb-4 text-stone-500">
                  Navigate through your task while explaining each step
                </p>
                <p className="text-lg mb-2">
                  <span className="text-amber-500 font-semibold">Step 3:</span>{" "}
                  Click &quot;Stop Recording&quot;
                </p>
                <p className="text-sm text-stone-500">
                  When you&apos;re done showing your workflow
                </p>
              </div>
            ) : (
              <p className="text-stone-400 text-lg mb-8 max-w-2xl mx-auto">
                Establishing connection to the live session...
              </p>
            )}
            <div className="bg-stone-900 border border-stone-800 rounded-sm p-8 mb-8 max-w-2xl mx-auto">
              {workflowRecorder.liveAPIConnected ? (
                <>
                  <div className="text-amber-500 text-5xl mb-4">👋</div>
                  <p className="text-stone-300 text-lg mb-2">
                    Kairos is listening
                  </p>
                  <p className="text-stone-500 text-sm">
                    Say &quot;Hi&quot; to start the conversation
                  </p>
                </>
              ) : (
                <>
                  <div className="text-amber-500 text-6xl mb-4">🎥</div>
                  <p className="text-stone-400">Establishing connection...</p>
                </>
              )}
            </div>

            {workflowRecorder.streamError && (
              <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-sm max-w-md mx-auto">
                <p className="text-red-400 text-sm">
                  {workflowRecorder.streamError}
                </p>
              </div>
            )}

            <button
              onClick={handleStopRecording}
              className="px-6 py-3 bg-stone-800 hover:bg-stone-700 border border-stone-600 rounded-sm font-bold cursor-pointer"
            >
              Stop Recording
            </button>
          </div>
        )}

        {recordingState === "POST_RECORDING" && (
          <div className="text-center">
            <h2 className="text-3xl mb-4 font-bold">Recording Complete!</h2>
            <p className="text-stone-400 text-lg mb-8 max-w-2xl mx-auto">
              Great job! We captured your workflow. Would you like to proceed or
              record again?
            </p>

            {workflowRecorder.screenCaptureBlobUrl && (
              <div className="bg-stone-900 border border-stone-800 rounded-sm p-4 mb-8 max-w-2xl mx-auto">
                <video
                  src={workflowRecorder.screenCaptureBlobUrl}
                  controls
                  className="w-full rounded-sm"
                  style={{ maxHeight: "400px" }}
                />
                <p className="text-stone-500 text-sm mt-2">
                  Review your recording before proceeding
                </p>
              </div>
            )}

            {!workflowRecorder.screenCaptureBlobUrl && (
              <div className="bg-stone-900 border border-stone-800 rounded-sm p-8 mb-8 max-w-2xl mx-auto">
                <div className="text-green-500 text-6xl mb-4">✓</div>
                <p className="text-stone-400">Recording saved successfully</p>
              </div>
            )}

            <div className="flex gap-4 justify-center">
              <button
                onClick={handleRerecord}
                className="px-6 py-3 border border-stone-600 hover:bg-stone-800 rounded-sm cursor-pointer"
              >
                Re-record
              </button>
              <button
                onClick={handleConfirm}
                className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-sm font-bold cursor-pointer"
              >
                Create My Workflow
              </button>
            </div>

            <button
              onClick={handleStartNew}
              className="mt-4 text-sm text-stone-500 hover:text-stone-400 cursor-pointer transition-colors"
            >
              Cancel and start over
            </button>

            {recordingError && (
              <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-sm max-w-md mx-auto">
                <p className="text-red-400 text-sm">{recordingError}</p>
              </div>
            )}
          </div>
        )}

        {recordingState === "PROCESSING" && (
          <div className="text-center">
            <h2 className="text-3xl mb-4 font-bold">Creating Your Workflow</h2>
            <p className="text-stone-400 text-lg mb-8 max-w-2xl mx-auto">
              Kairos is analyzing your recording and building an automated
              workflow...
            </p>
            <div className="bg-stone-900 border border-stone-800 rounded-sm p-8 max-w-2xl mx-auto">
              <div className="flex justify-center mb-4">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-stone-700 border-t-amber-500"></div>
              </div>
              <p className="text-stone-400">
                {processingStatus || "This usually takes 10-30 seconds"}
              </p>
            </div>

            {recordingError && (
              <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-sm max-w-md mx-auto">
                <p className="text-red-400 text-sm">{recordingError}</p>
                <button
                  onClick={() => setRecordingState("POST_RECORDING")}
                  className="mt-4 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-600/50 rounded-sm text-red-400 text-sm cursor-pointer"
                >
                  Go Back
                </button>
              </div>
            )}
          </div>
        )}

        {recordingState === "WORKFLOW_READY" && generatedWorkflow && (
          <div className="max-w-3xl mx-auto">
            {/* Success Badge */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-sm mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-400 text-sm">Workflow Ready</span>
              </div>
              <h2 className="text-3xl font-bold">Your Automation is Ready!</h2>
            </div>

            <div className="bg-stone-900 border border-stone-800 rounded-sm p-8 max-w-2xl mx-auto">
              {/* Workflow Header */}
              <div className="mb-6">
                <div>
                  <h1 className="text-xl font-bold text-amber-500 mb-2">
                    {generatedWorkflow.name}
                  </h1>
                  <p className="text-sm text-stone-400">
                    {generatedWorkflow.description}
                  </p>
                </div>
              </div>

              {/* Workflow Outline */}
              {generatedWorkflow.outline && (
                <div className="mb-6">
                  <h2 className="mb-3 text-xs font-medium tracking-wider text-stone-500 uppercase">
                    Workflow Details
                  </h2>
                  <div className="bg-stone-800 p-4 rounded-sm">
                    <pre className="text-stone-300 text-sm whitespace-pre-wrap">
                      {generatedWorkflow.outline}
                    </pre>
                  </div>
                </div>
              )}

              {/* Required Inputs Section */}
              {generatedWorkflow.metadata?.inputs &&
                generatedWorkflow.metadata.inputs.length > 0 && (
                  <div className="mb-6">
                    <h2 className="mb-3 text-xs font-medium tracking-wider text-stone-500 uppercase">
                      Here&apos;s what I need from you
                    </h2>
                    <div className="space-y-3">
                      {generatedWorkflow.metadata.inputs.map((input, index) => (
                        <div key={index} className="space-y-1">
                          <label className="text-xs font-medium text-stone-300">
                            {input.key}
                          </label>
                          <input
                            type="text"
                            placeholder={input.value}
                            className="w-full rounded-sm border border-stone-700 bg-stone-800 px-3 py-1.5 text-xs text-stone-200 shadow-sm transition-colors placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-600"
                            readOnly
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Secure Inputs Section */}
              {generatedWorkflow.metadata?.secure_inputs &&
                generatedWorkflow.metadata.secure_inputs.length > 0 && (
                  <div className="mb-6">
                    <h2 className="mb-3 text-xs font-medium tracking-wider text-stone-500 uppercase">
                      Secure Inputs Required
                    </h2>
                    <div className="space-y-3">
                      {generatedWorkflow.metadata.secure_inputs.map(
                        (input, index) => (
                          <div key={index} className="space-y-1">
                            <label className="text-xs font-medium text-stone-300 flex items-center gap-1">
                              <span>🔒</span> {input.key}
                            </label>
                            <input
                              type="password"
                              placeholder={input.value}
                              className="w-full rounded-sm border border-stone-700 bg-stone-800 px-3 py-1.5 text-xs text-stone-200 shadow-sm transition-colors placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-600"
                              readOnly
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

              {/* Integrations Section */}
              {generatedWorkflow.metadata?.integrations &&
                generatedWorkflow.metadata.integrations.length > 0 && (
                  <div className="mb-6">
                    <h2 className="mb-3 text-xs font-medium tracking-wider text-stone-500 uppercase">
                      I&apos;ll need to access these services
                    </h2>
                    <div className="space-y-2">
                      {generatedWorkflow.metadata.integrations.map(
                        (integration, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-stone-600"></div>
                            <span className="text-xs font-medium text-stone-300">
                              {integration}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col items-center">
              <p className="text-sm text-stone-400 mb-4">
                Kairos is ready to automate this task forever.
              </p>
              <button
                onClick={handleRunWorkflow}
                className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 px-6 py-3 rounded-sm text-sm font-medium text-stone-950 shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Sign up to run this workflow
              </button>
            </div>
          </div>
        )}
      </main>

      {/* How it Works Section - Only show when not recording */}
      {recordingState === "INITIAL" && (
        <section className="py-20 bg-stone-900/50 border-y border-stone-800">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              How it Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-stone-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎥</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">1. Record</h3>
                <p className="text-stone-400 text-sm">
                  Click &quot;Start Recording&quot; and show Kairos your
                  workflow while explaining each step
                </p>
              </div>
              <div className="text-center">
                <div className="bg-stone-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">2. AI Learns</h3>
                <p className="text-stone-400 text-sm">
                  Our AI understands your process and creates a repeatable
                  automation
                </p>
              </div>
              <div className="text-center">
                <div className="bg-stone-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">3. Automate</h3>
                <p className="text-stone-400 text-sm">
                  Run your workflow anytime with one click - Kairos handles the
                  rest
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Examples Section */}
      <section className="py-20 border-t border-stone-800">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-2xl mb-2 font-bold">What Can You Automate?</h2>
          <p className="text-stone-400 mb-8">
            From simple data entry to complex multi-step processes, Kairos
            handles it all.
          </p>

          {/* Category Tabs */}
          <div className="flex gap-2 pb-3 overflow-x-auto mb-6 border-b border-stone-800">
            {workflowCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-sm text-sm whitespace-nowrap cursor-pointer transition-colors ${
                  selectedCategory === category
                    ? "bg-amber-600 text-stone-950 font-bold"
                    : "bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Workflow Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            {exampleWorkflows[
              selectedCategory as keyof typeof exampleWorkflows
            ].map((workflow, index) => (
              <div
                key={index}
                className="bg-stone-900 border border-stone-800 rounded-sm p-6 hover:border-stone-700 transition-colors"
              >
                <h3 className="text-lg font-bold mb-2 text-stone-50">
                  {workflow.title}
                </h3>
                <p className="text-stone-400 text-sm mb-4">
                  {workflow.description}
                </p>
                <div className="text-amber-500 text-sm font-bold">
                  {workflow.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-stone-800">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl mb-4 font-bold">
            Ready to Automate Your Work?
          </h2>
          <p className="text-stone-400 text-lg mb-8">
            Start with a simple recording.
          </p>
          <button
            onClick={() => {
              setRecordingState("INITIAL");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-sm font-bold text-lg cursor-pointer transition-all transform hover:scale-105"
          >
            Try It Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-800 py-8 text-stone-500 text-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between flex-col sm:flex-row px-8">
          <div>© {new Date().getFullYear()} Kairos Computer Inc.</div>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <Link
              href="/privacy-policy"
              className="hover:text-amber-500 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-amber-500 hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <LiveAPIProvider url={getCreateWorkflowWebSocketUrl()}>
      <HomeContent />
    </LiveAPIProvider>
  );
}
