import React, { useState } from 'react';
import { X, Crown, Sparkles, Send, CheckCircle2, Users, Calendar, Mail, Phone } from 'lucide-react';
import { ambientSound } from '../utils/soundEffects';

interface PrivateEventInquiryModalProps {
  packageTitle: string | null;
  onClose: () => void;
}

export const PrivateEventInquiryModal: React.FC<PrivateEventInquiryModalProps> = ({
  packageTitle,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guestCount, setGuestCount] = useState('50');
  const [eventDate, setEventDate] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!packageTitle) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ambientSound.playChime();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3s
      setTimeout(() => {
        onClose();
      }, 2500);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
      
      <div className="relative w-full max-w-lg bg-[#1c1511] rounded-3xl border border-[#d4af37]/40 shadow-2xl p-6 sm:p-8 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#140f0c] border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#140f0c] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-900/50 border border-emerald-500/50 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">Inquiry Received</h3>
            <p className="text-xs sm:text-sm text-[#ebdcc9]/80 max-w-sm mx-auto leading-relaxed">
              Our Senior Royal Banquets Concierge will contact you within 2 hours to discuss personalized menus and bespoke arrangements.
            </p>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/15 text-[#d4af37] text-[10px] uppercase font-bold tracking-widest mb-2">
                <Crown className="w-3.5 h-3.5" />
                <span>Private Event Consultation</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                {packageTitle}
              </h3>
              <p className="text-xs text-[#ebdcc9]/70 mt-1">
                Custom menu curation, wine selection, and decor styling.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block uppercase tracking-widest text-[#ebdcc9]/70 font-semibold mb-1">
                  Organizer Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maharani Gayatri Devi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#140f0c] border border-[#d4af37]/30 text-white placeholder-[#ebdcc9]/30 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block uppercase tracking-widest text-[#ebdcc9]/70 font-semibold mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="organizer@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#140f0c] border border-[#d4af37]/30 text-white placeholder-[#ebdcc9]/30 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-widest text-[#ebdcc9]/70 font-semibold mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#140f0c] border border-[#d4af37]/30 text-white placeholder-[#ebdcc9]/30 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block uppercase tracking-widest text-[#ebdcc9]/70 font-semibold mb-1">
                    Estimated Guests
                  </label>
                  <input
                    type="number"
                    min="10"
                    max="500"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#140f0c] border border-[#d4af37]/30 text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-widest text-[#ebdcc9]/70 font-semibold mb-1">
                    Proposed Date
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#140f0c] border border-[#d4af37]/30 text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="block uppercase tracking-widest text-[#ebdcc9]/70 font-semibold mb-1">
                  Event Vision &amp; Special Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Floral preferences, entertainment requirements, specific wine requests..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#140f0c] border border-[#d4af37]/30 text-white placeholder-[#ebdcc9]/30 focus:outline-none focus:border-[#d4af37]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8624] text-[#140f0c] font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#d4af37]/30 hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#140f0c]" />
                <span>Submit Private Event Inquiry</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
