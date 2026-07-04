import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import logo from "../assets/logo.png";
function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#003B95] font-semibold border-b-2 border-[#003B95] pb-1"
      : "text-gray-700 hover:text-[#003B95] transition";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="flex items-center justify-between h-24">

         <Link to="/" className="flex items-center gap-4">

  <img
    src={logo}
    alt="AJR Travels Logo"
   className="w-17 h-17 rounded-full object-cover shadow-md"
  />

  <div>
    <h1 className="text-3xl font-bold text-[#003B95]">
      AJR Travels Pvt Ltd
    </h1>

    <p className="text-sm italic text-gray-500">
      Your Journey, Our Passion
    </p>
  </div>

</Link>

        <nav className="hidden lg:flex gap-12">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/visa-services" className={linkClass}>Visa Services</NavLink>
            <NavLink to="/air-ticketing" className={linkClass}>Air Ticketing</NavLink>
            <NavLink to="/tour-packages" className={linkClass}>Tour Packages</NavLink>
            <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </nav>

          <Link
            to="/contact"
            className="hidden lg:flex items-center gap-2 bg-[#003B95] text-white px-6 py-3 rounded-full"
          >
            <Phone size={18} />
            Contact Us
          </Link>

          <button
  className="lg:hidden"
  onClick={() => setMobileMenu(!mobileMenu)}
>
  <Menu size={28} />
</button>
{mobileMenu && (
  <div className="lg:hidden bg-white border-t shadow-md py-4">
    <nav className="flex flex-col items-center gap-4">

      <NavLink to="/" onClick={() => setMobileMenu(false)}>Home</NavLink>

      <NavLink to="/about" onClick={() => setMobileMenu(false)}>About</NavLink>

      <NavLink to="/visa-services" onClick={() => setMobileMenu(false)}>Visa Services</NavLink>

      <NavLink to="/air-ticketing" onClick={() => setMobileMenu(false)}>Air Ticketing</NavLink>

      <NavLink to="/tour-packages" onClick={() => setMobileMenu(false)}>Tour Packages</NavLink>

      <NavLink to="/gallery" onClick={() => setMobileMenu(false)}>Gallery</NavLink>

      <NavLink to="/contact" onClick={() => setMobileMenu(false)}>Contact</NavLink>

    </nav>
  </div>
)}
        </div>
      </div>
    </header>
  );
}

export default Navbar;