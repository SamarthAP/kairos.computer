"use client";

import { useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Sales & CRM");

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

  return (
    <div className="min-h-screen bg-stone-950 text-stone-50 font-[family-name:var(--font-geist-mono)]">
      {/* Header */}
      <header className="max-w-4xl mx-auto pt-8 px-8">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-amber-500">KAIROS</div>
          <Link
            href="https://app.kairos.computer"
            className="text-sm text-stone-400 hover:text-amber-500"
          >
            Login →
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <div className="text-center py-16">
          <h1 className="text-4xl sm:text-6xl mb-6 font-bold leading-tight">
            Show it once.
            <br />
            <span className="text-amber-500">Automate it forever.</span>
          </h1>
          <p className="text-stone-400 text-xl mb-12 max-w-2xl mx-auto">
            Turn repetitive tasks into automated workflows.
            <br />
            No coding. No complex setup. Just show and tell.
          </p>

          {/* Primary CTA */}
          <button
            onClick={() => {
              track("cta_sign_up_hero");
              window.location.href = "https://app.kairos.computer";
            }}
            className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-sm font-bold text-lg cursor-pointer transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started →
          </button>
        </div>
      </main>

      {/* How it Works Section */}
      <section className="py-20 bg-stone-900/50 border-y border-stone-800">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How it Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-stone-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎥</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">1. Record</h3>
              <p className="text-stone-400 text-sm">
                Show Kairos your workflow while explaining each step
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
            Join thousands saving hours every week.
          </p>
          <button
            onClick={() => {
              track("cta_sign_up_bottom");
              window.location.href = "https://app.kairos.computer";
            }}
            className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-sm font-bold text-lg cursor-pointer transition-all transform hover:scale-105"
          >
            Sign Up Now →
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
