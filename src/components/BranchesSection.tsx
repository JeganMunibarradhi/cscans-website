import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Check, Copy, AlertCircle } from 'lucide-react';
import { BRANCHES_DATA } from '../data/branches';
import { Branch } from '../types';

interface BranchesSectionProps {
  onBookAtBranch: (branchId: string) => void;
}

export const BranchesSection: React.FC<BranchesSectionProps> = ({ onBookAtBranch }) => {
  const [activeMapBranch, setActiveMapBranch] = useState<Branch | null>(BRANCHES_DATA[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyAddress = (branch: Branch) => {
    if (!branch.isConfirmed) return;
    navigator.clipboard.writeText(`${branch.name}, ${branch.address}`);
    setCopiedId(branch.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="locations" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-1.5">
            Find Your Nearest Centre
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Branch Locations
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Convenient diagnostic imaging facilities serving Salem, Karur, Erode, and Dindigul.
          </p>
        </div>

        {/* 3 Location Cards in Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {BRANCHES_DATA.map((branch) => {
            const isMapActive = activeMapBranch?.id === branch.id;
            return (
              <div
                key={branch.id}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 ${
                  isMapActive && branch.isConfirmed
                    ? 'border-orange-500 shadow-sm ring-1 ring-orange-500/20 bg-white'
                    : 'border-slate-200/90 shadow-2xs hover:border-slate-300 bg-white'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Branch Title & City Badge */}
                  <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 font-heading">
                        {branch.name}
                      </h3>
                      <div className="text-xs font-medium text-slate-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                        <span>{branch.city}, Tamil Nadu</span>
                      </div>
                    </div>
                    
                    {branch.isConfirmed ? (
                      <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                        Active Centre
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200 shrink-0">
                        Details Pending
                      </span>
                    )}
                  </div>

                  {/* Address */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Address
                    </div>
                    {branch.isConfirmed ? (
                      <div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {branch.address}
                        </p>
                        <button
                          type="button"
                          onClick={() => handleCopyAddress(branch)}
                          className="mt-1.5 text-xs text-slate-500 hover:text-orange-600 flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          {copiedId === branch.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-600 font-semibold">Address copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy address</span>
                            </>
                          )}
                        </button>
                      </div>
                    ) : (
                      <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/80 text-xs text-amber-900 space-y-1">
                        <div className="flex items-center gap-1.5 font-semibold">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>Address to be confirmed by client</span>
                        </div>
                        <p className="text-[11px] text-amber-800 leading-relaxed">
                          Branch premises and telephone line are being finalized. Please coordinate appointments via Salem or Karur.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Phone Numbers */}
                  {branch.isConfirmed && branch.phones.length > 0 && (
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Phone
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {branch.phones.map((phone, idx) => (
                          <a
                            key={idx}
                            href={`tel:${phone.replace(/\s+/g, '')}`}
                            className="text-xs font-semibold text-slate-800 hover:text-orange-600 flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200 transition-colors"
                          >
                            <Phone className="w-3 h-3 text-orange-600" />
                            <span>{phone}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Email */}
                  {branch.isConfirmed && branch.email && (
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Email
                      </div>
                      <a
                        href={`mailto:${branch.email}`}
                        className="text-xs font-medium text-slate-700 hover:text-orange-600 flex items-center gap-1.5 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        <span>{branch.email}</span>
                      </a>
                    </div>
                  )}

                  {/* Working Hours */}
                  {branch.isConfirmed && branch.timings && (
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-0.5">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                        <Clock className="w-3.5 h-3.5 text-orange-600" />
                        <span>Working Hours:</span>
                      </div>
                      <div className="pl-5 text-[11px]">
                        <div>{branch.timings.weekdays}</div>
                        {branch.timings.sunday && <div>{branch.timings.sunday}</div>}
                      </div>
                    </div>
                  )}

                </div>

                {/* Card Actions */}
                <div className="pt-4 mt-4 border-t border-slate-100 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    {branch.isConfirmed && branch.phones[0] ? (
                      <a
                        href={`tel:${branch.phones[0].replace(/\s+/g, '')}`}
                        className="py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors text-center"
                      >
                        <Phone className="w-3.5 h-3.5 text-orange-400" />
                        <span>Call Branch</span>
                      </a>
                    ) : (
                      <a
                        href="tel:9843754583"
                        className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors text-center"
                      >
                        <Phone className="w-3.5 h-3.5 text-slate-500" />
                        <span>Enquire (Salem)</span>
                      </a>
                    )}

                    {branch.isConfirmed && branch.googleMapsDirectionsUrl ? (
                      <a
                        href={branch.googleMapsDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors text-center"
                      >
                        <Navigation className="w-3.5 h-3.5 text-slate-500" />
                        <span>Directions</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onBookAtBranch(branch.id)}
                        className="py-2 px-3 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors text-center cursor-pointer"
                      >
                        <span>Book Here</span>
                      </button>
                    )}
                  </div>

                  {branch.isConfirmed && branch.googleMapsEmbedUrl && (
                    <button
                      type="button"
                      onClick={() => setActiveMapBranch(branch)}
                      className={`w-full py-1 text-center text-[11px] font-semibold rounded transition-colors cursor-pointer ${
                        isMapActive
                          ? 'text-orange-600 bg-orange-50'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {isMapActive ? '● Showing on Map Below' : 'Show on Map'}
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Embedded Map Container (Only rendered for confirmed branches with verified embed URL) */}
        {activeMapBranch && activeMapBranch.isConfirmed && activeMapBranch.googleMapsEmbedUrl && (
          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                  Location Map
                </span>
                <h4 className="text-base font-bold text-slate-900 font-heading">
                  {activeMapBranch.name} ({activeMapBranch.city})
                </h4>
              </div>

              {activeMapBranch.googleMapsDirectionsUrl && (
                <a
                  href={activeMapBranch.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-orange-600 hover:text-orange-700 hover:underline flex items-center gap-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Directions in Google Maps</span>
                </a>
              )}
            </div>

            <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden border border-slate-200 bg-slate-200">
              <iframe
                title={`Map of ${activeMapBranch.name}`}
                src={activeMapBranch.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
