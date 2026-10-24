import React, { useState } from 'react';
import { Phone, MessageCircle, AlertCircle, Info, Flame } from 'lucide-react';
import { RESTAURANT_CONFIG, MenuItem, buildTelUrl, buildWhatsAppUrl } from '../config/restaurant';
import { FlavourModal } from './FlavourModal';

export const Flavours: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<MenuItem | null>(null);

  const categories = ['All', 'Traditional', 'Creamy & Rich', 'Zesty & Spicy'];

  const filteredItems =
    selectedCategory === 'All'
      ? RESTAURANT_CONFIG.menu
      : RESTAURANT_CONFIG.menu.filter((item) => item.category === selectedCategory);

  return (
    <section id="flavours" className="py-20 bg-[#0a0a0a] relative">
      {/* Subtle top divider and gold ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>The Signature Selection</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight text-balance">
            8 Unique Flavours.{' '}
            <span className="gold-gradient-text">One Legendary Taste.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed text-balance">
            Every sajji is prepared with time-honoured charcoal roasting methods and infused with distinctive signature marinades.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-neutral-900/90 border border-neutral-800 rounded-xl max-w-fit mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Flavours Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const waOrderMsg = `Assalam-o-Alaikum Bao Di Sajji! I would like to order or ask about the ${item.name}.`;

            return (
              <div
                key={item.id}
                className="group relative flex flex-col bg-[#121212] rounded-2xl border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 overflow-hidden"
              >
                {/* Media Container */}
                <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/40" />

                  {/* Presentation Imagery Label */}
                  {item.isPresentationImagery && (
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded bg-black/75 backdrop-blur-sm text-[10px] text-amber-200/80 border border-amber-500/20">
                      <AlertCircle className="w-2.5 h-2.5 text-amber-400" />
                      <span>Presentation Imagery</span>
                    </div>
                  )}

                  {/* Badge */}
                  {item.badge && (
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-amber-500 text-black text-[10px] font-extrabold uppercase tracking-wide">
                      {item.badge}
                    </span>
                  )}

                  {/* Quick Detail View overlay button */}
                  <button
                    onClick={() => setActiveModalItem(item)}
                    type="button"
                    className="absolute bottom-2.5 right-2.5 p-1.5 rounded-full bg-neutral-900/80 hover:bg-black text-neutral-300 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    aria-label={`View full details of ${item.name}`}
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata (Zero-Pill Discipline) */}
                    <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium mb-1">
                      <span className="text-amber-400">{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.spiceLevel}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-amber-400/80 font-medium italic mt-0.5">
                      {item.tagline}
                    </p>

                    <p className="mt-2.5 text-xs sm:text-sm text-neutral-300 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom section with optional price & CTA */}
                  <div className="mt-5 pt-3 border-t border-neutral-800/80">
                    {/* Optional price field (hidden when null) */}
                    {item.price !== null && (
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-neutral-400">Price</span>
                        <span className="font-display font-bold text-amber-300 text-base">
                          Rs. {item.price}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-2">
                      {/* Call to Order Button */}
                      <a
                        href={buildTelUrl(RESTAURANT_CONFIG.contact.phoneCall)}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-black gold-button-gradient shadow transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                        aria-label={`Call to order ${item.name}`}
                      >
                        <Phone className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Call to Order</span>
                      </a>

                      {/* WhatsApp Inquiry Button */}
                      <a
                        href={buildWhatsAppUrl(RESTAURANT_CONFIG.contact.whatsappNumber, waOrderMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-emerald-400 border border-neutral-700 hover:border-emerald-500/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                        aria-label={`Inquire about ${item.name} via WhatsApp`}
                        title="Inquire via WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Authenticity & Pricing */}
        <div className="mt-12 text-center text-xs text-neutral-400 max-w-2xl mx-auto p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/70">
          <p>
            Dish prices vary based on current daily poultry market rates and whole or half sajji cuts. Call{' '}
            <a
              href={buildTelUrl(RESTAURANT_CONFIG.contact.phoneCall)}
              className="text-amber-400 font-semibold underline hover:text-amber-300"
            >
              {RESTAURANT_CONFIG.contact.phoneDisplay}
            </a>{' '}
            or message us on WhatsApp for fresh daily pricing and advance family orders.
          </p>
        </div>
      </div>

      {/* Flavour Modal for Deep View */}
      <FlavourModal item={activeModalItem} onClose={() => setActiveModalItem(null)} />
    </section>
  );
};
