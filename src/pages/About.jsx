import { motion } from "framer-motion";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TimelineCinematic from "../components/TimelineCinematic";
import JetHighlight from "../components/JetHighlight";
import NewsletterSection from "../components/NewsletterSection";

import heroImage from "../assets/about-hero-section.png";

function About() {

  const heroRef = useRef(null);

  return (
    <div className="bg-white text-[#111] overflow-x-hidden">

      <Navbar />

      {/* ================= HERO ================= */}

      <section
        ref={heroRef}
        className="relative w-full h-screen overflow-hidden"
      >

        {/* Background Image */}

        <motion.img
          src={heroImage}
          alt="Azura private aviation experience"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 7, ease: "easeOut" }}
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}

        <div className="relative z-10 h-full flex justify-end items-end px-6 md:px-16 pb-16 md:pb-24">

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[520px] text-right text-white"
          >

            <p className="uppercase tracking-[6px] text-xs text-white/70 mb-5">
              About AZURA
            </p>

           <h1 className="font-light text-[38px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.05] mb-6 max-w-[520px]">
  The Future of
  <br />
  Private Aviation
</h1>

            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md ml-auto">
              Time is the new luxury. We help you own it.
            </p>

          </motion.div>

        </div>

      </section>


      {/* ================= TIMELINE ================= */}

      <TimelineCinematic />


      {/* ================= JET HIGHLIGHT ================= */}

      <JetHighlight />


      {/* ================= NEWSLETTER ================= */}

      <NewsletterSection />


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}

export default About;