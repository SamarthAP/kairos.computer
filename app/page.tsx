// import Image from "next/image";
import Example from "./components/example";
import HowItWorks from "./components/howitworks";
import ProblemSection from "./components/ProblemSection";
import KairosApproach from "./components/KairosApproach";
// font-[family-name:var(--font-geist-sans)]
// font-[family-name:var(--font-geist-mono)]

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-50 font-[family-name:var(--font-geist-mono)] p-8">
      {/* Hero section */}
      <main className="max-w-4xl mx-auto pt-12">
        <div className="mb-20">
          <div className="mb-6">
            <div className="text-3xl font-bold text-amber-500 mb-2">KAIROS</div>
            <div className="text-sm text-stone-500">{"// proactive agents with full company context"}</div>
          </div>
          <h1 className="text-3xl sm:text-5xl mb-6 font-bold">Your AI workforce that understands your business and executes autonomously</h1>
          <p className="text-stone-400 text-xl mb-8">No more rigid workflows or constant prompting. Kairos agents learn your business context, suggest valuable work, and execute complex tasks with minimal oversight.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-sm font-bold">Get early access</button>
            <button className="px-6 py-3 border border-stone-400 hover:bg-stone-800 rounded-sm">Book a demo →</button>
          </div>
        </div>

        {/* Current state of AI agents */}
        <ProblemSection />

        {/* The Kairos difference */}
        <KairosApproach />

        {/* Example use case */}
        <div className="mb-20">
          <h2 className="text-2xl mb-6 border-b border-stone-800 pb-2">## See it in action</h2>
          
          <Example />
          
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-stone-800 p-6 rounded-sm hover:border-amber-500 transition-colors">
              <h3 className="font-bold mb-3">Technical capabilities</h3>
              <ul className="text-stone-400 space-y-3">
                <li>• Uses tools like browsers, coding environments, and APIs</li>
                <li>• Interacts with your existing SaaS platforms</li> 
                <li>• Writes and reviews code</li>
                <li>• Creates and edits documents and spreadsheets</li>
                <li>• Communicates with team members via your channels</li>
              </ul>
            </div>
            
            <div className="border border-stone-800 p-6 rounded-sm hover:border-amber-500 transition-colors">
              <h3 className="font-bold mb-3">Business impact</h3>
              <ul className="text-stone-400 space-y-3">
                <li>• 60-80% reduction in time spent on routine knowledge work</li>
                <li>• Higher quality outputs with consistent formatting</li>
                <li>• Faster execution of cross-functional work</li>
                <li>• Identifies opportunities humans might miss</li>
                <li>• Scales your team&apos;s capabilities without scaling headcount</li>
              </ul>
            </div>
          </div> */}
        </div>

        {/* How it works */}
        <HowItWorks />
        
        {/* CTA */}
        <div className="mb-20 text-center p-8 border border-stone-800 bg-stone-900 rounded-sm">
          <h2 className="text-2xl mb-4">Join the autonomous AI workforce revolution</h2>
          <p className="text-stone-400 mb-8">We&apos;re partnering with select companies to transform how business operations work</p>
          <button className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-sm font-bold text-lg">
            Apply for early access
          </button>
          <p className="mt-4 text-stone-500">Limited spots available for early access partners</p>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-stone-800 mt-20 pt-8 text-stone-500 text-sm">
        <div className="max-w-4xl mx-auto flex justify-between flex-col sm:flex-row">
          <div>kairos.computer</div>
          <div className="flex gap-6">
            {/* <a href="#" className="hover:text-stone-300">Twitter</a>
            <a href="#" className="hover:text-stone-300">LinkedIn</a>
            <a href="#" className="hover:text-stone-300">Contact</a> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

