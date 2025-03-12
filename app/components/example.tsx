'use client'

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Example() {
  const [animationKey, setAnimationKey] = useState(0);
  
  // Total animation duration (all steps + buffer time)
  const totalAnimationDuration = 6500; // 6.5 seconds
  // Time to wait before restarting animation
  const restartDelay = 4000; // 4 seconds pause before restarting
  
  useEffect(() => {
    const timer = setTimeout(() => {
      // Increment key to force component remount and animation restart
      setAnimationKey(prevKey => prevKey + 1);
    }, totalAnimationDuration + restartDelay);
    
    return () => clearTimeout(timer);
  }, [animationKey]);

  return (
    <motion.div 
      key={animationKey}
      className="bg-stone-900 p-6 rounded-sm mb-8 font-[family-name:var(--font-geist-sans)] relative"
      // Set a fixed height to prevent layout shifts
      style={{ minHeight: "320px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-sm text-stone-500 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        EXAMPLE TASK
      </motion.div>
      
      <motion.div 
        className="text-xl mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        &quot;Create a competitive analysis report for our new product feature&quot;
      </motion.div>
      
      <div className="space-y-4 mb-6 relative" style={{ minHeight: "180px" }}>
        <motion.div 
          className="border-l-2 border-amber-500 pl-4 absolute w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div 
            className="text-amber-500 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0 }}
          >
            Kairos breaks it down autonomously:
          </motion.div>
          
          <ul className="text-stone-300 list-disc pl-5 mt-2 space-y-2">
            {[
              "Identify top 5 competitors from our CRM and market data",
              "Research each competitor's equivalent features from product docs and web data",
              "Compare pricing strategies based on our internal pricing models",
              "Draft analysis report with recommendations, formatted to match our brand guidelines",
              "Schedule review meeting with the product team"
            ].map((step, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 2.5 + (index * 0.5),
                  duration: 0.3,
                  ease: "easeOut"
                }}
              >
                {step}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
      
      <motion.div 
        className="text-stone-400 italic absolute bottom-6 left-6 right-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.0, duration: 0.8 }}
      >
        All executed without constant prompting, using your company&apos;s context and existing tools
      </motion.div>
    </motion.div>
  );
}