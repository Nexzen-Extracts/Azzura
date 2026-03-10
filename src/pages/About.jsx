
import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TimelineCinematic from "../components/TimelineCinematic";

import heroImage from "../assets/about-hero-section.png";
import FeatureSection from "../components/FeatureSection";
import heli from "../assets/azura-wed.jpg";
import JetHighlight from "../components/JetHighlight";
import NewsletterSection from "../components/NewsletterSection";

function About() {
  const heroRef = useRef(null);

  return (
    <div className="bg-white text-[#111]">

      <Navbar />

      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative w-full h-screen overflow-hidden"
      >
        {/* Background Image */}
        <motion.img
          src={heroImage}
          alt="About Azura"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="relative z-10 h-full flex justify-end items-end px-6 md:px-16 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-[520px] text-right text-white"
          >
            <p className="uppercase tracking-[6px] text-xs text-white/70 mb-5">
              About AZURA
            </p>

            <h1 className="font-light text-[38px] sm:text-[48px] md:text-[56px] leading-[1.05] mb-6">
              The Future
              <br />
              of Private Aviation
            </h1>

            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md ml-auto">
              Time is the new luxury. We help you own it.
            </p>

          </motion.div>
        </div>
      </section>



      <TimelineCinematic />
      <JetHighlight />

      {/* <FeatureSection
  image={heli}
  subtitle="Private Charter Access"
  title="Experience Private Aviation with Azura Membership"
  description="Azura Charter Membership offers a smarter way to access private aviation. Enjoy priority booking, flexible travel options, and seamless journeys across our global network. Choose from our modern fleet and experience the comfort, privacy, and efficiency that define the Azura flying experience."
  
  buttonPrimaryText="Explore Membership"
  buttonPrimaryLink="/membership"

  buttonSecondaryText="View Our Fleet"
  buttonSecondaryLink="/fleet"

  reverse={true}
/> */}
<NewsletterSection />
     

      <Footer />

    </div>
  );
}

export default About;

