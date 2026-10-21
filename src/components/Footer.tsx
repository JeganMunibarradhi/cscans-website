
import React from 'react';
import { Phone } from 'lucide-react';
import { BRANCHES_DATA } from '../data/branches';

interface FooterProps {
  onBookScan: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookScan }) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">

      {/* Pre-footer Call to Action */}
      <div className="border-b border-slate-800/80 bg-slate-900/50 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Need a Dental or Facial Imaging Scan?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Schedule your appointment online or visit our Salem, Karur, Erode, or Dindigul centres.
              </p>
            </div>

            <button
              onClick={onBookScan}
              className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer shrink-0"
            >
              Book a Scan
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Branch Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center font-extrabold text-white text-base">
                C<span className="text-orange-500">.</span>
              </div>

              <span className="text-lg font-bold font-heading tracking-tight text-white">
                C SCANS
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Dental &amp; Facial X-Ray | CBCT Imaging Centre. Providing precise 2D &amp; 3D maxillofacial diagnostic imaging across Tamil Nadu.
            </p>

            <div className="pt-1">
              <span className="text-xs font-semibold text-orange-400">
                Advanced Dental Imaging. Accurate Diagnosis. Better Treatment Planning.
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Links
            </h4>

            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="#hero" className="hover:text-orange-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-orange-400 transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-orange-400 transition-colors">
                  Branch Locations
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Branch Contact Details */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Our Centres
            </h4>

            <div className="space-y-2.5 text-xs">
              {BRANCHES_DATA.map((b) => (
                <div
                  key={b.id}
                  className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800/80"
                >
                  <div className="flex items-center justify-between gap-2">
                    <strong className="text-orange-400 font-semibold">
                      {b.name}
                    </strong>
                    <span className="text-[10px] text-slate-400">
                      {b.city}
                    </span>
                  </div>

                  <p className="text-slate-400 text-[11px] mt-0.5 line-clamp-1">
                    {b.address}
                  </p>

                  {b.isConfirmed && b.phones.length > 0 && (
                    <div className="mt-1 flex items-center gap-1.5 text-[11px] text-slate-300">
                      <Phone className="w-3 h-3 text-orange-500" />

                      <a
                        href={`tel:${b.phones[0].replace(/\s+/g, '')}`}
                        className="hover:text-white transition-colors"
                      >
                        {b.phones[0]}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright & Developer Credit */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} C SCANS. All Rights Reserved.
          </div>

          <div className="text-center">
            Salem <span className="text-slate-700">•</span> Karur{' '}
            <span className="text-slate-700">•</span> Erode{' '}
            <span className="text-slate-700">•</span> Dindigul
          </div>

          <div className="text-center">
            Designed &amp; Developed by{' '}
            <span className="font-semibold text-orange-400">
              J
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
