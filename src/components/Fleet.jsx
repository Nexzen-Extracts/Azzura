import { useState } from "react";
import { motion } from "framer-motion";
import runwayBg from "../assets/runway.png";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${runwayBg})` }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-white text-center flex flex-col justify-center min-h-screen">

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
          Our Fleet
        </h2>

        <p className="text-gray-200 text-xs sm:text-sm md:text-base mb-6">
          Choose the aircraft for your journey
        </p>

        {/* Aircraft Animation (Landing then STOP) */}
        <motion.div
          key={active}
          initial={{ x: -500, y: -250, opacity: 0, rotate: -8, scale: 0.9 }}
          animate={{
            x: 0,
            y: 0,
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
          <motion.img
            src={fleetData[active].img}
            className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-4xl 
                       object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Info */}
        <p className="text-gray-200 mt-4 text-xs sm:text-sm md:text-base">
          {fleetData[active].desc}
        </p>

        {/* Selector */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
          {fleetData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`px-4 sm:px-5 py-2 rounded-full border text-xs sm:text-sm transition
                ${
                  active === index
                    ? "bg-white text-black border-white"
                    : "border-white/50 text-white hover:bg-white/10"
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