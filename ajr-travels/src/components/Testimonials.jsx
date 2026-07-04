import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Anton Jenu",
    role: "Verified Customer",
    review:
      "I had a great experience with AJR Travels. The staff were friendly, professional, and always ready to help. The booking process was smooth and hassle-free. I highly recommend AJR Travels.",
  },
  {
    name: "Nadarajah Akshayan",
    role: "Local Guide",
    review:
      "I recently booked my travel tickets through AJR Travels. They offered the best prices, and the entire process was smooth and stress-free. Excellent service!",
  },
  {
    name: "Soruban Soru",
    role: "Verified Customer",
    review:
      "Their customer service was excellent. They handled my visa and air ticket arrangements professionally from start to finish. Highly recommended.",
  },
  {
    name: "AJ Jeszuran",
    role: "Verified Customer",
    review:
      "Excellent and reliable service! AJR Travels made my travel process easy and stress-free. Friendly staff, quick response and affordable prices.",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-4xl mx-auto px-8 text-center">

        <h2 className="text-5xl font-bold text-[#003B95] mb-4">
          What Our Customers Say
        </h2>

        <p className="text-gray-500 mb-14">
          Real reviews from our valued customers.
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-12 relative">

          <div className="flex justify-center mb-6">

            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={22}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}

          </div>

          <p className="text-xl leading-10 text-gray-600 italic">
            "{reviews[current].review}"
          </p>

          <h3 className="text-2xl font-bold text-[#003B95] mt-10">
            {reviews[current].name}
          </h3>

          <p className="text-gray-500">
            {reviews[current].role}
          </p>

          <button
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#003B95] text-white p-3 rounded-full hover:bg-blue-900 transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#003B95] text-white p-3 rounded-full hover:bg-blue-900 transition"
          >
            <ChevronRight />
          </button>

        </div>

        <div className="flex justify-center gap-3 mt-8">

          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index
                  ? "bg-[#003B95]"
                  : "bg-gray-300"
              }`}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;