import React, { useState } from 'react';
import { 
  Box, 
  Maximize2, 
  Activity, 
  Zap, 
  Smile, 
  Layers, 
  ChevronRight, 
  X,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceAndBook: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceAndBook }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Box':
        return <Box className="w-5 h-5 text-orange-600" />;
      case 'Maximize2':
        return <Maximize2 className="w-5 h-5 text-orange-600" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-orange-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-orange-600" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-orange-600" />;
      default:
        return <Layers className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-1.5">
            Dental & Facial Imaging Services
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Our Diagnostic Imaging Modalities
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Delivering advanced 2D and 3D dental radiography with high clarity, calibrated scale, and rapid digital report delivery.
          </p>
        </div>

        {/* 6 Core Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Icon & Title */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    {service.title}
                  </h3>
                </div>

                {/* Short Readable Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Key Indications list */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Common Uses:
                  </div>
                  <ul className="space-y-1">
                    {service.indications.slice(0, 3).map((ind, idx) => (
                      <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Unobtrusive Learn More & Direct Book */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onSelectServiceAndBook(service.id)}
                  className="px-3.5 py-1.5 rounded-lg bg-orange-50 hover:bg-orange-600 text-orange-700 hover:text-white font-semibold text-xs border border-orange-200 hover:border-orange-600 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book this scan</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Unobtrusive Service Detail Modal */}
      {activeModalService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setActiveModalService(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div 
            className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center">
                  {getServiceIcon(activeModalService.iconName)}
                </div>
                <h3 id="service-modal-title" className="text-xl font-bold text-slate-900 font-heading">
                  {activeModalService.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalService(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Description
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeModalService.fullDescription}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Clinical Indications
              </h4>
              <ul className="space-y-1.5">
                {activeModalService.indications.map((ind, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const sId = activeModalService.id;
                  setActiveModalService(null);
                  onSelectServiceAndBook(sId);
                }}
                className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold shadow-sm cursor-pointer"
              >
                Book This Scan
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
