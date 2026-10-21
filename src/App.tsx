import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CompareSection } from './components/CompareSection';
import { ServicesSection } from './components/ServicesSection';
//import { TechnologySection } from './components/TechnologySection';
//import { WhyChooseSection } from './components/WhyChooseSection';

import { BranchesSection } from './components/BranchesSection';
import { GallerySection } from './components/GallerySection';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';

export function App() {
  const [selectedBranchForAppointment, setSelectedBranchForAppointment] = useState<string | undefined>(undefined);
  const [selectedServiceForAppointment, setSelectedServiceForAppointment] = useState<string | undefined>(undefined);

  const scrollToBooking = (branchId?: string, serviceId?: string) => {
    if (branchId) setSelectedBranchForAppointment(branchId);
    if (serviceId) setSelectedServiceForAppointment(serviceId);
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar onBookScan={() => scrollToBooking()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onBookScan={() => scrollToBooking()}
          onExploreServices={scrollToServices}
        />

        {/* 3. About C SCANS */}
        <AboutSection
          onBookScan={() => scrollToBooking()}
        />

         {/* 6. Why Choose C SCANS }
       <WhyChooseSection />

        {/* 7. What's the Difference — 2D vs 3D Comparison */}
        <CompareSection />

        {/* 4. Services Section */}
        <ServicesSection
          onSelectServiceAndBook={(serviceId) => scrollToBooking(undefined, serviceId)}
        />

        

       

        {/* 8. Branch Locations */}
        <BranchesSection
          onBookAtBranch={(branchId) => scrollToBooking(branchId)}
        />

        {/* 9. Centre Gallery */}
        <GallerySection />

        {/* 10. Appointment Booking */}
        <AppointmentSection
          preselectedBranchId={selectedBranchForAppointment}
          preselectedServiceId={selectedServiceForAppointment}
        />

        {/* 11. Contact & FAQs */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer onBookScan={() => scrollToBooking()} />

      {/* Floating Action Controls */}
      <FloatingWidgets />
    </div>
  );
}

export default App;
