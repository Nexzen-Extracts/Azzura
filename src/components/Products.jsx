import { motion } from "framer-motion";

const products = [
  {
    title: "AzzuraYatra",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200",
  },
  {
    title: "AzzuraWed",
    img: "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?q=80&w=1200",
  },
  {
    title: "HeliSetGo",
    img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1200",
  },
  {
    title: "Azzura Rescue",
    img: "https://images.unsplash.com/photo-1584467735871-8f7b7c6d9d4b?q=80&w=1200",
  },
];

function Products() {
  return (
    <section className="bg-[#F4F7FA] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-heading text-[#0E2038]">
            Our Products
          </h2>
          <p className="text-[#758D93] mt-3">
            Premium aviation solutions tailored for every journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-[360px] rounded-2xl overflow-hidden bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl transition">

                {/* Image */}
                <img
                  src={item.img}
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Glass overlay */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>

                {/* Title badge */}
                <div className="absolute top-4 left-4 bg-white/90 text-[#0E2038] px-4 py-1 rounded-full text-sm font-semibold shadow">
                  {item.title}
                </div>

                {/* Bottom Button */}
                <div className="absolute bottom-6 left-6">
                  <button className="px-6 py-2 rounded-full bg-[#0E2038] text-white text-sm font-medium shadow-md hover:bg-[#213A5C] transition">
                    View Details
                  </button>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Products;
