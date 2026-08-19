import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, MapPin, Sparkles, CheckCircle2, Shield, Phone, Mail, Award, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationRequest, ReservationConfirmation } from '../types';
import { ambientSound } from '../utils/soundEffects';

interface ReservationSectionProps {
  onReservationComplete: (confirmation: ReservationConfirmation) => void;
  preselectedZone?: string;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  onReservationComplete,
  preselectedZone = 'grand-hall'
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState(2);
  const [seatingZone, setSeatingZone] = useState<'grand-hall' | 'courtyard' | 'saffron-salon' | 'emperors-vault'>(
    (preselectedZone as any) || 'grand-hall'
  );
  const [specialOccasion, setSpecialOccasion] = useState('None / Fine Dining');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const zones = [
    {
      id: 'grand-hall',
      name: "Maharaja's Grand Dining Hall",
      desc: 'Crystal chandeliers, silk velvet banquettes, live classical sitar.',
      ideal: 'Romantic evenings & family celebrations'
    },
    {
      id: 'courtyard',
      name: 'The Royal Courtyard',
      desc: 'Alfresco marble dining overlooking illuminated water fountains.',
      ideal: 'Starlit dinners & fresh evening breeze'
    },
    {
      id: 'saffron-salon',
      name: 'Saffron Private Alcove',
      desc: 'Secluded curtained booths with dedicated royal butler service.',
      ideal: 'VIP privacy & intimate anniversaries'
    },
    {
      id: 'emperors-vault',
      name: "The Emperor's Vault",
      desc: 'Ultra exclusive private dining room with private wine sommelier.',
      ideal: 'High-level summits & royal feasts'
    }
  ];

  const timeSlots = [
    { value: '12:00', label: '12:00 PM (Lunch)' },
    { value: '12:30', label: '12:30 PM (Lunch)' },
    { value: '13:00', label: '1:00 PM (Lunch)' },
    { value: '13:30', label: '1:30 PM (Lunch)' },
    { value: '14:00', label: '2:00 PM (Lunch)' },
    { value: '19:00', label: '7:00 PM (Dinner)' },
    { value: '19:30', label: '7:30 PM (Dinner - Prime)' },
    { value: '20:00', label: '8:00 PM (Dinner - Prime)' },
    { value: '20:30', label: '8:30 PM (Dinner - Prime)' },
    { value: '21:00', label: '9:00 PM (Dinner)' },
    { value: '21:30', label: '9:30 PM (Dinner)' },
    { value: '22:00', label: '10:00 PM (Dinner)' }
  ];

  const occasions = [
    'None / Fine Dining',
    'Romantic Anniversary',
    'Birthday Celebration',
    'Marriage Proposal',
    'Corporate Executive Dinner',
    'Royal Family Feast'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ambientSound.playChime();
    setIsSubmitting(true);

    const bookingId = `MRJ-${Math.floor(100000 + Math.random() * 900000)}`;
    const tableNumber = `Table T-${Math.floor(10 + Math.random() * 30)} (${seatingZone.split('-')[0].toUpperCase()})`;

    setTimeout(() => {
      const confirmation: ReservationConfirmation = {
        bookingId,
        status: 'Confirmed',
        tableNumber,
        createdTimestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        fullName,
        email,
        phone,
        date,
        time,
        guests,
        seatingZone,
        dietaryRestrictions,
        specialOccasion,
        notes
      };

      setIsSubmitting(false);
      onReservationComplete(confirmation);
    }, 1200);
  };

