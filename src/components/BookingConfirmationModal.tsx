import React, { useState } from 'react';
import { Crown, Sparkles, CheckCircle2, Download, Printer, X, Calendar, Clock, MapPin, Users, Heart } from 'lucide-react';
import { ReservationConfirmation } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ambientSound } from '../utils/soundEffects';

interface BookingConfirmationModalProps {
  confirmation: ReservationConfirmation | null;
  onClose: () => void;
}

export const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({
  confirmation,
  onClose,
}) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!confirmation) return null;

  const handleDownloadCalendar = () => {
    ambientSound.playChime();
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Maharaja's Table//Fine Indian Dining//EN
BEGIN:VEVENT
UID:${confirmation.bookingId}@maharajastable.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${confirmation.date.replace(/-/g, '')}T${confirmation.time.replace(':', '')}00
SUMMARY:Maharaja's Table — Royal Dinner Reservation (${confirmation.bookingId})
DESCRIPTION:Royal Table Reservation for ${confirmation.guests} guests at ${confirmation.tableNumber}. Dress code: Smart Regal / Formal. Valet parking included.
LOCATION:${RESTAURANT_INFO.address}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Maharajas_Table_${confirmation.bookingId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
  };

  const handlePrint = () => {
    ambientSound.playChime();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
      
      <div className="relative w-full max-w-xl bg-gradient-to-b from-[#1e1611] to-[#140f0c] rounded-3xl border-2 border-[#d4af37] shadow-2xl shadow-[#d4af37]/20 overflow-hidden my-8 p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#140f0c] border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#140f0c] transition-colors"
          aria-label="Close Confirmation"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Ribbon */}
        <div className="text-center pb-6 border-b border-[#d4af37]/20">
          <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-[#d4af37] to-[#aa8624] p-[2px] mb-3 shadow-lg shadow-[#d4af37]/30 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#140f0c] flex items-center justify-center">
              <Crown className="w-7 h-7 text-[#d4af37]" />
            </div>
          </div>
          <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#d4af37] block">
            Imperial Dining Pass
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-0.5">
            Reservation Confirmed
          </h2>
          <span className="inline-block mt-2 px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-semibold">
            Status: {confirmation.status} · Pass #{confirmation.bookingId}
          </span>
        </div>

        {/* Pass Details Body */}
        <div className="py-6 space-y-4">
          <div className="p-4 rounded-2xl bg-[#140f0c] border border-[#d4af37]/30">
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-[#ebdcc9]/50 uppercase tracking-widest block text-[10px]">Guest Name</span>
                <span className="font-bold text-white text-sm">{confirmation.fullName}</span>
              </div>
              <div>
                <span className="text-[#ebdcc9]/50 uppercase tracking-widest block text-[10px]">Allocated Table</span>
                <span className="font-bold text-[#d4af37] text-sm">{confirmation.tableNumber}</span>
              </div>
              <div>
                <span className="text-[#ebdcc9]/50 uppercase tracking-widest block text-[10px]">Date</span>
                <span className="font-bold text-white flex items-center gap-1 mt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                  {confirmation.date}
                </span>
              </div>
              <div>
                <span className="text-[#ebdcc9]/50 uppercase tracking-widest block text-[10px]">Time Slot</span>
                <span className="font-bold text-white flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                  {confirmation.time}
                </span>
              </div>
              <div>
                <span className="text-[#ebdcc9]/50 uppercase tracking-widest block text-[10px]">Party Size</span>
                <span className="font-bold text-white flex items-center gap-1 mt-0.5">
                  <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                  {confirmation.guests} Guests
                </span>
              </div>
              <div>
                <span className="text-[#ebdcc9]/50 uppercase tracking-widest block text-[10px]">Occasion</span>
                <span className="font-bold text-[#d4af37] flex items-center gap-1 mt-0.5">
                  <Heart className="w-3.5 h-3.5 text-[#d4af37]" />
                  {confirmation.specialOccasion}
                </span>
              </div>
            </div>

            {confirmation.dietaryRestrictions && (
              <div className="mt-3 pt-3 border-t border-[#d4af37]/15 text-xs">
                <span className="text-[#ebdcc9]/50 uppercase tracking-widest block text-[10px]">Dietary Notes</span>
                <span className="text-white italic">{confirmation.dietaryRestrictions}</span>
              </div>
            )}
          </div>

          {/* QR & Verification Box */}
          <div className="p-4 rounded-2xl bg-[#140f0c]/60 border border-[#d4af37]/20 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-bold text-white">Digital Reception Code</div>
              <p className="text-[11px] text-[#ebdcc9]/60 leading-tight">
                Present this code or your mobile number upon arrival at our Janpath porte-cochère.
              </p>
            </div>
            {/* Simulated Luxury QR Code Grid */}
            <div className="w-16 h-16 rounded-xl bg-white p-1.5 shrink-0 flex items-center justify-center">
              <div className="w-full h-full bg-[#140f0c] rounded-lg flex items-center justify-center text-[9px] font-mono text-[#d4af37] font-bold text-center leading-tight">
                MRJ<br />PASS
              </div>
            </div>
          </div>

          {/* Important Arrival Details */}
          <div className="text-[11px] text-[#ebdcc9]/70 space-y-1 bg-[#221711] p-3.5 rounded-xl border border-[#d4af37]/20">
            <div className="flex items-center gap-1.5 text-white font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{RESTAURANT_INFO.address}</span>
            </div>
            <div>👔 <strong>Dress Code:</strong> {RESTAURANT_INFO.dressCode}</div>
            <div>🚗 <strong>Valet:</strong> {RESTAURANT_INFO.valetParking}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#d4af37]/20 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDownloadCalendar}
            className="flex-1 py-3 rounded-full bg-[#2a1c14] hover:bg-[#d4af37] text-[#d4af37] hover:text-[#140f0c] border border-[#d4af37]/40 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>{downloaded ? 'Calendar Pass Saved' : 'Add to Calendar (.ics)'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="py-3 px-6 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8624] text-[#140f0c] text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform flex items-center justify-center gap-1.5"
          >
            <Printer className="w-4 h-4 text-[#140f0c]" />
            <span>Print Pass</span>
          </button>
        </div>

      </div>
    </div>
  );
};
