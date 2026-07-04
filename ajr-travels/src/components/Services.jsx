import {
  Plane,
  Ticket,
  Briefcase,
  ShieldCheck,
  GraduationCap,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Ticket,
    title: "Visa Services",
    text: "Fast and reliable visa assistance for your dream destinations.",
  },
  {
    icon: Plane,
    title: "Air Ticketing",
    text: "Affordable flights with the world's leading airlines.",
  },
  {
    icon: Globe,
    title: "Holiday Packages",
    text: "Customized travel experiences across Asia and the world.",
  },
  {
    icon: ShieldCheck,
    title: "Travel Insurance",
    text: "Travel safely with complete insurance coverage.",
  },
  {
    icon: GraduationCap,
    title: "Student Visa",
    text: "Helping students achieve their education goals overseas.",
  },
  {
    icon: Briefcase,
    title: "Overseas Jobs",
    text: "Career opportunities in leading international companies.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-serif text-center text-blue-900 mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mb-14">
          Everything you need for a perfect journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <Icon
                  size={40}
                  className="text-blue-700 mb-4"
                />

                <h3 className="font-semibold text-lg text-blue-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-6">
                  {service.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}