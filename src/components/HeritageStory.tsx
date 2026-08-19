import React, { useState } from 'react';
import { Crown, Sparkles, Compass, ShieldCheck, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ambientSound } from '../utils/soundEffects';

export const HeritageStory: React.FC = () => {
  const [activeSpice, setActiveSpice] = useState(0);

  const SPICE_HERITAGE = [
    {
      name: "Pampore Saffron (Kesar)",
      origin: "Pampore Valleys, Kashmir",
      desc: "Pure Grade-1 Mongra stigmas harvested during dawn frost, delivering rich floral aromatics and a deep golden saffron hue to our biryanis and shahi gravies.",
      aromaNote: "Honeyed floral & earthy sweetness"
    },
    {
      name: "Tellicherry Black Pepper",
      origin: "Malabar Coast, Kerala",
      desc: "Sun-ripened jumbo peppercorns grown organically in Kerala's rain-soaked hills, offering complex citrus warmth and piquant bite.",
      aromaNote: "Pine zest, woodsmoke & pungent heat"
    },
    {
      name: "Wild Himalayan Guchhi (Morels)",
      origin: "Pir Panjal Peaks, Kashmir",
      desc: "Elusive wild morels hand-foraged in high-altitude pine forests, prized for their rich, woodsy umami and spongy sauce-holding texture.",
      aromaNote: "Deep forest truffle & roasted hazelnut"
    },
    {
      name: "Idukki Green Cardamom (Elaichi)",
      origin: "Cardamom Hills, Western Ghats",
      desc: "Handpicked 8mm whole green pods yielding high volatile essential oils for our royal desserts, kehwa tea, and meat marinades.",
      aromaNote: "Eucalyptus, sweet mint & floral spice"
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#140f0c] border-t border-[#d4af37]/10 overflow-hidden">
      {/* Decorative radial background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#5b1322]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Atmospheric Image with Floating 28+ Years Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl shadow-black/90 group">
              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1000&auto=format&fit=crop&q=80"
                alt="Maharaja's Table Dining Room & Heritage"
                className="w-full h-[460px] sm:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140f0c] via-transparent to-transparent opacity-80"></div>
              
              {/* Image inner decorative border */}
              <div className="absolute inset-3 rounded-xl border border-[#d4af37]/20 pointer-events-none"></div>

              {/* Bottom Quote Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#1a1410]/90 backdrop-blur-md border border-[#d4af37]/20 text-xs text-[#ebdcc9]/90 italic">
                &ldquo;True royal hospitality is not merely in the luxury of the decor, but in the reverence with which every single grain of spice is treated.&rdquo;
              </div>
            </div>

            {/* Floating 28+ Years Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-[#d4af37] via-[#b8962e] to-[#6b1a2a] p-[1px] rounded-2xl shadow-2xl shadow-black/80 animate-float">
              <div className="bg-[#1a1410] px-6 py-5 rounded-2xl flex flex-col items-center text-center border border-[#d4af37]/40">
                <span className="font-serif text-3xl sm:text-4xl font-black text-[#d4af37] leading-none">
                  28+
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#ebdcc9] font-bold mt-1">
                  Years of Royalty
                </span>
                <span className="text-[9px] text-[#d4af37]/80 tracking-wider mt-0.5">
                  Est. New Delhi 1998
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Royal Heritage Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#221a15]/60 text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Crown className="w-3.5 h-3.5" />
              <span>Our Royal Story</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              A Legacy of <span className="gold-gradient-text italic font-serif">Imperial</span> Indian Hospitality
            </h2>

            <div className="w-20 h-[2px] bg-gradient-to-r from-[#d4af37] via-[#aa8624] to-transparent mb-6"></div>

            <p className="font-serif italic text-lg sm:text-xl text-[#d4af37] mb-4 leading-relaxed">
              &ldquo;Every plate we serve is a culinary resurrection of 18th-century royal Mughal court banquets and Rajput palace feasting.&rdquo;
            </p>

            <p className="text-sm sm:text-base text-[#ebdcc9]/80 leading-relaxed mb-4">
              Founded in 1998 in the historic heart of New Delhi by Master Chef Vikram Singh, Maharaja&apos;s Table was conceived to preserve the intricate, time-honored techniques of royal kitchens. We source unadulterated spices directly from family estates across Kashmir, the Malabar Coast, and Rajasthan.
            </p>

            <p className="text-sm sm:text-base text-[#ebdcc9]/80 leading-relaxed mb-8">
              Our culinary philosophy rejects shortcuts. From our 36-hour slow-simmered Dal Maharaja to charcoal-sealed handi dum biryanis, every recipe respects the centuries-old alchemy of slow heat, copper degs, and aromatic smoke infusions.
            </p>

            {/* Interactive Spice Heritage Tabs */}
            <div className="bg-[#1c1612] p-5 sm:p-6 rounded-2xl border border-[#d4af37]/20 mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-[0.18em] text-[#d4af37] font-semibold flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  Direct-Sourced Spice Heritage
                </span>
                <span className="text-[10px] text-[#ebdcc9]/50 tracking-wider">Click to inspect</span>
              </div>

              {/* Spice selector chips */}
              <div className="flex flex-wrap gap-2 mb-4">
                {SPICE_HERITAGE.map((spice, idx) => (
                  <button
                    key={spice.name}
                    onClick={() => {
                      ambientSound.playChime();
                      setActiveSpice(idx);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs transition-all duration-300 font-medium ${
                      activeSpice === idx
                        ? 'bg-[#d4af37] text-[#140f0c] font-bold shadow-md shadow-[#d4af37]/30 scale-105'
                        : 'bg-[#221a15] text-[#ebdcc9]/70 hover:text-white border border-[#d4af37]/15'
                    }`}
                  >
                    {spice.name.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Active spice details */}
              <div className="border-t border-[#d4af37]/15 pt-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-semibold text-white">{SPICE_HERITAGE[activeSpice].name}</span>
                  <span className="text-[#d4af37] text-[11px] font-mono">{SPICE_HERITAGE[activeSpice].origin}</span>
                </div>
                <p className="text-xs text-[#ebdcc9]/75 leading-relaxed mb-2">
                  {SPICE_HERITAGE[activeSpice].desc}
                </p>
                <div className="text-[11px] text-[#d4af37]/90 flex items-center gap-1">
                  <Flame className="w-3 h-3 text-[#d4af37]" />
                  <span className="text-[#ebdcc9]/60">Aromatic Profile:</span> {SPICE_HERITAGE[activeSpice].aromaNote}
                </div>
              </div>
            </div>

            {/* Chef Signature & Credentials */}
            <div className="flex items-center justify-between pt-2 border-t border-[#d4af37]/10 flex-wrap gap-4">
              <div>
                <div className="font-script text-3xl sm:text-4xl text-[#d4af37] leading-none">
                  Vikram Singh
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#ebdcc9]/60 font-semibold mt-1">
                  Executive Chef &amp; Founder
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#d4af37]/30 flex items-center justify-center bg-[#221a15] text-[#d4af37]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Royal Heritage Certified</div>
                  <div className="text-[10px] text-[#ebdcc9]/60">Preserving 18th-century court gastronomy</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
