import { motion } from "framer-motion";

/* ===== Local Images ===== */
import aircraftManagement from "../assets/services/aircraft-management.webp";
import aircraftSourcing from "../assets/services/aircraft-sourcing.webp";
import charterServices from "../assets/services/charter-services.webp";
import mro from "../assets/services/mro.webp";
import consultancy from "../assets/services/aviation-consultancy.webp";
import mobility from "../assets/services/air-mobility.webp";

const services = [
  { title: "Aircraft Management", img: aircraftManagement },
  { title: "Aircraft Sourcing & Sales", img: aircraftSourcing },
  { title: "Charter Services", img: charterServices },
  { title: "MRO", img: mro },
  { title: "Aviation Consultancy", img: consultancy },
  { title: "Advanced Air Mobility", img: mobility },
];

function Services() {
  return (
    <section className="bg-white py-20 md:py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ===== Heading (SplitSection Style) ===== */}
        <div className="text-center mb-14 md:mb-20">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="uppercase tracking-[4px] text-xs text-gray-400 mb-3"
          >
            Our Services
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0E2038]"
          >
            Aviation Expertise
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 70 }}
            viewport={{ once: false }}
            className="h-[2px] bg-gray-300 mx-auto mt-5"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="text-gray-500 mt-6 text-sm md:text-base max-w-2xl mx-auto"
          >
            End-to-end aviation solutions designed for performance, reliability,
            and operational excellence.
          </motion.p>
        </div>

        {/* ===== Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: false, amount: 0.3 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer relative"
            >
              {/* Image */}
              <div className="overflow-hidden h-[220px]">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-light text-[#0E2038]">
                  {service.title}
                </h3>

                {/* Premium underline */}
                <div className="w-0 h-[2px] bg-[#0E2038] mt-3 group-hover:w-12 transition-all duration-300"></div>
              </div>

              {/* Subtle hover border */}
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 ring-[#0E2038]/10 transition pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;