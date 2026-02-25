import { motion } from "framer-motion";
import ctaVideo from "../assets/cta.mp4";

import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/400-italic.css";

function CTA() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">

      {/* Background Video */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <source src={ctaVideo} type="video/mp4" />
      </motion.video>

      {/* Main Dark Overlay */}
      <div className="absolute inset-0 bg-[#081423]/70"></div>

      {/* Bottom Heavy Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-[#081423] via-[#081423]/90 to-transparent"></div>

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-4xl"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        {/* Gold Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm tracking-[4px] text-[#D4AF37] uppercase mb-6"
        >
          Exclusive Access
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl leading-tight font-semibold"
        >
          Ready to Fly
          <br />
          <span className="italic font-normal">
            Differently?
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 text-[#B8C2CC] text-lg max-w-2xl mx-auto"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Join the world’s most exclusive private aviation community.
          Your next journey begins with a single conversation.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-10 py-4 rounded-sm font-semibold tracking-[2px]
            bg-gradient-to-r from-[#B8962E] via-[#D4AF37] to-[#B8962E]
            text-[#081423]
            shadow-lg
            hover:brightness-110 transition-all duration-300">
            BOOK YOUR FLIGHT
          </button>

          <button className="px-10 py-4 rounded-sm font-semibold tracking-[2px]
            border border-white/30
            text-white
            hover:border-[#D4AF37]
            hover:text-[#D4AF37]
            transition-all duration-300">
            JOIN MEMBERSHIP
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;