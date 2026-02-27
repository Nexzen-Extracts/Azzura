import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import jetImage from "../assets/about-why-azura.jpg";

function WhyAZURA() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-3%", "0%"]);

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-r from-[#0B1428] to-[#0A0F1F] text-white py-20 md:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="text-xs tracking-[0.4em] text-[#D4AF37] mb-4">
              WHY AZURA
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-5">
              Precision. Discretion. Excellence.
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              transition={{ duration: 0.8 }}
              className="h-[2px] bg-[#D4AF37] mb-6"
            />

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              Every flight is engineered for performance and elegance.
              AZURA delivers uncompromised aviation experiences
              for leaders who value time above everything.
            </p>

            <div className="space-y-4">
              {[
                "Global Connectivity",
                "Elite Private Fleet",
                "Operational Excellence",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full"></div>
                  <p className="text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.6)]">

              <motion.img
                src={jetImage}
                alt="Luxury Jet"
                style={{ scale: imageScale, y: imageY }}
                className="w-full h-[45vh] sm:h-[55vh] md:h-[60vh] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default WhyAZURA;