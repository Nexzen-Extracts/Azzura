import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import YatraExperience from "../components/YatraExperience";
import JetHighlight from "../components/JetHighlight";
import NewsletterSection from "../components/NewsletterSection";

import hero1 from "../assets/yatra/hero1.jpg";
import hero2 from "../assets/yatra/hero2.jpg";
import hero3 from "../assets/yatra/hero3.jpg";
import hero4 from "../assets/yatra/hero4.jpg";
import hero5 from "../assets/yatra/hero5.jpg";

function YatraPage() {

  const images = [hero1, hero2, hero3, hero4, hero5];
  const [index, setIndex] = useState(0);

  // Hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">

        {/* Background slider */}
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt="Chardham Yatra"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end justify-start px-6 md:px-16 pb-24">

          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-xl text-left text-white"
          >

            {/* Label */}
            <p className="text-xs md:text-sm tracking-[4px] uppercase text-white/70 mb-4">
              Spiritual Journey
            </p>

            {/* Heading */}
            <h1
              className="samarkan text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight"
              style={{ textShadow: "0 10px 30px rgba(0,0,0,0.6)" }}
            >
              Chardham Yatra
            </h1>

            {/* Description */}
            <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
              Experience sacred journeys across India with private aviation,
              priority darshan and seamless spiritual travel planning.
            </p>

          </motion.div>

        </div>

      </section>

      <YatraExperience />

      <JetHighlight />

      <NewsletterSection />

      <Footer />
    </>
  );
}

export default YatraPage;