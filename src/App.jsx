import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsTicker } from './components/StatsTicker';
import { ServicesSection } from './components/ServicesSection';
import { SubscriptionClub } from './components/SubscriptionClub';
import { GroomSection } from './components/GroomSection';
import { SpaceTour } from './components/SpaceTour';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { FAQSection } from './components/FAQSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState(null);

  const handleOpenBooking = (initialData = null) => {
    setBookingInitialData(initialData);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingInitialData(null);
  };

  return (
    <div className="min-h-screen bg-[#090a0c] text-[#f3f0e8] selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Sections */}
      <main>
        {/* 1. Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Stats & Ticker */}
        <StatsTicker />

        {/* 3. Services Catalog & Interactive Step Flow */}
        <ServicesSection onSelectServiceAndBook={(data) => handleOpenBooking(data)} />

        {/* 4. Subscription Club (12 Plans) */}
        <SubscriptionClub />

        {/* 5. Dia do Noivo VIP */}
        <GroomSection />

        {/* 6. Space Virtual Tour */}
        <SpaceTour />

        {/* 7. Google Reviews (4.9 Stars, 368 Reviews) */}
        <GoogleReviewsSection />

        {/* 8. FAQ Objections */}
        <FAQSection />

        {/* 9. Location & Contact */}
        <LocationContact onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp CRO Widget */}
      <FloatingWhatsApp />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialData={bookingInitialData}
      />
    </div>
  );
}

export default App;
