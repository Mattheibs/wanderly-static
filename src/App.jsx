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

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/our-guides" element={<OurGuides />} />
          <Route path="/booking-process" element={<BookingProcess />} />
          <Route path="/travel-faq" element={<Faqs />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
