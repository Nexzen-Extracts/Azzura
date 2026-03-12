
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ===== LOCAL IMAGES ===== */
import y1 from "../assets/yatra3.webp";
import w1 from "../assets/wed.webp";
import r1 from "../assets/res.webp";
import h1 from "../assets/heli.webp";

const products = [
  {
    title: "AzuraYatra",
    image: y1,
    desc: "Helicopter pilgrimage and spiritual journeys with comfort and safety."
  },
  {
    title: "AzuraWed",
    image: w1,
    desc: "Luxury aerial wedding entries and exclusive celebration experiences."
  },
  {
    title: "HeliSetGo",
    image: h1,
    desc: "On-demand helicopter booking for business and personal travel."
  },
  {
    title: "Azura Rescue",
    image: r1,
    desc: "Emergency air evacuation and rapid response rescue operations."
  }
];

/* ===== CARD ANIMATIONS ===== */

const leftAnim = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const rightAnim = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

function ProductCard({ item, index, setActive }) {

  const animation = index < 2 ? leftAnim : rightAnim;

  return (
    <motion.div
      variants={animation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      onClick={() => setActive(item)}
      className="relative h-[260px] sm:h-[300px] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="absolute bottom-4 left-4 bg-white/95 text-[#0E2038] px-4 py-1 rounded-full text-sm font-medium shadow">
        {item.title}
      </div>
    </motion.div>
  );
}

function Products() {

  const [active, setActive] = useState(null);

  return (
    <section className="bg-white py-20 md:py-28 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* ===== Heading ===== */}

        <div className="text-center mb-14">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[4px] text-xs text-gray-400 mb-3"
          >
            Our Products
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0E2038]"
          >
            Aviation Solutions
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 70 }}
            className="h-[2px] bg-gray-300 mx-auto mt-5"
          />

        </div>

        {/* ===== Grid ===== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((item, index) => (
            <ProductCard
              key={index}
              item={item}
              index={index}
              setActive={setActive}
            />
          ))}

        </div>

      </div>

      {/* ===== Popup ===== */}

      <AnimatePresence>

        {active && (
          <>
            {/* Overlay */}

            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            />

            {/* Popup Container */}

            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

              <motion.div
                className="relative w-full max-w-[640px] bg-white rounded-xl shadow-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >

                {/* Close Button */}

                <button
                  onClick={() => setActive(null)}
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100 transition z-10"
                >
                  ✕
                </button>

                <div className="flex flex-col md:flex-row">

                  {/* Image */}

                  <div className="md:w-1/2 h-[200px] md:h-[260px]">
                    <img
                      src={active.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}

                  <div className="md:w-1/2 p-5 flex flex-col justify-center">

                    <h3 className="text-xl font-light text-[#0E2038]">
                      {active.title}
                    </h3>

                    <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                      {active.desc}
                    </p>

                    <button className="mt-5 px-5 py-2 rounded-full bg-[#0E2038] text-white text-sm hover:bg-[#213A5C] transition w-fit">
                      View Details
                    </button>

                  </div>

                </div>

              </motion.div>

            </div>

          </>
        )}

      </AnimatePresence>

    </section>
  );
}

export default Products;

