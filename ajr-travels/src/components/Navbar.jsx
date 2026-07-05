import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#003B95] font-semibold border-b-2 border-[#003B95] pb-1"
      : "text-gray-700 hover:text-[#003B95] transition";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-8">

        {/* Top Navbar */}
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">

            <img
              src={logo}
              alt="AJR Travels Logo"
              className="w-14 h-14 lg:w-17 lg:h-17 rounded-full object-cover shadow-md"
            />

            <div>
              <h1 className="text-xl lg:text-3xl font-bold text-[#003B95] leading-tight">
                AJR Travels Pvt Ltd
              </h1>

              <p className="text-xs lg:text-sm italic text-gray-500">
                Your Journey, Our Passion
              </p>
            </div>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-12">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/visa-services" className={linkClass}>Visa Services</NavLink>
            <NavLink to="/air-ticketing" className={linkClass}>Air Ticketing</NavLink>
            <NavLink to="/tour-packages" className={linkClass}>Tour Packages</NavLink>
            <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </nav>

          {/* Desktop Contact Button */}
          <Link
            to="/contact"
            className="hidden lg:flex items-center gap-2 bg-[#003B95] text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
          >
            <Phone size={18} />
            Contact Us
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="lg:hidden bg-white border-t shadow-lg">

            <nav className="flex flex-col py-4">

              <NavLink
                to="/"
                className="px-6 py-3 hover:bg-gray-100"
                onClick={() => setMobileMenu(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className="px-6 py-3 hover:bg-gray-100"
                onClick={() => setMobileMenu(false)}
              >
                About
              </NavLink>

              <NavLink
                to="/visa-services"
                className="px-6 py-3 hover:bg-gray-100"
                onClick={() => setMobileMenu(false)}
              >
                Visa Services
              </NavLink>

              <NavLink
                to="/air-ticketing"
                className="px-6 py-3 hover:bg-gray-100"
                onClick={() => setMobileMenu(false)}
              >
                Air Ticketing
              </NavLink>

              <NavLink
                to="/tour-packages"
                className="px-6 py-3 hover:bg-gray-100"
                onClick={() => setMobileMenu(false)}
              >
                Tour Packages
              </NavLink>

              <NavLink
                to="/gallery"
                className="px-6 py-3 hover:bg-gray-100"
                onClick={() => setMobileMenu(false)}
              >
                Gallery
              </NavLink>

              <NavLink
                to="/contact"
                className="px-6 py-3 hover:bg-gray-100"
                onClick={() => setMobileMenu(false)}
              >
                Contact
              </NavLink>

              <Link
                to="/contact"
                onClick={() => setMobileMenu(false)}
                className="mx-6 mt-4 bg-[#003B95] text-white py-3 rounded-full text-center font-semibold"
              >
                Contact Us
              </Link>

            </nav>

          </div>
        )}

      </div>
    </header>
  );
}

export default Navbar;