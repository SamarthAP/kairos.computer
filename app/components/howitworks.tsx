"use client"

import { useEffect, useState } from 'react';

export default function HowItWorks() {
  // Create a state to hold our random elements
  const [randomElements, setRandomElements] = useState<Array<{
    width: number;
    height: number;
    left: number;
    top: number;
    animation: string;
  }> | null>(null);
  const [toolPositions, setToolPositions] = useState<Array<{
    name: string;
    icon: string;
    angle: number;
    x: number;
    y: number;
    distance: number;
  }> | null>(null);

  // Generate random elements only on the client side
  useEffect(() => {
    // Generate random decorative elements
    const newRandomElements = [...Array(20)].map(() => ({
      width: Math.random() * 6 + 1,
      height: Math.random() * 6 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animation: `pulse ${Math.random() * 4 + 3}s infinite alternate`
    }));

    // Generate tool positions
    const newToolPositions = [
      { name: 'Google Drive', icon: '📁', angle: 30 },
      { name: 'Slack', icon: '💬', angle: 90 },
      { name: 'Notion', icon: '📝', angle: 150 },
      { name: 'Gmail', icon: '✉️', angle: 210 },
      { name: 'CRM', icon: '👥', angle: 270 },
      { name: 'Linear', icon: '🔄', angle: 330 }
    ].map((tool) => {
      const distance = Math.random() * 20 + 110; // Varied distance for more organic look
      const angle = tool.angle * Math.PI / 180;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      return {
        ...tool,
        x,
        y,
        distance
      };
    });

    setRandomElements(newRandomElements);
    setToolPositions(newToolPositions);
  }, []);

  return (
    <div className="mb-20">
    <h2 className="text-2xl mb-6 border-b border-stone-800 pb-2">## How Kairos works</h2>
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <div className="text-amber-500 text-xl mb-4">01. Connect</div>
          <h3 className="text-2xl mb-3">Integrate with your existing tools</h3>
          <p className="text-stone-400">
            Kairos connects to your documents, communication channels, and business tools to build a comprehensive knowledge graph of your operations.
          </p>
          <ul className="text-stone-400 mt-4">
            <li>• Document storage (Google Drive, Notion, etc.)</li>
            <li>• Communication tools (Slack, Email, etc.)</li>
            <li>• Business systems (CRM, project management, etc.)</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 h-64 bg-gradient-to-br from-stone-900 to-stone-950 rounded-sm p-6 relative overflow-hidden">
          {/* Enhanced connection diagram visual */}
          <div className="absolute inset-0 w-full h-full">
            {/* Background decoration elements */}
            <div className="absolute w-full h-full opacity-20">
              {randomElements ? randomElements.map((elem, i) => (
                <div 
                  key={i}
                  className="absolute bg-amber-500/10 rounded-full"
                  style={{
                    width: `${elem.width}px`,
                    height: `${elem.height}px`,
                    left: `${elem.left}%`,
                    top: `${elem.top}%`,
                    animation: elem.animation
                  }}
                />
              )) : null}
            </div>
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-10" 
                 style={{
                   backgroundImage: 'linear-gradient(to right, #6b7280 1px, transparent 1px), linear-gradient(to bottom, #6b7280 1px, transparent 1px)',
                   backgroundSize: '20px 20px'
                 }}
            />
            
            {/* Center node with animated glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 rounded-full bg-amber-950 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full bg-amber-500/20 animate-ping opacity-30"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/40 to-amber-700/40 animate-pulse"></div>
                <div className="w-16 h-16 rounded-full bg-stone-950 flex items-center justify-center border-2 border-amber-500 z-10">
                  <div className="text-amber-500 font-bold text-sm">KAIROS</div>
                </div>
              </div>
            </div>
            
            {/* Tool nodes with better styling */}
            {toolPositions && toolPositions.map((tool, index) => (
                <div key={tool.name} className="absolute z-10" style={{ 
                  left: `calc(50% + ${tool.x}px)`, 
                  top: `calc(50% + ${tool.y}px)`,
                  transform: 'translate(-50%, -50%)'
                }}>
                  {/* Connection line with gradient and pulse animation */}
                  <div className="absolute left-1/2 top-1/2" style={{
                    width: `${Math.sqrt(Math.pow(tool.x, 2) + Math.pow(tool.y, 2))}px`,
                    height: '2px',
                    transformOrigin: '0 0',
                    transform: `rotate(${tool.angle * Math.PI / 180 + Math.PI}rad)`,
                    background: 'linear-gradient(90deg, rgba(217,119,6,0.5) 0%, rgba(217,119,6,0.2) 100%)'
                  }}>
                    {/* Data flow animation */}
                    <div className="absolute h-1 w-4 bg-amber-500/80 rounded-full" style={{
                      animation: `dataFlow ${2 + index * 0.5}s infinite linear`,
                      opacity: 0.7
                    }}></div>
                  </div>
                  
                  {/* Tool node */}
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 to-amber-700/30 rounded-lg blur-sm opacity-70"></div>
                    <div className="relative flex items-center justify-center w-10 h-10 bg-stone-800 border border-stone-700 hover:border-amber-500 transition-colors duration-300 rounded-lg shadow-lg">
                      <div className="text-sm">{tool.icon}</div>
                    </div>
                    <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 text-[10px] text-stone-500 whitespace-nowrap">{tool.name}</div>
                  </div>
                </div>
              ))}
          </div>
          
          {/* Add keyframes for animations */}
          <style jsx>{`
            @keyframes pulse {
              0% { transform: scale(1); opacity: 0.2; }
              100% { transform: scale(1.5); opacity: 0.5; }
            }
            @keyframes dataFlow {
              0% { transform: translateX(0); opacity: 0; }
              50% { opacity: 1; }
              100% { transform: translateX(100%); opacity: 0; }
            }
          `}</style>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2 h-64 bg-gradient-to-br from-stone-900 to-stone-950 rounded-sm p-4 order-1 md:order-0 flex flex-col">
          {/* Dashboard visual */}
          <div className="border-b border-stone-700 pb-2 mb-3 flex justify-between items-center">
            <div className="text-amber-500 font-bold">KAIROS DASHBOARD</div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-stone-700"></div>
              <div className="w-3 h-3 rounded-full bg-stone-700"></div>
              <div className="w-3 h-3 rounded-full bg-stone-700"></div>
            </div>
          </div>
          <div className="flex-1 flex">
            <div className="w-1/4 border-r border-stone-800 pr-2">
              <div className="text-xs text-stone-500 mb-2">TASKS</div>
              <div className="space-y-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-stone-800 h-4 w-full rounded-sm"></div>
                ))}
              </div>
            </div>
            <div className="flex-1 pl-3">
              <div className="text-xs text-stone-500 mb-2">ACTIVE WORK</div>
              <div className="space-y-4">
                <div className="bg-stone-800 h-12 w-full rounded-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-3/4 bg-amber-800/30"></div>
                  <div className="absolute top-0 right-0 h-full px-2 flex items-center">
                    <div className="bg-amber-500/40 text-amber-500 text-xs px-1 rounded">75%</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-stone-800 h-8 rounded-sm"></div>
                  <div className="bg-stone-800 h-8 rounded-sm"></div>
                </div>
                <div className="bg-stone-800 h-10 rounded-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-1/3 bg-amber-800/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-0 md:order-1">
          <div className="text-amber-500 text-xl mb-4">02. Control</div>
          <h3 className="text-2xl mb-3">Maintain strategic oversight</h3>
          <p className="text-stone-400">
            You approve tasks before execution and set guardrails. Kairos suggests high-value work 
            but you maintain control over strategic decisions.
          </p>
          <ul className="text-stone-400 mt-4">
            <li>• Approve or modify suggested tasks</li>
            <li>• Set boundaries and access controls</li>
            <li>• Review completed work before finalization</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
}