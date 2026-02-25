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

  return (
    <section className="relative h-[100svh] flex items-center justify-center overflow-hidden bg-[#0E2038]">

      {/* Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E2038] via-[#102844] to-[#0E2038]"></div>

      <div className="relative z-10 w-full max-w-6xl px-6 text-white text-center flex flex-col justify-center h-full">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-heading mb-4">
          Our Fleet
        </h2>
        <p className="text-[#A3B5C0] mb-6">
          Choose the aircraft for your journey
        </p>

        {/* Flying Aircraft */}
       <motion.div
  key={active}
  initial={{ x: -400, y: -200, opacity: 0, rotate: -6, scale: 0.95 }}
  animate={{
    x: 0,
    y: [ -200, 20, 0 ],   // slight landing bounce
    opacity: 1,
    rotate: 0,
    scale: 1,
  }}
  transition={{
    duration: 1.2,
    ease: "easeOut",
  }}
  className="flex justify-center"
>
          {/* Floating effect */}
          <motion.img
            src={fleetData[active].img}
            className="w-full max-w-3xl h-[150px] sm:h-[200px] md:h-[260px] object-contain"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Info */}
        <p className="text-[#DAD5CF] mt-4 text-sm md:text-base">
          {fleetData[active].desc}
        </p>

        {/* Selector */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {fleetData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`px-5 py-2 rounded-full border text-xs md:text-sm transition
              ${
                active === index
                  ? "bg-[#A3B5C0] text-[#0E2038] border-[#A3B5C0]"
                  : "border-white/40 text-white hover:bg-white/10"
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
