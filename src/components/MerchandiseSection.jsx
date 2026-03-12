import { motion } from "framer-motion";
import mainImage from "../assets/Merchandise.webp";
import smallImage from "../assets/glass-bottle.webp";

function MerchandiseSection() {

  const leftVariant = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-20 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGES */}
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="relative flex justify-center lg:justify-start"
        >

          <div className="relative max-w-xl">

            {/* BIG IMAGE */}
            <motion.img
              src={mainImage}
              alt="Azura luxury aviation merchandise collection"
              loading="lazy"
              decoding="async"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="w-full h-auto rounded-xl shadow-lg"
            />

            {/* SMALL IMAGE */}
            <motion.img
              src={smallImage}
              alt="Azura aviation glass bottle"
              loading="lazy"
              decoding="async"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="
              absolute 
              -bottom-10 
              right-6 
              w-32 
              sm:w-36 
              md:w-40 
              shadow-xl 
              rounded-lg
              hover:scale-105
              transition
              "
            />

          </div>

        </motion.div>


        {/* RIGHT CONTENT */}
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >

          <p className="uppercase tracking-[4px] text-xs text-gray-400 mb-3">
            Azura Store
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0E2038] mb-5 leading-tight">
            Aviation Inspired Luxury Merchandise
          </h2>

          <div className="w-16 h-[2px] bg-gray-300 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            Discover Azura’s exclusive merchandise inspired by the world
            of private aviation. Crafted for aviation enthusiasts,
            travelers and luxury lifestyle seekers who appreciate
            design, comfort and performance.
          </p>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="
            px-8 
            py-3 
            rounded-full 
            border 
            border-[#0E2038] 
            text-[#0E2038] 
            text-sm 
            hover:bg-[#0E2038] 
            hover:text-white 
            transition
            "
          >
            Explore Store
          </motion.button>

        </motion.div>

      </div>

    </section>
  );
}

export default MerchandiseSection;