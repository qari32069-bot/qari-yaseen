import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { RESTAURANT_CONFIG, buildTelUrl, buildWhatsAppUrl } from '../config/restaurant';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/95 backdrop-blur-md border-b border-amber-900/30 shadow-2xl py-2.5'
          : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract: Zone 1 (Brand) - Zone 2 (Nav Links) - Zone 3 (Primary Action) */}
        <div className="flex items-center justify-between gap-8 h-12">
          {/* Zone 1: Brand Wordmark & Emblem */}
          <a
            href="#home"
            className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md"
            aria-label={`${RESTAURANT_CONFIG.name} Homepage`}
          >
            <Logo size="sm" showSubtitle={false} />
            <div className="flex flex-col whitespace-nowrap shrink-0">
              <span className="font-display font-extrabold text-white tracking-wider text-base sm:text-lg">
                {RESTAURANT_CONFIG.name}
              </span>
              <span className="text-[10px] text-amber-400 font-semibold tracking-widest uppercase">
                {RESTAURANT_CONFIG.tagline}
              </span>
            </div>
          </a>

          {/* Zone 2: Clean 5 single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <a
              href="#flavours"
              className="whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
            >
              Our Flavours
            </a>
            <a
              href="#about"
              className="whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
            >
              About Us
            </a>
            <a
              href="#gallery"
              className="whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
            >
              Gallery
            </a>
            <a
              href="#location"
              className="whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
            >
              Location
            </a>
            <a
              href="#contact"
              className="whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action (Click to Call) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={buildTelUrl(RESTAURANT_CONFIG.contact.phoneCall)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-black gold-button-gradient rounded-full shadow-lg hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              aria-label={`Call ${RESTAURANT_CONFIG.name} at ${RESTAURANT_CONFIG.contact.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
              <span>Call: {RESTAURANT_CONFIG.contact.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2 shrink-0">
            <a
              href={buildTelUrl(RESTAURANT_CONFIG.contact.phoneCall)}
              className="p-2 text-black gold-button-gradient rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              aria-label={`Call ${RESTAURANT_CONFIG.contact.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 stroke-[2.5]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 text-neutral-300 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-black/95 backdrop-blur-xl border-t border-amber-900/40 p-6 flex flex-col justify-between sm:hidden z-40 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-5 pt-4 text-lg font-medium text-neutral-200">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors py-2 border-b border-neutral-800"
            >
              Home
            </a>
            <a
              href="#flavours"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors py-2 border-b border-neutral-800 flex items-center justify-between"
            >
              <span>Our Flavours</span>
              <span className="text-xs px-2 py-0.5 rounded bg-amber-400/20 text-amber-300">8 Varieties</span>
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors py-2 border-b border-neutral-800"
            >
              About Us
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors py-2 border-b border-neutral-800"
            >
              Food Gallery
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors py-2 border-b border-neutral-800"
            >
              Location & Map
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors py-2"
            >
              Contact & TikTok
            </a>
          </nav>

          <div className="flex flex-col gap-3 pb-8">
            <a
              href={buildTelUrl(RESTAURANT_CONFIG.contact.phoneCall)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-black gold-button-gradient shadow-lg"
            >
              <Phone className="w-4 h-4 stroke-[2.5]" />
              <span>Call Now — {RESTAURANT_CONFIG.contact.phoneDisplay}</span>
            </a>
            <a
              href={buildWhatsAppUrl(RESTAURANT_CONFIG.contact.whatsappNumber)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-emerald-300 bg-emerald-950/60 border border-emerald-700/50 hover:bg-emerald-900/60 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Menu Inquiry</span>
            </a>
            <p className="text-center text-xs text-neutral-400 pt-2">
              Main GT Road, Kamoke · Opposite HFC
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
