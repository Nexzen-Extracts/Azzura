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
      text: "AZURA was established to redefine private aviation with precision, discretion and modern luxury.",
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

      {milestones.map((item, index) => (
        <div
          key={index}
          className="h-screen sticky top-0 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="w-[90%] max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 items-center">

              {/* IMAGE */}
              <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* TEXT */}
              <div className="p-12 md:p-16 relative">

                <h2 className="text-[100px] md:text-[120px] font-bold text-gray-100 absolute top-4 left-8 select-none">
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

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.text}
                  </p>
                </div>

              </div>

            </div>
          </motion.div>
        </div>
      ))}

    </section>
  );
}

export default TimelineModern;