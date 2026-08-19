import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Shield, Compass } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactAndLocation: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#140f0c] border-t border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#221a15]/80 text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Sanctuary Location</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Finding <span className="gold-gradient-text italic font-serif">Maharaja&apos;s Table</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6"></div>
          <p className="text-sm sm:text-base text-[#ebdcc9]/75 font-light leading-relaxed">
            Situated along the historic royal boulevard of Janpath in Connaught Place, New Delhi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Map Frame */}
          <div className="lg:col-span-6 h-[420px] rounded-3xl overflow-hidden border border-[#d4af37]/30 shadow-2xl relative bg-[#1c1511]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.247854694931!2d77.2167211!3d28.6223408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b339454199%3A0xb35a3fa990098df2!2sJanpath%2C%20Connaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maharaja's Table Location"
            ></iframe>
            
            {/* Map Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#140f0c]/90 backdrop-blur-md border border-[#d4af37]/30 text-xs text-[#ebdcc9] flex items-center justify-between">
              <div>
                <strong className="text-white block font-serif text-sm">Janpath Court Entry</strong>
                <span className="text-[11px] text-[#d4af37]">Private Porte-Cochère &amp; Valet Ramp</span>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#d4af37] text-[#140f0c] font-bold text-[10px] uppercase tracking-wider hover:bg-white transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Contact Details List */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="p-5 rounded-2xl bg-[#1c1511] border border-[#d4af37]/20 flex items-start gap-4 shadow-xl">
              <div className="w-10 h-10 rounded-full bg-[#2a1c14] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#ebdcc9]/50 font-bold block mb-1">
                  Estate Address
                </span>
                <p className="text-sm font-semibold text-white leading-relaxed">
                  {RESTAURANT_INFO.address}
                </p>
                <span className="text-xs text-[#d4af37] block mt-1">Near Imperial Hotel Gate 2</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#1c1511] border border-[#d4af37]/20 flex items-start gap-4 shadow-xl">
              <div className="w-10 h-10 rounded-full bg-[#2a1c14] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#ebdcc9]/50 font-bold block mb-1">
                  Dining Hours
                </span>
                <p className="text-xs sm:text-sm text-white">
                  <strong className="text-[#d4af37]">Royal Lunch:</strong> {RESTAURANT_INFO.hours.lunch}
                </p>
                <p className="text-xs sm:text-sm text-white mt-0.5">
                  <strong className="text-[#d4af37]">Imperial Dinner:</strong> {RESTAURANT_INFO.hours.dinner}
                </p>
                <span className="text-[11px] text-[#ebdcc9]/60 block mt-1">{RESTAURANT_INFO.hours.days}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#1c1511] border border-[#d4af37]/20 flex items-start gap-3 shadow-xl">
                <div className="w-9 h-9 rounded-full bg-[#2a1c14] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#ebdcc9]/50 font-bold block mb-0.5">
                    Concierge Line
                  </span>
                  <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-xs font-bold text-white hover:text-[#d4af37] font-mono">
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#1c1511] border border-[#d4af37]/20 flex items-start gap-3 shadow-xl">
                <div className="w-9 h-9 rounded-full bg-[#2a1c14] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#ebdcc9]/50 font-bold block mb-0.5">
                    Reservations Desk
                  </span>
                  <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-xs font-bold text-white hover:text-[#d4af37]">
                    {RESTAURANT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#221711] border border-[#d4af37]/30 flex items-center gap-3 text-xs text-[#ebdcc9]/85">
              <Car className="w-5 h-5 text-[#d4af37] shrink-0" />
              <span>Complimentary White-Glove Valet Parking available at main porch entrance.</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
