'use client';

export default function CloseButton() {
  return (
    <button
      onClick={() => window.close()}
      className="w-full px-6 py-3 bg-stone-900 hover:bg-stone-800 text-stone-300 rounded-sm font-semibold text-sm transition-colors border border-stone-800 hover:border-stone-700 font-[family-name:var(--font-geist-sans)]"
    >
      Close window
    </button>
  );
}