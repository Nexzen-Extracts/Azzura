import { motion } from "framer-motion";
import img2026 from "../assets/about-2026.jpg";
import img2027 from "../assets/about-2027.jpg";
import img2028 from "../assets/about-2028.jpg";
import img2029 from "../assets/about-2029.jpg";
import img2030 from "../assets/about-2030.jpg";

function TimelineModern() {
  const milestones = [
    {
      year: "2026",
      title: "Foundation",
      text: "AZZURA was established to redefine private aviation with precision, discretion and modern luxury.",
      image: img2026,
    },
    {
      year: "2027",
      title: "Fleet Expansion",
      text: "Introduced next-generation aircraft offering superior range and unmatched comfort.",
      image: img2027,
    },
    {
      year: "2028",
      title: "Global Partnerships",
      text: "Formed international aviation alliances strengthening global connectivity.",
      image: img2028,
    },
    {
      year: "2029",
      title: "Elite Membership",
      text: "Launched curated aviation membership for ultra-premium clientele.",
      image: img2029,
    },
    {
      year: "2030",
      title: "Sustainable Vision",
      text: "Implemented eco-efficient aviation strategies for responsible luxury.",
      image: img2030,
    },
  ];

  return (
    <section className="bg-white">

      {milestones.map((item, index) => {
        const isReverse = index % 2 !== 0;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative py-32 border-b border-gray-100"
          >
            <div className="max-w-6xl mx-auto px-6">

              <div className={`grid md:grid-cols-2 gap-16 items-center ${isReverse ? "md:flex-row-reverse" : ""}`}>

                {/* TEXT SECTION */}
                <div className="relative">

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

                {/* IMAGE SECTION */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-3xl shadow-xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover"
                  />

                  {/* Elegant overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>

              </div>

            </div>
          </motion.div>
        );
      })}

    </section>
  );
}

export default TimelineModern;