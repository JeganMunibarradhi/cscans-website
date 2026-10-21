import React from 'react';
import { Box, HeartHandshake, MapPin, Stethoscope, Clock, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_POINTS } from '../data/whyChooseUs';

export const WhyChooseSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Box':
        return <Box className="w-5 h-5 text-orange-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-orange-600" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-orange-600" />;
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5 text-orange-600" />;
      default:
        return <Clock className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-1.5">
            Diagnostic Reliability
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Why Choose C SCANS
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Positioned as a dedicated maxillofacial imaging partner for patients and dental specialists.
          </p>
        </div>

        {/* 5 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_POINTS.map((point) => (
            <div
              key={point.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-orange-200 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                  {getIcon(point.iconName)}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                <span>Verified Diagnostic Standard</span>
              </div>
            </div>
          ))}

          {/* 6th Card: Simple Booking prompt card */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Patient Convenience
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                Salem • Karur • Dindigul
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Walk-ins with doctor referrals are welcomed at all active centres, or schedule online to secure your preferred scan slot without wait time.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100">
              <a
                href="#locations"
                className="text-xs font-semibold text-orange-600 hover:text-orange-700 hover:underline flex items-center gap-1"
              >
                <span>Find your nearest centre</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
