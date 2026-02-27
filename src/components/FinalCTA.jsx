import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import jetBg from "../assets/about-2028.jpg"; // change if needed

function FinalCTA() {
  return (
    <section className="relative overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <motion.img
          src={jetBg}
          alt="Luxury Jet"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 py-32 md:py-40">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.6em] text-[#D4AF37] mb-6"
          >
            ELEVATE YOUR JOURNEY
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight mb-8"
          >
            Experience Private Aviation <br className="hidden md:block" />
            Without Limits
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-2xl mx-auto mb-12"
          >
            Time is the ultimate luxury. Let AZURA redefine the way you travel —
            with precision scheduling, bespoke comfort and seamless global access.
          </motion.p>

          {/* CTA BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold text-black bg-gradient-to-r from-[#D4AF37] to-[#B8902E] overflow-hidden transition-all duration-500 hover:scale-105"
            >
              <span className="relative z-10">
                Request Private Charter
              </span>

              {/* BUTTON SHINE */}
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></span>

              {/* Animated border glow */}
              <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8902E] opacity-0 group-hover:opacity-40 blur-xl transition duration-500"></span>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Smooth top fade for section transition */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>

    </section>
  );
}

export default FinalCTA;