import { HashRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Home from "./pages/home";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

const Error = lazy(() => import("./pages/error"));
const OurStory = lazy(() => import("./pages/our-story"));
const OurGuides = lazy(() => import("./pages/ourGuides"));
const BookingProcess = lazy(() => import("./pages/bookingProcess"));
const Faqs = lazy(() => import("./pages/faqs"));
const TourPage = lazy(() => import("./pages/tourPage"));
const PaymentPage = lazy(() => import("./pages/paymentPage"));
const ContactUs = lazy(() => import("./pages/contactUs"));

import ScrollToTop from "./utils/scrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/our-guides" element={<OurGuides />} />
              <Route path="/booking-process" element={<BookingProcess />} />
              <Route path="/travel-faq" element={<Faqs />} />
              <Route path="/tour/:tourSlug" element={<TourPage />} />
              <Route path="/tour/booking/:tourSlug" element={<PaymentPage />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
          <Footer />
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
