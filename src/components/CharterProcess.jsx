import { motion } from "framer-motion";
import charterplane from "../assets/about-2026.jpg";

const steps = [
  {
    number: "01",
    title: "Share Your Travel Brief",
    desc: "Tell us your destination, schedule and preferences. Our aviation team immediately evaluates optimal routing and aircraft options.",
    image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?q=80&w=1200&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "Aircraft Selection & Planning",
    desc: "We present tailored aircraft solutions based on performance, luxury class, and operational efficiency.",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1200&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "Seamless Departure",
    desc: "Arrive minutes before departure. Experience priority boarding, privacy and zero commercial delays.",
    image: charterplane
  }
];

function CharterProcess() {
  return (
    <section className="bg-white py-28 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* ===== Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0A1625] leading-tight">
            A Refined Charter Experience
          </h2>

          <p className="text-gray-500 mt-6 text-lg">
            From inquiry to takeoff — every step engineered for discretion, precision and speed.
          </p>
        </motion.div>

        {/* ===== Timeline Wrapper ===== */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/40 to-transparent transform -translate-x-1/2" />

          <div className="space-y-24">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* TEXT SIDE */}
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[#D4AF37] text-2xl font-bold">
                      {step.number}
                    </span>
                    <div className="h-[1px] flex-1 bg-[#D4AF37]/40" />
                  </div>

                  <h3 className="text-2xl font-semibold text-[#0A1625] mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* IMAGE SIDE */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="relative group"
                >
                  <div className="overflow-hidden rounded-2xl shadow-xl">
                    <motion.img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Subtle Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl border border-[#D4AF37]/30 opacity-0 group-hover:opacity-100 transition duration-500" />
                </motion.div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default CharterProcess;