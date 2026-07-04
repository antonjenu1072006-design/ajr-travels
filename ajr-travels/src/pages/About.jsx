import { Link } from "react-router-dom";

import founder from "../assets/founder.jpg";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import {
  Target,
  Eye,
  ShieldCheck,
  Plane,
  Globe,
  BadgeDollarSign,
  Handshake,
  Star,
  BadgeCheck,
  MapPinned,
  Headset,
  Heart,
  Shield,
  Gem,
  Users,
} from "lucide-react";
function About() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">

          <h1 className="text-6xl font-bold mb-6">
            About AJR Travels
          </h1>

          <p className="text-2xl max-w-3xl leading-10">
            Creating unforgettable journeys with trust,
            passion, and professional travel solutions.
          </p>

        </div>
      </section>

      {/* ================= OUR STORY ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Founder */}

            <div>

              <img
                src={founder}
                alt="Founder"
                className="w-full rounded-3xl shadow-2xl"
              />

              <div className="text-center mt-6">

                <h3 className="text-3xl font-bold text-[#003B95]">
                  Arulseeran Jezeeran
                </h3>

                <p className="text-gray-500 text-lg">
                  Founder & Managing Director
                </p>

              </div>

            </div>

            {/* Story */}

            <div>

              <span className="uppercase tracking-widest text-[#003B95] font-semibold">
                Our Story
              </span>

              <h2 className="text-5xl font-bold text-[#003B95] mt-4 mb-8">
                A Journey Built on Trust
              </h2>

              <p className="text-gray-600 leading-9 text-lg mb-6">
                AJR Travels Pvt Ltd was founded on
                <strong> 03 February 2026 </strong>
                by
                <strong> Aurulseeran Jezeeran</strong>
                -with one simple vision—to make travel easy,
                affordable, and stress-free for everyone.
              </p>

              <p className="text-gray-600 leading-9 text-lg mb-6">
                We specialize in visa services,
                air ticketing, holiday packages,
                and personalized travel consultation.
                Every journey we plan is handled with
                professionalism, honesty, and genuine care.
              </p>

              <p className="text-gray-600 leading-9 text-lg">
                Whether you're travelling for work,
                education, business, or a dream holiday,
                AJR Travels is committed to making
                every journey smooth, memorable,
                and worry-free.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= MISSION & VISION ================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-[#003B95]">
              Our Mission & Vision
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              The purpose that drives us and the future we aim to create.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Mission */}

            <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

              <div className="mb-6">
  <Target
    size={55}
    className="text-[#003B95]"
    strokeWidth={2.5}
  />
</div>

              <h3 className="text-3xl font-bold text-[#003B95] mb-6">
                Our Mission
              </h3>

              <p className="text-gray-600 text-lg leading-9">
                To provide reliable, affordable, and professional
                travel solutions through exceptional customer service,
                ensuring every traveler enjoys a smooth,
                stress-free, and memorable journey.
              </p>

            </div>

            {/* Vision */}

            <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

             <div className="mb-6">
  <Eye
    size={55}
    className="text-[#003B95]"
    strokeWidth={2.5}
  />
</div>

              <h3 className="text-3xl font-bold text-[#003B95] mb-6">
                Our Vision
              </h3>

              <p className="text-gray-600 text-lg leading-9">
                To become one of Sri Lanka's most trusted travel agencies
                by making every journey easy, enjoyable,
                and unforgettable for travelers around the world.
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* ================= WHY CHOOSE US ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-8">

    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold text-[#003B95]">
        Why Choose AJR Travels
      </h2>

      <p className="text-gray-500 mt-4 text-lg">
        Experience the difference with trusted travel experts.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card */}

      {[
        {
          icon: ShieldCheck,
          title: "Visa Experts",
          text: "Professional visa assistance with a high success rate.",
        },
        {
          icon: Plane,
          title: "Air Ticketing",
          text: "Affordable airline tickets with leading airlines.",
        },
        {
          icon: Globe,
          title: "Tour Packages",
          text: "Customized holiday packages across Asia and beyond.",
        },
        {
          icon: BadgeDollarSign,
          title: "Affordable Prices",
          text: "Quality travel services at competitive prices.",
        },
        {
          icon: Handshake,
          title: "Trusted Service",
          text: "Honest, reliable and friendly customer support.",
        },
        {
          icon: Star,
          title: "Customer First",
          text: "Your satisfaction is always our highest priority.",
        },
      ].map((item, index) => {

        const Icon = item.icon;

        return (

          <div
            key={index}
            className="bg-slate-50 rounded-3xl p-10 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300"
          >

            <Icon
              size={52}
              className="text-[#003B95] mb-6"
            />

            <h3 className="text-2xl font-bold text-[#003B95] mb-4">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-8">
              {item.text}
            </p>

          </div>

        );

      })}

    </div>

  </div>

