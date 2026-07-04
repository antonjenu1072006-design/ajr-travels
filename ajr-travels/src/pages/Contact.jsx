import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Footer from "../components/Footer"
import banner from "../assets/contact/contact-banner.jpg";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";

function Contact() {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_tpwfup6",
      "template_pglflka",
      form.current,
      "gueVPCusBh2DMcuYp"
    )
    .then(() => {
      alert("✅ Message sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      console.error(error);
      alert(error.text || "Failed to send message.");
    });
};
  return (
    <div>

      {/* Hero Section */}

      <section className="relative h-[650px] overflow-hidden">

        <img
          src={banner}
          alt="AJR World Tours"
          className="absolute inset-0 w-full h-full object-cover object-center scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

        <div className="relative z-10 flex items-center justify-center h-full">

          <div className="max-w-4xl text-center px-6">

            <p className="uppercase tracking-[10px] text-blue-300 font-semibold mb-6">
              AJR WORLD TOURS
            </p>

            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white">
              Contact Us
            </h1>

            <p className="mt-8 text-xl md:text-2xl text-gray-200 leading-10">
              Let's plan your next unforgettable journey together.
              <br />
              Our travel experts are always ready to help you discover the world.
            </p>

          </div>

        </div>

      </section>

      {/* Contact Section */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Form */}

            <div className="bg-white rounded-3xl shadow-xl p-10">

              <h2 className="text-4xl font-serif text-[#003B95] mb-3">
                Send us a Message
              </h2>

              <p className="text-gray-500 mb-10">
                Fill in the form and our travel experts will contact you shortly.
              </p>

             <form
  ref={form}
  onSubmit={sendEmail}
  className="space-y-6"
>
  <input
    type="text"
    name="from_name"
    placeholder="Full Name"
    className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-[#003B95] outline-none"
    required
  />

  <input
    type="email"
    name="from_email"
    placeholder="Email Address"
    className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-[#003B95] outline-none"
    required
  />

  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-[#003B95] outline-none"
    required
  />

  <input
    type="text"
    name="destination"
    placeholder="Destination"
    className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-[#003B95] outline-none"
    required
  />

  <textarea
    name="message"
    rows="6"
    placeholder="Your Message..."
    className="w-full border rounded-xl p-4 resize-none focus:ring-2 focus:ring-[#003B95] outline-none"
    required
  />

  <button
    type="submit"
    className="w-full bg-[#003B95] text-white py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-blue-900 transition"
  >
    <Send size={20} />
    Send Message
  </button>
</form>

            </div>

           {/* Contact Information */}

<div className="space-y-6">

  {/* Address */}

  <a
    href="https://share.google/H6ePwarY2d6I1OQhC"
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
  >

    <div className="flex gap-5">

      <div className="bg-[#003B95] w-16 h-16 rounded-full flex items-center justify-center text-white flex-shrink-0">
        <MapPin />
      </div>

      <div>

        <h3 className="font-bold text-xl mb-2 text-[#003B95]">
          Office Address
        </h3>

        <p className="text-gray-600 leading-7">
          AJR World Tours
          <br />
          No. 26, School Avenue
          <br />
          Station Road
          <br />
          Dehiwala
          <br />
          Sri Lanka
        </p>

        <p className="mt-4 text-[#003B95] font-semibold">
          📍 Get Directions →
        </p>

      </div>

    </div>

  </a>

  {/* Phone */}

  <div className="bg-white rounded-3xl shadow-xl p-8 flex gap-5">

    <div className="bg-[#003B95] w-16 h-16 rounded-full flex items-center justify-center text-white">
      <Phone />
    </div>

    <div>

      <h3 className="font-bold text-xl mb-2">
        Phone
      </h3>

      <a
        href="tel:+94742637540"
        className="text-gray-600 hover:text-[#003B95] transition"
      >
        +94 74 263 7540
      </a>

    </div>

  </div>

  {/* Email */}

  <div className="bg-white rounded-3xl shadow-xl p-8 flex gap-5">

    <div className="bg-[#003B95] w-16 h-16 rounded-full flex items-center justify-center text-white">
      <Mail />
    </div>

    <div>

      <h3 className="font-bold text-xl mb-2">
        Email
      </h3>

      <a
        href="mailto:ajrtravels@yahoo.com"
        className="text-gray-600 hover:text-[#003B95] transition"
      >
       info@ajrworldtours.com
      </a>

    </div>

  </div>

  {/* Office Hours */}

  <div className="bg-white rounded-3xl shadow-xl p-8 flex gap-5">

    <div className="bg-[#003B95] w-16 h-16 rounded-full flex items-center justify-center text-white">
      <Clock />
    </div>

    <div>

      <h3 className="font-bold text-xl mb-2">
        Office Hours
      </h3>

     <p className="text-gray-600">
  Open 24 Hours
  <br />
  7 Days a Week
</p>

    </div>

  </div>

</div>

        </div>

      </div>

    </section>
<Footer />
    </div>
  );
}

export default Contact;