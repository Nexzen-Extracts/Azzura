import { motion } from "framer-motion";

function TimelineModern() {
  const milestones = [
    {
      year: "2026",
      title: "Foundation",
      text: "AZZURA was established to redefine private aviation with precision, discretion and modern luxury.",
    },
    {
      year: "2027",
      title: "Fleet Expansion",
      text: "Introduced next-generation aircraft offering superior range and unmatched comfort.",
    },
    {
      year: "2028",
      title: "Global Partnerships",
      text: "Formed international aviation alliances strengthening global connectivity.",
    },
    {
      year: "2029",
      title: "Elite Membership",
      text: "Launched curated aviation membership for ultra-premium clientele.",
    },
    {
      year: "2030",
      title: "Sustainable Vision",
      text: "Implemented eco-efficient aviation strategies for responsible luxury.",
    },
  ];

  return (
    <section className="bg-white">

      {milestones.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative py-32 border-b border-gray-100"
        >
          <div className="max-w-6xl mx-auto px-6">

            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* LEFT CONTENT */}
              <div className="relative">

                {/* Background Year Watermark */}
                <h2 className="absolute -top-16 left-0 text-[120px] md:text-[160px] font-bold text-gray-100 select-none">
                  {item.year}
                </h2>

                <div className="relative z-10">
                  <p className="text-sm tracking-widest text-[#C6A75E] mb-4">
                    {item.year}
                  </p>

                  <h3 className="text-3xl md:text-4xl font-semibold text-[#111] mb-6">
                    {item.title}
                  </h3>

                  <div className="w-16 h-[3px] bg-[#C6A75E] mb-6"></div>

                  <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                    {item.text}
                  </p>
                </div>

              </div>

              {/* RIGHT ACCENT PANEL */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-72 bg-gradient-to-br from-[#F5F7FA] to-[#EDEFF3] rounded-3xl shadow-lg"
                ></motion.div>
              </div>

            </div>

          </div>
        </motion.div>
      ))}

    </section>
  );
}

export default TimelineModern;