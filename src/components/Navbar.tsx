import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onBookScan: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookScan }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Compare', href: '#compare' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Locations', href: '#locations' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
        : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand — place logo at public/logo.png */}
          <a 
            href="#hero" 
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg"
          >
          <img
          src="/cscans.png"
          alt="C SCANS Dental & Facial Imaging Centre"
          className="h-10 w-auto max-w-[120px] sm:h-12 sm:max-w-[150px] object-contain shrink-0"
          onError={(e) => {
          console.error("C SCANS logo could not be loaded:", e.currentTarget.src);
          }}
          />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                C SCANS
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-normal mt-0.5">
                Dental &amp; Facial Imaging Centre
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (5 clear items) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-orange-600 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Single Primary Action: Book a Scan */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onBookScan}
              className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm shadow-sm hover:shadow transition-all duration-150 flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Scan</span>
            </button>
          </div>

          {/* Mobile & Tablet Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onBookScan}
              className="px-3 py-1.5 rounded-lg bg-orange-600 text-white text-xs font-bold flex items-center gap-1 shadow-sm"
              aria-label="Book a Scan"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-5 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-orange-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                handleNavClick();
                onBookScan();
              }}
              className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Scan</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
