import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Copy, Check, ExternalLink } from 'lucide-react';
import { RESTAURANT_CONFIG, buildTelUrl } from '../config/restaurant';

export const Location: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_CONFIG.location.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 bg-[#060606] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Location Information Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Find Us in Kamoke</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Bao Di Sajji, <span className="gold-gradient-text">Kamoke</span>
              </h2>

              <p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
                Conveniently located on Punjab&apos;s historic Grand Trunk (GT) Road in Kamoke. Perfect for local food enthusiasts, family dinners, and highway travelers.
              </p>

              {/* Exact Address Box */}
              <div className="mt-6 p-5 rounded-2xl bg-[#121212] border border-amber-500/30 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                      Official Address
                    </span>
                    <p className="text-white text-base font-semibold leading-snug">
                      {RESTAURANT_CONFIG.location.address}
                    </p>
                    <p className="text-xs text-neutral-400 mt-2">
                      Key Landmarks: Opposite HFC · Near New Pizza Bank · Main GT Road
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between">
                  <button
                    onClick={copyAddress}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>

                  <span className="text-[11px] text-neutral-400">Kamoke, Punjab, PK</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {/* Get Directions Button */}
              <a
                href={RESTAURANT_CONFIG.location.mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-black gold-button-gradient shadow-lg hover:shadow-amber-500/20 transition-all text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                <Navigation className="w-4 h-4 text-black" />
                <span>Get Directions in Google Maps</span>
              </a>

              {/* Call Restaurant Button */}
              <a
                href={buildTelUrl(RESTAURANT_CONFIG.contact.phoneCall)}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-amber-500/40 transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                aria-label={`Call restaurant at ${RESTAURANT_CONFIG.contact.phoneDisplay}`}
              >
                <Phone className="w-4 h-4 text-amber-400 stroke-[2]" />
                <span>Call Restaurant</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Area */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-[#121212] shadow-2xl h-[420px] flex flex-col">
              {/* Map Embed Iframe */}
              <iframe
                title="Bao Di Sajji Kamoke Location Map"
                src={RESTAURANT_CONFIG.location.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full flex-1"
              />

              {/* Overlay bar with quick external link */}
              <div className="p-3 bg-[#111111] border-t border-neutral-800 flex items-center justify-between text-xs">
                <span className="text-neutral-400">
                  Main GT Road, Kamoke, Pakistan
                </span>
                <a
                  href={RESTAURANT_CONFIG.location.mapSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium"
                >
                  <span>Open Full Screen Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
