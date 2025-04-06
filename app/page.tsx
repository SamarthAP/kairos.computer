"use client";

import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import HowItWorks from "./components/howitworks";
// import ProblemSection from "./components/ProblemSection";
// import KairosApproach from "./components/KairosApproach";
import EarlyAccessModal from "./components/EarlyAccessModal"; // Import the modal
// font-[family-name:var(--font-geist-sans)]
// font-[family-name:var(--font-geist-mono)]

export default function Home() {
  // --- State for modal ---
  const [showModal, setShowModal] = useState(false);

  // --- State for the interactive section ---
  const industries = ["Healthcare", "Finance", "E-Commerce", "HR"];
  const steps = [
    "1. Record your workflow",
    "2. Confirm workflow details",
    "3. Run workflow",
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

  // Add descriptions for each industry workflow
  const industryDescriptions: Record<string, string> = {
    Healthcare: "Handling patient inquiries and scheduling appointments.",
    Finance: "Organizing invoices in Google Suite.",
    "E-Commerce": "Processing email refund requests.",
    HR: "Evaluating applicant profiles for job openings.",
  };

  // Use index for industry selection - NOW ONLY CLICK DRIVEN
  const [selectedIndustryIndex, setSelectedIndustryIndex] = useState(0);
  const selectedIndustry = industries[selectedIndustryIndex]; // Derived state

  // Step index is driven by SCROLL and TIMER
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  // Restore state for timer control
  const [isPlaying, setIsPlaying] = useState(true); // Controls step auto-play timer
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  // Add a ref for the scroll-end detection timeout
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null); // Ref for the main section container
  const stickyContentRef = useRef<HTMLDivElement>(null); // Ref for the content that sticks

  // --- Handlers ---
  const handleOpenModal = () => setShowModal(true); // Function to open modal

  // Allow clicking tabs to jump to an industry
  const handleIndustryClick = (index: number) => {
    setSelectedIndustryIndex(index);
    setCurrentStepIndex(0); // Reset step when industry changes
    // Force playing state and let useEffect handle timer reset
    setIsPlaying(true);
    // Clear any pending scroll-end timeout
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    // Scroll to the top of the section when changing industry manually
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.offsetTop;
      window.scrollTo({
        top: sectionTop, // Scroll to the start of the interactive section
        behavior: "smooth",
      });
    }
  };

  const handleStepClick = (index: number) => {
    setCurrentStepIndex(index);
    // Force playing state and let useEffect handle timer reset
    setIsPlaying(true);
    // Clear any pending scroll-end timeout
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    // --- Scroll to the approximate position for the clicked step ---
    if (sectionRef.current && stickyContentRef.current) {
      const sectionTop = sectionRef.current.offsetTop;
      // const vh = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;
      const stickyHeight = stickyContentRef.current.offsetHeight;
      const scrollableDistance = sectionHeight - stickyHeight;
      const targetScrollInSection =
        ((index + 0.5) / steps.length) * scrollableDistance;

      window.scrollTo({
        top: sectionTop + targetScrollInSection,
        behavior: "smooth",
      });
    }
  };

  // --- Restore Timer Logic ---
  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    // Only start timer if playing is enabled
    if (isPlaying) {
      timerRef.current = setTimeout(() => {
        // Advance step index, looping back to 0
        setCurrentStepIndex((prevIndex) => (prevIndex + 1) % steps.length);
      }, 5000); // 5 seconds - Can be adjusted
    }
  };

  // --- Effects ---

  // --- Restore Effect for automatic step progression timer ---
  useEffect(() => {
    resetTimer(); // Call resetTimer whenever the dependencies change
    return () => {
      // Cleanup timer on unmount or dependency change
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
    // Dependencies: current step, selected industry (to restart timer), playing state, and steps.length
  }, [currentStepIndex, selectedIndustryIndex, isPlaying, steps.length]);

  // --- Combined Effect for Scroll Listener & Sticky Observer ---
  useEffect(() => {
    let isPausedByObserver = false;

    const handleScroll = () => {
      // --- Clear previous scroll-end timeout ---
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      if (!sectionRef.current || !stickyContentRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const stickyHeight = stickyContentRef.current.offsetHeight;
      const scrollStart = sectionTop;
      const scrollEnd = sectionTop + sectionHeight - stickyHeight;
      const currentScroll = window.scrollY;
      const isInScrollZone =
        currentScroll >= scrollStart && currentScroll <= scrollEnd;

      // --- Handle Playing State ---
      if (isInScrollZone) {
        // If we are in the zone, try to play, unless the observer paused it
        if (!isPausedByObserver) {
          // Use functional update to prevent stale state if updates happen quickly
          setIsPlaying((prev) => (prev ? prev : true)); // Set to true only if it was false
        }
      } else {
        // If outside the scroll zone, definitely pause
        setIsPlaying((prev) => (!prev ? prev : false)); // Set to false only if it was true
      }

      // --- Handle Step Index ---
      if (isInScrollZone) {
        const scrollDistance = scrollEnd - scrollStart;
        const scrollInSection = currentScroll - scrollStart;
        const progress =
          scrollDistance > 0 ? scrollInSection / scrollDistance : 0;

        let newStepIndex = Math.min(
          Math.floor(progress * steps.length),
          steps.length - 1
        );
        newStepIndex = Math.max(0, newStepIndex);

        // Update state only if the step index actually changes
        // This will trigger the timer useEffect to reset the timer
        setCurrentStepIndex((prevIndex) => {
          if (newStepIndex !== prevIndex) {
            // console.log(`Scroll changes step to: ${newStepIndex}`); // Optional logging
            // If scroll changes the step, PAUSE the auto-timer immediately
            setIsPlaying(false);
            if (timerRef.current) {
              clearTimeout(timerRef.current); // Clear the main timer
            }
            return newStepIndex;
          }
          return prevIndex;
        });

        // --- Set a timeout to resume playing AFTER scrolling stops ---
        // This runs on *every* scroll event within the zone
        scrollTimeoutRef.current = setTimeout(() => {
          // Only resume playing if the observer hasn't paused us
          if (!isPausedByObserver) {
            setIsPlaying(true); // Re-enable timer via state change
          }
        }, 150); // Resume playing 150ms after the last scroll event
      } else if (currentScroll < scrollStart) {
        // If scrolled above, ensure step is 0
        setCurrentStepIndex((prevIndex) => (prevIndex !== 0 ? 0 : prevIndex));
      } else {
        // currentScroll > scrollEnd
        // If scrolled below, ensure step is the last one
        setCurrentStepIndex((prevIndex) =>
          prevIndex !== steps.length - 1 ? steps.length - 1 : prevIndex
        );
      }

      // Observer logic runs independently to set isPausedByObserver
    };

    // --- Restore Sticky Section Observer for Pausing ---
    const stickyObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          isPausedByObserver = true;
          setIsPlaying(false);
          if (timerRef.current) {
            clearTimeout(timerRef.current);
          }
          // Clear scroll timeout too, as we are pausing definitively
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }
        } else {
          isPausedByObserver = false;
          // Don't automatically resume here. Let scroll/clicks handle it.
          // We could call handleScroll() to immediately check position if needed.
          // handleScroll();
        }
      },
      {
        root: null,
        threshold: 0.1, // If less than 10% is visible, consider it out of view
      }
    );

    const currentStickyContent = stickyContentRef.current;
    if (currentStickyContent) {
      stickyObserver.observe(currentStickyContent);
    }

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check on mount

    return () => {
      // Cleanup listeners and timers
      window.removeEventListener("scroll", handleScroll);
      if (currentStickyContent) {
        stickyObserver.unobserve(currentStickyContent);
      }
      // TimerRef cleared by useEffect, but clear here too for safety
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      // Make sure to clear the scroll timeout on unmount
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [steps.length]); // Re-run if number of steps changes

  return (
    <div className="min-h-screen bg-stone-950 text-stone-50 font-[family-name:var(--font-geist-mono)]">
      {/* Hero section */}
      <main className="max-w-4xl mx-auto pt-12 px-8">
        {" "}
        {/* Add horizontal padding back here */}
        <div className="mb-20">
          <div className="mb-6">
            <div className="text-3xl font-bold text-amber-500 mb-2">KAIROS</div>
            <div className="text-sm text-stone-500">
              {"// turn screen recordings into automations"}
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl mb-6 font-bold">
            Show it once. Automate it forever.
          </h1>
          <p className="text-stone-400 text-xl mb-8">
            Stop the repetitive clicks. Record your screen performing any
            workflow, and Kairos builds an AI agent to automate it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleOpenModal} // Add onClick handler
              className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-sm font-bold"
            >
              Request early access
            </button>
            <button className="px-6 py-3 border border-stone-400 hover:bg-stone-800 rounded-sm">
              Watch a demo →
            </button>
          </div>
        </div>
      </main>{" "}
      {/* Correctly close the first main tag */}
      {/* --- See it in action Section (Scroll Container) --- */}
      {/*
            Set height based on number of steps now.
            Increase multiplier (e.g., 150vh) to require more scrolling per step.
        */}
      <div
        ref={sectionRef}
        className="relative"
        // Update height based on steps, increase multiplier for longer scroll threshold
        style={{ height: `${steps.length * 225}vh` }} // Using 225vh from previous state
      >
        {/* Sticky Content Area */}
        <div
          ref={stickyContentRef}
          className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center px-8 bg-stone-950"
        >
          {" "}
          {/* Stick to top, full viewport height */}
          {/* Central column for content within the sticky area */}
          <div className="max-w-4xl mx-auto w-full px-8">
            <h2 className="text-2xl mb-6 border-b border-stone-800 pb-2 text-stone-50">
              ## See it in action
            </h2>

            {/* Industry Tabs */}
            <div className="flex gap-2 pb-3 overflow-x-auto">
              {industries.map((industry, index) => (
                <button
                  key={industry}
                  // Update click handler to use index
                  onClick={() => handleIndustryClick(index)}
                  className={`px-4 py-2 rounded-sm text-sm whitespace-nowrap ${
                    selectedIndustryIndex === index // Use index for styling
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
            <div className="aspect-video bg-stone-900 border border-stone-800 rounded-sm mb-6 flex items-center justify-center">
              {/* Video content using selectedIndustry derived from index */}
              <p className="text-stone-500">
                Video for: {selectedIndustry} - Step {currentStepIndex + 1}{" "}
                <br />
                (Source: {videoSources[selectedIndustry][currentStepIndex]})
                {/* <video key={videoSources[selectedIndustry][currentStepIndex]} width="100%" height="100%" controls autoPlay muted loop>
                            <source src={videoSources[selectedIndustry][currentStepIndex]} type="video/mp4" />
                            Your browser does not support the video tag.
                            </video> */}
              </p>
            </div>

            {/* Step Indicators/Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              {steps.map((step, index) => (
                <button
                  key={step}
                  onClick={() => handleStepClick(index)}
                  className={`flex-1 p-4 rounded-sm border text-left transition-colors duration-300 ${
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

                  {/* Progress Bar - Animate only when current step AND playing */}
                  {currentStepIndex === index && ( // Show structure if it's the current step
                    <div className="mt-2 h-1 bg-stone-700 rounded-full overflow-hidden">
                      {isPlaying ? ( // Animate only if playing is true
                        <div
                          className="h-full bg-amber-500 animate-progress"
                          style={{ animationDuration: "5s" }} // Duration from timer
                          // Key resets animation if step/industry changes *while playing*
                          key={`${selectedIndustry}-${currentStepIndex}-playing`}
                        ></div>
                      ) : (
                        // Show static bar at 0% width if paused
                        <div
                          className="h-full bg-amber-500"
                          style={{ width: "0%" }}
                          // Key resets animation if step/industry changes *while paused*
                          key={`${selectedIndustry}-${currentStepIndex}-paused`}
                        ></div>
                      )}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>{" "}
        {/* End Sticky Content Area */}
      </div>{" "}
      {/* --- End See it in action Section --- */}
      {/* Add a spacer div if needed to create space before the CTA if the tall section overlaps */}
      {/* <div className="h-screen"></div> */}
      {/* --- Rest of the page content --- */}
      <main className="max-w-4xl mx-auto px-8">
        {" "}
        {/* Wrap remaining content */}
        {/* CTA */}
        <div className="mb-20 mt-20 text-center p-8 border border-stone-800 bg-stone-900 rounded-sm">
          {" "}
          {/* Add margin-top if needed */}
          <h2 className="text-2xl mb-4">Ready to ditch manual workflows?</h2>
          <p className="text-stone-400 mb-8">
            Join our early access program. Turn recordings into automated
            agents.
          </p>
          <button
            onClick={handleOpenModal} // Add onClick handler
            className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-sm font-bold text-lg"
          >
            Request Early Access
          </button>
          <p className="mt-4 text-stone-500">Limited spots available</p>
        </div>
      </main>{" "}
      {/* Close the second main tag */}
      {/* Footer */}
      <footer className="border-t border-stone-800 mt-20 py-8 text-stone-500 text-sm">
        <div className="max-w-4xl mx-auto flex items-center flex-col sm:flex-row px-8">
          {/* Add padding */}
          <div>kairos.computer</div>
          {/* ... footer links ... */}
        </div>
      </footer>
      {/* --- Modal Component --- */}
      <EarlyAccessModal show={showModal} onClose={() => setShowModal(false)} />
      {/* --- CSS for Progress Bar (No Changes Needed) --- */}
      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .animate-progress {
          animation: progress linear forwards;
        }
      `}</style>
    </div>
  );
}
