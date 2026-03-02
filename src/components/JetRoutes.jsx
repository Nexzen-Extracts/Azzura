import { motion } from "framer-motion";

/* Images */
import r1 from "../assets/about-2026.jpg";
import r2 from "../assets/about-2027.jpg";

const routes = [
  {
    title: "Delhi → Dubai",
    name: "Desert Express",
    price: "$2,800",
    img: r1,
  },
  {
    title: "Mumbai → London",
    name: "Global Elite",
    price: "$4,500",
    img: r2,
  },
];

const features = [
  "Luxury Amenities",
  "Global Coverage",
  "24/7 Concierge",
  "Flexible Scheduling",
];

function JetRoutes() {
  const leftVariant = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-[#F6F7F9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="lg:w-2/5"
          >
            {/* SplitSection Typography */}
            <h2 className="text-4xl lg:text-5xl font-light text-[#0E2038] leading-tight">
              Discover Premium <br />
              Air Travel
            </h2>

            <p className="text-gray-600 mt-6 text-base leading-relaxed max-w-md">
              Experience unmatched luxury, privacy and efficiency with our curated
              global routes. Every journey is designed for comfort, exclusivity
              and seamless travel.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 gap-4 mt-8 max-w-md">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-full border border-gray-200 bg-white shadow-sm text-sm text-[#0E2038]"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="mt-10 px-8 py-4 rounded-full bg-[#0E2038] text-white text-base shadow-lg hover:bg-[#1A3354] transition">
              Request Flight Plan
            </button>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="lg:w-3/5 w-full"
          >
            <div className="grid sm:grid-cols-2 gap-8">

              {routes.map((route, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition overflow-hidden"
                >
                  {/* Image */}
                  <div className="h-64 overflow-hidden">
                    <img
                      src={route.img}
                      alt=""
                      className="w-full h-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-500 text-sm">
                      {route.title}
                    </p>

                    <h3 className="text-xl font-light text-[#0E2038] mt-1">
                      {route.name}
                    </h3>

                    <div className="flex justify-between items-center mt-6">
                      <div>
                        <p className="text-xs text-gray-400">
                          Starting from
                        </p>
                        <p className="text-lg font-semibold text-[#0E2038]">
                          {route.price}
                        </p>
                      </div>

                      <button className="px-5 py-2 border border-[#0E2038] text-[#0E2038] rounded-full hover:bg-[#0E2038] hover:text-white transition text-sm">
                        Book Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default JetRoutes;