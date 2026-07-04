import { Link } from "react-router-dom";
import tours from "../data/tours";

export default function TourPackages() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-[#003B95]">
            Featured Tour Packages
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Discover unforgettable journeys with AJR Travels.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {tours.map((tour) => (

            <div
              key={tour.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <div className="flex justify-between items-center mb-3">

                  <span className="bg-blue-100 text-[#003B95] px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.country}
                  </span>

                  <span className="text-yellow-500 font-bold">
                    ⭐ {tour.rating}.0
                  </span>

                </div>

                <h3 className="text-2xl font-bold text-[#003B95]">
                  {tour.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {tour.duration}
                </p>

                <p className="mt-4 text-3xl font-black text-[#003B95]">
                  {tour.price}
                </p>

                <p className="text-gray-500 mt-2">
                  Departure: {tour.departure}
                </p>

                <Link
                  to={`/tour/${tour.slug}`}
                  className="mt-6 block w-full bg-[#003B95] hover:bg-blue-900 text-white py-3 rounded-xl text-center font-bold transition"
                >
                  View Package
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}