import React from 'react';
import { Phone, Navigation, Flame, Star, ArrowDown } from 'lucide-react';
import { RESTAURANT_CONFIG, buildTelUrl } from '../config/restaurant';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#060606]"
    >
      {/* Background cinematic media with layered atmospheric overlays */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src="/src/assets/images/hero_sajji_roast_1792828683064.jpg"
          alt="Bao Di Sajji signature chicken sajji roasting over natural embers"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          loading="eager"
          fetchPriority="high"
        />
        {/* Measured dark gradient scrims for maximum legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/75 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-[#080808]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Brand Emblem Crest in Hero */}
        <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
          <Logo size="lg" showSubtitle={false} />
        </div>

        {/* 5-Star Experience Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full bg-amber-950/40 border border-amber-600/40 text-amber-300 text-xs font-semibold tracking-wider uppercase">
          <div className="flex items-center gap-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-neutral-400">·</span>
          <span>{RESTAURANT_CONFIG.ratingTheme}</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight max-w-4xl text-balance">
          BAO DI SAJJI —{' '}
          <span className="gold-gradient-text drop-shadow-[0_2px_12px_rgba(234,179,8,0.35)]">
            WORLD UNIQUE SAJJI
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="mt-5 text-base sm:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed text-balance">
          Discover unforgettable sajji flavours, rich spices, irresistible aromas, and a taste worth coming back for.
        </p>

        {/* Three Requested Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md sm:max-w-none">
          {/* Button 1: Explore Our Flavours */}
          <a
            href="#flavours"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 hover:text-white border border-amber-500/30 hover:border-amber-400/60 rounded-xl transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <Flame className="w-4 h-4 text-amber-400" />
            <span>Explore Our Flavours</span>
          </a>

          {/* Button 2: Call Now — 03090111218 */}
          <a
            href={buildTelUrl(RESTAURANT_CONFIG.contact.phoneCall)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-extrabold text-black gold-button-gradient rounded-xl shadow-xl hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
            aria-label={`Call Now at ${RESTAURANT_CONFIG.contact.phoneDisplay}`}
          >
            <Phone className="w-4 h-4 stroke-[2.5]" />
            <span>Call Now — {RESTAURANT_CONFIG.contact.phoneDisplay}</span>
          </a>

          {/* Button 3: Get Directions */}
          <a
            href={RESTAURANT_CONFIG.location.mapSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 hover:text-white border border-neutral-700 hover:border-amber-500/50 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <Navigation className="w-4 h-4 text-amber-400" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Quick Location & Taste Markers Strip */}
        <div className="mt-12 pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-neutral-200 font-medium">8 Distinctive Flavours</span>
          </div>
          <span className="hidden sm:inline text-neutral-700">·</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>Opposite HFC, Main GT Road, Kamoke</span>
          </div>
          <span className="hidden sm:inline text-neutral-700">·</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>Wood-Fire & Charcoal Roasted</span>
          </div>
        </div>

        {/* Subtle scroll cue */}
        <a
          href="#flavours"
          className="mt-8 text-neutral-500 hover:text-amber-400 transition-colors p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-full"
          aria-label="Scroll to flavours"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
