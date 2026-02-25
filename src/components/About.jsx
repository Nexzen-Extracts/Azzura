import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import img1 from "../assets/about1.jpg";
import img2 from "../assets/about2.jpg";
import img3 from "../assets/about3.jpg";
import img4 from "../assets/about4.jpg";

function About() {
  const images = [img1, img2, img3, img4];
  const [index, setIndex] = useState(0);

  // Cinematic auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4s
    return () => clearInterval(interval);
  }, []);

  // Content animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-[#F5F7FA] text-[#0E2038] py-12 md:py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* ================= IMAGE SLIDER ================= */}
        <div className="relative flex justify-center items-center">

          {/* Soft glow */}
          <div className="absolute w-[70%] h-[70%] bg-[#0E2038]/10 rounded-full blur-[120px]" />

          <div className="relative w-full max-w-lg h-[380px] md:h-[440px] overflow-hidden rounded-3xl shadow-2xl">

            {images.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt="AzurA Aviation"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                animate={{
                  opacity: index === i ? 1 : 0,
                  scale: index === i ? 1 : 1.08
                }}
                transition={{
                  opacity: { duration: 1.5, ease: "easeInOut" },
                  scale: { duration: 6, ease: "easeOut" }
                }}
              />
            ))}

            {/* Cinematic gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl" />
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            variants={item}
            className="uppercase tracking-[5px] text-xs sm:text-sm text-[#7B8A95] mb-3"
          >
            About Us
          </motion.p>

          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl leading-tight mb-5"
          >
            Redefining Private Aviation
          </motion.h2>

          <motion.div
            variants={item}
            className="w-16 h-[2px] bg-[#A3B5C0] mb-6"
          />

          <motion.p
            variants={item}
            className="text-[#3E556B] text-sm sm:text-base md:text-lg leading-relaxed mb-4"
          >
            AzurA Aviation delivers premium private air travel solutions
            designed for comfort, efficiency, and exclusivity. We combine
            advanced aviation expertise with personalized service to create a
            seamless flying experience.
          </motion.p>

          <motion.p
            variants={item}
            className="text-[#3E556B] text-sm sm:text-base md:text-lg leading-relaxed mb-8"
          >
            From global charter operations and aircraft management to advanced
            air mobility solutions, our commitment is to provide reliability,
            safety, and luxury at every altitude.
          </motion.p>

          <motion.button
            variants={item}
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#0E2038] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#1A3354] transition-all duration-300"
          >
            Discover More
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}

export default About; 