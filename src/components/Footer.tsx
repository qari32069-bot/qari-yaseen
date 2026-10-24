import React from 'react';
import { Phone, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { RESTAURANT_CONFIG, buildTelUrl, buildWhatsAppUrl } from '../config/restaurant';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-neutral-900 text-neutral-400 pt-16 pb-24 md:pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Logo size="md" showSubtitle={true} />
            <p className="mt-4 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm font-light">
              Kamoke&apos;s destination for world-unique sajji flavours, authentically charcoal-roasted on Main GT Road.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={RESTAURANT_CONFIG.social.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium border border-neutral-800 transition-colors"
                aria-label="Follow Bao Di Sajji on TikTok"
              >
                <svg className="w-4 h-4 fill-current text-[#fe2c55]" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.31 0 .61.05.9.14V9.06a6.47 6.47 0 0 0-.9-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.41a8.38 8.38 0 0 0 3.76.9V5.88a4.84 4.84 0 0 1-.01.81z" />
                </svg>
                <span>{RESTAURANT_CONFIG.social.tiktokName}</span>
              </a>

              <a
                href={buildWhatsAppUrl(RESTAURANT_CONFIG.contact.whatsappNumber)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-emerald-400 text-xs font-medium border border-neutral-800 transition-colors"
                aria-label="Chat with Bao Di Sajji on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#flavours" className="hover:text-amber-400 transition-colors">
                  Our 8 Flavours
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  Food Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  Location & Map
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Ordering Details */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Visit & Call
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{RESTAURANT_CONFIG.location.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={buildTelUrl(RESTAURANT_CONFIG.contact.phoneCall)}
                  className="text-white hover:text-amber-400 transition-colors font-medium"
                >
                  {RESTAURANT_CONFIG.contact.phoneDisplay}
                </a>
              </div>
              <p className="text-neutral-400 text-xs pt-1">
                Opposite HFC, near New Pizza Bank · Kamoke, Pakistan
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            &copy; {currentYear} {RESTAURANT_CONFIG.name}. All rights reserved. &bull; {RESTAURANT_CONFIG.tagline}
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-neutral-400 hover:text-amber-400 transition-colors p-1"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
