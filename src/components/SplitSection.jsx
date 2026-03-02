import { motion } from "framer-motion";
import sectionImg from "../assets/aircraft-managment.webp"; 

function SplitSection() {
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Image animation (slide from right)
  const imageVariant = {
    hidden: { opacity: 0, x: 120, scale: 1.05 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full min-h-[80vh] bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row">

        {/* LEFT SIDE — 50% */}
        <motion.div
          className="lg:w-1/2 w-full flex items-center px-6 md:px-12 lg:px-16 py-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }} // replay animation on scroll
        >
          <div className="max-w-lg">
            <motion.p
              variants={item}
              className="uppercase tracking-[4px] text-xs text-gray-400 mb-3"
            >
              Elite Travel Management
            </motion.p>

            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl lg:text-5xl font-light mb-5 text-[#0E2038]"
            >
              Private Charter
            </motion.h2>

            <motion.div
              variants={item}
              className="w-14 h-[2px] bg-gray-300 mb-6"
            />

            <motion.p
              variants={item}
              className="text-gray-600 text-sm md:text-base leading-relaxed mb-6"
            >
              Indulge in seamless luxury with our VIP private charter service, where we manage every detail from A to Z, creating an exclusive journey tailored to perfection just for you.
            </motion.p>

            <motion.button
              variants={item}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#0E2038] text-white px-7 py-3 rounded-full text-sm shadow-md hover:bg-[#1A3354] transition"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT SIDE — 50% */}
        <motion.div
          className="lg:w-1/2 w-full h-[400px] lg:h-[80vh] relative overflow-hidden"
          variants={imageVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src={sectionImg}
            alt="Aviation"
            className="w-full h-full object-cover"
          />

          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent" />
        </motion.div>

      </div>
    </section>
  );
}

export default SplitSection;