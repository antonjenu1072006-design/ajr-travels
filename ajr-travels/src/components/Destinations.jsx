const destinations = [
  { name: "Sri Lanka", image: "/destinations/srilanka.jpg" },
  { name: "Maldives", image: "/destinations/maldives.jpg" },
  { name: "Dubai", image: "/destinations/dubai.jpg" },
  { name: "Malaysia", image: "/destinations/malaysia.jpg" },
  { name: "Singapore", image: "/destinations/singapore.jpg" },
  { name: "Vietnam", image: "/destinations/vietnam.jpg" },
  { name: "Indonesia", image: "/destinations/indonesia.jpg" },
  { name: "China", image: "/destinations/china.jpg" },
  { name: "India", image: "/destinations/india.jpg" },
  { name: "Thailand", image: "/destinations/thailand.jpg" },
];
export default function Destinations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-serif text-center text-blue-900 mb-4">
          Popular Destinations
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Explore our most popular travel destinations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {destinations.map((place) => (
            <div
              key={place.name}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-serif text-blue-900">
                  {place.name}
                </h3>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}