"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EarlyAccessModalProps {
  show: boolean;
  onClose: () => void;
}

export default function EarlyAccessModal({
  show,
  onClose,
}: EarlyAccessModalProps) {
  const [email, setEmail] = useState("");
  const [usage, setUsage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, usage }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      // Success
      setSubmitStatus("success");
      setEmail(""); // Clear form on success
      setUsage("");
      // Optionally close modal after a delay or keep it open with success message
      // setTimeout(onClose, 2000);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    // Reset state when closing manually
    setSubmitStatus("idle");
    setErrorMessage("");
    setEmail("");
    setUsage("");
    onClose();
  };

  // Define animation variants for clarity (optional but good practice)
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-lg z-50 flex justify-center items-center p-4 font-[family-name:var(--font-geist-mono)]"
          onClick={handleClose}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="bg-stone-900 p-8 rounded-sm shadow-xl w-full max-w-md relative border border-stone-700"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-stone-500 hover:text-stone-300 text-2xl font-bold cursor-pointer"
              aria-label="Close modal"
            >
              &times; {/* Multiplication sign for 'X' */}
            </button>

            <h2 className="text-2xl font-bold text-amber-500 mb-6">
              Request Early Access
            </h2>

            {submitStatus === "success" ? (
              <div className="text-stone-300">
                <p className="text-lg mb-4">Thank you!</p>
                <p>
                  We&apos;ve received your request and will be in touch soon.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-6 px-6 py-2 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-sm font-bold cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-stone-400 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-stone-800 border border-stone-700 rounded-sm text-stone-50 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="usage"
                    className="block text-sm font-medium text-stone-400 mb-1"
                  >
                    What would you use Kairos for?
                  </label>
                  <textarea
                    id="usage"
                    value={usage}
                    onChange={(e) => setUsage(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-stone-800 border border-stone-700 rounded-sm text-stone-50 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    placeholder="Describe the workflow you want to automate..."
                  />
                </div>

                {submitStatus === "error" && (
                  <p className="text-red-500 text-sm mb-4">
                    Error: {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
