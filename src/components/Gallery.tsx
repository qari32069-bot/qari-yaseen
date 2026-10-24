import React, { useState, useEffect } from 'react';
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { RESTAURANT_CONFIG, GalleryItem } from '../config/restaurant';

export const Gallery: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const images = RESTAURANT_CONFIG.gallery;

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % images.length);
    }
  };

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + images.length) % images.length);
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex]);

  return (
    <section id="gallery" className="py-20 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
            <Camera className="w-4 h-4 text-amber-400" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Food <span className="gold-gradient-text">Gallery</span>
          </h2>
          <p className="mt-3 text-base text-neutral-400 font-light">
            Sights of slow-roasted golden poultry, authentic woodfire embers, and generous Pakistani platters.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
              aria-label={`Open photo: ${img.title}`}
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Tag / Category */}
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/70 text-amber-300 border border-amber-500/30">
                  {img.tag}
                </span>
              </div>

              {/* Zoom hover indicator */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-amber-400" />
              </div>

              {/* Text caption on card */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-display text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                  {img.title}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-2 mt-1 font-light">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Presentation Disclosure */}
        <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-neutral-400">
          <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Gallery features presentation and illustrative photography capturing authentic Pakistani sajji traditions.</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          {/* Top Bar with counter & close */}
          <div className="flex items-center justify-between text-white shrink-0 z-10">
            <span className="text-sm font-semibold tracking-wider text-amber-400">
              {activeLightboxIndex + 1} / {images.length}
            </span>
            <button
              onClick={closeLightbox}
              type="button"
              className="p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Image Container with Prev/Next buttons */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={showPrev}
              type="button"
              className="absolute left-2 sm:left-6 p-3 rounded-full bg-black/70 hover:bg-black text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 z-10"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={images[activeLightboxIndex].image}
              alt={images[activeLightboxIndex].title}
              className="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl border border-amber-500/20"
            />

            <button
              onClick={showNext}
              type="button"
              className="absolute right-2 sm:right-6 p-3 rounded-full bg-black/70 hover:bg-black text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 z-10"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Captions */}
          <div
            className="text-center max-w-2xl mx-auto shrink-0 z-10 pb-2"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="font-display text-lg sm:text-xl font-bold text-white">
              {images[activeLightboxIndex].title}
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              {images[activeLightboxIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
