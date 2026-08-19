import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Utensils } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';
import { ambientSound } from '../utils/soundEffects';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    ambientSound.playChime();
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    ambientSound.playChime();
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#140f0c] border-t border-[#d4af37]/20 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5b1322]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#221a15]/80 text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Star className="w-3.5 h-3.5 fill-[#d4af37]" />
            <span>Guest Chronicles</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Words of <span className="gold-gradient-text italic font-serif">Praise</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6"></div>
          <p className="text-sm sm:text-base text-[#ebdcc9]/75 font-light leading-relaxed">
            Reflections from international culinary inspectors, gastronomic critics, and royal patrons.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className={`p-8 rounded-3xl bg-[#1c1511] border transition-all duration-500 flex flex-col justify-between shadow-2xl shadow-black/80 ${
                activeIndex === idx ? 'border-[#d4af37] scale-102 bg-[#221914]' : 'border-[#d4af37]/20 hover:border-[#d4af37]/40'
              }`}
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-6 text-[#d4af37]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-serif italic text-base sm:text-lg text-[#ebdcc9] leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-[#d4af37]/15">
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#d4af37]"
                  />
                  <div>
                    <h4 className="font-serif text-base font-bold text-white leading-tight">
                      {t.author}
                    </h4>
                    <span className="text-[11px] text-[#d4af37] block font-medium">
                      {t.role}
                    </span>
                    <span className="text-[10px] text-[#ebdcc9]/50 block">
                      {t.publication}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#d4af37]/10 flex items-center gap-1.5 text-[11px] text-[#ebdcc9]/70">
                  <Utensils className="w-3 h-3 text-[#d4af37]" />
                  <span>Favorite Dish: <strong className="text-white">{t.dishLoved}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
