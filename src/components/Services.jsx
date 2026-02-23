import { motion } from "framer-motion";

const services = [
  {
    title: "Aircraft Management",
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200",
  },
  {
    title: "Aircraft Sourcing & Sales",
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200",
  },
  {
    title: "Charter Services",
    img: "https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=1200",
  },
  {
    title: "MRO",
    img: "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?q=80&w=1200",
  },
  {
    title: "Aviation Consultancy",
    img: "https://images.unsplash.com/photo-1502920917128-1aa500764b8a?q=80&w=1200",
  },
  {
    title: "Advanced Air Mobility",
    img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1200",
  },
];

function Services() {
  return (
    <section className="bg-[#0E2038] py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading">
            Our Services
          </h2>
          <p className="text-[#A3B5C0] mt-3">
            End-to-end aviation solutions designed for performance and reliability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[260px] rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={service.img}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2038]/90 via-[#0E2038]/50 to-transparent"></div>

              {/* Title */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                {/* Hover line animation */}
                <div className="w-0 h-[2px] bg-[#A3B5C0] mt-2 group-hover:w-16 transition-all duration-300"></div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;
