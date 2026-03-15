import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Pages
import User from './pages/User';
import Tours from './pages/Tours';
import Destinations from './pages/Destinations';
import TourDetails from './pages/TourDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Vendor from './pages/Vendor';
import Admin from './pages/Admin';
import BookingSuccess from './pages/BookingSuccess';

// Components
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import Header from './components/Header';
import BackToTop from './components/BackToTop';
import CookieBanner from './components/CookieBanner';
import { Toaster } from 'react-hot-toast';

// Pages that show Footer
const FOOTER_ROUTES = ['/', '/tours', '/destinations', '/about', '/contact', '/profile', '/privacy', '/terms'];

// Floating WhatsApp + Phone contact buttons
function FloatingContactButtons() {
  const WHATSAPP_NUMBER = '919876543210'; // Replace with real number
  const PHONE_NUMBER = '+919876543210';   // Replace with real number

  return (
    <div className="fixed left-4 bottom-8 flex flex-col gap-3 z-[200]">
      {/* Phone Button */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        title="Call Us"
        className="group flex items-center gap-0 hover:gap-3 w-12 hover:w-auto overflow-hidden transition-all duration-300 ease-in-out bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-blue-500/40 p-3"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="text-white font-bold text-sm whitespace-nowrap pr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 max-w-0 group-hover:max-w-xs overflow-hidden">Call Us</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20ToursIn!%20I%20want%20to%20enquire%20about%20a%20tour%20package.`}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="group flex items-center gap-0 hover:gap-3 w-12 hover:w-auto overflow-hidden transition-all duration-300 ease-in-out bg-[#25D366] hover:bg-[#1ebe57] rounded-full shadow-lg hover:shadow-green-400/40 p-3"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="text-white font-bold text-sm whitespace-nowrap pr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 max-w-0 group-hover:max-w-xs overflow-hidden">WhatsApp</span>
      </a>
    </div>
  );
}

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <HelmetProvider>
      <Router>
      <div className="min-h-screen flex flex-col pt-16 font-sans relative">
        <Header onLoginClick={() => setIsLoginModalOpen(true)} />

        <main className="flex-grow flex flex-col">
          <Routes>
            {/* Main public pages */}
            <Route path="/" element={<User />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/tour/:id" element={<TourDetails />} />

            {/* Info pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />

            {/* Admin / Vendor portals */}
            <Route path="/vendor" element={<Vendor />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/booking/success" element={<BookingSuccess />} />

            {/* 404 catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer on all public pages */}
        <Routes>
          <Route path="/" element={<Footer />} />
          <Route path="/tours" element={<Footer />} />
          <Route path="/destinations" element={<Footer />} />
          <Route path="/tour/:id" element={<Footer />} />
          <Route path="/about" element={<Footer />} />
          <Route path="/contact" element={<Footer />} />
          <Route path="/profile" element={<Footer />} />
        </Routes>

        {/* Floating Contact Buttons — visible on all pages */}
        <FloatingContactButtons />

        {/* Back to Top Button */}
        <BackToTop />

        {/* Toast notifications — global */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: { borderRadius: '12px', fontWeight: '600', fontSize: '14px' },
            success: { style: { background: '#ecfdf5', color: '#065f46', border: '1px solid #a7f3d0' } },
            error: { style: { background: '#fef2f2', color: '#991b1b', border: '1px solid #fca5a5' } },
          }}
        />

        {/* Cookie Consent Banner */}
        <CookieBanner />

        <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;
