'use client';

import React from 'react';
import { TemplateCardProps } from '@/app/lib/types/template';

export const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  onPreview,
  onCreateTask
}) => {
  const handlePreview = () => {
    if (onPreview) {
      onPreview(template);
    }
  };

  const handleCreateTask = () => {
    if (onCreateTask) {
      onCreateTask(template);
    } else {
      // window.open(`https://app-dev.kairos.computers?templateId=${template.id}`, `_blank`);
      // window.open(`https://app.kairos.computers?templateId=${template.id}`, '_blank');
      window.open(`${process.env.NEXT_PUBLIC_API_URL}?templateId=${template.id}`, '_blank')
    }
  };

  return (
    <div className="group relative bg-stone-900 border border-stone-800 rounded-lg transition-all duration-200 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
      {/* Main card content */}
      <div className="p-6 pb-4">
        {/* Time-saving badge */}
        <div className="mb-3">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-medium px-2 py-1 rounded-full">
            Saves 1 hour/day
          </span>
        </div>

        {/* Template name */}
        <h3 className="text-xl font-semibold text-stone-100 mb-2 line-clamp-2">
          {template.name}
        </h3>

        {/* Template summary */}
        <p className="text-sm text-stone-400 mb-4 line-clamp-3">
          {template.summary || 'No description available'}
        </p>

        {/* App slugs as badges - show apps if available, otherwise show a default badge */}
        {/* <div className="flex flex-wrap gap-2">
          {template.apps && template.apps.length > 0 ? (
            template.apps.map((slug, index) => (
              <span
                key={index}
                className="inline-block bg-stone-800 text-stone-300 text-xs font-medium px-2 py-1 rounded border border-stone-700"
              >
                {slug}
              </span>
            ))
          ) : (
            <span className="inline-block bg-stone-800 text-stone-300 text-xs font-medium px-2 py-1 rounded border border-stone-700">
              {template.domain || 'Automation'}
            </span>
          )}
        </div>
      </div> */}

      {/* Apps as badges */}
        <div className="flex flex-wrap gap-2">
          {template.apps && template.apps.length > 0 && (
            template.apps.map((slug, index) => (
              <span
                key={index}
                className="inline-block bg-stone-800 text-stone-300 text-xs font-medium px-2 py-1 rounded border border-stone-700"
              >
                {slug}
              </span>
            ))
          )}
        </div>
      </div>

      {/* Hover overlay with buttons - positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 pt-8 bg-gradient-to-t from-stone-900 via-stone-900/95 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0">
        <div className="flex gap-3 justify-center">
          {/* Preview button */}
          <button
            onClick={handlePreview}
            className="bg-stone-700 hover:bg-stone-600 text-stone-200 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-50"
          >
            Preview
          </button>

          {/* Create Task button */}
          <button
            onClick={handleCreateTask}
            className="bg-amber-500 hover:bg-amber-400 text-stone-900 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50"
          >
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;