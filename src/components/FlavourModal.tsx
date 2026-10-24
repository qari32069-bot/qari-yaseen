import React, { useEffect } from 'react';
import { X, Phone, MessageCircle, Star, Sparkles, AlertCircle } from 'lucide-react';
import { MenuItem, RESTAURANT_CONFIG, buildTelUrl, buildWhatsAppUrl } from '../config/restaurant';

interface FlavourModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const FlavourModal: React.FC<FlavourModalProps> = ({ item, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const orderMessage = `Assalam-o-Alaikum Bao Di Sajji! I would like to order / inquire about the ${item.name}.`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="flavour-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#111111] border border-amber-500/40 rounded-2xl overflow-hidden shadow-2xl shadow-black/90 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header / Media */}
        <div className="relative h-64 sm:h-72 w-full bg-neutral-900 shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/60" />

          {/* Close button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-3 right-3 p-2 rounded-full bg-black/70 hover:bg-black text-neutral-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Presentation label */}
          {item.isPresentationImagery && (
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm text-[11px] text-amber-200/90 border border-amber-500/20">
              <AlertCircle className="w-3 h-3 text-amber-400" />
              <span>Presentation Imagery</span>
            </div>
          )}

          {/* Badge */}
          {item.badge && (
            <div className="absolute bottom-4 left-4 px-3 py-1 rounded-md bg-amber-500 text-black text-xs font-black tracking-wide uppercase shadow-md">
              {item.badge}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                {item.category} · {item.spiceLevel}
              </span>
              <h2
                id="flavour-modal-title"
                className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-0.5"
              >
                {item.name}
              </h2>
              <p className="text-xs text-neutral-400 font-medium italic mt-0.5">
                {item.tagline}
              </p>
            </div>

            {/* Optional Price Field */}
            {item.price !== null && (
              <div className="text-right shrink-0">
                <span className="text-xs text-neutral-400 block">Price</span>
                <span className="font-display text-xl font-bold text-amber-300">
                  Rs. {item.price}
                </span>
              </div>
            )}
          </div>

          <p className="text-neutral-300 text-sm leading-relaxed mt-4">
            {item.description}
          </p>

          <div className="mt-5 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-300 space-y-2">
            <div className="flex items-center gap-2 font-medium text-amber-300">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Traditional Sajji Preparation at Bao Di Sajji</span>
            </div>
            <p className="text-neutral-400 leading-normal">
              Slow-roasted around charcoal hearths on Main GT Road, Kamoke. Pairs ideally with fragrant spiced pulao rice, traditional mint raita, or fresh oven-baked naan.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={buildTelUrl(RESTAURANT_CONFIG.contact.phoneCall)}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-black gold-button-gradient shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 stroke-[2.5]" />
              <span>Call to Order ({RESTAURANT_CONFIG.contact.phoneDisplay})</span>
            </a>

            <a
              href={buildWhatsAppUrl(RESTAURANT_CONFIG.contact.whatsappNumber, orderMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-600/40 hover:bg-emerald-900/60 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
