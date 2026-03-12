import { motion } from "framer-motion";
import mainImage from "../assets/Merchandise.webp";
import smallImage from "../assets/glass-bottle.webp";

function MerchandiseSection() {

  const leftVariant = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-16 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGES */}
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="relative"
        >

          <div className="relative max-w-xl">

            {/* BIG IMAGE */}
            <img
              src={mainImage}
              alt="Azura Merchandise"
              className="w-full h-auto rounded-xl"
            />

            {/* SMALL IMAGE */}
            <img
              src={smallImage}
              alt="Azura Bottle"
              className="absolute -bottom-12 right-8 w-40 shadow-xl rounded-lg"
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

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0E2038] mb-5">
            Aviation Inspired Luxury Merchandise
          </h2>

          <div className="w-16 h-[2px] bg-gray-300 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
            Discover Azura’s exclusive merchandise inspired by the world
            of private aviation. Crafted for aviation enthusiasts,
            travelers and luxury lifestyle seekers who appreciate
            design, comfort and performance.
          </p>

          {/* CTA */}
          <button className="px-7 py-3 rounded-full border border-[#0E2038] text-[#0E2038] text-sm hover:bg-[#0E2038] hover:text-white transition">
            Explore Store
          </button>

        </motion.div>

      </div>

    </section>
  );
}

export default MerchandiseSection;