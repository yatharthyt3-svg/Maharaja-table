import React, { useState } from 'react';
import { Crown, Wine, Sparkles, ChevronRight, Check, Shield, Flame } from 'lucide-react';
import { TASTING_COURSES } from '../data/restaurantData';
import { ambientSound } from '../utils/soundEffects';

interface TastingMenuBuilderProps {
  onBookTasting: () => void;
}

export const TastingMenuBuilder: React.FC<TastingMenuBuilderProps> = ({ onBookTasting }) => {
  const [includeWinePairing, setIncludeWinePairing] = useState(true);
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);

  const basePrice = 6500;
  const winePairingPrice = 3800;
  const totalPrice = includeWinePairing ? basePrice + winePairingPrice : basePrice;

  return (
    <section id="tasting" className="py-24 bg-[#18120e] border-t border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#221a15]/80 text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Crown className="w-3.5 h-3.5" />
            <span>Imperial Tasting Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            The 7-Course <span className="gold-gradient-text italic font-serif">Royal Banquet</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6"></div>
          <p className="text-sm sm:text-base text-[#ebdcc9]/75 font-light leading-relaxed">
            A theatrical 3-hour journey designed by Chef Vikram Singh, exploring forgotten royal court recipes paired with rare vintages from our 500-label private cellar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Side: Course Timeline / Stepper */}
          <div className="lg:col-span-7 bg-[#1c1511] p-6 sm:p-8 rounded-3xl border border-[#d4af37]/25 shadow-2xl shadow-black/80">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#d4af37]/15">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Course Sequence (1 to 7)
              </span>
              <span className="text-xs text-[#ebdcc9]/60 font-mono">
                Duration: ~2.5 to 3.0 Hours
              </span>
            </div>

            <div className="space-y-4">
              {TASTING_COURSES.map((course, idx) => (
                <div
                  key={course.courseNumber}
                  onClick={() => {
                    ambientSound.playChime();
                    setActiveCourseIndex(idx);
                  }}
                  className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    activeCourseIndex === idx
                      ? 'bg-[#251b14] border-[#d4af37] shadow-lg shadow-[#d4af37]/10 translate-x-1'
                      : 'bg-[#18120e] border-[#d4af37]/10 hover:border-[#d4af37]/40 text-[#ebdcc9]/70'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3.5">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        activeCourseIndex === idx ? 'bg-[#d4af37] text-[#140f0c]' : 'bg-[#2a2019] text-[#d4af37]'
                      }`}>
                        {course.courseNumber}
                      </div>
                      <div>
                        <h4 className={`font-serif text-base font-bold transition-colors ${
                          activeCourseIndex === idx ? 'text-[#d4af37]' : 'text-white'
                        }`}>
                          {course.name}
                        </h4>
                        <p className="text-xs text-[#ebdcc9]/70 mt-1 leading-relaxed">
                          {course.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sommelier Wine Pairing preview */}
                  <div className="mt-2.5 pt-2 border-t border-[#d4af37]/10 flex items-center gap-2 text-xs text-[#ebdcc9]/80 pl-10">
                    <Wine className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span className="text-[11px] font-light">
                      <strong className="text-[#d4af37] font-medium">Wine Pairing:</strong> {course.pairing}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Banquet Summary, Pricing & Wine Toggle */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="bg-[#1c1511] p-6 sm:p-8 rounded-3xl border border-[#d4af37]/30 shadow-2xl shadow-black/80">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/15 text-[#d4af37] text-[10px] uppercase font-bold tracking-wider mb-4">
                <Sparkles className="w-3 h-3" />
                <span>Royal Gastronomy Pass</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Imperial Banquet Experience
              </h3>
              <p className="text-xs text-[#ebdcc9]/70 mb-6 leading-relaxed">
                Available exclusively for dinner seatings. Vegetarian and Halal tailored courses available upon prior notice.
              </p>

              {/* Inclusions checklist */}
              <div className="space-y-2.5 mb-6 text-xs text-[#ebdcc9]/85">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>7 Full Courses with bespoke molecular creations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Table-side Dhungar live smoke &amp; spice ritual</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Chef Vikram&apos;s signed keepsake recipe scroll</span>
                </div>
              </div>

              {/* Wine Pairing Toggle */}
              <div
                onClick={() => {
                  ambientSound.playChime();
                  setIncludeWinePairing(!includeWinePairing);
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer mb-6 ${
                  includeWinePairing
                    ? 'bg-[#2a1e16] border-[#d4af37] shadow-md shadow-[#d4af37]/20'
                    : 'bg-[#18120e] border-[#d4af37]/20 hover:border-[#d4af37]/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Wine className="w-5 h-5 text-[#d4af37]" />
                    <div>
                      <div className="text-xs font-bold text-white">Grand Cru Sommelier Wine Pairing</div>
                      <div className="text-[10px] text-[#ebdcc9]/60">6 rare vintage pours + Champagne welcome</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-[#d4af37]">+₹3,800</div>
                    <div className="text-[10px] text-[#ebdcc9]/50">{includeWinePairing ? 'Included' : 'Tap to Add'}</div>
                  </div>
                </div>
              </div>

              {/* Total Price Display */}
              <div className="pt-4 border-t border-[#d4af37]/15 flex items-baseline justify-between mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#ebdcc9]/60 block">Price Per Guest</span>
                  <span className="text-[10px] text-[#ebdcc9]/40">Exclusive of applicable taxes</span>
                </div>
                <div className="text-right">
                  <span className="font-serif text-3xl font-bold text-[#d4af37]">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Book Tasting Button */}
              <button
                onClick={() => {
                  ambientSound.playChime();
                  onBookTasting();
                }}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa8624] text-[#140f0c] font-bold text-xs uppercase tracking-[0.2em] shadow-xl shadow-[#d4af37]/25 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Reserve Banquet Tasting</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
