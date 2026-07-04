import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#002D72] text-white">
      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold mb-4">
              AJR Travels Pvt Ltd
            </h2>

            <p className="text-blue-100 leading-8">
              Your trusted travel partner for visa services,
              air ticketing and unforgettable holiday experiences.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/visa-services">Visa Services</Link>
              <Link to="/air-ticketing">Air Ticketing</Link>
              <Link to="/tour-packages">Tour Packages</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-2xl font-semibold mb-5">
              Services
            </h3>

            <div className="flex flex-col gap-3">

              <p>Visa Assistance</p>
              <p>Air Ticketing</p>
              <p>Holiday Packages</p>
              <p>Travel Consultation</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span>+94 74 263 7540</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} />
                <span>info@ajrworldtours.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={20} />
                <span>No. 26, School Avenue, Station Road, Dehiwala, Sri Lanka</span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-blue-400 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-blue-100 text-center md:text-left">
            © {new Date().getFullYear()} AJR Travels Pvt Ltd. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-blue-100">

            <a
              href="https://www.facebook.com/share/17teBEFqVY/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/ajrtravels?igsh=bTAxMHlqMHhjYzk1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/anton-jenu-07605a420"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Created by Andrew Jenuvin Anton
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;