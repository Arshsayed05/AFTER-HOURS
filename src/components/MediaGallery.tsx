import React, { useState, useEffect } from 'react';
import {
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { MEDIA_GALLERY } from '../config/clubData';
import { GalleryItem } from '../types';

export const MediaGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    'All' | 'Arena' | 'Tournaments' | 'Highlights' | 'Behind The Scenes'
  >('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Arena', 'Tournaments', 'Highlights', 'Behind The Scenes'] as const;

  const filteredItems =
    activeCategory === 'All'
      ? MEDIA_GALLERY
      : MEDIA_GALLERY.filter((item) => item.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;

      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  const currentItem: GalleryItem | null =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-ah-red" />
              <span className="font-mono text-xs text-ah-silver uppercase tracking-widest">
                CINEMATIC SHOWCASE & ARENA ARCHIVE
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              MEDIA <span className="text-ah-red text-glow-crimson">GALLERY.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-ah-muted mt-2 max-w-xl">
              Photographs, arena environments, broadcast operations, and behind-the-scenes moments captured across AFTER HOURS productions.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-sm bg-[#111114] border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                type="button"
                className={`px-3 py-1.5 rounded-sm font-heading font-bold text-xs tracking-wider uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-ah-red text-white shadow-[0_0_12px_rgba(255,23,56,0.4)]'
                    : 'text-ah-silver hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative h-64 bg-[#111114] border border-white/10 hover:border-ah-red/60 rounded-sm overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,23,56,0.2)] esports-cut-sm"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2 py-0.5 rounded bg-black/70 border border-white/15 font-mono text-[10px] text-ah-silver font-semibold uppercase tracking-wider backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              {/* Center Zoom Hover Indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <div className="w-12 h-12 rounded-full bg-ah-red/90 text-white flex items-center justify-center shadow-[0_0_20px_#FF1738] transform scale-75 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-3 right-3 z-10">
                <h4 className="font-heading font-bold text-sm text-white group-hover:text-ah-red transition-colors line-clamp-1">
                  {item.title}
                </h4>
                {item.timestamp && (
                  <span className="font-mono text-[10px] text-ah-muted block mt-0.5">
                    {item.timestamp}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 select-none">
          {/* Close Button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 p-2 text-ah-silver hover:text-white bg-black/60 hover:bg-white/10 border border-white/20 rounded-full transition-all"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-ah-red" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) =>
                prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
              );
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 hover:bg-ah-red/80 text-white border border-white/15 transition-all"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) =>
                prev !== null ? (prev + 1) % filteredItems.length : null
              );
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 hover:bg-ah-red/80 text-white border border-white/15 transition-all"
            aria-label="Next item"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Media Content */}
          <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center">
            <div className="relative max-h-[70vh] w-auto overflow-hidden rounded-sm border border-white/10 shadow-2xl bg-black">
              <img
                src={currentItem.src}
                alt={currentItem.title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="w-full mt-4 text-center">
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="font-mono text-xs text-ah-red uppercase tracking-wider font-bold">
                  {currentItem.category}
                </span>
                <span className="text-white/20">•</span>
                <span className="font-mono text-xs text-ah-muted">
                  {activeLightboxIndex! + 1} / {filteredItems.length}
                </span>
              </div>
              <h3 className="font-heading font-black text-xl text-white">
                {currentItem.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-ah-silver mt-1 max-w-xl mx-auto">
                {currentItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
