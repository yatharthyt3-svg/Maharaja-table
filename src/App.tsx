/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeritageStory } from './components/HeritageStory';
import { SignatureDishes } from './components/SignatureDishes';
import { MenuSection } from './components/MenuSection';
import { TastingMenuBuilder } from './components/TastingMenuBuilder';
import { ChefShowcase } from './components/ChefShowcase';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AwardsSection } from './components/AwardsSection';
import { PrivateEventsSection } from './components/PrivateEventsSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactAndLocation } from './components/ContactAndLocation';
import { Footer } from './components/Footer';
import { DishDetailModal } from './components/DishDetailModal';
import { BookingConfirmationModal } from './components/BookingConfirmationModal';
import { PrivateEventInquiryModal } from './components/PrivateEventInquiryModal';
import { MENU_ITEMS } from './data/restaurantData';
import { MenuItem, ReservationConfirmation } from './types';
import { ambientSound } from './utils/soundEffects';

export default function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [bookingConfirmation, setBookingConfirmation] = useState<ReservationConfirmation | null>(null);
  const [inquiryPackageTitle, setInquiryPackageTitle] = useState<string | null>(null);

  const scrollToReservation = () => {
    ambientSound.playChime();
    const el = document.getElementById('reservation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSignatureDish = (dishName: string) => {
    const foundItem = MENU_ITEMS.find((item) =>
      item.name.toLowerCase().includes(dishName.toLowerCase()) ||
      dishName.toLowerCase().includes(item.name.toLowerCase())
    );
    if (foundItem) {
      setSelectedMenuItem(foundItem);
    }
  };

  return (
    <div className="min-h-screen bg-[#140f0c] text-[#faf5ee] selection:bg-[#d4af37] selection:text-[#140f0c]">
      {/* Navigation */}
      <Navbar onOpenReservation={scrollToReservation} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onReserveClick={scrollToReservation} />

        {/* 28+ Years Heritage & Spice Route */}
        <HeritageStory />

        {/* Masterpiece Signature Dishes */}
        <SignatureDishes onSelectDish={handleSelectSignatureDish} />

        {/* Full A La Carte Interactive Menu Catalog */}
        <MenuSection onSelectItem={(item) => setSelectedMenuItem(item)} />

        {/* 7-Course Imperial Tasting Menu Explorer */}
        <TastingMenuBuilder onBookTasting={scrollToReservation} />

        {/* Master Chef Vikram Singh Spotlight */}
        <ChefShowcase />

        {/* Visual Sanctuary & Gallery Lightbox */}
        <GallerySection />

        {/* Michelin Inspectors & Guest Reviews */}
        <TestimonialsSection />

        {/* Global Awards & Accolades */}
        <AwardsSection />

        {/* Private Dining, Banquets & Royal Weddings */}
        <PrivateEventsSection onInquire={(pkgTitle) => setInquiryPackageTitle(pkgTitle)} />

        {/* Guaranteed Table Booking Engine */}
        <ReservationSection onReservationComplete={(conf) => setBookingConfirmation(conf)} />

        {/* Location, Google Map & Estate Concierge */}
        <ContactAndLocation />
      </main>

      {/* Footer & VIP Maharaja Club */}
      <Footer />

      {/* Dish Detail Inspection Modal */}
      <DishDetailModal
        item={selectedMenuItem}
        onClose={() => setSelectedMenuItem(null)}
        onReserveForDish={scrollToReservation}
      />

      {/* Royal Dining Pass / Reservation Confirmation Modal */}
      <BookingConfirmationModal
        confirmation={bookingConfirmation}
        onClose={() => setBookingConfirmation(null)}
      />

      {/* Private Event Banquet Inquiry Modal */}
      <PrivateEventInquiryModal
        packageTitle={inquiryPackageTitle}
        onClose={() => setInquiryPackageTitle(null)}
      />
    </div>
  );
}
