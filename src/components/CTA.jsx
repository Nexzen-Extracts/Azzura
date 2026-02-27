import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ctaVideo from "../assets/cta.mp4";

import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/400-italic.css";

function CTA() {
  const ref = useRef(null);

  // Scroll animation for whole section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "center center"],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const sectionY = useTransform(scrollYProgress, [0, 0.6], [80, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity: sectionOpacity, y: sectionY }}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden text-white py-16 md:py-20"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={ctaVideo} type="video/mp4" />
      </video>

      {/* Strong Dark Overlay (Video ~10–15% visible) */}
      <div className="absolute inset-0 bg-[#081423]/90"></div>

      {/* Content */}
      <div
        className="relative z-10 text-center px-5 sm:px-6 max-w-4xl"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm tracking-[4px] text-[#D4AF37] uppercase mb-4"
        >
          Exclusive Access
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold"
          style={{
            textShadow: "0 12px 40px rgba(0,0,0,0.95)",
          }}
        >
          Ready to Fly
          <br />
          <span className="italic font-normal">Differently?</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-5 text-white/95 text-base sm:text-lg max-w-2xl mx-auto"
          style={{
            fontFamily: "Montserrat, sans-serif",
            textShadow: "0 4px 20px rgba(0,0,0,0.85)",
          }}
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
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            className="w-full sm:w-auto px-8 py-3 sm:px-10 sm:py-4 rounded-sm font-semibold tracking-[2px]
            bg-gradient-to-r from-[#B8962E] via-[#D4AF37] to-[#B8962E]
            text-[#081423]
            shadow-lg
            hover:brightness-110 transition-all duration-300"
          >
            BOOK YOUR FLIGHT
          </button>

          <button
            className="w-full sm:w-auto px-8 py-3 sm:px-10 sm:py-4 rounded-sm font-semibold tracking-[2px]
            border border-white/40
            text-white
            hover:border-[#D4AF37]
            hover:text-[#D4AF37]
            transition-all duration-300"
          >
            JOIN MEMBERSHIP
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default CTA;