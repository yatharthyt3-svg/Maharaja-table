import React, { useState } from 'react';
import { Crown, Sparkles, Send, Check, Instagram, Facebook, Twitter, Youtube, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ambientSound } from '../utils/soundEffects';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    ambientSound.playChime();
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  const scrollToTop = () => {
    ambientSound.playChime();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e0a08] border-t border-[#d4af37]/20 text-[#ebdcc9] relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        
        {/* VIP Club Newsletter Invitation */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1a120e] via-[#241710] to-[#1a120e] border border-[#d4af37]/30 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/15 text-[#d4af37] text-[10px] uppercase font-bold tracking-widest mb-3">
            <Sparkles className="w-3 h-3" />
            <span>Maharaja&apos;s VIP Circle</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
            Receive Exclusive Seasonal Tasting Invitations
          </h3>

          <p className="text-xs sm:text-sm text-[#ebdcc9]/70 max-w-xl mx-auto mb-6 leading-relaxed">
            Join our private connoisseurs&apos; guestbook for priority reservations, rare vintage cellar releases, and Chef Vikram&apos;s quarterly banquets.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] text-xs font-bold uppercase tracking-wider animate-in fade-in">
              <Check className="w-4 h-4" />
              <span>Welcome to the Maharaja&apos;s Circle. Invitation confirmed.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your private email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3.5 rounded-full bg-[#140f0c] border border-[#d4af37]/30 text-white text-xs placeholder-[#ebdcc9]/40 focus:outline-none focus:border-[#d4af37]"
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8624] text-[#140f0c] font-bold text-xs uppercase tracking-widest hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Join Circle</span>
                <Send className="w-3.5 h-3.5 text-[#140f0c]" />
              </button>
            </form>
          )}
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#d4af37]/15">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#6b1a2a] p-[1px] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#1a1410] flex items-center justify-center">
                  <Crown className="w-5 h-5 text-[#d4af37]" />
                </div>
              </div>
              <div>
                <span className="font-script text-3xl text-[#d4af37] tracking-wider block leading-none">
                  {RESTAURANT_INFO.name}
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#ebdcc9]/60 uppercase font-medium block mt-0.5">
                  Fine Indian Dining · Est. 1998
                </span>
              </div>
            </div>

            <p className="text-xs text-[#ebdcc9]/70 leading-relaxed max-w-sm">
              An ultra-luxurious Indian dining sanctuary where heritage recipes, imperial hospitality, and modern culinary craftsmanship converge.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#1c1511] text-[10px] text-[#d4af37] uppercase font-semibold tracking-wider">
                Michelin 2-Star
              </span>
              <span className="px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#1c1511] text-[10px] text-[#d4af37] uppercase font-semibold tracking-wider">
                Wine Spectator Award
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#ebdcc9]/70">
              <li><a href="#about" className="hover:text-[#d4af37] transition-colors">Our Royal Heritage</a></li>
              <li><a href="#menu" className="hover:text-[#d4af37] transition-colors">A La Carte Repertoire</a></li>
              <li><a href="#signature" className="hover:text-[#d4af37] transition-colors">Signature Masterpieces</a></li>
              <li><a href="#tasting" className="hover:text-[#d4af37] transition-colors">7-Course Banquet</a></li>
              <li><a href="#chef" className="hover:text-[#d4af37] transition-colors">Master Chef Vikram</a></li>
            </ul>
          </div>

          {/* Experiences */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              Experiences
            </h4>
            <ul className="space-y-2 text-xs text-[#ebdcc9]/70">
              <li><a href="#reservation" className="hover:text-[#d4af37] transition-colors">Table Reservations</a></li>
              <li><a href="#events" className="hover:text-[#d4af37] transition-colors">Private Dining Salons</a></li>
              <li><a href="#events" className="hover:text-[#d4af37] transition-colors">Imperial Weddings</a></li>
              <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors">Atmospheric Gallery</a></li>
              <li><a href="#contact" className="hover:text-[#d4af37] transition-colors">Location &amp; Valet</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 text-xs text-[#ebdcc9]/70">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              Estate Desk
            </h4>
            <p className="leading-relaxed">
              15, Janpath Lane, Connaught Place, New Delhi 110001
            </p>
            <p className="font-mono text-[#d4af37]">
              {RESTAURANT_INFO.phone}
            </p>
            <p>
              {RESTAURANT_INFO.email}
            </p>
          </div>

        </div>

        {/* Bottom Bar with Socials & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#ebdcc9]/50">
          <div>
            &copy; 1998–2026 {RESTAURANT_INFO.name}. All Royal Rights Reserved.
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-[#d4af37]/20 flex items-center justify-center text-[#ebdcc9]/60 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full border border-[#d4af37]/20 flex items-center justify-center text-[#ebdcc9]/60 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-8 h-8 rounded-full border border-[#d4af37]/20 flex items-center justify-center text-[#ebdcc9]/60 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full border border-[#d4af37]/20 flex items-center justify-center text-[#ebdcc9]/60 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#d4af37] hover:underline"
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
