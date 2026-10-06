import tassili from "@/public/assets/dest-tassili.webp";
import algiers from "@/public/assets/dest-algiers.webp";
import constantine from "@/public/assets/dest-constantine.webp";
import djemila from "@/public/assets/dest-djemila.webp";
import ghardaia from "@/public/assets/dest-ghardaia.webp";
import tipaza from "@/public/assets/dest-tipaza.webp";
import camel from "@/public/assets/tour-camel.jpg";
import culture from "@/public/assets/tour-culture.webp";
import coast from "@/public/assets/tour-coast.jpg";
import hoggar from "@/public/assets/tour-hoggar.webp";

import { StaticImageData } from "next/image";

export type Package = {
  slug: string;
  title: string;
  region: string;
  tagline: string;
  duration: string;
  groupSize: string;
  difficulty: string;
  price: number;
  rating: number;
  cover: StaticImageData;
  gallery: StaticImageData[];
  tags: string[];
  description: string;
  highlights: string[];
  itinerary: { day: string; title: string; text: string }[];
  includes: string[];
  excludes: string[];
  faqs: { q: string; a: string }[];
};

export const packages: Package[] = [
  {
    slug: "tassili-najjer-expedition",
    title: "Tassili n'Ajjer Expedition",
    region: "Djanet, Sahara",
    tagline: "Eight days through prehistoric rock cathedrals.",
    duration: "8 days",
    groupSize: "4–10 travelers",
    difficulty: "Moderate",
    price: 199000,
    rating: 4.9,
    cover: tassili,
    gallery: [tassili, camel, hoggar, ghardaia, djemila, coast],
    tags: ["UNESCO", "Sahara", "Trekking"],
    description:
      "A guided crossing of the Tassili plateau with Tuareg companions, sleeping under the cleanest sky on earth and reading 12,000-year-old paintings on stone.",
    highlights: [
      "Sunrise at Tin Merzouga dunes",
      "Tadrart Rouge rock arches",
      "Sefar prehistoric paintings",
      "Three nights of Tuareg camp",
      "4x4 transfer from Djanet airport",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Djanet",
        text: "Welcome at the airport, briefing, and dinner under the stars at our riad.",
      },
      {
        day: "Day 2",
        title: "Into the plateau",
        text: "4x4 to the Tassili foothills, light hike to the first camp.",
      },
      {
        day: "Day 3",
        title: "Tin Merzouga",
        text: "Sunrise on the highest dunes of the region.",
      },
      {
        day: "Day 4",
        title: "Sefar paintings",
        text: "Full day among the prehistoric galleries with our Tuareg guide.",
      },
      {
        day: "Day 5",
        title: "Tadrart arches",
        text: "Cross the red Tadrart and its sandstone arches.",
      },
      {
        day: "Day 6",
        title: "Oasis day",
        text: "Rest, swim and tea in a hidden guelta.",
      },
      {
        day: "Day 7",
        title: "Return to Djanet",
        text: "Slow drive back, farewell dinner with music.",
      },
      { day: "Day 8", title: "Departure", text: "Transfer to airport." },
    ],
    includes: [
      "Local Tuareg guides",
      "All meals & water",
      "4x4 transport",
      "Camping gear",
      "Park permits",
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Personal gear",
      "Tips",
    ],
    faqs: [
      {
        q: "How fit do I need to be for this trek?",
        a: "Moderate fitness — we walk 3–5 hours per day on sand and rock at a relaxed pace.",
      },
      {
        q: "What is the best season for Tassili?",
        a: "October to March. We do not run this trip from June to August due to extreme heat.",
      },
      {
        q: "Is camping comfortable?",
        a: "We provide sturdy tents, sleeping pads, and warm bedding. Nights can be cold so layers help.",
      },
      {
        q: "Do I need a special visa?",
        a: "Most nationalities receive an electronic tourist visa for the south. Rihla DZ handles the invitation letter.",
      },
      {
        q: "Can dietary needs be accommodated?",
        a: "Yes. Vegetarian, halal, and gluten-free are easy. Tell us at booking.",
      },
    ],
  },
  {
    slug: "algiers-the-white-city",
    title: "Algiers, the White City",
    region: "Algiers",
    tagline: "Four days inside the Mediterranean's most layered capital.",
    duration: "4 days",
    groupSize: "2–8 travelers",
    difficulty: "Easy",
    price: 79000,
    rating: 4.8,
    cover: algiers,
    gallery: [algiers, culture, coast, tipaza, djemila, constantine],
    tags: ["City", "Culture", "Coast"],
    description:
      "From the Casbah's stairs to the Bay of Algiers and the Roman ruins of Tipaza, a slow walk through 3,000 years of layered history.",
    highlights: [
      "Guided Casbah walk with a local historian",
      "Sunset at Notre-Dame d'Afrique",
      "Day trip to Tipaza & Mount Chenoua",
      "Tasting menu of Algiers street food",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Lower Casbah",
        text: "Pickup, settle in a boutique riad, evening Casbah lanterns walk.",
      },
      {
        day: "Day 2",
        title: "Upper Casbah",
        text: "Ottoman palaces, Ketchaoua mosque, lunch with a local family.",
      },
      {
        day: "Day 3",
        title: "Tipaza day trip",
        text: "Roman ruins by the sea, swim, fresh seafood lunch.",
      },
      {
        day: "Day 4",
        title: "Modern Algiers",
        text: "Bardo museum and Bay promenade, transfer.",
      },
    ],
    includes: [
      "Boutique riad stay",
      "Daily breakfast",
      "Private guide",
      "All transport",
    ],
    excludes: ["Flights", "Lunches & dinners (except 2)", "Personal expenses"],
    faqs: [
      {
        q: "Is Algiers walkable?",
        a: "The Casbah is steep and stair-heavy. Comfortable shoes are essential.",
      },
      {
        q: "What languages are spoken?",
        a: "Arabic and French dominate. Our guides speak fluent English and French.",
      },
      {
        q: "How safe is the city?",
        a: "Algiers is safe for organized travel. We accompany you everywhere outside the riad.",
      },
      {
        q: "Is alcohol available?",
        a: "Yes, in licensed restaurants and hotels — not in the Casbah itself.",
      },
      {
        q: "Can we customize the itinerary?",
        a: "Absolutely. Add cooking classes, hammam, or a coastal cruise on request.",
      },
    ],
  },
  {
    slug: "hoggar-mountains-traverse",
    title: "Hoggar Mountains Traverse",
    region: "Tamanrasset",
    tagline: "Volcanic peaks, Tuareg culture and the silence of the south.",
    duration: "10 days",
    groupSize: "6–12 travelers",
    difficulty: "Challenging",
    price: 249000,
    rating: 4.9,
    cover: hoggar,
    gallery: [hoggar, camel, tassili, ghardaia, culture, coast],
    tags: ["Mountains", "Sahara", "Adventure"],
    description:
      "Sunrise on the Assekrem plateau, Father de Foucauld's hermitage, and slow days with Tuareg families in the heart of the Hoggar.",
    highlights: [
      "Assekrem sunrise at 2,728 m",
      "Tahat — Algeria's highest peak",
      "Two nights with a Tuareg family",
      "Stargazing photography session",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Tamanrasset",
        text: "Arrival, briefing, market visit.",
      },
      {
        day: "Day 2-3",
        title: "Atakor plateau",
        text: "Drive into the volcanic field, first camp.",
      },
      {
        day: "Day 4",
        title: "Assekrem",
        text: "Sunrise hike to the hermitage.",
      },
      {
        day: "Day 5-7",
        title: "Tahat trek",
        text: "Three-day approach to Algeria's highest peak.",
      },
      {
        day: "Day 8-9",
        title: "Tuareg homestay",
        text: "Slow days with a Tuareg family in their valley.",
      },
      {
        day: "Day 10",
        title: "Return",
        text: "Drive back to Tamanrasset, departure.",
      },
    ],
    includes: [
      "All camping logistics",
      "Local Tuareg guides",
      "Permits",
      "All meals",
      "Domestic transfers",
    ],
    excludes: ["International flights", "Insurance", "Tips"],
    faqs: [
      {
        q: "How challenging is the trek?",
        a: "Tahat ascent is non-technical but requires good cardio and acclimatization.",
      },
      {
        q: "What altitude do we sleep at?",
        a: "Most camps are between 1,800 m and 2,400 m.",
      },
      {
        q: "Will there be cell signal?",
        a: "Almost none beyond Tamanrasset. Embrace the disconnect.",
      },
      {
        q: "Do you provide sleeping bags?",
        a: "Yes, rated to -5°C. You can bring your own if you prefer.",
      },
      {
        q: "Can we extend with Tassili?",
        a: "Yes — we offer a combined 16-day Hoggar + Tassili expedition.",
      },
    ],
  },
  {
    slug: "ghardaia-mzab-pentapolis",
    title: "Ghardaïa & the M'Zab Pentapolis",
    region: "M'Zab Valley",
    tagline: "Five sacred cities of ochre, palm groves, and silence.",
    duration: "5 days",
    groupSize: "2–10 travelers",
    difficulty: "Easy",
    price: 105000,
    rating: 4.7,
    cover: ghardaia,
    gallery: [ghardaia, culture, tassili, camel, algiers, hoggar],
    tags: ["UNESCO", "Culture", "Architecture"],
    description:
      "A journey through the M'Zab valley's five fortified cities, an architectural manifesto that inspired Le Corbusier.",
    highlights: [
      "Guided walk in Beni Isguen",
      "Traditional weaving workshop",
      "Palm grove picnic at sunset",
      "Pottery in El Atteuf",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Ghardaïa",
        text: "Settle into a heritage guesthouse, evening market walk.",
      },
      {
        day: "Day 2",
        title: "Ghardaïa & Melika",
        text: "Pyramidal cemeteries and the great mosque.",
      },
      {
        day: "Day 3",
        title: "Beni Isguen",
        text: "The sacred city, with its dusk auction.",
      },
      {
        day: "Day 4",
        title: "El Atteuf & Bounoura",
        text: "Origins of Mozabite architecture.",
      },
      {
        day: "Day 5",
        title: "Departure",
        text: "Transfer to airport or onward to the south.",
      },
    ],
    includes: [
      "Heritage stay",
      "Local guides",
      "Permits to enter sacred quarters",
      "Breakfast & one dinner",
    ],
    excludes: ["Flights", "Most meals", "Personal expenses"],
    faqs: [
      {
        q: "Are there dress code requirements?",
        a: "Yes — modest dress (long sleeves, long pants/skirts) is required to enter Beni Isguen.",
      },
      {
        q: "Is photography allowed?",
        a: "Restricted in Beni Isguen and inside mosques. We brief you on what's permitted.",
      },
      {
        q: "When is the best time to visit?",
        a: "October to April. Summer can exceed 45°C.",
      },
      {
        q: "Can I extend to the Sahara?",
        a: "Yes — we connect this trip with our Tassili or Hoggar expeditions.",
      },
      {
        q: "Are there family-friendly options?",
        a: "Yes, this trip suits families with children 8+.",
      },
    ],
  },
  {
    slug: "constantine-bridges-of-the-east",
    title: "Constantine, City of Bridges",
    region: "Constantine",
    tagline: "A vertical city suspended between sky and gorge.",
    duration: "3 days",
    groupSize: "2–8 travelers",
    difficulty: "Easy",
    price: 62000,
    rating: 4.7,
    cover: constantine,
    gallery: [constantine, djemila, culture, algiers, tipaza, coast],
    tags: ["City", "Heritage"],
    description:
      "Three days walking the seven bridges of Constantine, with side trips to Djemila and the Roman ruins of Tiddis.",
    highlights: [
      "Sidi M'Cid suspension bridge",
      "Palace of Ahmed Bey",
      "Day trip to Djemila UNESCO site",
      "Malouf concert evening",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Old Constantine",
        text: "Bridges walk, palace, and music night.",
      },
      {
        day: "Day 2",
        title: "Djemila",
        text: "Full day at the Roman city in the mountains.",
      },
      {
        day: "Day 3",
        title: "Tiddis & departure",
        text: "Morning at Tiddis ruins, transfer.",
      },
    ],
    includes: [
      "Boutique stay",
      "Private guide",
      "All transfers",
      "Concert tickets",
    ],
    excludes: ["Flights", "Meals", "Personal expenses"],
    faqs: [
      {
        q: "Is the city accessible for limited mobility?",
        a: "Partially — the medina is steep. We can adapt a softer route on request.",
      },
      {
        q: "What is Malouf?",
        a: "Constantine's Andalusian classical music tradition, performed live in intimate venues.",
      },
      {
        q: "How do we get to Djemila?",
        a: "Private vehicle, 1.5 hours each way.",
      },
      {
        q: "When does it rain?",
        a: "December to March can be wet. We pack ponchos.",
      },
      { q: "Combine with Algiers?", a: "Yes — a popular 7-day combo." },
    ],
  },
  {
    slug: "tipaza-roman-coast",
    title: "Tipaza Roman Coast",
    region: "Tipaza",
    tagline: "Where Roman ruins meet the Mediterranean.",
    duration: "2 days",
    groupSize: "2–12 travelers",
    difficulty: "Easy",
    price: 38000,
    rating: 4.6,
    cover: tipaza,
    gallery: [tipaza, coast, algiers, culture, djemila, constantine],
    tags: ["Coast", "Heritage", "Day trip"],
    description:
      "A short escape from Algiers to the seaside Roman ruins of Tipaza and the Royal Mausoleum of Mauritania.",
    highlights: [
      "Tipaza basilica by the sea",
      "Royal Mausoleum of Mauretania",
      "Seafood lunch on the harbor",
      "Sunset at Mount Chenoua",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Tipaza",
        text: "Drive from Algiers, ruins, lunch, beach.",
      },
      {
        day: "Day 2",
        title: "Mausoleum & return",
        text: "Mauretania mausoleum, Chenoua viewpoint, return.",
      },
    ],
    includes: ["Transport from Algiers", "Guide", "Site fees", "One lunch"],
    excludes: ["Hotel", "Other meals"],
    faqs: [
      {
        q: "Is this a day trip?",
        a: "We recommend two days — one is possible but rushed.",
      },
      {
        q: "Can we swim?",
        a: "Yes, June to September. Beaches are public and clean.",
      },
      {
        q: "Are the ruins big?",
        a: "Compact and very photogenic, ideal in 3 hours.",
      },
      {
        q: "Is it kid-friendly?",
        a: "Very — flat, safe, with shaded picnic areas.",
      },
      {
        q: "Can I add a wine tasting?",
        a: "Yes, the Coteaux de Tlemcen vineyards can be added on day 2.",
      },
    ],
  },
];

export const getPackage = (slug: string) =>
  packages.find((p) => p.slug === slug);
