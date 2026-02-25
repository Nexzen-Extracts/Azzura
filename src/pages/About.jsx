import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TimelineCinematic from "../components/TimelineCinematic";
function About() {
  const heroRef = useRef(null);

  /* ================= HERO PARALLAX ================= */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  /* ================= TYPEWRITER ================= */
  const fullText = "Time is the new luxury. We help you own it.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-[#111]">

      <Navbar />

      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative h-[80vh] min-h-[520px] flex items-center justify-center mt-16"
      >
        <motion.img
          src="/src/assets/about-hero-section.png"
          style={{ y: heroY, scale: heroScale }}
          transition={{ ease: "easeOut", duration: 1.2 }}
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-semibold text-white tracking-wide"
          >
            About AZZURA
          </motion.h1>

          {/* TYPEWRITER SUBTITLE */}
          <p className="mt-6 text-lg md:text-xl text-gray-200 min-h-[30px]">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </section>


    {/* ================= BREADCRUMB ================= */}
<section className="bg-white border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center text-sm tracking-wide">
      <Link
        to="/"
        className="text-gray-400 hover:text-[#111] transition duration-300"
      >
        Home
      </Link>
      <span className="mx-3 text-gray-300">/</span>
      <span className="text-[#111] font-medium">About</span>
    </div>
  </div>
</section>


{/* ================= OUR JOURNEY ================= */}
<section className="relative bg-[#F4F6F8] pt-10 pb-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-2"
    >
      <h2 className="text-4xl md:text-5xl font-semibold text-[#111] mb-2">
        Our Journey
      </h2>
      <div className="w-16 h-[2px] bg-[#C6A75E]" />
    </motion.div>

    <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

      {/* LEFT TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-8 text-gray-600 text-lg leading-relaxed"
      >
        <p>
          Founded in <span className="font-semibold text-[#111]">2026</span>,
          AZZURA was built to redefine private aviation through innovation,
          operational excellence and uncompromising safety.
        </p>

        <p>
          What began as a bold vision has evolved into a comprehensive aviation platform
          offering charter services, helicopter transfers, aircraft management
          and elite membership programs.
        </p>

        <p className="font-medium text-[#111]">
          We do not simply move aircraft — we move ambition.
        </p>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative group"
      >
        {/* Image Wrapper */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <motion.img
            src="/src/assets/about-us-our-journey.png"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-auto object-cover"
          />

          {/* Soft dark luxury overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
        </div>

        {/* PREMIUM FLOATING CARD */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4 }}
          className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl w-64 border border-white/50 transition-all duration-500"
        >
          <h3 className="text-3xl font-semibold text-[#111]">
            2026
          </h3>
          <div className="w-10 h-[2px] bg-[#C6A75E] my-3" />
          <p className="text-sm text-gray-500 leading-relaxed">
            The year AZZURA was established as a next-generation
            private aviation brand focused on precision and excellence.
          </p>
        </motion.div>

      </motion.div>

    </div>
  </div>
</section>


<TimelineCinematic />

      <Footer />
    </div>
  );
}

export default About;