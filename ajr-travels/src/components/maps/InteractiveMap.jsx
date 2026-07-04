import { useState } from "react";
import tourLocations from "../../data/tourLocations";

export default function InteractiveMap({ tour }) {

  const locations = tourLocations[tour.slug] || [];

  const [selected, setSelected] = useState(
    locations.length > 0 ? locations[0] : null
  );

  return (
    <section className="py-20 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-[#003B95] mb-14">
          Explore the Tour Map
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* MAP */}

          <div className="lg:col-span-2">

            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">

              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-[650px] object-cover"
              />

              {locations.map((location) => (

                <button
                  key={location.id}
                  onClick={() => setSelected(location)}
                  className="absolute text-red-600 text-3xl hover:scale-125 transition"
                  style={{
                    left: location.x,
                    top: location.y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  📍
                </button>

              ))}

            </div>

          </div>

          {/* INFO */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            {selected ? (

              <>
                <p className="text-blue-700 font-semibold">
                  {selected.day}
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  {selected.name}
                </h3>

                <p className="mt-6 text-gray-600 leading-8">
                  {selected.description}
                </p>
              </>

            ) : (

              <p>No locations available.</p>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}