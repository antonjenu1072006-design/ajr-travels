import {
  BadgeCheck,
  Headset,
  Clock3,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Trusted Travel Agency",
    text: "Years of experience helping travelers discover the world.",
  },
  {
    icon: Globe,
    title: "Worldwide Tours",
    text: "Explore Asia and international destinations with confidence.",
  },
  {
    icon: Clock3,
    title: "Fast Visa Processing",
    text: "Quick, reliable, and hassle-free visa assistance.",
  },
  {
    icon: Headset,
    title: "24/7 Customer Support",
    text: "Our team is always ready to assist before and during your journey.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-serif text-center mb-4">
          Why Choose AJR Travels?
        </h2>

        <p className="text-center text-blue-200 mb-16">
          We make every journey simple, safe, and unforgettable.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white text-blue-900 rounded-3xl p-8 text-center shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <Icon
                  size={48}
                  className="mx-auto mb-5 text-blue-700"
                />

                <h3 className="text-2xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}