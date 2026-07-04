export default function Timeline({ itinerary = [] }) {

  if (!itinerary.length) return null;

  return (

    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-[#003B95]">
            Tour Itinerary
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Follow your journey day by day.
          </p>

        </div>

        <div className="relative border-l-4 border-blue-700 ml-5">

          {itinerary.map((item, index) => (

            <div
              key={index}
              className="relative pl-12 pb-14"
            >

              <div className="absolute -left-[18px] top-1 w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold shadow-lg">

                {index + 1}

              </div>

              <p className="text-blue-700 font-semibold uppercase tracking-wider">

                {item.day}

              </p>

              <h3 className="text-3xl font-bold mt-2">

                {item.title}

              </h3>

              <p className="text-gray-600 mt-4 leading-8">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}