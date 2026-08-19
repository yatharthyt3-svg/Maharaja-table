import React from 'react';
import { Crown, Sparkles, Clock, MapPin, Wine, Flame, Eye } from 'lucide-react';
import { SIGNATURE_DISHES } from '../data/restaurantData';
import { ambientSound } from '../utils/soundEffects';

interface SignatureDishesProps {
  onSelectDish: (dishName: string) => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ onSelectDish }) => {
  return (
    <section id="signature" className="py-24 bg-[#18120e] border-t border-[#d4af37]/15 relative">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4af37]/5 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#221a15]/80 text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Masterpiece Creations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Our Signature <span className="gold-gradient-text italic font-serif">Plates</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6"></div>
          <p className="text-sm sm:text-base text-[#ebdcc9]/75 font-light leading-relaxed">
            Each signature dish represents months of historical research, bespoke hand-ground spices, and meticulous multi-stage slow cooking in copper deghs and live clay tandoors.
          </p>
        </div>

        {/* 3 Masterpiece Dish Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {SIGNATURE_DISHES.map((dish, index) => (
            <div
              key={dish.id}
              className="group relative rounded-2xl overflow-hidden bg-[#1c1511] border border-[#d4af37]/25 shadow-2xl shadow-black/80 hover:border-[#d4af37]/70 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1511] via-[#1c1511]/30 to-transparent"></div>

                {/* Prestige Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#140f0c]/85 backdrop-blur-md border border-[#d4af37]/40 text-[#d4af37] text-[10px] uppercase font-bold tracking-widest">
                  <Crown className="w-3 h-3 text-[#d4af37]" />
                  <span>Signature #{index + 1}</span>
                </div>

                {/* Price Pill */}
                <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8624] text-[#140f0c] text-xs font-extrabold tracking-wider shadow-lg">
                  {dish.price}
                </div>

                {/* Cooking time indicator */}
                <div className="absolute bottom-3 left-4 flex items-center gap-1 text-[11px] text-[#ebdcc9]/90 bg-[#140f0c]/70 px-2.5 py-1 rounded-md backdrop-blur-sm border border-[#d4af37]/20">
                  <Clock className="w-3 h-3 text-[#d4af37]" />
                  <span>{dish.cookingTime}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-[#d4af37] font-semibold tracking-widest uppercase block mb-1">
                    {dish.tagline}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#ebdcc9]/70 leading-relaxed mb-4">
                    {dish.desc}
                  </p>
                </div>

                {/* Details Breakdown */}
                <div className="pt-4 border-t border-[#d4af37]/15 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-[#ebdcc9]/80">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span className="font-light">{dish.origin}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#ebdcc9]/80">
                    <Wine className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span><strong className="text-white font-medium">Sommelier Pairing:</strong> {dish.winePairing}</span>
                  </div>

                  {/* Spices tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5 items-center">
                    <Flame className="w-3 h-3 text-[#d4af37]" />
                    {dish.keySpices.map((spice) => (
                      <span
                        key={spice}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#2a2019] text-[#ebdcc9]/75 border border-[#d4af37]/15"
                      >
                        {spice}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Inspect Button */}
                <button
                  onClick={() => {
                    ambientSound.playChime();
                    onSelectDish(dish.name);
                  }}
                  className="mt-6 w-full py-2.5 rounded-xl border border-[#d4af37]/40 hover:bg-[#d4af37] hover:text-[#140f0c] text-[#d4af37] text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <Eye className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                  <span>View Recipe &amp; History</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
