import { useState } from "react";
export default function Gallery({ images = [] }) {
  const [selected, setSelected] = useState(null);

  if (!images.length) return null;

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-[#003B95]">
            Tour Gallery
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Discover the beauty of this destination.
          </p>

        </div>

        {/* Gallery Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {images.map((image, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg cursor-pointer group"
              onClick={() => setSelected(index)}
            >

              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

            </div>

          ))}

        </div>

      </div>

      {/* Fullscreen */}

      {selected !== null && (

        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">

          {/* Close */}

          <button
            onClick={() => setSelected(null)}
            className="absolute top-8 right-8 text-white text-5xl"
          >
            ×
          </button>

          {/* Previous */}

          <button
            onClick={() =>
              setSelected(
                selected === 0
                  ? images.length - 1
                  : selected - 1
              )
            }
            className="absolute left-8 text-white text-5xl"
          >
            ❮
          </button>

          {/* Image */}

          <img
            src={images[selected]}
            alt=""
            className="max-w-[90%] max-h-[85vh] rounded-3xl shadow-2xl"
          />

          {/* Next */}

          <button
            onClick={() =>
              setSelected(
                selected === images.length - 1
                  ? 0
                  : selected + 1
              )
            }
            className="absolute right-8 text-white text-5xl"
          >
            ❯
          </button>

        </div>

      )}

    </section>
  );
}