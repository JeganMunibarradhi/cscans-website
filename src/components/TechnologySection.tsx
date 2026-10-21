import React from 'react';
import { Maximize, ShieldCheck, Timer, Cpu, Crosshair } from 'lucide-react';
import { TECHNOLOGY_HIGHLIGHTS } from '../data/technology';

export const TechnologySection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Maximize':
        return <Maximize className="w-5 h-5 text-orange-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-orange-600" />;
      case 'Timer':
        return <Timer className="w-5 h-5 text-orange-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-orange-600" />;
      default:
        return <Crosshair className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <section id="technology" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-1.5">
            Imaging Technology
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            State-of-the-Art Imaging Technology
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Engineered for high-clarity anatomical visualization, patient safety, and seamless digital interoperability.
          </p>
        </div>

        {/* 5 Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNOLOGY_HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-2xs">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* 6th Card: Summary callout */}
          <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Diagnostic Standards
              </span>
              <h3 className="text-base sm:text-lg font-bold font-heading">
                ALARA Compliance & Open DICOM
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                All procedures strictly adhere to radiation safety protocols, providing dental practitioners with standardized DICOM datasets ready for implant and orthodontic planning.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
