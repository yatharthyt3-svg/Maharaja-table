import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { ambientSound } from '../utils/soundEffects';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hall' | 'dishes' | 'bar' | 'private'>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredGallery = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (item: GalleryItem) => {
    ambientSound.playChime();
    setLightboxItem(item);
  };

  const handleNext = () => {
    if (!lightboxItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex(i => i.id === lightboxItem.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setLightboxItem(GALLERY_ITEMS[nextIndex]);
  };

  const handlePrev = () => {
    if (!lightboxItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex(i => i.id === lightboxItem.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setLightboxItem(GALLERY_ITEMS[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-[#18120e] border-t border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#221a15]/80 text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Poetry</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            The Royal <span className="gold-gradient-text italic font-serif">Sanctuary</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6"></div>
          <p className="text-sm sm:text-base text-[#ebdcc9]/75 font-light leading-relaxed">
            A glimpse into the palatial architecture, theatrical plating, and intimate private dining salons of Maharaja&apos;s Table.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'hall', label: 'Grand Dining Hall' },
            { id: 'dishes', label: 'Culinary Masterpieces' },
            { id: 'bar', label: 'Cellar & Bar' },
            { id: 'private', label: 'Private Salons' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                ambientSound.playChime();
                setActiveCategory(cat.id as typeof activeCategory);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#d4af37] text-[#140f0c] shadow-lg shadow-[#d4af37]/25'
                  : 'bg-[#1c1511] text-[#ebdcc9]/70 hover:text-white border border-[#d4af37]/15'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-[#d4af37]/20 shadow-xl bg-[#1c1511] ${
                idx === 0 && activeCategory === 'all' ? 'sm:col-span-2 sm:row-span-2 h-96 sm:h-[480px]' : 'h-72'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140f0c] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Hover overlay button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                <div className="w-12 h-12 rounded-full bg-[#d4af37] text-[#140f0c] flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>

              {/* Title and Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                <h4 className="font-serif text-lg font-bold text-white mb-1 group-hover:text-[#d4af37] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[#ebdcc9]/70 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300">
          
          {/* Close Button */}
          <button
            onClick={() => setLightboxItem(null)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-[#1c1511] border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#140f0c] transition-all"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1c1511]/80 border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#140f0c] transition-all"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1c1511]/80 border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#140f0c] transition-all"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-2xl max-h-[70vh]">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="max-h-[68vh] w-auto object-contain mx-auto"
              />
            </div>
            <div className="text-center mt-4 max-w-xl">
              <h3 className="font-serif text-2xl font-bold text-white">{lightboxItem.title}</h3>
              <p className="text-xs sm:text-sm text-[#ebdcc9]/80 mt-1">{lightboxItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
