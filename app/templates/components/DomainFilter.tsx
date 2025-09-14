'use client';

import { DOMAIN_OPTIONS } from '@/app/lib/types/template';
import type { DomainFilterProps } from '@/app/lib/types/template';

/*
 * DomainFilter Component
 */

export default function DomainFilter({ selectedDomain, onDomainChange }: DomainFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {DOMAIN_OPTIONS.map((option) => (
        <button
          key={option.value}
          onClick={() => onDomainChange(option.value)}
          className={`
            px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ease-in-out
            transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50
            ${
              selectedDomain === option.value
                ? 'bg-amber-500 text-stone-900 shadow-lg shadow-amber-500/25'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-stone-200'
            }
          `}
          aria-pressed={selectedDomain === option.value}
          role="tab"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}