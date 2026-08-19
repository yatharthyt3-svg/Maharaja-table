import React, { useState, useEffect } from 'react';
import { Crown, Volume2, VolumeX, Menu, X, Calendar, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ambientSound } from '../utils/soundEffects';

interface NavbarProps {
  onOpenReservation: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    ambientSound.playChime();
    const active = ambientSound.toggleDrone();
    setIsMuted(!active);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Signatures', href: '#signature' },
    { name: 'Tasting Menu', href: '#tasting' },
    { name: 'Master Chef', href: '#chef' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Private Dining', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#140f0c]/95 backdrop-blur-md py-3 border-b border-[#d4af37]/20 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-[#140f0c]/90 via-[#140f0c]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          id="nav-brand-logo"
          className="group flex items-center gap-3 text-left focus:outline-none"
          onClick={() => ambientSound.playChime()}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] via-[#b8962e] to-[#6b1a2a] p-[1px] flex items-center justify-center shadow-lg shadow-[#d4af37]/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-[#1a1410] flex items-center justify-center">
              <Crown className="w-5 h-5 text-[#d4af37] group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <span className="font-script text-2xl sm:text-3xl text-[#d4af37] tracking-wider block leading-none font-normal">
              {RESTAURANT_INFO.name}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#ebdcc9]/70 uppercase font-medium block mt-0.5">
              Fine Indian Dining · Est. 1998
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.18em] text-[#ebdcc9]/80 hover:text-[#d4af37] transition-colors relative py-1 font-medium group"
              onClick={() => ambientSound.playChime()}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#d4af37] to-transparent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Ambient Sound Toggle */}
          <button
            id="btn-ambient-audio"
            onClick={toggleSound}
            aria-label="Toggle ambient sitar resonance"
            title={isMuted ? "Play Royal Ambient Resonance" : "Mute Sound"}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#221a15]/60 hover:bg-[#d4af37]/15 text-[#d4af37] text-xs transition-all duration-300"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#d4af37]/70" />
                <span className="text-[10px] uppercase tracking-wider text-[#ebdcc9]/60">Music Off</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
                <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold">Resonance</span>
              </>
            )}
          </button>

          {/* Reserve Table CTA */}
          <button
            id="btn-nav-reserve"
            onClick={() => {
              ambientSound.playChime();
              onOpenReservation();
            }}
            className="relative group overflow-hidden px-5 py-2 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa8624] text-[#140f0c] font-semibold text-xs uppercase tracking-[0.15em] shadow-md shadow-[#d4af37]/25 hover:shadow-lg hover:shadow-[#d4af37]/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5 text-[#140f0c]" />
            <span>Reserve Table</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleSound}
            className="p-2 text-[#d4af37] border border-[#d4af37]/20 rounded-full bg-[#1a1410]"
            aria-label="Toggle Ambient Audio"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#d4af37] animate-pulse" />}
          </button>
          
          <button
            id="btn-mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#d4af37] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#140f0c]/98 backdrop-blur-2xl border-b border-[#d4af37]/30 px-6 py-8 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  ambientSound.playChime();
                  setMobileMenuOpen(false);
                }}
                className="text-sm uppercase tracking-[0.2em] text-[#ebdcc9] hover:text-[#d4af37] py-2 border-b border-[#d4af37]/10"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  ambientSound.playChime();
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8624] text-[#140f0c] font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/30"
              >
                <Sparkles className="w-4 h-4 text-[#140f0c]" />
                Reserve Royal Table
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
