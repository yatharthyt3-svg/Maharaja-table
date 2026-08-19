import React, { useMemo } from 'react';
import { Sparkles, Star, ChevronDown, UtensilsCrossed, Calendar, Award } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ambientSound } from '../utils/soundEffects';

interface HeroProps {
  onReserveClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReserveClick }) => {
  // Generate deterministic particles for ambient golden floating effect
  const particles = useMemo(() => {
    return Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      left: `${(i * 3.7) % 100}%`,
      top: `${(i * 7.3) % 100}%`,
      size: `${2 + (i % 4)}px`,
      duration: `${7 + (i % 6)}s`,
      delay: `${(i * 0.4) % 5}s`,
    }));
  }, []);

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#140f0c]">
      {/* Background with luxury gradient and subtle architectural pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&auto=format&fit=crop&q=80"
          alt="Maharaja's Table Atmosphere"
          className="w-full h-full object-cover opacity-25 scale-105 filter brightness-75 contrast-125"
        />
        {/* Radial dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#140f0c]/85 via-[#140f0c]/70 to-[#140f0c]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5b1322]/25 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-transparent to-transparent"></div>
      </div>

      {/* Floating Gold Sparkle Particles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-[#d4af37] animate-pulse"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: 0.35,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 8px #d4af37',
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Prestige Badges */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#221a15]/80 backdrop-blur-md flex items-center gap-2 text-xs text-[#d4af37] shadow-lg shadow-[#d4af37]/10">
            <Star className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
            <span className="font-semibold tracking-[0.2em] uppercase">Two Michelin Stars · 2026</span>
          </div>

          <div className="px-3.5 py-1.5 rounded-full border border-[#d4af37]/20 bg-[#221a15]/50 backdrop-blur-md flex items-center gap-1.5 text-xs text-[#ebdcc9]/80">
            <Award className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="tracking-wider">World Culinary Awards Top 10</span>
          </div>
        </div>

        {/* Sub-headline cursive script */}
        <div className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#d4af37] mb-2 font-normal">
          {RESTAURANT_INFO.tagline}
        </div>

        {/* Main Display Title */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
          Experience <span className="gold-gradient-text italic font-serif">India&apos;s</span> Royal Heritage
        </h1>

        {/* Subtitle description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#ebdcc9]/80 font-light leading-relaxed mb-10">
          An opulent culinary journey through the royal courts of Awadh, Rajasthan, and the Malabar Coast. Hand-ground spices, 36-hour slow infusions, and rare 500-label vintages.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <button
            id="btn-hero-reserve"
            onClick={() => {
              ambientSound.playChime();
              onReserveClick();
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa8624] text-[#140f0c] font-bold text-sm uppercase tracking-[0.2em] shadow-xl shadow-[#d4af37]/30 hover:shadow-2xl hover:shadow-[#d4af37]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <Calendar className="w-4 h-4 text-[#140f0c] group-hover:rotate-12 transition-transform" />
            <span>Reserve Your Table</span>
          </button>

          <a
            id="btn-hero-menu"
            href="#menu"
            onClick={() => ambientSound.playChime()}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#d4af37]/60 bg-[#1a1410]/60 hover:bg-[#d4af37]/15 text-[#d4af37] font-semibold text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:border-[#d4af37] flex items-center justify-center gap-2"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#d4af37]" />
            <span>Explore Royal Menu</span>
          </a>
        </div>

        {/* Live Service Pill & Schedule */}
        <div className="inline-flex items-center gap-6 px-6 py-3 rounded-2xl bg-[#1a1410]/70 border border-[#d4af37]/20 backdrop-blur-md text-xs text-[#ebdcc9]/70">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 -ml-4.5"></span>
            <span className="text-white font-medium">Accepting Dinner Reservations</span>
          </div>
          <div className="hidden sm:block w-[1px] h-4 bg-[#d4af37]/30"></div>
          <div className="hidden sm:block">
            <span className="text-[#d4af37]">Lunch:</span> 12:00–2:30 PM · <span className="text-[#d4af37]">Dinner:</span> 7:00–11:30 PM
          </div>
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-[#d4af37]/70 hover:text-[#d4af37] transition-colors"
        onClick={() => ambientSound.playChime()}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll to Discover</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
