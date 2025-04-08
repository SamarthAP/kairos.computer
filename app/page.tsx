"use client";

import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import HowItWorks from "./components/howitworks";
// import ProblemSection from "./components/ProblemSection";
// import KairosApproach from "./components/KairosApproach";
import EarlyAccessModal from "./components/EarlyAccessModal"; // Import the modal
import DemoVideoModal from "./components/DemoVideoModal"; // Add this import
import WorkflowDetails from "./components/WorkflowDetails"; // Add this import at the top with other imports
import RunWorkflowDetails, {
  WorkflowEvent,
} from "./components/RunWorkflowDetails"; // Add this import at the top with other imports
// font-[family-name:var(--font-geist-sans)]
// font-[family-name:var(--font-geist-mono)]

export default function Home() {
  // --- State for modals ---
  const [showModal, setShowModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  // --- State for the interactive section ---
  const industries = ["Finance", "E-Commerce", "HR", "Healthcare"];
  const steps = [
    "1. Show Kairos your task",
    "2. Review your automation",
    "3. Let Kairos handle it",
  ];

  // Mock video sources - replace with actual video URLs or components
  const videoSources: Record<string, string[]> = {
    Healthcare: [
      "/videos/hc_step1.mp4",
      "/videos/hc_step2.mp4",
      "/videos/hc_step3.mp4",
    ],
    Finance: [
      "/videos/fin_step1.mp4",
      "/videos/fin_step2.mp4",
      "/videos/fin_step3.mp4",
    ],
    "E-Commerce": [
      "/videos/ecom_step1.mp4",
      "/videos/ecom_step2.mp4",
      "/videos/ecom_step3.mp4",
    ],
    HR: [
      "/videos/hr_step1.mp4",
      "/videos/hr_step2.mp4",
      "/videos/hr_step3.mp4",
    ],
  };

  const workflowDetails = {
    Healthcare: {
      name: "Email Triage",
      summary: "Triage emails from your inbox.",
      inputs: ["Physician Email Address"],
      integrations: ["Gmail", "Google Calendar"],
    },
    Finance: {
      name: "Invoice Organization",
      summary:
        "Organizing your invoices from Gmail into Google Sheets and Drive",
      inputs: ["Google Drive Link", "Google Sheets Link"],
      integrations: ["Google Drive", "Google Sheets", "Gmail"],
    },
    "E-Commerce": {
      name: "E-Commerce Refunds",
      summary: "Handle refund requests from customers in email.",
      inputs: ["Refund Policy Link", "Google Sheets Link"],
      integrations: ["Gmail", "Google Sheets"],
    },
    HR: {
      name: "Applicant Screening",
      summary: "Screen applicants for a Frontend Engineer role",
      inputs: ["Google Sheets Link", "Hiring Page Link"],
      integrations: ["Google Sheets"],
    },
  };

  const runWorkflowDetails = {
    Healthcare: {
      inputs: {
        "Physician Email Address": "physician@example.com",
      },
      events: [
        {
          title: "Workflow triggered from email",
          description: "Found email with patient requesting an appointment.",
          type: "STARTED",
        },
        {
          title: "Checking Google Calendar",
          description: "Finding available time slots.",
          type: "PROCESSING",
        },
        {
          title: "Sending email",
          description: "Replying to patient's question.",
          type: "PROCESSING",
        },
        {
          title: "Workflow execution complete",
          description: "Successfully processed invoice.",
          type: "COMPLETED",
        },
      ],
    },
    Finance: {
      inputs: {
        "Google Drive Link": "https://drive.google.com/drive/folder/0/abc",
        "Google Sheets Link": "https://docs.google.com/spreadsheets/d/abc",
      },
      events: [
        {
          title: "Workflow triggered from email",
          description: "Found email with invoice attachment.",
          type: "STARTED",
        },
        {
          title: "Downloading invoice",
          description: "Downloading invoice 'harris_invoice.pdf'.",
          type: "PROCESSING",
        },
        {
          title: "Reading invoice",
          description: "Extracting vendor name, date, amount and invoice id.",
          type: "PROCESSING",
        },
        {
          title: "Uploading to Google Drive",
          description:
            "Uploading invoice with filename 'Harris Consulting_04/03/2024_3230.00'.",
          type: "PROCESSING",
        },
        {
          title: "Updating Google Sheets",
          description:
            "Adding a new row to the sheet with the invoice details.",
          type: "PROCESSING",
        },
        {
          title: "Workflow execution complete",
          description: "Successfully processed invoice.",
          type: "COMPLETED",
        },
      ],
    },
    "E-Commerce": {
      inputs: {
        "Refund Policy Link":
          "https://kairos.notion.site/Refund-Policy-Link-1234567890",
        "Google Sheets Link": "https://docs.google.com/spreadsheets/d/abc",
      },
      events: [
        {
          title: "Workflow triggered from email",
          description: "Found email with refund request.",
          type: "STARTED",
        },
        {
          title: "Reviewing refund policy",
          description:
            "Checking if the refund policy allows for the requested refund.",
          type: "PROCESSING",
        },
        {
          title: "Updating Google Sheets",
          description: "Accepting refund request.",
          type: "PROCESSING",
        },
        {
          title: "Sending email",
          description:
            "Replying to customer with acceptance of refund request.",
          type: "PROCESSING",
        },
        {
          title: "Workflow execution complete",
          description: "Successfully handled refund request.",
          type: "COMPLETED",
        },
      ],
    },
    HR: {
      inputs: {
        "Google Sheets Link": "https://docs.google.com/spreadsheets/d/abc",
        "Hiring Page Link":
          "https://kairos.notion.site/Hiring-Page-Link-1234567890",
      },
      events: [
        {
          title: "Workflow triggered manually",
          description: "Executing workflow.",
          type: "STARTED",
        },
        {
          title: "Reading role description",
          description: "Extracting information about the role.",
          type: "PROCESSING",
        },
        {
          title: "Reading Google Sheet",
          description: "Extracting all applicant details.",
          type: "PROCESSING",
        },
        {
          title: "Evaluating applicant profiles.",
          description: "Reading LinkedIn, GitHub and resume of each applicant.",
          type: "PROCESSING",
        },
        {
          title: "Updating Google Sheet with evaluations",
          description: "Adding evaluation results to the sheet.",
          type: "PROCESSING",
        },
        {
          title: "Workflow execution complete",
          description: "Successfully screened applicants.",
          type: "COMPLETED",
        },
      ],
    },
  };

  // Add descriptions for each industry workflow
  const industryDescriptions: Record<string, string> = {
    Healthcare:
      "Respond to patients instantly and eliminate scheduling conflicts.",
    Finance:
      "Save hours weekly on invoice processing and eliminate data entry errors.",
    "E-Commerce": "Handle customer refunds in minutes instead of hours.",
    HR: "Screen candidates 5x faster and identify qualified applicants consistently.",
  };

  // Simplified state management with click-driven interaction
  const [selectedIndustryIndex, setSelectedIndustryIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const selectedIndustry = industries[selectedIndustryIndex];

  // --- Handlers ---
  const handleOpenModal = () => setShowModal(true);
  const handleOpenDemoModal = () => setShowDemoModal(true);

  // Handle industry tab selection
  const handleIndustryClick = (index: number) => {
    setSelectedIndustryIndex(index);
    setCurrentStepIndex(0); // Reset to first step
  };

  // Handle step selection
  const handleStepClick = (index: number) => {
    setCurrentStepIndex(index);
  };

  // Timer for auto-progression through steps
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setCurrentStepIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }, 7000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentStepIndex, steps.length]);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-50 font-[family-name:var(--font-geist-mono)]">
      {/* Hero section */}
      <main className="max-w-4xl mx-auto pt-12 px-8">
        <div className="mb-20">
          <div className="mb-6">
            <div className="text-3xl font-bold text-amber-500 mb-2">KAIROS</div>
            <div className="text-sm text-stone-500">
              {"// Automate tasks by recording your screen"}
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl mb-6 font-bold">
            Turn Repetitive Tasks into Automated Workflows.
          </h1>
          <p className="text-stone-400 text-xl mb-8">
            Record and explain your task once. Kairos handles it forever. No
            coding. No drag and drop. Just like training a co-worker.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleOpenModal}
              className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-sm font-bold cursor-pointer"
            >
              Request early access
            </button>
            <button
              onClick={handleOpenDemoModal}
              className="px-6 py-3 border border-stone-400 hover:bg-stone-800 rounded-sm cursor-pointer"
            >
              Watch a demo →
            </button>
          </div>
        </div>
      </main>

      {/* Interactive Demo Section - Simplified */}
      <div className="py-16 bg-stone-950">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-2xl mb-6 border-b border-stone-800 pb-2 text-stone-50">
            ## See How You Can Automate Anything
          </h2>

          {/* Industry Tabs */}
          <div className="flex gap-2 pb-3 overflow-x-auto">
            {industries.map((industry, index) => (
              <button
                key={industry}
                onClick={() => handleIndustryClick(index)}
                className={`px-4 py-2 rounded-sm text-sm whitespace-nowrap cursor-pointer ${
                  selectedIndustryIndex === index
                    ? "bg-amber-600 text-stone-950 font-bold"
                    : "bg-stone-800 hover:bg-stone-700 text-stone-300"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          {/* Workflow Description */}
          <p className="text-stone-400 mb-6 text-sm md:text-base">
            {industryDescriptions[selectedIndustry]}
          </p>

          {/* Video Player Area */}
          <div className="bg-stone-800 border border-stone-700 rounded-sm mb-6 overflow-hidden flex flex-col h-[450px] sm:h-[500px]">
            {/* Browser shell header */}
            <div className="bg-stone-800 border-b border-stone-700 py-2 px-3 flex items-center flex-shrink-0">
              {/* Traffic lights */}
              <div className="flex space-x-1.5 sm:space-x-2 mr-2 sm:mr-4">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
              </div>

              {/* Address bar - adjusted padding/text size */}
              <div className="flex-1 bg-stone-700 rounded-sm py-0.5 px-2 sm:py-1 sm:px-3 text-[10px] sm:text-xs text-stone-400 flex items-center">
                <span className="mr-1 sm:mr-2 text-xs">🔒</span>
                <span className="truncate">kairos.computer</span>
              </div>

              {/* Browser actions - adjusted spacing/size */}
              <div className="flex space-x-2 sm:space-x-3 ml-2 sm:ml-4 text-stone-400 text-xs sm:text-base">
                <span>⟳</span>
                <span>⋮</span>
              </div>
            </div>

            {/* Video content or WorkflowDetails depending on step */}
            <div className="flex-1 bg-stone-800 flex items-center justify-center relative overflow-y-auto">
              {currentStepIndex === 1 ? (
                <WorkflowDetails
                  workflowDetails={
                    workflowDetails[
                      selectedIndustry as keyof typeof workflowDetails
                    ]
                  }
                />
              ) : currentStepIndex === 2 ? (
                <RunWorkflowDetails
                  events={
                    runWorkflowDetails[
                      selectedIndustry as keyof typeof runWorkflowDetails
                    ].events as WorkflowEvent[]
                  }
                />
              ) : (
                <video
                  key={videoSources[selectedIndustry][currentStepIndex]}
                  width="100%"
                  height="100%"
                  controls={false}
                  autoPlay
                  muted
                  loop
                  className="object-contain"
                >
                  <source
                    src={videoSources[selectedIndustry][currentStepIndex]}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}

              {/* Screen sharing notification - only show for step 1 - Improved Layout */}
              {currentStepIndex === 0 && (
                <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 bg-stone-800/90 backdrop-blur-sm text-white py-2 px-3 rounded-md shadow-lg flex items-center w-[90%] max-w-md sm:w-auto border border-stone-700">
                  <div className="flex items-center text-center sm:text-left">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse flex-shrink-0"></div>
                    <span className="text-stone-300 text-xs sm:text-sm whitespace-normal sm:whitespace-nowrap">
                      https://kairos.computer is sharing your screen
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Step Indicators/Buttons - Progress Bar updated */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between mb-4">
            {steps.map((step, index) => (
              <button
                key={step}
                onClick={() => handleStepClick(index)}
                className={`flex-1 p-4 rounded-sm border text-left transition-colors duration-300 cursor-pointer ${
                  currentStepIndex === index
                    ? "bg-stone-800 border-amber-500"
                    : "bg-stone-900 border-stone-700 hover:bg-stone-800"
                }`}
              >
                <div
                  className={`text-sm font-bold mb-1 ${
                    currentStepIndex === index
                      ? "text-amber-500"
                      : "text-stone-400"
                  }`}
                >
                  STEP {index + 1}
                </div>
                <div className="text-stone-300">{step.substring(3)}</div>

                {/* Progress Bar - Always animate when current step */}
                {currentStepIndex === index && (
                  <div className="mt-2 h-1 bg-stone-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500 animate-progress"
                      style={{ animationDuration: "7s" }}
                      key={`${selectedIndustry}-${currentStepIndex}`}
                    ></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- Rest of the page content --- */}
      <main className="max-w-4xl mx-auto px-8">
        {/* CTA */}
        <div className="mb-20 mt-20 text-center p-8 border border-stone-800 bg-stone-900 rounded-sm">
          <h2 className="text-2xl mb-4">
            Stop wasting hours on repetitive tasks.
          </h2>
          <p className="text-stone-400 mb-8">
            Join the early access program and reclaim your time for work that
            actually matters.
          </p>
          <button
            onClick={handleOpenModal}
            className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-sm font-bold cursor-pointer"
          >
            Request Early Access
          </button>
          <p className="mt-4 text-stone-500">Limited spots available</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800 mt-20 py-8 text-stone-500 text-sm">
        <div className="max-w-4xl mx-auto flex items-center flex-col sm:flex-row px-8">
          <div>kairos.computer</div>
          {/* ... footer links ... */}
        </div>
      </footer>

      {/* Modal Components */}
      <EarlyAccessModal show={showModal} onClose={() => setShowModal(false)} />
      <DemoVideoModal
        show={showDemoModal}
        onClose={() => setShowDemoModal(false)}
      />
    </div>
  );
}
