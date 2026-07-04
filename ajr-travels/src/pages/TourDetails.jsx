import { useParams } from "react-router-dom";
import tours from "../data/tours";
import Gallery from "../components/gallery/Gallery";
import Timeline from "../components/tours/Timeline";
import InteractiveMap from "../components/maps/InteractiveMap";
export default function TourDetails() {
  const { slug } = useParams();

  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    return (
      <div className="py-40 text-center text-4xl font-bold">
        Tour Not Found
      </div>
    );
  }

  return (
    <div>

      {/* HERO */}
      <section
        className="relative h-[650px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${tour.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">

          <div className="max-w-xl text-white">

            <p className="uppercase tracking-[5px] text-blue-300">
              {tour.country}
            </p>

            <h1 className="text-7xl font-bold mt-4">
              {tour.title}
            </h1>

            <p className="mt-6 text-xl">
              Discover unforgettable experiences with AJR Travels.
            </p>

            <div className="flex gap-6 mt-8">

              <div className="bg-white/20 backdrop-blur-lg px-5 py-3 rounded-xl">
                <p className="text-sm">Duration</p>
                <h3>{tour.duration}</h3>
              </div>

              <div className="bg-white/20 backdrop-blur-lg px-5 py-3 rounded-xl">
                <p className="text-sm">Price</p>
                <h3>{tour.price}</h3>
              </div>

            </div>

            <a
              href="https://wa.me/947742637540"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-semibold transition"
            >
              Book on WhatsApp
            </a>

          </div>

        </div>
      </section>

      {/* QUICK INFO */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h3 className="font-bold text-blue-900">🌍 Country</h3>
            <p>{tour.country}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h3 className="font-bold text-blue-900">📅 Duration</h3>
            <p>{tour.duration}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h3 className="font-bold text-blue-900">💰 Price</h3>
            <p>{tour.price}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h3 className="font-bold text-blue-900">✈ Departure</h3>
            <p>{tour.departure}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h3 className="font-bold text-blue-900">🏨 Hotel</h3>
            <p>Included</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h3 className="font-bold text-blue-900">🧭 Guide</h3>
            <p>Included</p>
          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-blue-900 mb-12">
          
            About This Tour
          </h2>

          <div className="bg-slate-100 rounded-3xl p-10 shadow">

            <p className="text-lg leading-9 text-black-700">

              Discover Your Next Adventure with AJR Travels

At AJR Travels, we believe every journey should be unforgettable. Whether you're looking for breathtaking landscapes, rich cultural experiences, relaxing beach escapes, or exciting city adventures, we offer carefully planned tours designed to create lasting memories. Our experienced team takes care of every detail, from comfortable transportation and quality accommodation to guided sightseeing, allowing you to enjoy your trip without any worries.

From local getaways to international destinations, our tour packages are suitable for families, couples, friends, and solo travelers. We focus on providing excellent service, affordable prices, and personalized travel experiences that match your interests and budget.

Let AJR Travels turn your dream vacation into reality. Explore the world with confidence, comfort, and exceptional service—because every journey begins with a single step, and we're here to make every step unforgettable.

            </p>

          </div>

        </div>

      </section>
{/* INCLUDES */}

<section>
...
</section>

{/* TIMELINE */}

<Timeline itinerary={tour.itinerary} />

{/* GALLERY */}

<Gallery images={tour.gallery} />

{/* MAP */}

<InteractiveMap tour={tour} />

</div>
);
}