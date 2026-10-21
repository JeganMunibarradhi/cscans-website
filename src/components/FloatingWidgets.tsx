import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, X } from 'lucide-react';
import { BRANCHES_DATA } from '../data/branches';

export const FloatingWidgets: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeBranches = BRANCHES_DATA.filter((b) => b.isConfirmed && b.phones.length > 0);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      
      {/* Quick Help Dialog */}
      {isHelpOpen && (
        <div className="mb-2 w-64 bg-white rounded-2xl shadow-lg border border-slate-200 p-3.5 text-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-900">Contact Centre</span>
            <button
              onClick={() => setIsHelpOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-700 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-1.5 text-xs">
            {activeBranches.map((branch) => (
              <div key={branch.id} className="p-2 rounded-lg bg-slate-50 border border-slate-100 space-y-1">
                <div className="font-bold text-slate-900">{branch.name}</div>
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${branch.phones[0].replace(/\s+/g, '')}`}
                    className="flex-1 py-1 px-2 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-center flex items-center justify-center gap-1"
                  >
                    <Phone className="w-3 h-3 text-orange-600" />
                    <span>Call</span>
                  </a>
                  {branch.whatsapp && (
                    <a
                      href={`https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(`Hello C SCANS ${branch.city}, I would like to enquire about a dental scan.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1 px-2 rounded bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-semibold text-center flex items-center justify-center gap-1"
                    >
                      <MessageCircle className="w-3 h-3 text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="flex items-center gap-2">
        {/* Quick Contact Toggle */}
        <button
          onClick={() => setIsHelpOpen(!isHelpOpen)}
          className="h-11 px-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer text-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          aria-label="Quick contact"
        >
          <Phone className="w-4 h-4 text-orange-400" />
          <span className="hidden sm:inline">Quick Contact</span>
        </button>

        {/* Floating WhatsApp Action for Primary Centre (Salem) */}
        <a
          href="https://wa.me/919843754583?text=Hello%20C%20SCANS,%20I%20would%20like%20to%20enquire%20about%20a%20scan%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer"
          aria-label="WhatsApp C SCANS"
          title="WhatsApp C SCANS"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        {/* Back to top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center shadow-sm transition-colors cursor-pointer border border-slate-300"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

    </div>
  );
};
