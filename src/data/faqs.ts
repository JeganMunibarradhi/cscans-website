export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'Do I need an appointment before visiting C SCANS?',
    answer: 'Walk-ins with a prescription or doctor referral slip are welcome at our centres. However, scheduling your scan in advance ensures your preferred time slot and avoids waiting time.'
  },
  {
    question: 'Is any special preparation needed before a dental X-ray or CBCT scan?',
    answer: 'No fasting or special preparation is needed. You will be asked to temporarily remove metallic objects around the head and neck (such as earrings, necklaces, spectacles, hairpins, and removable dental appliances) before the scan to prevent image artifacts.'
  },
  {
    question: 'How long does a typical scan take?',
    answer: 'The scan exposure itself is very fast — typically between 10 and 20 seconds. Including patient positioning and safety checks, most appointments take less than 15 minutes.'
  },
  {
    question: 'How and when will I receive my scan reports?',
    answer: 'Standard 2D dental X-rays are typically available promptly after exposure. Comprehensive 3D CBCT datasets and reports are processed and shared electronically (via WhatsApp or email) and provided as high-quality printouts for your treating clinician.'
  },
  {
    question: 'Is the scan machine comfortable for children and elderly patients?',
    answer: 'Yes. Our scanning equipment features an open-gantry design. Patients remain standing or comfortably seated in an open space, eliminating any feeling of claustrophobia.'
  }
];
