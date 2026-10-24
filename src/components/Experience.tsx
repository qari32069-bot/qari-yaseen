import React from 'react';
import { Star, Flame, Utensils, Award, HeartHandshake } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurant';

export const Experience: React.FC = () => {
  const standards = [
    {
      icon: Flame,
      title: 'Artisanal Hearth Roasting',
      description: 'Slow-cooked over open wood charcoal embers to ensure crispy seasoned skin and juicy, tender meat inside.',
    },
    {
      icon: Utensils,
      title: '8 Handcrafted Marinades',
      description: 'From rich creamy infusions to robust cracked black pepper, every variation is prepared with culinary care.',
    },
    {
      icon: Award,
      title: 'Pure Premium Ingredients',
      description: 'Handpicked whole chickens, authentic whole spices, and rich butter with zero artificial shortcuts.',
    },
    {
      icon: HeartHandshake,
      title: 'Warm Punjabi Hospitality',
      description: 'Dedicated to welcoming every family, guest, and traveler stopping in Kamoke on Main GT Road.',
    },
  ];

  return (
    <section className="py-20 bg-[#090909] relative border-y border-neutral-900 overflow-hidden">
      {/* Subtle gold radiance */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          {/* 5-Star Visual Emblem */}
          <div className="flex items-center justify-center gap-1.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]"
              />
            ))}
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            A 5-Star <span className="gold-gradient-text">Sajji Experience</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-light leading-relaxed text-balance">
            Our gold standard of excellence: delivering rich aroma, deep smoky flavour, and warm hospitality to every guest in Kamoke.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#121212] border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {s.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quality Commitment Standard Note (Clear & Non-fabricated) */}
        <div className="mt-10 text-center">
          <p className="text-xs text-neutral-400 italic">
            * &ldquo;5-Star Sajji Experience&rdquo; reflects Bao Di Sajji&apos;s brand quality charter, recipe discipline, and dedication to guest satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};
