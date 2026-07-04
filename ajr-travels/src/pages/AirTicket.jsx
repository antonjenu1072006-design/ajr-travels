import srilankanLogo from "../assets/airlines/srilankan.png";
import emiratesLogo from "../assets/airlines/emirates.png";
import qatarLogo from "../assets/airlines/qatar.png";
import singaporeLogo from "../assets/airlines/singapore.png";
import malaysiaLogo from "../assets/airlines/malaysia.png";
import airasiaLogo from "../assets/airlines/airasia.png";
import etihadLogo from "../assets/airlines/etihad.png";
import flydubaiLogo from "../assets/airlines/flydubai.png";
import { useState } from "react";
import Select from "react-select";
import airports from "../data/airports.json";
import Footer from "../components/Footer"
import {
  Plane,
  Globe,
  Users,
  Briefcase,
  CheckCircle,
  Phone,
  MessageCircle,
} from "lucide-react";

function AirTicket() {
  const [tripType, setTripType] = useState("Round Trip");

const [from, setFrom] = useState(null);

const [to, setTo] = useState(null);

const [departure, setDeparture] = useState("");

const [returnDate, setReturnDate] = useState("");

const [cabin, setCabin] = useState("Economy");
  const services = [
    {
      icon: <Plane size={42} />,
      title: "Domestic Flights",
      description:
        "Fast and reliable domestic flight reservations with competitive fares.",
    },
    {
      icon: <Globe size={42} />,
      title: "International Flights",
      description:
        "Book flights worldwide with trusted international airlines.",
    },
    {
      icon: <Users size={42} />,
      title: "Group Bookings",
      description:
        "Special flight arrangements for families, companies and tour groups.",
    },
    {
      icon: <Briefcase size={42} />,
      title: "Business & Economy",
      description:
        "Economy and Business Class bookings at the best available prices.",
    },
  ];

  const airlines = [
    {
      name: "SriLankan Airlines",
      logo: srilankanLogo,
      type: "Domestic & International",
      class: "Economy • Business",
    },
    {
      name: "Emirates",
      logo: emiratesLogo,
      type: "International",
      class: "Economy • Business • First",
    },
    {
      name: "Qatar Airways",
      logo: qatarLogo,
      type: "International",
      class: "Economy • Business • First",
    },
    {
      name: "Singapore Airlines",
      logo: singaporeLogo,
      type: "International",
      class: "Economy • Business • First",
    },
    {
      name: "Malaysia Airlines",
      logo: malaysiaLogo,
      type: "International",
      class: "Economy • Business",
    },
    {
      name: "AirAsia",
      logo: airasiaLogo,
      type: "International",
      class: "Economy",
    },
    {
      name: "Etihad Airways",
      logo: etihadLogo,
      type: "International",
      class: "Economy • Business • First",
    },
    {
      name: "FlyDubai",
      logo: flydubaiLogo,
      type: "International",
      class: "Economy • Business",
    },
  ];
const airportOptions = Object.values(airports)
  .filter((airport) => airport.iata)
  .map((airport) => ({
    value: airport.iata,
    label: `${airport.city} (${airport.iata}) - ${airport.name}`,
  }));
  const handleSearch = () => {
  const message = `
Hello AJR Travels,

Trip Type: ${tripType}

From: ${from?.label}

To: ${to?.label}

Departure: ${departure}

Return: ${returnDate}

Cabin: ${cabin}

Adults: ${adults}
Children: ${children}
Infants: ${infants}

Please send me the best flight quotation.
  `;

  window.open(
    `https://wa.me/94742637540?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
const [adults, setAdults] = useState(1);
const [children, setChildren] = useState(0);
const [infants, setInfants] = useState(0);
  return (
    <>
{/* ================= FLIGHT SEARCH ================= */}

<section className="bg-slate-100 py-20">

<div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

<h2 className="text-4xl font-bold text-[#003B95] mb-10">

Flight Search

</h2>

{/* Trip Type */}

<div className="flex gap-8 mb-10">

<label className="flex items-center gap-2">

<input
type="radio"
checked={tripType==="Round Trip"}
onChange={()=>setTripType("Round Trip")}
/>

Round Trip

</label>

<label className="flex items-center gap-2">

<input
type="radio"
checked={tripType==="One Way"}
onChange={()=>setTripType("One Way")}
/>

One Way

</label>

<label className="flex items-center gap-2">

<input
type="radio"
checked={tripType==="Multi City"}
onChange={()=>setTripType("Multi City")}
/>

Multi City

</label>

</div>

<div className="grid md:grid-cols-2 gap-8">

<div>

<label className="font-semibold">

Leaving From

</label>

<Select
options={airportOptions}
value={from}
onChange={setFrom}
placeholder="Search airport..."
className="mt-2"
/>

</div>

<div>

<label className="font-semibold">

Leaving To

</label>

<Select
options={airportOptions}
value={to}
onChange={setTo}
placeholder="Search destination..."
className="mt-2"
/>

</div>
<div>

<label className="font-semibold">

Departure Date

</label>

<input
type="date"
value={departure}
onChange={(e)=>setDeparture(e.target.value)}
className="w-full mt-2 border rounded-xl p-4"
/>

</div>

<div>

<label className="font-semibold">

Return Date

</label>

<input
type="date"
value={returnDate}
onChange={(e)=>setReturnDate(e.target.value)}
className="w-full mt-2 border rounded-xl p-4"
/>

</div>

<div>

<label className="font-semibold">

Cabin Class

</label>

<select
value={cabin}
onChange={(e)=>setCabin(e.target.value)}
className="w-full mt-2 border rounded-xl p-4"
>
<div className="mt-8">

  <label className="font-semibold text-lg">
    Travellers
  </label>

  <div className="bg-white border rounded-2xl p-6 mt-3 space-y-6">

    {/* Adults */}

    <div className="flex justify-between items-center">

      <div>
        <h4 className="font-bold">Adults</h4>
        <p className="text-gray-500 text-sm">12 Years & Above</p>
      </div>

      <div className="flex items-center gap-4">

        <button
          onClick={() => adults > 1 && setAdults(adults - 1)}
          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          -
        </button>

        <span className="text-xl font-bold">
          {adults}
        </span>

        <button
          onClick={() => setAdults(adults + 1)}
          className="w-10 h-10 rounded-full bg-[#003B95] text-white hover:bg-blue-800"
        >
          +
        </button>

      </div>

    </div>

    {/* Children */}

    <div className="flex justify-between items-center">

      <div>
        <h4 className="font-bold">Children</h4>
        <p className="text-gray-500 text-sm">2 - 11 Years</p>
      </div>

      <div className="flex items-center gap-4">

        <button
          onClick={() => children > 0 && setChildren(children - 1)}
          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          -
        </button>

        <span className="text-xl font-bold">
          {children}
        </span>

        <button
          onClick={() => setChildren(children + 1)}
          className="w-10 h-10 rounded-full bg-[#003B95] text-white hover:bg-blue-800"
        >
          +
        </button>

      </div>

    </div>

    {/* Infants */}

    <div className="flex justify-between items-center">

      <div>
        <h4 className="font-bold">Infants</h4>
        <p className="text-gray-500 text-sm">Under 2 Years</p>
      </div>

      <div className="flex items-center gap-4">

        <button
          onClick={() => infants > 0 && setInfants(infants - 1)}
          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          -
        </button>

        <span className="text-xl font-bold">
          {infants}
        </span>

        <button
          onClick={() => setInfants(infants + 1)}
          className="w-10 h-10 rounded-full bg-[#003B95] text-white hover:bg-blue-800"
        >
          +
        </button>

      </div>

    </div>

  </div>

</div>
<option>Economy</option>

<option>Premium Economy</option>

<option>Business</option>

<option>First Class</option>


</select>

</div>

{/* ================= Travellers ================= */}

<div>

  <label className="font-semibold">
    Travellers
  </label>

  <div className="border rounded-xl p-5 mt-2 bg-white">

    {/* Adults */}
    <div className="flex justify-between items-center mb-4">
      <div>
        <h4 className="font-semibold">Adults</h4>
        <p className="text-sm text-gray-500">12+ Years</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => adults > 1 && setAdults(adults - 1)}
          className="w-8 h-8 rounded-full bg-gray-200"
        >
          -
        </button>

        <span>{adults}</span>

        <button
          type="button"
          onClick={() => setAdults(adults + 1)}
          className="w-8 h-8 rounded-full bg-[#003B95] text-white"
        >
          +
        </button>
      </div>
    </div>

    {/* Children */}
    <div className="flex justify-between items-center mb-4">
      <div>
        <h4 className="font-semibold">Children</h4>
        <p className="text-sm text-gray-500">2 - 11 Years</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => children > 0 && setChildren(children - 1)}
          className="w-8 h-8 rounded-full bg-gray-200"
        >
          -
        </button>

        <span>{children}</span>

        <button
          type="button"
          onClick={() => setChildren(children + 1)}
          className="w-8 h-8 rounded-full bg-[#003B95] text-white"
        >
          +
        </button>
      </div>
    </div>

    {/* Infants */}
    <div className="flex justify-between items-center">
      <div>
        <h4 className="font-semibold">Infants</h4>
        <p className="text-sm text-gray-500">Under 2 Years</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => infants > 0 && setInfants(infants - 1)}
          className="w-8 h-8 rounded-full bg-gray-200"
        >
          -
        </button>

        <span>{infants}</span>

        <button
          type="button"
          onClick={() => setInfants(infants + 1)}
          className="w-8 h-8 rounded-full bg-[#003B95] text-white"
        >
          +
        </button>
      </div>
    </div>

  </div>

</div>
<div className="mt-10">

      <button
        onClick={handleSearch}
        className="w-full bg-[#003B95] hover:bg-blue-800 text-white font-bold py-4 rounded-xl text-lg transition"
      >
        -- Contact --
      </button>

    </div>
</div>

</div>

</section>

      {/* HERO */}

      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05')",
        }}
      >

        <div className="absolute inset-0 bg-[#003B95]/70"></div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">

          <div>

            <h1 className="text-6xl font-black mb-6">
              Air Ticketing
            </h1>

            <p className="text-2xl max-w-3xl leading-10">
              Book Domestic and International Air Tickets
              with confidence through AJR Travels Pvt Ltd.
            </p>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-[#003B95]">
              Our Air Ticketing Services
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              We provide professional airline booking services
              for individuals, families and businesses.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.map((service, index) => (

              <div
                key={index}
                className="bg-slate-50 rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >

                <div className="text-[#003B95] mb-6">

                  {service.icon}

                </div>

                <h3 className="text-2xl font-bold mb-4">

                  {service.title}

                </h3>

                <p className="text-gray-600 leading-8">

                  {service.description}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* ================= AIRLINES ================= */}

      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-[#003B95]">
              Airlines We Work With
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              We book flights with trusted airlines across the world.
            </p>

          </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

  {airlines.map((airline, index) => (

    <div
      key={index}
      className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition duration-300 flex flex-col items-center"
    >

      <img
        src={airline.logo}
        alt={airline.name}
        className="h-16 object-contain mb-5"
      />

      <h3 className="text-lg font-bold text-center">
        {airline.name}
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        {airline.type}
      </p>

      <p className="text-sm text-gray-500">
        {airline.class}
      </p>

      <a
  href={`https://wa.me/94742637540?text=${encodeURIComponent(
    `Hello AJR Travels,

I would like to book a flight with ${airline.name}.

Please send me the available flights and prices.

Thank you.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 inline-block bg-[#003B95] text-white px-5 py-2 rounded-full hover:bg-blue-800 transition"
>
  Book with AJR
</a>

    </div>

  ))}



          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-[#003B95]">
              Why Choose AJR Travels?
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Best Flight Prices",
              "Trusted Travel Experts",
              "Fast Ticket Confirmation",
              "24/7 Customer Support",
              "Worldwide Destinations",
              "Secure Booking Process",
            ].map((item, index) => (

              <div
                key={index}
                className="bg-slate-50 rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition"
              >

                <div className="text-5xl mb-5">
                  ✅
                </div>

                <h3 className="text-2xl font-bold text-[#003B95]">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= BOOKING PROCESS ================= */}

      <section className="py-20 bg-slate-50">

        <div className="max-w-6xl mx-auto px-8">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-[#003B95]">
              Booking Process
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            {[
              "Tell us your destination",
              "Receive the best quotation",
              "Confirm your booking",
              "Receive your e-ticket",
            ].map((step, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8"
              >

                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#003B95] text-white flex items-center justify-center text-2xl font-bold">

                  {index + 1}

                </div>

                <p className="font-semibold">
                  {step}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section className="py-20 bg-[#003B95] text-white">

        <div className="max-w-5xl mx-auto text-center px-8">

          <h2 className="text-5xl font-bold">
            Ready To Book Your Flight?
          </h2>

          <p className="mt-6 text-xl text-blue-100">
            Contact AJR Travels today for the best airfare deals and
            professional booking assistance.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">

            <a
              href="https://wa.me/94742637540"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-[#003B95] px-8 py-4 rounded-full font-bold hover:scale-105 transition"
            >
              WhatsApp Us
            </a>

            <a
              href="tel:+94742637540"
              className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#003B95] transition"
            >
              Call Now
            </a>

          </div>

        </div>

      </section>
      <Footer />

    </>
  );
}

export default AirTicket;