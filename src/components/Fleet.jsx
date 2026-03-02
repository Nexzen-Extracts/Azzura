import { useState } from "react";
import { motion } from "framer-motion";

const fleetData = [
  {
    name: "Light Jet",
    img: "https://d3tfanr7troppj.cloudfront.net/static_files/images/000/005/753/original/Light_Jet_PNG.webp",
    desc: "6–8 passengers • Range 1,500 miles",
  },
  {
    name: "MidSize Jet",
    img: "https://d3tfanr7troppj.cloudfront.net/static_files/images/000/006/226/original/Mid_Size_Jet_1.webp",
    desc: "5–10 passengers • Range 2,000–3,000 miles",
  },
  {
    name: "Large Jet",
    img: "https://d3tfanr7troppj.cloudfront.net/static_files/images/000/006/983/original/Large_Jet__.webp",
    desc: "10–15 passengers • Range 7,000+ miles",
  },
  {
    name: "Helicopter",
    img: "https://d3tfanr7troppj.cloudfront.net/static_files/images/000/005/759/original/Helicopter_PNG.webp",
    desc: "3–6 passengers • Range 350–500 miles",
  },
];

function Fleet() {
  const [active, setActive] = useState(0);

  // Aircraft animation (scroll + button trigger)
  const planeVariant = {
    hidden: { opacity: 0, x: -120, scale: 0.95 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-16 md:py-10 min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-7xl px-6 md:px-12 text-center">

        {/* Heading — SplitSection Font Style */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="uppercase tracking-[4px] text-xs text-gray-400 mb-3"
        >
          Our Fleet
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0E2038] mb-4"
        >
          Choose Your Aircraft
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: false }}
          className="h-[2px] bg-gray-300 mx-auto mb-10"
        />

        {/* Aircraft Animation */}
        <motion.div
          key={active} // re-animate on button click
          variants={planeVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="flex justify-center"
        >
          <img
            src={fleetData[active].img}
            alt={fleetData[active].name}
            className="w-[90%] sm:w-[80%] md:w-[65%] lg:w-[55%] max-w-4xl object-contain drop-shadow-xl"
          />
        </motion.div>

        {/* Info */}
        <motion.p
          key={fleetData[active].desc}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-600 mt-6 text-sm md:text-base"
        >
          {fleetData[active].desc}
        </motion.p>

        {/* Selector */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {fleetData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`px-5 py-2 rounded-full border text-sm transition-all duration-300
                ${
                  active === index
                    ? "bg-[#0E2038] text-white border-[#0E2038]"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Fleet;