import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Event type definition
export interface WorkflowEvent {
  title: string;
  description: string;
  type: "STARTED" | "PROCESSING" | "COMPLETED";
}

// Props type definition
interface RunWorkflowDetailsProps {
  events: WorkflowEvent[];
}

export default function RunWorkflowDetails({
  events,
}: RunWorkflowDetailsProps) {
  // State to track which events are visible during animation
  const [visibleEvents, setVisibleEvents] = useState<number[]>([]);
  // Add a ref for the events container
  const eventsContainerRef = useRef<HTMLDivElement>(null);

  // Animate events appearing one by one
  useEffect(() => {
    // Reset state when data changes
    setVisibleEvents([]);

    // Show first event immediately
    setVisibleEvents([0]);

    // Schedule remaining events with 1 second delay between each
    const timeouts: NodeJS.Timeout[] = [];

    events.slice(1).forEach((_, index) => {
      const actualIndex = index + 1;
      const timeout = setTimeout(() => {
        setVisibleEvents((prev) => [...prev, actualIndex]);

        // Scroll to the latest event
        setTimeout(() => {
          if (eventsContainerRef.current) {
            eventsContainerRef.current.scrollTo({
              top: eventsContainerRef.current.scrollHeight,
              behavior: "smooth",
            });
          }
        }, 100);
      }, (index + 1) * 1000); // 1 second between each event

      timeouts.push(timeout);
    });

    // Clean up timeouts on unmount
    return () => {
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, [events]);

  // EventIcon component
  const EventIcon = ({ type }: { type: WorkflowEvent["type"] }) => {
    const iconsByType = {
      STARTED: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          width={12}
          height={12}
          strokeWidth={2}
          className="text-blue-500"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      ),
      PROCESSING: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          width={14}
          height={14}
          strokeWidth={2}
          className="text-amber-500"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ),
      COMPLETED: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          width={14}
          height={14}
          strokeWidth={2}
          className="text-green-500"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ),
    };

    return (
      <div className="flex items-center justify-center w-full h-full">
        {iconsByType[type]}
      </div>
    );
  };

  // Generate time differences for events
  const getTimeDiff = (index: number) => {
    return `+${index + 1}s`;
  };

  return (
    <div className="flex flex-col h-full w-full max-w-full sm:max-w-[80%] md:max-w-[70%] mx-auto px-3 py-4">
      {/* Timeline Header */}
      <h2 className="text-sm font-medium mb-2 text-stone-200">
        Execution Timeline
      </h2>

      {/* Timeline Content */}
      <div className="overflow-y-auto flex-1 w-full" ref={eventsContainerRef}>
        <div className="relative">
          {/* Vertical line connector */}
          <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-stone-700 -ml-px" />

          <div className="space-y-2">
            <AnimatePresence>
              {events.map(
                (event, index) =>
                  visibleEvents.includes(index) && (
                    <motion.div
                      key={index}
                      className="relative pl-8 group"
                      initial={{ opacity: 0, y: 10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      {/* Animate the icon circle */}
                      <motion.div
                        className="absolute left-0 top-0.5 w-6 h-6 rounded-full border-2 border-stone-800 bg-stone-900 flex items-center justify-center z-10 shadow-sm"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        <EventIcon type={event.type} />
                      </motion.div>

                      <motion.div
                        className="rounded-sm p-2 pt-1"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-sm font-medium text-stone-200">
                              {event.title}
                            </h3>
                            <p className="text-xs text-stone-400">
                              {event.description}
                            </p>
                          </div>
                          <span className="text-xs text-stone-500 whitespace-nowrap">
                            {getTimeDiff(index)}
                          </span>
                        </div>
                      </motion.div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
