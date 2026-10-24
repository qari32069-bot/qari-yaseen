import React from 'react';
import { Sparkles, MapPin, Phone, Layers, ShieldCheck } from 'lucide-react';
import { RESTAURANT_CONFIG, buildTelUrl } from '../config/restaurant';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#070707] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Side */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl">
              <img
                src="/src/assets/images/sajji_platter_presentation_1792828682816.jpg"
                alt="Bao Di Sajji culinary experience"
                className="w-full h-[420px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Floating Highlight Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/85 backdrop-blur-md border border-amber-500/30 text-xs">
                <span className="text-amber-400 font-bold block mb-1">
                  MAIN GT ROAD · KAMOKE
                </span>
                <p className="text-neutral-300 leading-snug">
                  Opposite HFC, near New Pizza Bank. A landmark stop for authentic sajji lovers travelling across Punjab.
                </p>
              </div>
            </div>

            {/* Decorative Gold Accent Frame */}
            <div className="hidden sm:block absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-amber-500/40 rounded-tl-2xl pointer-events-none" />
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-amber-500/40 rounded-br-2xl pointer-events-none" />
          </div>

          {/* Text & Brand Story Side */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>About The Brand</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              The Taste of{' '}
              <span className="gold-gradient-text">World Unique Sajji</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              Welcome to Bao Di Sajji, located on Main GT Road in Kamoke. Explore eight distinctive sajji flavours in a welcoming food destination designed for lovers of rich, memorable taste.
            </p>

            {/* 4 Brand Pillars (Zero-Pill Discipline) */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#111111] border border-neutral-800 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white">8 Distinctive Flavours</h3>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  From traditional Masala and Black Pepper to rich Karemi, Cheezy, and fiery Pare Pare.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#111111] border border-neutral-800 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white">Recognisable Local Brand</h3>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Kamoke&apos;s proud sajji identity, known for consistency, quality meats, and memorable seasoning.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#111111] border border-neutral-800 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white">Main GT Road Access</h3>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Prime, convenient location opposite HFC near New Pizza Bank for easy family dining or travel takeaway.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#111111] border border-neutral-800 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white">Convenient Contact</h3>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Direct call and WhatsApp assistance for pre-orders, takeaway pickups, and seating inquiries.
                </p>
              </div>
            </div>

            {/* Quick action strip */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={buildTelUrl(RESTAURANT_CONFIG.contact.phoneCall)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-black gold-button-gradient shadow-lg hover:shadow-amber-500/20 transition-all text-xs sm:text-sm"
              >
                <Phone className="w-4 h-4 stroke-[2.5]" />
                <span>Call Bao Di Sajji: {RESTAURANT_CONFIG.contact.phoneDisplay}</span>
              </a>

              <a
                href="#location"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 transition-colors text-xs sm:text-sm"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>View Kamoke Location</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
