import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onBookScan: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookScan }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                alt="Inside C SCANS Dental & Facial Imaging Centre"
                className="w-full h-72 sm:h-88 object-cover"
                loading="lazy"
              />
              <div className="p-3.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-700 flex items-center justify-between">
                <span className="font-semibold text-slate-900">Modern Diagnostic Centre</span>
                <span className="text-slate-500 text-[11px]">Salem • Karur • Dindigul</span>
              </div>
            </div>
          </div>

          {/* Right Column: Title & Text */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="text-xs font-bold uppercase tracking-wider text-orange-600">
              About C SCANS
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
              Precision Imaging for Modern Dentistry
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              C SCANS is a specialized Dental & Facial Imaging Centre providing advanced diagnostic imaging services. Using state-of-the-art imaging technology, we help clinicians achieve accurate diagnosis, precise treatment planning, and improved patient care.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our imaging facilities serve patients, dental surgeons, orthodontists, and maxillofacial specialists with high-resolution 2D and 3D modalities. By providing distortion-free datasets and clear anatomical reconstructions, we assist dental professionals in delivering safe, predictable treatment outcomes.
            </p>

            {/* Core Operational Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-heading">Radiation Safety</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Strict adherence to ALARA protocols for optimized patient exposure.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-heading">Digital Workflow</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Prompt electronic report sharing and standard DICOM file formats.</p>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <button
                onClick={onBookScan}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors cursor-pointer"
              >
                <span>Book a Scan Appointment</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
