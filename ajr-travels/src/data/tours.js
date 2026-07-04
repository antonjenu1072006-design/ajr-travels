// Images
import bali from "../assets/tours/bali.jpg";
import malaysia from "../assets/tours/malaysia.jpg";
import maldives from "../assets/tours/maldives.jpg";
import thailand from "../assets/tours/thailand.jpg";
import kerala from "../assets/tours/kerala.jpg";
import manali from "../assets/tours/manali.jpg";
import bodhgaya from "../assets/tours/bodhgaya.jpg";
import chennai from "../assets/tours/chennai.jpg";
import srilanka from "../assets/tours/srilanka.jpg";
import bali1 from "../assets/gallery/bali/bali-1.jpg";
import bali2 from "../assets/gallery/bali/bali-2.jpg";
import bali3 from "../assets/gallery/bali/bali-3.jpg";
import bali4 from "../assets/gallery/bali/bali-4.jpg";
const tours = [
  {
    id: 1,
    slug: "bali",
    title: "Bali",
    country: "Indonesia",
    duration: "4 Nights / 5 Days",
    price: "Negotiable",
    image: bali,
    featured: true,
    rating: 5,
    departure: "April 04",
    highlights: [
      "Tanah Lot Temple",
      "Nusa Penida",
      "West Island Tour",
      "White Water Rafting",
      "ATV Adventure",
      "Uluwatu Temple",
    ],
    includes: [
      "Hotel",
      "Breakfast",
      "Airport Transfers",
      "Sightseeing",
      "Tour Guide",
    ],
     gallery: [
    bali1,
    bali2,
    bali3,
    bali4,
],
  },

  {
    id: 2,
    slug: "malaysia",
    title: "Malaysia",
    country: "Malaysia",
    duration: "3 Nights / 4 Days",
     price: "Negotiable",
    image: malaysia,
    featured: true,
    rating: 5,
    departure: "April 12",
    highlights: [
      "Batu Caves",
      "Genting Highlands",
      "Skyway Cable Car",
      "Aquaria KLCC",
      "Petronas Towers",
    ],
    includes: [
      "Hotel",
      "Breakfast",
      "Transfers",
      "Sightseeing",
    ],
    
  },

  {
    id: 3,
    slug: "maldives",
    title: "Maldives Honeymoon",
    country: "Maldives",
    duration: "5 Days / 4 Nights",
      price: "Negotiable",
    image: maldives,
    featured: true,
    rating: 5,
    departure: "March 25",
    highlights: [
      "Water Villa",
      "Beach Villa",
      "Half Board",
      "Speed Boat Transfer",
    ],
    includes: [
      "Resort",
      "Breakfast",
      "Transfers",
    ],
  },

  {
    id: 4,
    slug: "thailand",
    title: "Thailand",
    country: "Thailand",
    duration: "3 Nights / 4 Days",
      price: "Negotiable",
    image: thailand,
    featured: false,
    rating: 5,
    departure: "May",
    highlights: [
      "Bangkok",
      "Pattaya",
      "Breakfast",
      "Hotel Stay",
    ],
    includes: [
      "Hotel",
      "Breakfast",
      "Transport",
      "Guide",
    ],
  },

  {
    id: 5,
    slug: "kerala",
    title: "Kerala",
    country: "India",
    duration: "4 Days / 5 Nights",
     price: "Negotiable",
    image: kerala,
    featured: false,
    rating: 5,
    departure: "Available",
    highlights: [
      "Cochin",
      "Munnar",
      "Thekkady",
      "Alleppey Houseboat",
    ],
    includes: [
      "Hotel",
      "Meals",
      "Transport",
      "Guide",
    ],
  },

  {
    id: 6,
    slug: "manali",
    title: "Manali",
    country: "India",
    duration: "5 Nights / 6 Days",
    price: "Negotiable",
    image: manali,
    featured: false,
    rating: 5,
    departure: "Winter Season",
    highlights: [
      "Delhi",
      "Shimla",
      "Kullu",
      "Solang Valley",
    ],
    includes: [
      "Hotel",
      "Breakfast",
      "Transport",
      "Sightseeing",
    ],
  },

  {
    id: 7,
    slug: "bodhgaya",
    title: "Bodh Gaya",
    country: "India",
    duration: "10 Nights / 11 Days",
    price: "Negotiable",
    image: bodhgaya,
    featured: false,
    rating: 5,
    departure: "Available",
    highlights: [
      "Taj Mahal",
      "Varanasi",
      "Mahabodhi Temple",
      "Ayodhya",
    ],
    includes: [
      "Hotel",
      "Breakfast",
      "Transport",
      "Guide",
    ],
  },

  {
    id: 8,
    slug: "chennai",
    title: "Chennai",
    country: "India",
    duration: "6 Nights / 7 Days",
     price: "Negotiable",
    image: chennai,
    featured: false,
    rating: 5,
    departure: "Available",
    highlights: [
      "Kanchipuram",
      "Rameswaram",
      "Velankanni",
      "Pondicherry",
    ],
    includes: [
      "Hotel",
      "Breakfast",
      "Transport",
      "Guide",
    ],
  },

  {
    id: 9,
    slug: "srilanka",
    title: "Sri Lanka Tour",
    country: "Sri Lanka",
    duration: "6 Nights / 7 Days",
      price: "Negotiable",
    image: srilanka,
    featured: false,
    rating: 5,
    departure: "Any Time",
    highlights: [
      "Galle",
      "Ella",
      "Nuwara Eliya",
      "Kandy",
      "Colombo",
    ],
    includes: [
      "Hotel",
      "Breakfast",
      "Transport",
      "Guide",
    ],
  },
];

export default tours;