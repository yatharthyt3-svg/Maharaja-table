import React, { useState } from 'react';
import { Crown, Sparkles, Users, Wine, Check, ArrowRight, Mail } from 'lucide-react';
import { EVENT_PACKAGES, RESTAURANT_INFO } from '../data/restaurantData';
import { ambientSound } from '../utils/soundEffects';

interface PrivateEventsSectionProps {
  onInquire: (packageTitle: string) => void;
}

export const PrivateEventsSection: React.FC<PrivateEventsSectionProps> = ({ onInquire }) => {
  return (
    <section id="events" className="py-24 bg-[#140f0c] border-t border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#221a15]/80 text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Crown className="w-3.5 h-3.5" />
            <span>Exclusive Banquets</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Private Dining &amp; <span className="gold-gradient-text italic font-serif">Royal Events</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6"></div>
          <p className="text-sm sm:text-base text-[#ebdcc9]/75 font-light leading-relaxed">
            From intimate diplomatic dinners in The Emperor&apos;s Vault to grand imperial wedding receptions for up to 300 guests.
          </p>
        </div>

        {/* 3 Event Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {EVENT_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="p-8 rounded-3xl bg-[#1c1511] border border-[#d4af37]/25 hover:border-[#d4af37]/70 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between shadow-2xl shadow-black/90 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#d4af37] px-3 py-1 rounded-full bg-[#d4af37]/15">
                    {pkg.capacity}
                  </span>
                  <span className="text-xs text-[#ebdcc9]/60 font-mono">
                    Starting {pkg.priceStarting}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                  {pkg.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#ebdcc9]/70 leading-relaxed mb-6">
                  {pkg.desc}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8 pt-4 border-t border-[#d4af37]/15">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#ebdcc9]/85">
                      <div className="w-4 h-4 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Button */}
              <button
                onClick={() => {
                  ambientSound.playChime();
                  onInquire(pkg.title);
                }}
                className="w-full py-3 rounded-xl bg-[#251b14] hover:bg-[#d4af37] text-[#d4af37] hover:text-[#140f0c] border border-[#d4af37]/30 hover:border-[#d4af37] font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md"
              >
                <span>Inquire For Event</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Private Dining Concierge Banner */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#201510] via-[#2a1b14] to-[#1a120e] border border-[#d4af37]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="font-serif text-2xl font-bold text-white mb-2">
              Bespoke Banquets &amp; Curated Menus
            </h4>
            <p className="text-xs sm:text-sm text-[#ebdcc9]/75 leading-relaxed">
              Our dedicated royal events concierge collaborates directly with you and Chef Vikram Singh to tailor every minute detail, floral arrangement, and vintage selection.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={`mailto:${RESTAURANT_INFO.eventsEmail}?subject=Private%20Dining%20Inquiry%20-%20Maharaja's%20Table`}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8624] text-[#140f0c] text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform"
            >
              <Mail className="w-4 h-4 text-[#140f0c]" />
              <span>Email Events Concierge</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
