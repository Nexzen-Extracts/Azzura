import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Global CTA
import CTA from "../components/CTA";

// Images
import kedar from "../assets/yatra/kedarnath.jpg";
import badri from "../assets/yatra/badrinath.jpg";
import ganga from "../assets/yatra/gangotri.jpg";
import yamuna from "../assets/yatra/yamunotri.jpg";

import g1 from "../assets/yatra/gallery1.jpeg";
import g2 from "../assets/yatra/gallery2.jpg";
import g3 from "../assets/yatra/gallery3.webp";
import g4 from "../assets/yatra/gallery4.webp";

function YatraExperience() {
  const [hovered, setHovered] = useState(null);

  const dhams = [
    {
      name: "Kedarnath",
      img: kedar,
      subtitle: "Abode of Lord Shiva",
      points: [
        "One of the 12 Jyotirlingas",
        "Located at 3,583m altitude",
        "Helicopter access available",
        "Snow-covered Himalayan views",
      ],
    },
    {
      name: "Badrinath",
      img: badri,
      subtitle: "Sacred Vishnu Temple",
      points: [
        "Part of Char Dham & Chota Char Dham",
        "Situated on Alaknanda river",
        "VIP Darshan arrangements",
        "Luxury stay near temple",
      ],
    },
    {
      name: "Gangotri",
      img: ganga,
      subtitle: "Origin of River Ganga",
      points: [
        "Source of holy Ganges",
        "Peaceful spiritual environment",
        "Scenic Himalayan landscapes",
        "Guided pilgrimage support",
      ],
    },
    {
      name: "Yamunotri",
      img: yamuna,
      subtitle: "Source of River Yamuna",
      points: [
        "Sacred thermal springs",
        "Easy helicopter access",
        "Serene mountain setting",
        "Complete ground assistance",
      ],
    },
  ];

  const gallery = [g1, g2, g3, g4];

  // Scroll Parallax
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scaleParallax = useTransform(scrollYProgress, [0, 1], [0.95, 1.08]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div ref={containerRef} className="bg-[#081421] text-white overflow-hidden">

      {/* ================= CHAR DHAM (UPDATED) ================= */}
      <section className="py-14 md:py-20 px-5 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-10 text-center">
          The Sacred Char Dham
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {dhams.map((d, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl group cursor-pointer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Base Image */}
              <motion.img
                src={d.img}
                style={{ scale: scaleParallax }}
                className="w-full h-64 sm:h-72 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Hover Card */}
              <motion.div
                className="absolute inset-0 bg-[#081421]/95 flex"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hovered === i ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Left Image */}
                <motion.img
                  src={d.img}
                  className="w-1/2 h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: hovered === i ? 1 : 1.2 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Right Content */}
                <div className="w-1/2 p-5 flex flex-col justify-center">

                  <motion.h3
                    variants={fadeUp}
                    initial="hidden"
                    animate={hovered === i ? "show" : "hidden"}
                    className="text-xl mb-1"
                  >
                    {d.name}
                  </motion.h3>

                  <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate={hovered === i ? "show" : "hidden"}
                    className="text-white/60 mb-3 text-sm"
                  >
                    {d.subtitle}
                  </motion.p>

                  <motion.ul
                    variants={fadeUp}
                    initial="hidden"
                    animate={hovered === i ? "show" : "hidden"}
                    className="space-y-1 text-sm text-white/80"
                  >
                    {d.points.map((p, idx) => (
                      <li key={idx}>• {p}</li>
                    ))}
                  </motion.ul>

                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TOUR HIGHLIGHTS ================= */}
      <section className="py-16 px-5 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show">
          <h2 className="text-3xl md:text-4xl mb-4">Tour Highlights</h2>

          <p className="text-white/70 mb-6">
            Experience the sacred Char Dham Yatra with unmatched comfort and premium spiritual services.
          </p>

          <ul className="space-y-3 text-white/80 mb-6">
            <li>• Private Helicopter Transfers</li>
            <li>• VIP Darshan Access</li>
            <li>• Luxury Accommodation & Meals</li>
            <li>• Dedicated Ground Assistance</li>
            <li>• Complete End-to-End Journey Management</li>
          </ul>

          <button className="px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] text-[#081421] font-semibold hover:scale-105 transition">
            Enquire Now
          </button>
        </motion.div>

        <motion.div className="grid grid-cols-2 gap-3">
          {dhams.map((d, i) => (
            <motion.img
              key={i}
              src={d.img}
              style={{ y: yParallax }}
              className="h-32 sm:h-40 w-full object-cover rounded-lg"
            />
          ))}
        </motion.div>
      </section>

      {/* ================= INFINITE GALLERY ================= */}
      <section className="py-12 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="flex gap-4 w-[200%]"
        >
          {[...gallery, ...gallery].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              style={{ scale: scaleParallax }}
              className="w-56 sm:w-64 h-40 sm:h-48 object-cover rounded-lg"
            />
          ))}
        </motion.div>
      </section>

      {/* ================= GLOBAL CTA ================= */}
      <CTA />

    </div>
  );
}

export default YatraExperience;