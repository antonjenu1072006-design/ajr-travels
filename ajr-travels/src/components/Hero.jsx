import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import thailand from "../assets/thailand.jpg";
import maldives from "../assets/maldives.jpg";
import singapore from "../assets/singapore.jpg";
import srilanka from "../assets/srilanka.jpg";
import vietnam from "../assets/vietnam.jpg";

const slides = [
  thailand,
  maldives,
  singapore,
  srilanka,
  vietnam,
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid lg:grid-cols-[42%_58%] gap-8 items-center">

          {/* LEFT */}

          <div className="relative z-20">

            <p className="uppercase tracking-[6px] text-[#003B95] font-semibold mb-5">
              Welcome to AJR Travels Pvt Ltd
            </p>

            <h1 className="text-6xl lg:text-7xl font-serif leading-tight text-[#002D72]">
              Unforgettable
              <br />
              Memories
              <br />
              <span className="italic text-[#003B95]">
                with AJR Travels
              </span>
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-9 max-w-lg">
              Your trusted partner for visa services,
              air ticketing and unforgettable travel experiences
              around the world.
            </p>

            <div className="flex gap-5 mt-10 flex-wrap">

              {/* Contact Button */}

              <Link to="/contact">
                <button className="bg-[#003B95] text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-blue-900 transition">
                  Contact Us
                  <ArrowRight size={20} />
                </button>
              </Link>

              {/* Explore Tours Button */}

              <Link to="/tour-packages">
                <button className="border-2 border-[#003B95] text-[#003B95] px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#003B95] hover:text-white transition">
                  Explore Tours
                  <ArrowRight size={20} />
                </button>
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative h-[650px] overflow-hidden rounded-[40px]">

            <img
              src={slides[current]}
              alt="Travel"
              className="absolute inset-0 w-full h-full object-cover animate-slowZoom"
            />

            {/* Left Fade */}

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, white 0%, rgba(255,255,255,0.92) 18%, rgba(255,255,255,0.65) 35%, rgba(255,255,255,0) 55%)",
              }}
            />

            {/* Next Button */}

            <button
              onClick={nextSlide}
              className="absolute right-5 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-xl hover:bg-[#003B95] hover:text-white transition z-30"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">

              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`transition-all duration-300 rounded-full ${
                    current === index
                      ? "w-10 h-3 bg-white"
                      : "w-3 h-3 bg-white/50"
                  }`}
                />
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;