import { motion } from "framer-motion";
import img from "../assets/about1.jpg";

function ExperienceSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-gradient-to-b from-[#F9FAFB] via-white to-[#F3F4F6] py-24 md:py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.5em] text-[#B8902E] mb-4"
          >
            BEYOND THE JOURNEY
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] leading-tight mb-6"
          >
            Where Aviation Meets Precision & Luxury
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 70 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#B8902E] mx-auto mb-6"
          />

          <motion.p
            variants={fadeUp}
            className="text-gray-600 text-lg leading-relaxed"
          >
            AZURA is built on discipline, engineered precision and curated
            luxury. Every departure is calculated. Every arrival is controlled.
            We redefine private aviation by combining operational mastery with
            bespoke experiences.
          </motion.p>
        </motion.div>

        {/* IMAGE BLOCK - HEIGHT INCREASED */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.12)] mb-16"
        >
          <motion.img
            src={img}
            alt="Luxury Aviation"
            className="w-full h-[70vh] md:h-[75vh] object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>

        {/* FEATURE CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

            {[
                {
                title: "Strategic Global Operations",
                text: "Integrated aviation network across international airspaces ensuring seamless global connectivity.",
                },
                {
                title: "Curated Cabin Experience",
                text: "Private interiors crafted for discretion, elegance and elevated in-flight comfort.",
                },
                {
                title: "Precision Time Management",
                text: "Optimized routing and scheduling maintaining elite punctuality standards.",
                },
            ].map((item, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group relative overflow-hidden bg-white border border-gray-200 p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]"
                >

                {/* GOLD HOVER OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#B8902E]/0 group-hover:from-[#D4AF37]/10 group-hover:to-[#B8902E]/10 transition-all duration-500"></div>

                {/* TOP GOLD LINE ANIMATION */}
                <div className=" w-0 bg-gradient-to-r from-[#D4AF37] to-[#B8902E] group-hover:w-full transition-all duration-500"></div>

                <div className="relative z-10">

                    <h3 className="text-xl font-semibold text-[#111827] mb-4 transition-colors duration-500 group-hover:text-[#B8902E]">
                    {item.title}
                    </h3>

                    <div className="w-12 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#B8902E] mb-5 transition-all duration-500 group-hover:w-24"></div>

                    <p className="text-gray-600 leading-relaxed transition-colors duration-500 group-hover:text-gray-800">
                    {item.text}
                    </p>

                </div>

                </motion.div>
            ))}

            </div>

      </div>
    </section>
  );
}

export default ExperienceSection;