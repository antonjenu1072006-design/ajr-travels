import baliImage from "../../assets/indonesia.jpg";

const bali = {
  id: 1,

  slug: "bali",

  title: "Bali",

  country: "Indonesia",

  image: baliImage,

  duration: "4 Nights / 5 Days",

  price: "LKR 99,999",

  departure: "April 04",

  hotel: "4 Star Hotel",

  transport: "Private Vehicle",

  meals: "Breakfast Included",

  overview:
    "Experience the beauty of Bali with breathtaking beaches, ancient temples, exciting adventures and unforgettable cultural experiences. Discover stunning landscapes, cultural heritage, thrilling activities and world-famous beaches with AJR Travels.",

  highlights: [
    {
      title: "Tanah Lot Temple",
      day: "Day 2",
      location: "Tanah Lot",
      description:
        "Visit Bali's iconic sea temple and enjoy one of the island's most beautiful sunsets.",
    },
    {
      title: "West Island Tour",
      day: "Day 2",
      location: "Bali",
      description:
        "Explore the western side of Bali with scenic viewpoints and local attractions.",
    },
    {
      title: "White Water Rafting",
      day: "Day 3",
      location: "Ubud",
      description:
        "Enjoy an exciting rafting adventure through Bali's tropical rivers.",
    },
    {
      title: "ATV Adventure",
      day: "Day 3",
      location: "Ubud",
      description:
        "Ride powerful ATVs through forests, rivers and traditional villages.",
    },
    {
      title: "Nusa Penida",
      day: "Day 4",
      location: "Nusa Penida",
      description:
        "Discover breathtaking beaches, crystal-clear water and famous viewpoints.",
    },
    {
      title: "Uluwatu Temple",
      day: "Day 4",
      location: "Uluwatu",
      description:
        "Visit the spectacular cliffside temple overlooking the Indian Ocean.",
    },
  ],

  includes: [
    "4 Star Hotel Accommodation",
    "Daily Breakfast",
    "Airport Transfers",
    "Private Transportation",
    "Professional Tour Guide",
    "Sightseeing Tours",
  ],

  excludes: [
    "Visa Fees",
    "Travel Insurance",
    "Lunch & Dinner",
    "Personal Expenses",
    "Tips & Gratuities",
  ],

 itinerary: [
  {
    day: "Day 1",
    title: "Arrival in Bali",
    description: "Airport pickup, hotel check-in and free leisure time.",
  },
  {
    day: "Day 2",
    title: "Tanah Lot Temple",
    description: "Visit the famous sea temple and enjoy the sunset.",
  },
  {
    day: "Day 3",
    title: "Adventure Activities",
    description: "White Water Rafting and ATV Adventure.",
  },
  {
    day: "Day 4",
    title: "Nusa Penida Tour",
    description: "Explore Bali's beautiful island.",
  },
  {
    day: "Day 5",
    title: "Departure",
    description: "Hotel checkout and airport transfer.",
  },
],
  mapLocations: [
    {
      name: "Ngurah Rai International Airport",
      lat: -8.748,
      lng: 115.167,
      day: 1,
    },
    {
      name: "Tanah Lot Temple",
      lat: -8.621,
      lng: 115.086,
      day: 2,
    },
    {
      name: "Ubud",
      lat: -8.506,
      lng: 115.262,
      day: 3,
    },
    {
      name: "Nusa Penida",
      lat: -8.727,
      lng: 115.544,
      day: 4,
    },
    {
      name: "Uluwatu Temple",
      lat: -8.829,
      lng: 115.085,
      day: 4,
    },
  ],

  gallery: [
    bali1,
    bali2,
    bali3,
    bali4,
],

  whatsappMessage:
    "Hello AJR Travels! I would like to book the Bali Tour Package. Please send me more details.",

  rating: 5,
};

export default bali;