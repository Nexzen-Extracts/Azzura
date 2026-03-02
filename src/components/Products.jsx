import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ===== LOCAL IMAGES ===== */
import y1 from "../assets/yatra3.jpg";
import w1 from "../assets/wed.jpg";
import r1 from "../assets/res.jpg";
import h1 from "../assets/heli.jpg";

const products = [
  {
    title: "AzuraYatra",
    image: y1,
    desc: "Helicopter pilgrimage and spiritual journeys with comfort and safety.",
  },
  {
    title: "AzuraWed",
    image: w1,
    desc: "Luxury aerial wedding entries and exclusive celebration experiences.",
  },
  {
    title: "HeliSetGo",
    image: h1,
    desc: "On-demand helicopter booking for business and personal travel.",
  },
  {
    title: "Azura Rescue",
    image: r1,
    desc: "Emergency air evacuation and rapid response rescue operations.",
  },
];

function ProductCard({ item, setActive }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      onClick={() => setActive(item)}
      className="relative h-[260px] sm:h-[300px] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
      />

      {/* Dark gradient */}
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

        {/* ===== Heading (SplitSection Style) ===== */}
        <div className="text-center mb-12 md:mb-16">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="uppercase tracking-[4px] text-xs text-gray-400 mb-3"
          >
            Our Products
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0E2038]"
          >
            Aviation Solutions
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 70 }}
            viewport={{ once: false }}
            className="h-[2px] bg-gray-300 mx-auto mt-5"
          />
        </div>

        {/* ===== Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <ProductCard key={index} item={item} setActive={setActive} />
          ))}
        </div>
      </div>

      {/* ===== Popup ===== */}
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            />

            <motion.div
              className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[92%] sm:w-[85%] md:w-[700px] lg:w-[800px]
              max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row">

                <div className="md:w-1/2 h-[220px] md:h-auto">
                  <img
                    src={active.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-light text-[#0E2038]">
                    {active.title}
                  </h3>

                  <p className="text-gray-600 mt-3 text-sm sm:text-base">
                    {active.desc}
                  </p>

                  <button className="mt-5 px-6 py-2.5 rounded-full bg-[#0E2038] text-white text-sm hover:bg-[#213A5C] transition w-fit">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Products;