  return (
    <section id="reservation" className="py-24 bg-[#18120e] border-t border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#221a15]/80 text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Guaranteed Table Reservation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Secure Your <span className="gold-gradient-text italic font-serif">Royal Table</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6"></div>
          <p className="text-sm sm:text-base text-[#ebdcc9]/75 font-light leading-relaxed">
            Experience unparalleled hospitality. Instant confirmation pass generated upon booking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Concierge Perks */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#1c1511] p-6 sm:p-8 rounded-3xl border border-[#d4af37]/25 shadow-2xl shadow-black/80">
              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                Concierge &amp; Dining Guidelines
              </h3>
              <p className="text-xs text-[#ebdcc9]/70 leading-relaxed mb-6">
                Our reservations team ensures every detail of your evening is attended to with royal discretion.
              </p>

              <div className="space-y-4 text-xs text-[#ebdcc9]/85">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Direct Line</strong>
                    <span className="text-[#d4af37] font-mono">{RESTAURANT_INFO.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Operating Hours</strong>
                    <span>Lunch: {RESTAURANT_INFO.hours.lunch}</span>
                    <br />
                    <span>Dinner: {RESTAURANT_INFO.hours.dinner}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Dress Code &amp; Valet</strong>
                    <span>{RESTAURANT_INFO.dressCode}</span>
                    <br />
                    <span className="text-[#d4af37]">{RESTAURANT_INFO.valetParking}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#2a1a14] to-[#1c1410] border border-[#d4af37]/30 shadow-xl flex items-center gap-4">
              <Award className="w-10 h-10 text-[#d4af37] shrink-0" />
              <div>
                <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
                  Guaranteed Seating Confirmation
                </h4>
                <p className="text-[11px] text-[#ebdcc9]/70 mt-0.5 leading-relaxed">
                  Your table is reserved and prepared with fresh Mogra blooms and personalized menu scrolls.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Interactive Reservation Form */}
          <div className="lg:col-span-7 bg-[#1c1511] p-6 sm:p-10 rounded-3xl border border-[#d4af37]/30 shadow-2xl shadow-black/90">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Seating Zone Radio selector */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
                  Select Seating Sanctuary
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {zones.map((z) => (
                    <div
                      key={z.id}
                      onClick={() => {
                        ambientSound.playChime();
                        setSeatingZone(z.id as any);
                      }}
                      className={`p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        seatingZone === z.id
                          ? 'bg-[#2a1c14] border-[#d4af37] shadow-lg shadow-[#d4af37]/15'
                          : 'bg-[#18120e] border-[#d4af37]/15 hover:border-[#d4af37]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-xs font-bold ${seatingZone === z.id ? 'text-[#d4af37]' : 'text-white'}`}>
                          {z.name}
                        </span>
                        {seatingZone === z.id && <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />}
                      </div>
                      <p className="text-[11px] text-[#ebdcc9]/60 leading-snug">{z.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guest Count & Occasion Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#ebdcc9]/70 font-semibold mb-2">
                    Number of Royal Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#18120e] border border-[#d4af37]/25 text-white text-xs sm:text-sm focus:outline-none focus:border-[#d4af37] transition-all"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                        <option key={num} value={num} className="bg-[#1c1511]">
                          {num} {num === 1 ? 'Guest (Solo Tasting)' : 'Guests'}
                        </option>
                      ))}
                      <option value={15} className="bg-[#1c1511]">13+ Guests (Private Banquet)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#ebdcc9]/70 font-semibold mb-2">
                    Occasion / Celebration
                  </label>
                  <div className="relative">
                    <Heart className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]" />
                    <select
                      value={specialOccasion}
                      onChange={(e) => setSpecialOccasion(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#18120e] border border-[#d4af37]/25 text-white text-xs sm:text-sm focus:outline-none focus:border-[#d4af37] transition-all"
                    >
                      {occasions.map((occ) => (
                        <option key={occ} value={occ} className="bg-[#1c1511]">
                          {occ}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Date & Time Slot Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#ebdcc9]/70 font-semibold mb-2">
                    Date of Reservation
                  </label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#18120e] border border-[#d4af37]/25 text-white text-xs sm:text-sm focus:outline-none focus:border-[#d4af37] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#ebdcc9]/70 font-semibold mb-2">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]" />
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#18120e] border border-[#d4af37]/25 text-white text-xs sm:text-sm focus:outline-none focus:border-[#d4af37] transition-all"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot.value} value={slot.value} className="bg-[#1c1511]">
                          {slot.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Name, Email, Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#ebdcc9]/70 font-semibold mb-2">
                    Guest Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maharaja Vikramaditya"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#18120e] border border-[#d4af37]/25 text-white text-xs sm:text-sm focus:outline-none focus:border-[#d4af37] transition-all placeholder-[#ebdcc9]/30"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#ebdcc9]/70 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="royal@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#18120e] border border-[#d4af37]/25 text-white text-xs sm:text-sm focus:outline-none focus:border-[#d4af37] transition-all placeholder-[#ebdcc9]/30"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#ebdcc9]/70 font-semibold mb-2">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#18120e] border border-[#d4af37]/25 text-white text-xs sm:text-sm focus:outline-none focus:border-[#d4af37] transition-all placeholder-[#ebdcc9]/30"
                  />
                </div>
              </div>

              {/* Dietary & Special Requests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#ebdcc9]/70 font-semibold mb-2">
                    Dietary Preferences / Allergies
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Pure Vegetarian, Jain, Nut Allergy, Halal"
                    value={dietaryRestrictions}
                    onChange={(e) => setDietaryRestrictions(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#18120e] border border-[#d4af37]/25 text-white text-xs focus:outline-none focus:border-[#d4af37] transition-all placeholder-[#ebdcc9]/30"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#ebdcc9]/70 font-semibold mb-2">
                    Special Requests (Seating, Floral, Cake)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Quiet corner table, custom birthday dessert calligraphy"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#18120e] border border-[#d4af37]/25 text-white text-xs focus:outline-none focus:border-[#d4af37] transition-all placeholder-[#ebdcc9]/30"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa8624] text-[#140f0c] font-bold text-xs uppercase tracking-[0.2em] shadow-xl shadow-[#d4af37]/30 hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin" />
                    <span>Allocating Royal Table &amp; Generating Pass...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#140f0c]" />
                    <span>Confirm Table Reservation</span>
                  </>
                )}
              </button>

              <p className="text-center text-[10px] text-[#ebdcc9]/50 tracking-wider">
                🔒 Instant reservation. No deposit required for standard tables. Complimentary cancellation up to 4 hours prior.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
