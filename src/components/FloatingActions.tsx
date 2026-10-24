import React from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';
import { RESTAURANT_CONFIG, buildTelUrl, buildWhatsAppUrl } from '../config/restaurant';

export const FloatingActions: React.FC = () => {
  return (
    <aside
      aria-label="Quick mobile contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-amber-900/40 px-3 py-2 shadow-2xl"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={buildTelUrl(RESTAURANT_CONFIG.contact.phoneCall)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-black gold-button-gradient shadow text-xs whitespace-nowrap active:scale-95 transition-transform"
          aria-label="Call restaurant"
        >
          <Phone className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={buildWhatsAppUrl(RESTAURANT_CONFIG.contact.whatsappNumber)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-600/50 shadow text-xs whitespace-nowrap active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href={RESTAURANT_CONFIG.location.mapSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-neutral-900 text-neutral-300 border border-neutral-700 hover:text-amber-400 active:scale-95 transition-transform"
          aria-label="Get directions on Google Maps"
          title="Directions"
        >
          <Navigation className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};
