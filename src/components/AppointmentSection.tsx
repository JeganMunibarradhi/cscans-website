
import React, { useState } from 'react';
import {
  Calendar,
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  MessageCircle,
  AlertCircle,
} from 'lucide-react';

import { BRANCHES_DATA } from '../data/branches';
import { SERVICES_DATA } from '../data/services';
import { AppointmentFormData } from '../types';

interface AppointmentSectionProps {
  preselectedBranchId?: string;
  preselectedServiceId?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  preselectedBranchId,
  preselectedServiceId,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    patientName: '',
    mobile: '',
    email: '',
    branch: preselectedBranchId || 'salem',
    scanRequired: preselectedServiceId || 'cbct-scan',
    preferredDate: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update the form if a branch or service is selected elsewhere.
  React.useEffect(() => {
    if (preselectedBranchId) {
      setFormData((prev) => ({
        ...prev,
        branch: preselectedBranchId,
      }));
    }
  }, [preselectedBranchId]);

  React.useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({
        ...prev,
        scanRequired: preselectedServiceId,
      }));
    }
  }, [preselectedServiceId]);

  const selectedBranch =
    BRANCHES_DATA.find((branch) => branch.id === formData.branch) ||
    BRANCHES_DATA[0];

  const selectedService = SERVICES_DATA.find(
    (service) => service.id === formData.scanRequired
  );

  // Validate the form and display the WhatsApp handoff screen.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    const cleanMobile = formData.mobile.replace(/\D/g, '');

    if (cleanMobile.length < 10) {
      setErrorMessage('Please enter a valid mobile number with at least 10 digits.');
      return;
    }

    setIsSubmitting(true);

    // This only advances the interface. It does not save a booking.
    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 300);
  };

  // Prepare the message for the selected branch's WhatsApp number.
  const getWhatsAppMessageUrl = () => {
    const scanTitle = selectedService?.title || 'Dental Scan';

    const text = `Hello C SCANS,

I would like to request a scan appointment.

Patient Name: ${formData.patientName}
Mobile: ${formData.mobile}
Email: ${formData.email || 'Not provided'}
Branch: ${selectedBranch.name}
Scan Required: ${scanTitle}
Preferred Date: ${formData.preferredDate || 'To be discussed'}
Additional Notes: ${formData.message || 'None'}

Please contact me to confirm availability and the appointment time.`;

    const targetNumber = selectedBranch.whatsapp;

    if (!targetNumber) {
      return '';
    }

    return `https://wa.me/${targetNumber.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setErrorMessage('');

    setFormData({
      patientName: '',
      mobile: '',
      email: '',
      branch: preselectedBranchId || 'salem',
      scanRequired: preselectedServiceId || 'cbct-scan',
      preferredDate: '',
      message: '',
    });
  };

  return (
    <section
      id="booking"
      className="border-t border-slate-100 bg-slate-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-xl text-center sm:mb-12">
          <div className="mb-1.5 text-xs font-bold uppercase tracking-wider text-orange-600">
            Book Your Scan
          </div>

          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Schedule a Scan Appointment
          </h2>

          <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:text-base">
            Fill in your details to request an appointment at your preferred
            C SCANS centre.
          </p>
        </div>

        {/* Booking card */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-10">

          {isSubmitted ? (
            /* WhatsApp handoff screen */
            <div className="animate-in space-y-4 py-6 text-center fade-in duration-200 sm:py-8">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <CheckCircle2 className="h-7 w-7" />
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-slate-900 sm:text-2xl">
                  Complete Your Booking Request
                </h3>

                <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-slate-600">
                  Thank you,{' '}
                  <strong className="text-slate-900">
                    {formData.patientName}
                  </strong>
                  ! Your appointment details are ready to send to our{' '}
                  <strong className="text-slate-900">
                    {selectedBranch.name}
                  </strong>
                  . Click the WhatsApp button below to share your request with
                  the centre team. Your appointment is not confirmed until
                  the team responds.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-3 pt-3 sm:flex-row">
                {getWhatsAppMessageUrl() ? (
                  <a
                    href={getWhatsAppMessageUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 sm:w-auto"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Send Appointment Request on WhatsApp</span>
                  </a>
                ) : (
                  <div
                    role="alert"
                    className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3 text-left text-sm text-amber-900"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>
                      A WhatsApp number has not been configured for this
                      branch. Please contact the centre directly.
                    </span>
                  </div>
                )}

                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full cursor-pointer rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
                >
                  Book Another Scan
                </button>
              </div>

              <p className="pt-2 text-xs leading-relaxed text-slate-500">
                Clicking the WhatsApp button opens a pre-filled message.
                You must press Send in WhatsApp for the centre to receive it.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Validation error */}
              {errorMessage && (
                <div
                  role="alert"
                  className="flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-800"
                >
                  <AlertCircle className="h-4 w-4 shrink-0 text-rose-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Patient name and mobile */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="patientName"
                    className="mb-1 block text-xs font-bold text-slate-700"
                  >
                    Patient Full Name <span className="text-orange-600">*</span>
                  </label>

                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />

                    <input
                      id="patientName"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.patientName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          patientName: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-300 py-2.5 pl-9 pr-3 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mobile"
                    className="mb-1 block text-xs font-bold text-slate-700"
                  >
                    Mobile Number <span className="text-orange-600">*</span>
                  </label>

                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />

                    <input
                      id="mobile"
                      type="tel"
                      autoComplete="tel"
                      required
                      placeholder="e.g. 98437 54583"
                      value={formData.mobile}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mobile: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-300 py-2.5 pl-9 pr-3 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                </div>
              </div>

              {/* Email and branch */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-xs font-bold text-slate-700"
                  >
                    Email Address{' '}
                    <span className="font-normal text-slate-400">
                      (Optional)
                    </span>
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />

                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-300 py-2.5 pl-9 pr-3 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="branch"
                    className="mb-1 block text-xs font-bold text-slate-700"
                  >
                    Preferred Branch <span className="text-orange-600">*</span>
                  </label>

                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />

                    <select
                      id="branch"
                      required
                      value={formData.branch}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          branch: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    >
                      {BRANCHES_DATA.map((branch) => (
                        <option key={branch.id} value={branch.id}>
                          {branch.name} ({branch.city})
                          {!branch.isConfirmed ? ' — Inquiries Open' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Scan type and preferred date */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="scanRequired"
                    className="mb-1 block text-xs font-bold text-slate-700"
                  >
                    Scan Required <span className="text-orange-600">*</span>
                  </label>

                  <select
                    id="scanRequired"
                    required
                    value={formData.scanRequired}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        scanRequired: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  >
                    {SERVICES_DATA.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title} — {service.shortDescription}
                      </option>
                    ))}

                    <option value="doctor-referral">
                      As per Doctor's Prescription (Not sure)
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="preferredDate"
                    className="mb-1 block text-xs font-bold text-slate-700"
                  >
                    Preferred Date{' '}
                    <span className="font-normal text-slate-400">
                      (Optional)
                    </span>
                  </label>

                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />

                    <input
                      id="preferredDate"
                      type="date"
                      min={new Date().toLocaleDateString('en-CA')}
                      value={formData.preferredDate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredDate: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                </div>
              </div>

              {/* Additional details */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-xs font-bold text-slate-700"
                >
                  Doctor Referral Note or Additional Details{' '}
                  <span className="font-normal text-slate-400">
                    (Optional)
                  </span>
                </label>

                <textarea
                  id="message"
                  rows={3}
                  placeholder="e.g. Referred by Dr. Selvam for upper wisdom tooth or implant evaluation..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 text-base font-bold text-white shadow-sm transition-all duration-150 hover:bg-orange-700 hover:shadow disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Calendar className="h-5 w-5" />
                  <span>
                    {isSubmitting ? 'Preparing...' : 'Continue to WhatsApp'}
                  </span>
                </button>
              </div>

              <p className="pt-1 text-center text-xs text-slate-500">
                Your details will be placed into a WhatsApp message for the
                selected centre. The request is sent only when you press Send
                in WhatsApp. Walk-ins with doctor prescription slips are also
                welcome at our centres.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
