import React from 'react';
import { X, Sparkles, Flame, Wine, MapPin, CheckCircle2, ShieldAlert, Award } from 'lucide-react';
import { MenuItem } from '../types';

interface DishDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onReserveForDish: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  item,
  onClose,
  onReserveForDish,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
      
      <div className="relative w-full max-w-2xl bg-[#1c1511] rounded-3xl border border-[#d4af37]/40 shadow-2xl shadow-black/90 overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#140f0c]/80 border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#140f0c] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#241c16]">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1511] via-[#1c1511]/40 to-transparent"></div>

          {/* Hindi Name */}
          {item.hindiName && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-[#140f0c]/85 border border-[#d4af37]/30 text-[#d4af37] font-serif text-sm">
              {item.hindiName}
            </div>
          )}

          {/* Price */}
          <div className="absolute bottom-4 right-4 px-4 py-1.5 rounded-full bg-[#d4af37] text-[#140f0c] font-black text-sm tracking-wider shadow-xl">
            {item.formattedPrice}
          </div>

          {/* Origin Badge */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#140f0c]/80 text-xs text-[#ebdcc9] border border-[#d4af37]/20">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{item.originRegion}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {item.dietary.map((d) => (
                <span
                  key={d}
                  className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#2a2019] text-[#d4af37] border border-[#d4af37]/20 font-medium"
                >
                  {d}
                </span>
              ))}
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              {item.name}
            </h3>

            <p className="text-xs sm:text-sm text-[#ebdcc9]/80 leading-relaxed">
              {item.desc}
            </p>
          </div>

          {/* Spice Level & Chef Note */}
          <div className="p-4 rounded-2xl bg-[#231a14] border border-[#d4af37]/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#d4af37]" />
                Spice Harmony
              </span>
              <div className="flex items-center gap-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span
                    key={i}
                    className={`w-3.5 h-3.5 rounded-full ${
                      i < item.spiceLevel ? 'bg-amber-500 shadow-sm shadow-amber-500/50' : 'bg-stone-700'
                    }`}
                  />
                ))}
                <span className="text-xs text-[#ebdcc9]/60 ml-2">
                  {item.spiceLevel === 1 ? 'Mild & Fragrant' : item.spiceLevel === 2 ? 'Medium Aromatic' : item.spiceLevel === 3 ? 'Spicy & Bold' : 'Royal Fiery'}
                </span>
              </div>
            </div>

            {item.chefNote && (
              <div className="pt-2 border-t border-[#d4af37]/10 text-xs text-[#ebdcc9]/90 italic">
                &ldquo;{item.chefNote}&rdquo;
                <span className="text-[10px] block not-italic text-[#d4af37] font-semibold mt-1">
                  — Chef Vikram Singh
                </span>
              </div>
            )}
          </div>

          {/* Ingredients list */}
          <div>
            <span className="text-xs uppercase tracking-widest text-[#ebdcc9]/60 font-semibold block mb-2">
              Key Heirloom Ingredients
            </span>
            <div className="flex flex-wrap gap-2">
              {item.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="text-xs px-3 py-1 rounded-lg bg-[#18120e] text-[#ebdcc9]/90 border border-[#d4af37]/20"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Sommelier Pairing */}
          <div className="p-4 rounded-2xl bg-[#18120e] border border-[#d4af37]/20 flex items-start gap-3">
            <Wine className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
            <div>
              <strong className="text-xs font-bold text-white block uppercase tracking-wider">
                Sommelier Recommended Vintage
              </strong>
              <span className="text-xs text-[#d4af37] font-medium">
                {item.pairingWine}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-[#d4af37]/15 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-[#d4af37]/30 text-xs text-[#ebdcc9] hover:bg-white/5 transition-colors uppercase tracking-wider"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onReserveForDish();
              }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8624] text-[#140f0c] text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-[#d4af37]/20"
            >
              Reserve Table For This Dish
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
