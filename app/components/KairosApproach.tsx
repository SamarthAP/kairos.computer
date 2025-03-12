'use client'

import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
// import { createPortal } from 'react-dom'

export default function KairosApproach() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: false, amount: 0.3 })
    const controls = useAnimation()
    // State for the particles to ensure consistent rendering
    // const [particles, setParticles] = useState<{top: string, left: string}[]>([])
    
    // State to track portal mounting

    
    useEffect(() => {
      if (isInView) {
        controls.start('visible')
      }
    }, [isInView, controls])
    
    // Generate random particle positions on the client-side only
    // useEffect(() => {
    //   const particlePositions = Array(20).fill(0).map(() => ({
    //     top: `${Math.random() * 100}%`,
    //     left: `${Math.random() * 100}%`
    //   }))
    //   setParticles(particlePositions)
    // }, [])
    
    
    // Hold the position of the active feature element for positioning
    
    const features = [
      {
        title: "Comprehensive Knowledge",
        description: "Creates a dynamic knowledge graph by securely connecting to your company's data sources (Slack, Google Drive, Notion, email, etc.)",
        outcome: "Deep contextual understanding of your business",

      },
      {
        title: "Proactive Task Identification",
        description: "Identifies opportunities where it can add value - from drafting follow-up emails to preparing financial analysis reports before quarterly reviews",
        outcome: "Self-managing virtual workforce",
        
      },
      {
        title: "Human-in-the-Loop Collaboration",
        description: "Suggests actions before executing them, allowing managers to approve, modify, or reject with minimal effort through our intuitive dashboard or Slack",
        outcome: "Maximum control with minimal overhead",
        
      },
      {
        title: "Autonomous Execution",
        description: "Our recursive agent architecture breaks complex work into manageable subtasks, handles them independently, and delivers polished results",
        outcome: "Handles complex, non-linear work autonomously",
        
      }
    ]
  
    return (
      <motion.div 
        ref={containerRef}
        className="mb-20 relative rounded-sm overflow-hidden"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } }
        }}
      >
        {/* Background with complex gradient and subtle patterns */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900" />
          
          {/* Interactive grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(217,119,6,0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(217,119,6,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            />
          </div>
          
          {/* Animated accent elements */}
          {Array(4).fill(0).map((_, i) => (
            <motion.div 
              key={i}
              className="absolute bg-amber-500/5 rounded-full blur-xl"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                left: `${(i * 25) % 100}%`,
                top: `${(i * 30) % 100}%`,
              }}
              animate={{
                x: [0, 50, 0, -50, 0],
                y: [0, 30, 60, 30, 0],
                opacity: [0.1, 0.15, 0.1, 0.15, 0.1]
              }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Content container */}
        <div className="relative z-10 p-10 border border-amber-800/20">
          {/* Section header */}
          <motion.div 
            className="mb-12 max-w-xl"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
            }}
          >
            <div className="inline-block mb-2 bg-gradient-to-r from-amber-700 to-amber-500 text-transparent bg-clip-text text-3xl font-bold">
              The Kairos Approach
            </div>
            <p className="text-stone-300 text-lg leading-relaxed">
              We&apos;re building a fundamentally different agent architecture that combines four critical capabilities
              to create autonomous AI that truly works.
            </p>
            <div className="mt-4 h-0.5 w-24 bg-gradient-to-r from-amber-500 to-transparent"></div>
          </motion.div>
          
          {/* Features section with 3D-like cards in a 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="group relative"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { 
                      duration: 0.6,
                      ease: "easeOut", 
                      delay: index * 0.15 
                    } 
                  }
                }}
                whileHover={{ y: -5 }}
              >
                {/* Card with 3D effect */}
                <div className="relative h-full">
                  {/* Card background with 3D perspective */}
                  <div 
                    className="absolute inset-0 rounded-lg bg-gradient-to-br from-stone-800 to-stone-900 transform group-hover:scale-105 transition-transform duration-300"
                    style={{
                      boxShadow: "0 0 30px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.05)"
                    }}
                  />
                  
                  {/* Card border glow on hover */}
                  <motion.div 
                    className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-amber-500/0 via-amber-500/30 to-amber-500/0 opacity-0 group-hover:opacity-100 blur-sm"
                    // animate={activeFeature === index ? { 
                    //   backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    // } : {}}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Card content */}
                  <div className="relative rounded-lg p-6 h-full flex flex-col">
                    {/* Glowing number indicator */}
                    <div 
                      className="absolute top-3 right-3 text-3xl font-bold text-amber-500 opacity-10 group-hover:opacity-20 transition-opacity"
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      0{index + 1}
                    </div>
                    
                    {/* Feature content */}
                    <h3 className="text-xl text-amber-500 font-bold mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-stone-400 mb-4 flex-grow">
                      {feature.description}
                    </p>
                    
                    {/* Outcome with animated indicator */}
                    <div className="text-amber-400/80 font-medium flex items-center mt-auto">
                      <motion.span 
                        className="mr-2 inline-block"
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                      <span>{feature.outcome}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Interactive diagram showing system functioning */}
          {/* <motion.div 
            className="p-8 border border-amber-800/20 rounded-lg bg-stone-950/80 backdrop-blur-sm relative overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } }
            }}
          >
            <div className="relative z-10">
              <div className="text-center text-amber-500 font-medium mb-8">Complete Autonomous Operation System</div>
              
              <div className="flex flex-wrap items-center justify-center gap-6 max-w-2xl mx-auto">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-stone-900 border border-amber-500/30 rounded-lg p-2 flex items-center justify-center shadow-lg">
                    <motion.span 
                      className="text-2xl"
                      animate={{ 
                        rotate: [0, 10, 0, -10, 0],
                        scale: [1, 1.1, 1, 1.1, 1] 
                      }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      🧠
                    </motion.span>
                  </div>
                  <div className="text-amber-500 text-xs mt-2">Knowledge</div>
                </div>
                
                <motion.div 
                  className="w-16 h-0.5 bg-gradient-to-r from-amber-700/80 to-amber-500/80"
                  animate={{ scaleX: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-stone-900 border border-amber-500/50 rounded-lg p-2 flex items-center justify-center shadow-lg relative">
                    <motion.div 
                      className="absolute inset-0 rounded-lg border-2 border-amber-500/30"
                      animate={{ 
                        boxShadow: ["0 0 0 rgba(217,119,6,0.3)", "0 0 15px rgba(217,119,6,0.5)", "0 0 0 rgba(217,119,6,0.3)"] 
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <div className="text-3xl">🤖</div>
                  </div>
                  <div className="text-amber-500 text-xs mt-2">KAIROS</div>
                </div>
                
                <motion.div 
                  className="w-16 h-0.5 bg-gradient-to-r from-amber-500/80 to-amber-700/80"
                  animate={{ scaleX: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-stone-900 border border-amber-500/30 rounded-lg p-2 flex items-center justify-center shadow-lg">
                    <motion.span 
                      className="text-2xl"
                      animate={{ 
                        rotate: [0, -5, 0, 5, 0],
                        y: [0, -2, 0, 2, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      💡
                    </motion.span>
                  </div>
                  <div className="text-amber-500 text-xs mt-2">Identification</div>
                </div>
  
                <motion.div 
                  className="w-16 h-0.5 bg-gradient-to-r from-amber-700/80 to-amber-500/80"
                  animate={{ scaleX: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
  
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-stone-900 border border-amber-500/30 rounded-lg p-2 flex items-center justify-center shadow-lg">
                    <motion.span 
                      className="text-2xl"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      👤
                    </motion.span>
                  </div>
                  <div className="text-amber-500 text-xs mt-2">Collaboration</div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <motion.div 
                  className="h-8 bg-stone-800 rounded-full px-4 flex items-center shadow-lg overflow-hidden"
                  initial={{ width: "40%" }}
                  whileInView={{ width: "70%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: false, amount: 0.8 }}
                >
                  <motion.div 
                    className="whitespace-nowrap overflow-hidden text-amber-500/70 text-xs"
                    animate={{ x: ["0%", "-60%", "0%"] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    Continuous learning &bull; Contextual understanding &bull; Adaptive execution &bull; Proactive suggestions &bull; Human collaboration &bull; Continuous learning
                  </motion.div>
                </motion.div>
              </div>
            </div>
            

            <div className="absolute inset-0 pointer-events-none">
              {particles.map((particle, i) => (
                <motion.div 
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-amber-500/20"
                  style={{
                    top: particle.top,
                    left: particle.left,
                  }}
                  animate={{
                    y: [0, Math.random() * 100 - 50],
                    x: [0, Math.random() * 100 - 50],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 5,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                  }}
                />
              ))}
            </div>
          </motion.div> */}
        </div>
        
        {/* Removed portal for feature visualization */}
      </motion.div>
    )
  }