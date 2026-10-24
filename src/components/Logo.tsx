import React from 'react';
import { RESTAURANT_CONFIG } from '../config/restaurant';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  // If the owner supplied an image logo file in config, render it cleanly
  if (RESTAURANT_CONFIG.logoUrl) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <img
          src={RESTAURANT_CONFIG.logoUrl}
          alt={`${RESTAURANT_CONFIG.name} Logo`}
          className={
            size === 'sm'
              ? 'h-10 w-auto object-contain'
              : size === 'lg'
              ? 'h-24 w-auto object-contain'
              : 'h-16 w-auto object-contain'
          }
        />
        {showSubtitle && (
          <div className="flex flex-col">
            <span className="font-display font-bold text-white tracking-wider text-base md:text-lg">
              {RESTAURANT_CONFIG.name}
            </span>
            <span className="text-xs text-[#eab308] tracking-widest font-medium uppercase">
              {RESTAURANT_CONFIG.tagline}
            </span>
          </div>
        )}
      </div>
    );
  }

  // Authentic, luxury Pakistani gold & black culinary brand emblem
  const dim = size === 'sm' ? 44 : size === 'lg' ? 96 : 64;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <svg
        width={dim}
        height={dim}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        role="img"
        aria-label="Bao Di Sajji Brand Emblem"
      >
        <defs>
          {/* Metallic Gold Gradients */}
          <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff3a8" />
            <stop offset="35%" stopColor="#eab308" />
            <stop offset="70%" stopColor="#ca8a04" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>

          <linearGradient id="fireGlow" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </linearGradient>

          <radialGradient id="darkCenter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1f1807" />
            <stop offset="85%" stopColor="#0a0a0a" />
            <stop offset="100%" stopColor="#050505" />
          </radialGradient>
        </defs>

        {/* Outer Golden Notched Border Ring */}
        <circle cx="60" cy="60" r="58" stroke="url(#goldRing)" strokeWidth="2.5" />
        <circle cx="60" cy="60" r="54" stroke="#ca8a04" strokeWidth="0.75" strokeDasharray="3 3" />

        {/* Inner Dark Backdrop */}
        <circle cx="60" cy="60" r="51" fill="url(#darkCenter)" stroke="url(#goldRing)" strokeWidth="1.5" />

        {/* Traditional Crossed Skewers */}
        <line x1="32" y1="88" x2="88" y2="32" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
        <line x1="88" y1="88" x2="32" y2="32" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />

        {/* Fire Embers / Hearth Flame Icon */}
        <path
          d="M60 22C64 30 70 36 67 44C65 49 61 51 60 55C59 51 55 49 53 44C50 36 56 30 60 22Z"
          fill="url(#fireGlow)"
        />
        <path
          d="M60 32C62 37 65 40 63 45C62 48 60 50 60 52C60 50 58 48 57 45C55 40 58 37 60 32Z"
          fill="#fef08a"
        />

        {/* Crown / Heritage Crest */}
        <path
          d="M44 48L47 43L60 47L73 43L76 48L60 53L44 48Z"
          fill="url(#goldRing)"
        />

        {/* Center Brand Text: BAO DI SAJJI */}
        <text
          x="60"
          y="69"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="11.5"
          fontWeight="900"
          letterSpacing="1.5"
          fontFamily="system-ui, sans-serif"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}
        >
          BAO DI SAJJI
        </text>

        {/* Urdu Script Tagline: باؤ دی سجی */}
        <text
          x="60"
          y="83"
          textAnchor="middle"
          fill="#facc15"
          fontSize="10"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          باؤ دی سجی
        </text>

        {/* Bottom Banner Ribbon */}
        <rect x="22" y="93" width="76" height="15" rx="3" fill="#171206" stroke="url(#goldRing)" strokeWidth="1" />
        <text
          x="60"
          y="103.5"
          textAnchor="middle"
          fill="#eab308"
          fontSize="7"
          fontWeight="800"
          letterSpacing="1.2"
          fontFamily="system-ui, sans-serif"
        >
          WORLD UNIQUE SAJJI
        </text>

        {/* Little decorative stars */}
        <circle cx="28" cy="100.5" r="1.5" fill="#facc15" />
        <circle cx="92" cy="100.5" r="1.5" fill="#facc15" />
      </svg>

      {showSubtitle && (
        <div className="flex flex-col leading-tight">
          <span className="font-display font-extrabold text-white tracking-wide text-base md:text-lg">
            {RESTAURANT_CONFIG.name}
          </span>
          <span className="text-[11px] md:text-xs text-[#eab308] font-medium tracking-wider uppercase">
            {RESTAURANT_CONFIG.tagline}
          </span>
          <span className="text-[10px] text-neutral-400 font-light">
            Kamoke · GT Road
          </span>
        </div>
      )}
    </div>
  );
};
