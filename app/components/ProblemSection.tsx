'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProblemSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  const problems = [
    {
      title: "Workflow Automation",
      description: "Current platforms can only handle rigid, pre-defined workflows",
      examples: "Lindy, ServiceNow, etc.",
      icon: "⚙️",
      limitation: "Can't adapt to changing conditions"
    },
    {
      title: "Knowledge Assistants",
      description: "Can search company data but can't execute complex tasks",
      examples: "Beam, Moveworks, Glean, etc.",
      icon: "🔍",
      limitation: "Limited to information retrieval"
    },
    {
      title: "General Agents",
      description: "Can decompose tasks but lack business context awareness",
      examples: "AutoGPT, OpenAI Operator, etc.",
      icon: "🤖",
      limitation: "No understanding of your specific business"
    }
  ]

  return (
    <div className="mb-20">
      <h2 className="text-2xl mb-8 border-b border-stone-800 pb-2">## The problem with AI agents today</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {problems.map((problem, index) => (
          <motion.div 
            key={index}
            className="p-6 border border-stone-800 rounded-sm relative overflow-hidden group cursor-pointer"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0 }}
            whileHover={{ 
              borderColor: "rgb(217 119 6)", 
              backgroundColor: "rgba(40, 36, 30, 0.6)" 
            }}
          >
            {/* Floating icon */}
            {/* <motion.div 
              className="text-3xl absolute top-4 right-4 opacity-20 group-hover:opacity-40"
              animate={hoveredCard === index ? { 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              } : {}}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              {problem.icon}
            </motion.div> */}
            
            <h3 className="font-bold mb-2 text-lg relative z-10">{problem.title}</h3>
            <p className="text-stone-400 mb-4 relative z-10">{problem.description}</p>
            <div className="text-stone-500 text-sm mb-6 relative z-10">{problem.examples}</div>
            
            {/* Limitation tag */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 bg-stone-800 py-2 px-4 text-xs text-amber-500/80 h-[48px]"
              initial={{ y: 40 }}
              animate={{ y: hoveredCard === index ? 0 : 40 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center h-full">
                <span className="mr-2">⚠️</span>
                <span>{problem.limitation}</span>
              </div>
            </motion.div>
            
            {/* Background gradient effect on hover */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-amber-900/5 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredCard === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
} 