import { useState } from "react";
import Footer from "../components/Footer"
import GalleryComponent from "../components/gallery/Gallery";

// Bali
import bali1 from "../assets/gallery/bali/bali-1.jpg";
import bali2 from "../assets/gallery/bali/bali-2.jpg";
import bali3 from "../assets/gallery/bali/bali-3.jpg";
import bali4 from "../assets/gallery/bali/bali-4.jpg";

// Malaysia
import malaysia1 from "../assets/gallery/malaysia/malaysia-1.jpg";
import malaysia2 from "../assets/gallery/malaysia/malaysia-2.jpg";

// Maldives
import maldives1 from "../assets/gallery/maldives/maldives-1.jpg";

// Thailand
import thailand1 from "../assets/gallery/thailand/thailand-1.jpg";

export default function Gallery() {

  const [country, setCountry] = useState("all");

  const galleries = {
    bali: [bali1, bali2, bali3, bali4],
    malaysia: [malaysia1, malaysia2],
    maldives: [maldives1],
    thailand: [thailand1],
  };

  const images =
    country === "all"
      ? Object.values(galleries).flat()
      : galleries[country];

  return (
    <div className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-[#003B95]">
          Travel Gallery
        </h1>

        <p className="text-center text-gray-500 mt-4 mb-10">
          Explore unforgettable memories from around the world.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">

          {["all","bali","malaysia","maldives","thailand"].map((item)=>(

            <button
              key={item}
              onClick={()=>setCountry(item)}
              className={`px-6 py-3 rounded-full transition ${
                country===item
                ? "bg-[#003B95] text-white"
                : "bg-gray-100 hover:bg-[#003B95] hover:text-white"
              }`}
            >
              {item.charAt(0).toUpperCase()+item.slice(1)}
            </button>

          ))}

        </div>

        <GalleryComponent images={images} />

      </div>
<Footer />
    </div>
    
  );
}