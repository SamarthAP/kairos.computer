'use client';

import { useState, useMemo } from 'react';
import { Template, TemplateGridProps } from '@/app/lib/types/template';
import { DomainFilter, TemplateCard } from './';

/**
 * TemplateGrid Component
 */
export default function TemplateGrid({ templates }: TemplateGridProps) {
  const [selectedDomain, setSelectedDomain] = useState<string>('all');

  // Filter templates based on selected domain
  const filteredTemplates = useMemo(() => {
    if (selectedDomain === 'all') {
      return templates;
    }
    return templates.filter(template => template.domain === selectedDomain);
  }, [templates, selectedDomain]);

  const handleDomainChange = (domain: string) => {
    setSelectedDomain(domain);
  };

  return (
    <div className="w-full">
      {/* Domain Filter */}
      <DomainFilter 
        selectedDomain={selectedDomain} 
        onDomainChange={handleDomainChange} 
      />

      {/* Templates Grid */}
      {filteredTemplates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <TemplateCard 
              key={template.id} 
              template={template}
            />
          ))}
        </div>
      ) : (
        // Empty state when no templates match the filter
        <div className="text-center py-12">
          <div className="text-stone-400 text-lg mb-2">
            No templates found
          </div>
          <p className="text-stone-500 text-sm">
            {selectedDomain === 'all' 
              ? 'No templates are currently available.' 
              : `No templates found for the ${selectedDomain} domain.`
            }
          </p>
          {selectedDomain !== 'all' && (
            <button
              onClick={() => setSelectedDomain('all')}
              className="mt-4 text-amber-400 hover:text-amber-300 text-sm underline"
            >
              View all templates
            </button>
          )}
        </div>
      )}
    </div>
  );
}