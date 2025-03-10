// import Image from "next/image";

// font-[family-name:var(--font-geist-sans)]
// font-[family-name:var(--font-geist-mono)]

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-50 font-[family-name:var(--font-geist-mono)] p-8">
      {/* Hero section with company name */}
      <main className="max-w-4xl mx-auto pt-12">
        <div className="mb-20">
          <div className="mb-6">
            <div className="text-3xl font-bold text-amber-500 mb-2">KAIROS</div>
            <div className="text-sm text-stone-500">{"// proactive agents with full company context"}</div>
          </div>
          <h1 className="text-3xl sm:text-4xl mb-4">Automate your non-technical workflows with AI that understands your business.</h1>
          <p className="text-stone-400 text-lg mb-8">Agents that know everything happening in your company and act on your behalf.</p>
          <div className="flex space-x-4">
            <button className="px-5 py-2 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-sm">Deploy your agent</button>
            <button className="px-5 py-2 border border-stone-400 hover:bg-stone-800 rounded-sm">Learn more →</button>
          </div>
          
          {/* <div className="flex space-x-8 mt-16 text-sm text-stone-500">
            <a href="#features" className="hover:text-blue-400">Features</a>
            <a href="#use-cases" className="hover:text-blue-400">Use Cases</a>
            <a href="#documentation" className="hover:text-blue-400">Documentation</a>
            <a href="#about" className="hover:text-blue-400">About</a>
          </div> */}
        </div>

        {/* Features */}
        <div id="features" className="mb-16">
          <h2 className="text-2xl mb-6 border-b border-stone-800 pb-2">## Features</h2>
          <ul className="space-y-4">
            <li className="flex">
              <span className="text-amber-500 mr-2">*</span>
              <div>
                <p className="font-bold">Non-technical task automation</p>
                <p className="text-stone-400">Customer outreach, lead generation, report preparation, and more.</p>
              </div>
            </li>
            <li className="flex">
              <span className="text-amber-500 mr-2">*</span>
              <div>
                <p className="font-bold">Complete company knowledge</p>
                <p className="text-stone-400">Agents understand your data, processes, and communication history.</p>
              </div>
            </li>
            <li className="flex">
              <span className="text-amber-500 mr-2">*</span>
              <div>
                <p className="font-bold">Proactive assistance</p>
                <p className="text-stone-400">Agents identify opportunities and take action without explicit prompting.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Trusted by */}
        {/* <div className="mb-16">
          <h2 className="text-sm uppercase text-stone-500 mb-6 text-center">Trusted by innovative teams</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {['Company A', 'Company B', 'Company C', 'Company D'].map((company, i) => (
              <div key={i} className="bg-stone-900 h-12 flex items-center justify-center text-stone-400">
                {company}
              </div>
            ))}
          </div>
        </div> */}

        {/* Vision */}
        <div className="mb-16 p-6 border border-stone-800 rounded-sm">
          <h2 className="text-xl mb-4">Our vision</h2>
          <p className="text-stone-400">
            We envision a future where companies thrive through small, focused teams empowered by AI. 
            As language models continue their rapid advancement, they&apos;ll increasingly handle routine 
            operational tasks, freeing human creativity to focus on strategic direction and 
            product innovation.
          </p>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-stone-800 mt-20 pt-8 text-stone-500 text-sm">
        <div className="flex justify-between flex-col sm:flex-row">
          <div>© 2023 Kairos. All rights reserved.</div>
          {/* <div className="flex space-x-4">
            <a href="#" className="hover:text-stone-300">Privacy</a>
            <a href="#" className="hover:text-stone-300">Terms</a>
            <a href="#" className="hover:text-stone-300">Contact</a>
          </div> */}
        </div>
      </footer>
    </div>
  );
}
