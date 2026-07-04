import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import indiaFlag from "../assets/flags/india.png";

import malaysiaFlag from "../assets/flags/malaysia.jpg";
import indonesiaFlag from "../assets/flags/indonesia.jpg";
import pakistanFlag from "../assets/flags/pakistan.jpg";
import vietnamFlag from "../assets/flags/vietnam.jpg";
import srilankaFlag from "../assets/flags/srilanka.jpg";
import uaeFlag from "../assets/flags/dubai.jpg";
import chinaFlag from "../assets/flags/china.jpg";
import omanFlag from "../assets/flags/oman.jpg";
import cambodiaFlag from "../assets/flags/cambodia.jpg";
import azerbaijanFlag from "../assets/flags/azerbaijan.jpg";
import qatarFlag from "../assets/flags/qatar.jpg";
function VisaServices() {
  const countries = [
  {
  image: srilankaFlag,
  country: "Sri Lanka",
  visa: "Tourist Visa",
  slug: "sri-lanka",
},
    {
    image: indiaFlag,
    country: "India",
    visa: "Tourist Visa",
    slug: "india",
  },
  {
    image: malaysiaFlag,
    country: "Malaysia",
    visa: "Tourist Visa • Student Visa",
    slug: "malaysia",
  },
  {
    image: chinaFlag,
    country: "China",
    visa: "Tourist Visa",
    slug: "china",
  },
  {
    image: indonesiaFlag,
    country: "Indonesia",
    visa: "Tourist Visa",
    slug: "indonesia",
  },
  {
    image: pakistanFlag,
    country: "Pakistan",
    visa: "Tourist Visa",
    slug: "pakistan",
  },
  {
    image: vietnamFlag,
    country: "Vietnam",
    visa: "Tourist Visa",
    slug: "vietnam",
  },
  {
    image: uaeFlag,
    country: "United Arab Emirates",
    visa: "Dubai • Abu Dhabi Tourist Visa",
    slug: "uae",
  },
  {
    image: omanFlag,
    country: "Oman",
    visa: "Tourist Visa",
    slug: "oman",
  },
  {
    image: azerbaijanFlag,
    country: "Azerbaijan",
    visa: "Tourist Visa",
    slug: "azerbaijan",
  },
  {
    image: cambodiaFlag,
    country: "Cambodia",
    visa: "Tourist Visa",
    slug: "cambodia",
  },
  {
    image: qatarFlag,
    country: "Qatar",
    visa: "Work Visa Only",
    slug: "qatar",
  },
];

  return (
    <>
      {/* HERO */}

      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05')",
        }}
      >
        <div className="absolute inset-0 bg-[#002D72]/70"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-6xl font-bold mb-6">
            Visa Services
          </h1>

          <p className="text-2xl max-w-3xl leading-10">
            Reliable visa assistance for selected Asian destinations,
            making your travel simple, smooth and stress-free.
          </p>
        </div>
      </section>

      {/* VISA CATEGORIES */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-[#003B95]">
              Visa Categories
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              We provide professional assistance for different visa types.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-50 rounded-3xl p-10 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition">

              <div className="text-6xl mb-6">
                🧳
              </div>

              <h3 className="text-3xl font-bold text-[#003B95] mb-4">
                Tourist Visa
              </h3>

              <p className="text-gray-600 leading-8">
                Explore beautiful destinations across Asia
                with hassle-free tourist visa assistance.
              </p>

            </div>

            <div className="bg-slate-50 rounded-3xl p-10 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition">

              <div className="text-6xl mb-6">
                🎓
              </div>

              <h3 className="text-3xl font-bold text-[#003B95] mb-4">
                Student Visa
              </h3>

              <p className="text-gray-600 leading-8">
                We currently assist students applying
                for Malaysian student visas.
              </p>

            </div>

            <div className="bg-slate-50 rounded-3xl p-10 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition">

              <div className="text-6xl mb-6">
                💼
              </div>

              <h3 className="text-3xl font-bold text-[#003B95] mb-4">
                Work Visa
              </h3>

              <p className="text-gray-600 leading-8">
                Professional work visa assistance
                currently available for Qatar.
              </p>

            </div>

          </div>

        </div>
      </section>

     {/* ================= COUNTRIES WE SERVE ================= */}

<section className="py-24 bg-slate-50">

  <div className="max-w-7xl mx-auto px-8">

    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold text-[#003B95]">
        Countries We Serve
      </h2>

      <p className="text-gray-500 mt-4 text-lg">
        Select your destination to view visa requirements and application details.
      </p>

    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {countries.map((country, index) => (

        <div
          key={index}
          className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300"
        >

          <img
  src={country.image}
  alt={country.country}
  className="w-full h-56 object-cover"
/>

          <div className="p-6">

            <h3 className="text-2xl font-bold text-[#003B95] mb-2">
              {country.country}
            </h3>

            <p className="text-gray-600 mb-6">
              {country.visa}
            </p>

            <Link
              to={`/visa/${country.slug}`}
            >
              Explore →
            </Link>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
<Footer />

    </>
  );
}

export default VisaServices;