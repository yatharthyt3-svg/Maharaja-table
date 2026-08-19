import React from 'react';
import { Crown, Sparkles, Award, Quote, BookOpen } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ChefShowcase: React.FC = () => {
  return (
    <section id="chef" className="py-24 bg-[#140f0c] border-t border-[#d4af37]/20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Chef Portrait Image with floating Quote */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/35 shadow-2xl shadow-black/90 group">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1000&auto=format&fit=crop&q=80"
                alt="Executive Chef Vikram Singh"
                className="w-full h-[480px] sm:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140f0c] via-transparent to-transparent opacity-70"></div>

              {/* Floating Quote Box */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#1c1511]/95 backdrop-blur-md border-l-4 border-[#d4af37] border-y border-r border-[#d4af37]/20 shadow-xl">
                <Quote className="w-5 h-5 text-[#d4af37] mb-2" />
                <p className="font-serif italic text-sm text-[#ebdcc9] leading-relaxed">
                  &ldquo;Cooking is poetry in motion — each whole spice a lyrical word, each slow-simmered handi an epic verse of Indian royal history.&rdquo;
                </p>
                <div className="mt-2 text-right">
                  <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold">
                    — Master Chef Vikram Singh
                  </span>
                </div>
              </div>
            </div>

            {/* Accolades pill */}
            <div className="absolute -top-4 -left-4 sm:-left-6 px-4 py-2 rounded-xl bg-[#1c1511] border border-[#d4af37]/40 shadow-xl flex items-center gap-2">
              <Award className="w-4 h-4 text-[#d4af37]" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">30+ Years Culinary Mastery</span>
            </div>
          </div>

          {/* Biography Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#221a15]/80 text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Crown className="w-3.5 h-3.5" />
              <span>The Culinary Maestro</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Chef Vikram <span className="gold-gradient-text italic font-serif">Singh</span>
            </h2>

            <div className="w-20 h-[2px] bg-gradient-to-r from-[#d4af37] via-[#aa8624] to-transparent mb-6"></div>

            <p className="text-sm sm:text-base text-[#ebdcc9]/80 leading-relaxed mb-4">
              With more than three decades dedicated to the revival of forgotten Indian culinary manuscripts, Chef Vikram Singh is celebrated as one of the preeminent authorities on Awadhi, Nizami, and Rajput palace gastronomy.
            </p>

            <p className="text-sm sm:text-base text-[#ebdcc9]/80 leading-relaxed mb-6">
              Trained under the master ustaads of Lucknow and the royal khansamas of Jaipur, Chef Vikram brought this ancestral knowledge to New Delhi in 1998, crafting an uncompromising temple of Indian fine dining. Under his visionary leadership, Maharaja&apos;s Table has proudly retained 2 Michelin Stars.
            </p>

            {/* 3 Core Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[#1c1511] border border-[#d4af37]/15">
                <div className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-1">01. Ancestral Roots</div>
                <p className="text-[11px] text-[#ebdcc9]/70 leading-relaxed">
                  Strictly preserving copper handi slow reductions and clay tandoor baking.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1c1511] border border-[#d4af37]/15">
                <div className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-1">02. Purity of Spice</div>
                <p className="text-[11px] text-[#ebdcc9]/70 leading-relaxed">
                  Zero commercial spice blends; 100% single-estate hand-crushed whole spices.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1c1511] border border-[#d4af37]/15">
                <div className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-1">03. Modern Artistry</div>
                <p className="text-[11px] text-[#ebdcc9]/70 leading-relaxed">
                  Precision temperature control and sommelier vintage pairings for modern royalty.
                </p>
              </div>
            </div>

            {/* Signature & Credentials */}
            <div className="pt-4 border-t border-[#d4af37]/15 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-script text-3xl sm:text-4xl text-[#d4af37]">
                  Vikram Singh
                </div>
                <div className="text-xs uppercase tracking-widest text-[#ebdcc9]/60">
                  Chef Patron &amp; Founder
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1c1511] border border-[#d4af37]/25 text-xs text-[#ebdcc9]/80">
                <BookOpen className="w-4 h-4 text-[#d4af37]" />
                <span>Author of <em>&ldquo;Secrets of the Royal Deg&rdquo;</em></span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
