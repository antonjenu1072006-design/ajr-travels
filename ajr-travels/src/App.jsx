import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Visa from "./pages/Visa";
import Tours from "./pages/Tours";
import AirTicket from "./pages/AirTicket";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import VisaDetails from "./pages/VisaDetails";
import TourDetails from "./pages/TourDetails";

function App() {
  return (
    <BrowserRouter>

      {/* Automatically scroll to top when changing pages */}
      <ScrollToTop />

      {/* Navigation Bar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/visa-services" element={<Visa />} />
        <Route path="/air-ticketing" element={<AirTicket />} />
        <Route path="/tour-packages" element={<Tours />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/visa/:country" element={<VisaDetails />} />
        <Route
    path="/tour/:slug"
    element={<TourDetails />}
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;