</section>
{/* ================= ACHIEVEMENTS ================= */}

<section className="py-24 bg-[#003B95]">

  <div className="max-w-7xl mx-auto px-8">

    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold text-white">
        Our Achievements
      </h2>

      <p className="text-blue-100 mt-4 text-lg">
        Numbers that reflect our commitment to quality service.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          icon: BadgeCheck,
          number: "300+",
          title: "Successful Visa Applications",
        },
        {
          icon: MapPinned,
          number: "10+",
          title: "Tour Destinations",
        },
        {
          icon: Star,
          number: "5★",
          title: "Customer Rating",
        },
        {
          icon: Headset,
          number: "24/7",
          title: "Customer Support",
        },
      ].map((item, index) => {

        const Icon = item.icon;

        return (

          <div
            key={index}
            className="bg-white rounded-3xl p-10 text-center shadow-xl hover:-translate-y-3 transition duration-300"
          >

            <Icon
              size={55}
              className="mx-auto text-[#003B95] mb-6"
            />

            <h3 className="text-5xl font-bold text-[#003B95] mb-3">
              {item.number}
            </h3>

            <p className="text-gray-600 text-lg">
              {item.title}
            </p>

          </div>

        );

      })}

    </div>

  </div>

</section>
{/* ================= CORE VALUES ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-8">

    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold text-[#003B95]">
        Our Core Values
      </h2>

      <p className="text-gray-500 mt-4 text-lg">
        The principles that guide every journey we create.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          icon: Heart,
          title: "Customer First",
          text: "Every decision we make is focused on creating the best experience for our customers.",
        },
        {
          icon: Shield,
          title: "Integrity",
          text: "We believe in honesty, transparency, and building long-term trust with every traveler.",
        },
        {
          icon: Gem,
          title: "Excellence",
          text: "We continuously improve our services to deliver quality travel experiences every time.",
        },
        {
          icon: Users,
          title: "Teamwork",
          text: "Together we work with dedication and passion to make every journey unforgettable.",
        },
      ].map((value, index) => {

        const Icon = value.icon;

        return (

          <div
            key={index}
            className="bg-slate-50 rounded-3xl p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300"
          >

            <Icon
              size={52}
              className="text-[#003B95] mb-6"
            />

            <h3 className="text-2xl font-bold text-[#003B95] mb-4">
              {value.title}
            </h3>

            <p className="text-gray-600 leading-8">
              {value.text}
            </p>

          </div>

        );

      })}

    </div>

  </div>

</section>
<Testimonials />

{/* CTA */}

<section className="bg-[#003B95] py-24">

  <div className="max-w-5xl mx-auto px-8 text-center text-white">

    <h2 className="text-5xl font-bold mb-6">
      Ready For Your Next Journey?
    </h2>

    <p className="text-xl text-blue-100 leading-9 mb-10">
      Whether you're planning a holiday,
      applying for a visa or booking your
      next flight, AJR Travels is here to
      make your journey simple and memorable.
    </p>

    <Link
      to="/contact"
      className="inline-block bg-white text-[#003B95] px-10 py-4 rounded-full font-semibold hover:bg-blue-100 transition"
    >
      Contact Us
    </Link>

  </div>

</section>

<Footer />
</>
  );
}

export default About;