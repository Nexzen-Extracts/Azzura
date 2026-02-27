import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CharterSection from "../components/CharterSection";
import CharterProcess from "../components/CharterProcess";
import CharterSectionForm from "../components/CharterSectionForm";
import charterHero from "../assets/charter3.jpg";


function CharterHero() {
  const heroRef = useRef(null);

  /* ===== Parallax ===== */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  /* ===== Typewriter ===== */
  const fullText =
    "Fly on your schedule. Experience uncompromised luxury.";

  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(typingInterval);
        setTypingDone(true);
      }
    }, 45); // slower = premium feel

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-black">

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      <section
          ref={heroRef}
          className="relative h-[95vh] min-h-[650px] flex items-center justify-center overflow-hidden"
          >
          {/* Background Image */}

            <motion.img
              src={charterHero}
              style={{ y: heroY, scale: heroScale }}
              className="absolute w-full h-full object-cover object-center md:object-[center_35%]"
            />

          {/* Soft Cinematic Overlay (Balanced) */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Subtle Warm Highlight for Luxury Feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#C6A75E]/10 via-transparent to-transparent" />

          {/* Content */}
          <div className="relative z-20 text-center px-6 max-w-4xl">
            
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-semibold tracking-wide text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
            >
              Charter Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-6 text-lg md:text-xl text-gray-200 min-h-[32px]"
            >
              {displayedText}
              {!typingDone && (
                <span className="ml-1 animate-pulse text-white">|</span>
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-10"
            >
              <button className="px-12 py-4 rounded-full border border-[#C6A75E] text-[#C6A75E] font-semibold backdrop-blur-md bg-black/30 hover:bg-[#C6A75E] hover:text-black transition-all duration-300 shadow-[0_0_40px_rgba(198,167,94,0.25)]">
                Request Charter
              </button>
            </motion.div>

          </div>
        </section>
        <CharterSection />
        <CharterProcess/>
        <CharterSectionForm/>
        <Footer />
    </div>
  );
}

export default CharterHero;

