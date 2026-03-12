import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import YatraExperience from "../components/YatraExperience";
import JetHighlight from "../components/JetHighlight";
import NewsletterSection from "../components/NewsletterSection";
import FeatureSection from "../components/FeatureSection";

import heli from "../assets/azura-wed.jpg";

import hero1 from "../assets/yatra/hero1.webp";
import hero2 from "../assets/yatra/hero2.webp";
import hero4 from "../assets/yatra/hero4.webp";
import hero5 from "../assets/yatra/hero5.webp";

function YatraPage() {

  const images = [hero1, hero2, hero4, hero5];
  const [index, setIndex] = useState(0);

  // Smooth Hero Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative w-full h-screen overflow-hidden">

        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt="Chardham Yatra"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: i === index ? 1 : 0,
              scale: i === index ? 1.1 : 1.05
            }}
            transition={{
              opacity: { duration: 2 },
              scale: { duration: 8 }
            }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end justify-start px-6 md:px-16 pb-24">

          <motion.div
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl text-white"
          >

            <p className="text-xs md:text-sm tracking-[4px] uppercase text-white/70 mb-4">
              Spiritual Journey
            </p>

            <h1 className="samarkan text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight">
              Chardham Yatra
            </h1>

            <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
              Experience sacred journeys across India with private aviation,
              priority darshan and seamless spiritual travel planning.
            </p>

          </motion.div>

        </div>

      </section>

      <YatraExperience />

      <JetHighlight />

      <FeatureSection
        image={heli}
        subtitle="Azura Wed"
        title="Your Wedding Journey, Elevated by Azura"
        description="Azura Wed brings together luxury private aviation and unforgettable wedding experiences."
        buttonPrimaryText="Discover Azura Wed"
        buttonPrimaryLink="/wed"
        reverse={true}
      />

      <NewsletterSection />

      <Footer />
    </>
  );
}

export default YatraPage;