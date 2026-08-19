import React from 'react';
import { Award as AwardIcon, Star, Trophy, Wine, Crown, Shield } from 'lucide-react';
import { AWARDS } from '../data/restaurantData';

export const AwardsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Star':
        return <Star className="w-8 h-8 text-[#d4af37] fill-[#d4af37]" />;
      case 'Trophy':
        return <Trophy className="w-8 h-8 text-[#d4af37]" />;
      case 'Wine':
        return <Wine className="w-8 h-8 text-[#d4af37]" />;
      case 'Crown':
        return <Crown className="w-8 h-8 text-[#d4af37]" />;
      default:
        return <Shield className="w-8 h-8 text-[#d4af37]" />;
    }
  };

  return (
    <section className="py-20 bg-[#18120e] border-t border-[#d4af37]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] block mb-2">
            Global Distinctions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Awards &amp; <span className="gold-gradient-text italic font-serif">Accolades</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4"></div>
        </div>

        {/* 5 Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {AWARDS.map((award) => (
            <div
              key={award.id}
              className="p-6 rounded-2xl bg-[#1c1511] border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center justify-between group shadow-xl"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#251b14] border border-[#d4af37]/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#d4af37]/10 transition-all duration-300 shadow-md">
                  {getIcon(award.iconName)}
                </div>

                <h3 className="font-serif text-base font-bold text-white mb-1 group-hover:text-[#d4af37] transition-colors">
                  {award.title}
                </h3>

                <div className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider mb-2">
                  {award.organization}
                </div>

                <p className="text-[11px] text-[#ebdcc9]/60 leading-relaxed mb-4">
                  {award.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#d4af37]/10 w-full text-[10px] text-[#ebdcc9]/40 font-mono tracking-wider">
                {award.years}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
