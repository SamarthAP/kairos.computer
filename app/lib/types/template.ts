// Domain enum for template categorization
export type TemplateDomain = 
  | "productivity"
  | "automation" 
  | "research"
  | "operations"
  | "integrations";

// Main Template interface matching actual Supabase schema
export interface Template {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  summary: string | null;
  domain: string | null;
  alias: string | null;
  definition: string;
  text_inputs: Record<string, any> | null;
  apps: string[] | null;
  trigger: Record<string, any> | null;
}

// Component prop interfaces for type safety
export interface TemplateCardProps {
  template: Template;
  onPreview?: (template: Template) => void;
  onCreateTask?: (template: Template) => void;
}

export interface DomainFilterProps {
  selectedDomain: string | 'all';
  onDomainChange: (domain: string) => void;
  domains?: TemplateDomain[];
}

export interface TemplateGridProps {
  templates: Template[];
  selectedDomain?: string;
  loading?: boolean;
  error?: string | null;
}

// Error handling types
export interface TemplateError {
  message: string;
  code?: string;
  details?: any;
}

// API response types for Supabase queries
export interface TemplateQueryResponse {
  data: Template[] | null;
  error: TemplateError | null;
}

// Constants for domain filter options
export const DOMAIN_OPTIONS: { value: TemplateDomain | 'all'; label: string }[] = [
  { value: 'all', label: 'All Templates' },
  { value: 'productivity', label: 'Productivity' },
  { value: 'automation', label: 'Automation' },
  { value: 'research', label: 'Research' },
  { value: 'operations', label: 'Operations' },
  { value: 'integrations', label: 'Integrations' }
];
