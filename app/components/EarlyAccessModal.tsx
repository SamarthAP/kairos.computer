"use client";

import { motion, AnimatePresence } from "framer-motion";

interface EarlyAccessModalProps {
  show: boolean;
  onClose: () => void;
}

export default function EarlyAccessModal({
  show,
  onClose,
}: EarlyAccessModalProps) {
  const handleClose = () => {
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
              Book Your Onboarding Call
            </h2>

            <div className="text-stone-300 mb-6">
              <p className="mb-4">
                Ready to see Kairos in action? Book a call to get an account.
              </p>

              <div className="bg-stone-800 p-4 rounded-sm border border-stone-700 mb-6">
                <h3 className="text-amber-400 font-semibold mb-3">
                  On the call we&apos;ll:
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Pick a task you do every day.</li>
                  <li>Record it together.</li>
                  <li>
                    Hit &quot;Run&quot; and watch Kairos take it from there.
                  </li>
                </ol>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="https://cal.com/manas-kairos/20-min-chat"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-sm font-bold text-center cursor-pointer transition-colors"
              >
                Book with Manas
              </a>

              <a
                href="https://calendly.com/samarth-kairos/20min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-sm font-bold text-center cursor-pointer transition-colors"
              >
                Book with Samarth
              </a>
            </div>

            <button
              onClick={handleClose}
              className="mt-4 w-full px-6 py-2 bg-stone-700 hover:bg-stone-600 text-stone-300 rounded-sm font-medium cursor-pointer transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
