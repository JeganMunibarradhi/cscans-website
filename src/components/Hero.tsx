
import React from 'react';
import {
  Calendar,
  ArrowRight,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Users,
} from 'lucide-react';
import { BRANCHES_DATA } from '../data/branches';

interface HeroProps {
  onBookScan: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookScan,
  onExploreServices,
}) => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-white via-slate-50 to-orange-50/40 pt-8 pb-12 sm:pt-10 sm:pb-14 lg:py-10"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">

          {/* Hero content */}
          <div className="space-y-5 text-center lg:col-span-7 lg:text-left">

            <div className="mx-auto inline-flex max-w-full items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3.5 py-2 text-left text-xs font-semibold leading-relaxed text-slate-700 sm:text-sm lg:mx-0">
              <span className="h-2 w-2 shrink-0 rounded-full bg-orange-500" />
              <span>
                Advanced Dental Imaging
                <span className="mx-1 text-orange-500">·</span>
                Accurate Diagnosis
              </span>
            </div>

            <h1 className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[clamp(2.5rem,3.5vw,3.65rem)] xl:text-6xl">
              Advanced{' '}
              <span className="text-orange-600">2D &amp; 3D</span>
              <br className="hidden xl:block" /> Dental Imaging Solutions
            </h1>

            <p className="mx-auto max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0">
              Precise CBCT, OPG, cephalometric and dental imaging to support
              accurate diagnosis and better treatment planning.
            </p>

            {/* Trust points */}
            <div className="grid grid-cols-2 gap-4 pt-1 text-left sm:grid-cols-4 lg:max-w-2xl">
              {[
                { icon: CheckCircle2, title: 'Precise Imaging', detail: 'Clearer insights' },
                { icon: ShieldCheck, title: 'Modern Technology', detail: 'Patient-focused care' },
                { icon: Zap, title: 'Efficient Process', detail: 'Streamlined workflow' },
                { icon: Users, title: 'Dental Support', detail: 'For clinicians & patients' },
              ].map(({ icon: Icon, title, detail }) => (
                <div key={title} className="flex items-start gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-bold leading-5 text-slate-800 sm:text-sm">
                      {title}
                    </p>
                    <p className="text-[11px] leading-4 text-slate-500 sm:text-xs">
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-center lg:justify-start">
              <button
                type="button"
                onClick={onBookScan}
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/15 transition hover:-translate-y-0.5 hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                <Calendar className="h-4 w-4" />
                Book a Scan
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:border-orange-200 hover:bg-orange-50"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4 text-orange-600" />
              </button>
            </div>

            {/* Branches */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 lg:justify-start">
              <span className="mr-1 inline-flex items-center gap-1.5 text-xs font-bold text-slate-700">
                <MapPin className="h-4 w-4 text-orange-600" />
                Our Centres
              </span>

              {BRANCHES_DATA.map((branch) => (
                <span
                  key={branch.id}
                  className="rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  {branch.city}
                </span>
              ))}
            </div>
          </div>

          {/* Axeos machine image */}
          <div className="relative mx-auto w-full max-w-xl lg:col-span-5 lg:max-w-none">
            <div className="relative overflow-hidden rounded-2xl border border-white bg-slate-100 shadow-xl shadow-slate-900/10 sm:rounded-3xl">
              <img
                src="/hero-cbct.png"
                alt="Axeos extraoral dental imaging system by Dentsply Sirona"
                className="h-64 w-full object-cover sm:h-80 lg:h-[min(48vh,400px)] xl:h-[420px]"
                loading="eager"
                fetchPriority="high"
                onError={(event) => {
                  console.error('Could not load Axeos image:', event.currentTarget.src);
                }}  
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-transparent p-4 pt-12 sm:p-5 sm:pt-14">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/20 text-orange-400">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">
                      Dental &amp; Facial Imaging
                    </p>
                    <p className="mt-0.5 text-xs leading-5 text-slate-300">
                      CBCT · OPG · Cephalometric · Dental X-rays
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-3 text-center text-xs text-slate-500">
              Advanced imaging services for patients and dental professionals
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
