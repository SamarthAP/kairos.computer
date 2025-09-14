import Link from 'next/link';
import { TemplateGrid } from './components';
import { Template, TemplateError } from '../lib/types/template';
import { supabaseAdmin } from '../lib/supabase';

/*
 * Templates Page
*/

async function getTemplates(): Promise<{ templates: Template[] | null; error: TemplateError | null }> {
  try{
    // const res = await fetch("/api/template")

    // if (!res.ok) {
    //   const errorData = await res.json();
    //   return { templates: null, error: errorData.error };
    // }

    // const responseData = await res.json();
    // return { templates: responseData.data, error: null };
    
    const { data, error } = await supabaseAdmin
      .from("task_template")
      .select("*");
    
    if (error) {
      return {
        templates: null,
        error: {
          message: `Failed to fetch templates: ${error.message}`,
          code: error.code,
        }
      };
    }

    return { templates: data as Template[], error: null};
  }
  catch (err: any) {
    return { 
      templates: null,
      error: {
         message: "Unexpected error occured" ,
         details: err.message
      }
    };
  }
}


export default async function TemplatesPage() {
  // Fetch templates directly as it is server-side component
  const { templates, error } = await getTemplates();
  return (
    <div className="min-h-screen bg-stone-950 text-stone-50 font-[family-name:var(--font-geist-mono)]">
      {/* Navigation Header */}
      <header className="max-w-6xl mx-auto pt-8 px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-amber-500 hover:text-amber-400 transition-colors">
            KAIROS
          </Link>
          <nav className="flex items-center space-x-6">
            <Link
              href="https://app.kairos.computer"
              className="text-sm text-stone-400 hover:text-amber-500 transition-colors"
            >
              Login →
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            What Can You{' '}
            <span className="text-amber-500">Automate?</span>
          </h1>
          <p className="text-stone-400 text-xl max-w-3xl mx-auto">
            Discover automation templates that save hours every day. 
            Browse by category and start automating your workflows instantly.
          </p>
        </div>

        {/* Templates Section */}
        <section className="mb-20">
          {error ? (
            // Error State
            <div className="text-center py-12">
              <div className="bg-stone-900 border border-red-800 rounded-lg p-8 max-w-md mx-auto">
                <div className="text-red-400 text-lg font-semibold mb-2">
                  Failed to Load Templates
                </div>
                <p className="text-stone-400 text-sm mb-4">
                  {error.message}
                </p>
              </div>
            </div>
          ) : templates && templates.length > 0 ? (
            // Templates Grid
            <TemplateGrid templates={templates} />
          ) : (
            // Empty State
            <div className="text-center py-12">
              <div className="text-stone-400 text-lg mb-2">
                No templates available
              </div>
              <p className="text-stone-500 text-sm">
                Templates are being prepared. Check back soon!
              </p>
            </div>
          )}
        </section>
      </main>

      {/* CTA Section */}
      <section className="py-20 bg-stone-900/50 border-y border-stone-800">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Automate Your Work?
          </h2>
          <p className="text-stone-400 text-lg mb-8">
            Join thousands saving hours every week with custom automation workflows.
          </p>
          <Link
            href="https://app.kairos.computer"
            className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-sm font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Sign Up Now →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-800 py-8 text-stone-500 text-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-col sm:flex-row px-8">
          <div>© {new Date().getFullYear()} Kairos Computer Inc.</div>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <Link
              href="/privacy-policy"
              className="hover:text-amber-500 hover:underline transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-amber-500 hover:underline transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export const metadata = {
  title: 'Templates - Kairos',
  description: 'Discover automation templates that save hours every day. Browse by category and start automating your workflows instantly.',
};