"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DemoVideoModalProps {
  show: boolean;
  onClose: () => void;
}

export default function DemoVideoModal({ show, onClose }: DemoVideoModalProps) {
  // Close modal when pressing ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Define animation variants (same as in EarlyAccessModal)
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
          className="fixed inset-0 bg-black/70 backdrop-blur-lg z-50 flex items-center justify-center p-4 font-[family-name:var(--font-geist-mono)]"
          onClick={onClose}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="bg-stone-900 border border-stone-700 rounded-sm w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {/* Modal header */}
            <div className="flex justify-between items-center p-4 border-b border-stone-800">
              <h3 className="text-amber-500 font-bold">KAIROS DEMO</h3>
              <button
                onClick={onClose}
                className="text-stone-400 hover:text-stone-200 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Video container with responsive aspect ratio */}
            <div className="aspect-video relative">
              <iframe
                src="https://www.youtube.com/embed/WG3KUb-7dHs"
                title="Kairos Demo Video"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
