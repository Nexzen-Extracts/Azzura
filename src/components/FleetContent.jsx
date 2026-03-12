import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ===== CJ2 Assets =====
// ===== CJ2 Assets =====
import cj2Hero from "../assets/fleet/cj2/hero.webp";
import cj2Interior1 from "../assets/fleet/cj2/interior1.jpg";
import cj2Interior2 from "../assets/fleet/cj2/interior2.jpg";
import cj2Interior3 from "../assets/fleet/cj2/interior3.jpg";
import cj2Interior4 from "../assets/fleet/cj2/interior4.jpg";

import cj2Overview from "../assets/fleet/cj2/overview.jpg";
import cj2Specs from "../assets/fleet/cj2/specs.jpeg";

import cj2Range from "../assets/fleet/cj2/range.gif";
import cj2Baggage from "../assets/fleet/cj2/baggage.webp";

export const fleetData = [
{
  id: 1,
  name: "Cessna Citation CJ2",
  type: "Light Jet",

  // Hero image
  image: cj2Hero,

  // NEW images for sections
  overviewImage: cj2Overview,
  specsImage: cj2Specs,

  interior: [
    cj2Interior1,
    cj2Interior2,
    cj2Interior3,
    cj2Interior4
  ],

  rangeImage: cj2Range,
  baggageImage: cj2Baggage,

  seats: 7,
  speed: 400,
  baggage: "74 CUFT",
  range: "1500 NM",

  desc:
    "A light business jet known for high cruising speeds and excellent performance for short-haul flights."
},
  {
    id: 2,
    name: "Hawker Beechcraft 750",
    type: "Midsize Jet",
    image:
      "https://smart-aviation.co.uk/wp-content/uploads/2024/04/Hawker750_2-scaled.jpg",
    interior: [
      "https://www.jetclass.com/storage/jets/163/large/hawker_750-int-1.jpg",
      "https://trilogyaviationgroup.com/wp-content/uploads/2020/01/hawker-750xp-charter-jet-6.jpg"
    ],
    seats: 9,
    speed: "430 KTS",
    baggage: "79 CUFT",
    range: "2400 NM",
    desc:
      "Spacious midsize jet offering superior comfort with strong runway performance and competitive range."
  }
];

const types = ["All", "Light Jet", "Midsize Jet"];

/* Animation Variants */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const sidebarAnim = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

function FleetContent() {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const filtered =
    filter === "All"
      ? fleetData
      : fleetData.filter(item => item.type === filter);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[260px_1fr] gap-12">

        {/* Filter */}
        <motion.div
          variants={sidebarAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-xl p-6 h-fit shadow-sm"
        >
          <h3 className="text-lg font-semibold text-[#0E2038] mb-6">
            Aircraft Category
          </h3>

          <div className="space-y-3">
            {types.map(type => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition
                ${
                  filter === type
                    ? "bg-[#0E2038] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {filtered.map(item => {

            const slug =
              item.name.toLowerCase().replace(/\s+/g, "-") + "-" + item.id;

            return (
              <motion.div
                key={item.id}
                variants={cardAnim}
                whileHover={{ y: -8 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-lg transition"
              >

                {/* Image */}
                <div className="md:w-[40%] h-[220px] overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">

                  <div>
                    <h3 className="text-2xl font-semibold text-[#0E2038] mb-1">
                      {item.name}
                    </h3>

                    <p className="text-gray-400 text-sm mb-3">
                      {item.type}
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => navigate(`/fleet/${slug}`)}
                    className="mt-6 border border-[#0E2038] text-[#0E2038] px-5 py-2 rounded-lg hover:bg-[#0E2038] hover:text-white transition w-fit text-sm"
                  >
                    View Details
                  </button>

                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default FleetContent;