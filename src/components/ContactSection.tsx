import React, { useState } from 'react';
import { Phone, Mail, Clock, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import { BRANCHES_DATA } from '../data/branches';
import { FAQS_DATA } from '../data/faqs';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    branch: 'Salem Branch',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', branch: 'Salem Branch', message: '' });
    }, 4000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-1.5">
            Contact & Enquiries
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Get in Touch
          </h2>
          <p className="text-slate-600 mt-2.5 text-sm sm:text-base leading-relaxed">
            Have questions regarding scan preparation, reports, or appointment scheduling? Reach out to our centres directly.
          </p>
        </div>

        {/* 4 Branch Direct Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {BRANCHES_DATA.map((b) => (
            <div
              key={b.id}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                    {b.city}
                  </span>
                  {b.isConfirmed && (
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Open Today
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  {b.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {b.address}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 space-y-2 text-xs">
                {b.isConfirmed && b.phones.length > 0 ? (
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <a 
                      href={`tel:${b.phones[0].replace(/\s+/g, '')}`}
                      className="font-semibold text-slate-900 hover:text-orange-600 transition-colors"
                    >
                      {b.phones[0]} {b.phones[1] ? `/ ${b.phones[1]}` : ''}
                    </a>
                  </div>
                ) : (
                  <div className="text-xs text-amber-800">
                    Direct phone lines being finalized.
                  </div>
                )}

                {b.isConfirmed && b.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <a 
                      href={`mailto:${b.email}`}
                      className="text-slate-600 hover:text-orange-600 truncate transition-colors"
                    >
                      {b.email}
                    </a>
                  </div>
                )}

                {b.isConfirmed && b.timings && (
                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{b.timings.weekdays}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form & FAQs Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* General Enquiry Form */}
          <div className="lg:col-span-6 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold font-heading mb-1 text-white">
              Send an Online Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-5">
              Leave your details and query. Our team will get back to you promptly.
            </p>

            {submitted ? (
              <div className="p-6 text-center bg-slate-800/80 rounded-xl border border-emerald-500/30 space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Enquiry Submitted</h4>
                <p className="text-xs text-slate-300">
                  Thank you for contacting C SCANS. Our staff will respond to your query shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label htmlFor="enquiry-name" className="block text-slate-300 font-medium mb-1">
                    Your Name *
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="enquiry-phone" className="block text-slate-300 font-medium mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      required
                      placeholder="e.g. 98437 54583"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiry-branch" className="block text-slate-300 font-medium mb-1">
                      Branch
                    </label>
                    <select
                      id="enquiry-branch"
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-orange-500 text-sm"
                    >
                      {BRANCHES_DATA.map((b) => (
                        <option key={b.id} value={b.name}>
                          {b.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="enquiry-message" className="block text-slate-300 font-medium mb-1">
                    Message / Question *
                  </label>
                  <textarea
                    id="enquiry-message"
                    rows={3}
                    required
                    placeholder="How can we assist you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Patient FAQs */}
          <div className="lg:col-span-6 space-y-3">
            <div className="mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Common Patient Questions
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mt-0.5">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-2.5">
              {FAQS_DATA.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50/60"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 hover:text-orange-600 flex items-center justify-between gap-3 transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-150 ${
                          isOpen ? 'rotate-180 text-orange-600' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
