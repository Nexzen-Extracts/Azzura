import { motion } from "framer-motion";
import aboutImg from "../assets/aviation-about.png";

function About() {

  // Stagger animation for content
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
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-[#F5F7FA] text-[#0E2038] py-20 md:py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ================= IMAGE SIDE (PNG FRIENDLY) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
        >
          {/* Soft radial glow (no card effect) */}
          <motion.div
            className="absolute w-[70%] h-[70%] bg-[#0E2038]/10 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating PNG Image */}
          <motion.img
            src={aboutImg}
            alt="Azzura Aviation"
            className="
              relative
              w-full
              max-w-sm
              sm:max-w-md
              md:max-w-lg
              object-contain
              drop-shadow-[0_40px_40px_rgba(0,0,0,0.15)]
            "
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.04 }}
          />
        </motion.div>

        {/* ================= CONTENT SIDE ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            variants={item}
            className="uppercase tracking-[5px] text-xs sm:text-sm text-[#7B8A95] mb-3 font-body"
          >
            About Us
          </motion.p>

          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl font-heading leading-tight mb-5"
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
            Azzura Aviation delivers premium private air travel solutions
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
            className="bg-[#0E2038] text-white px-7 sm:px-9 py-3 rounded-full font-body shadow-lg hover:bg-[#1A3354] transition-all duration-300"
          >
            Discover More
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}

export default About;