import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar/navbar";
import Error from "./pages/error";
import "./App.css";
import Footer from "./components/footer/footer";
import OurStory from "./pages/our-story";
import OurGuides from "./pages/ourGuides";
import BookingProcess from "./pages/bookingProcess";
import Faqs from "./pages/faqs";
import TourPage from "./pages/tourPage";
import PaymentPage from "./pages/paymentPage";
import ContactUs from "./pages/contactUs";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Navbar />
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
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
