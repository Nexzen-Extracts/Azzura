import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import jetVideo from "../assets/jet.mov";

/* ================= ANIMATIONS ================= */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 35, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut" },
  },
};

const tabAnim = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.4 } },
};

/* ================= COMPONENT ================= */

export default function Hero() {
  const [activeTab, setActiveTab] = useState("jet");

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden">

      {/* VIDEO */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.25 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <source src={jetVideo} type="video/mp4" />
      </motion.video>

      {/* OVERLAY */}
      <motion.div
        className="absolute inset-0 bg-[#0E2038]/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-24 sm:py-32 grid lg:grid-cols-2 gap-12 items-center text-white"
      >

        {/* LEFT TEXT */}
        <motion.div className="text-center lg:text-left">

          <motion.h1
            variants={fadeUp}
            className="font-heading leading-tight"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}
          >
            <span className="italic font-normal block">
              Fly Beyond Limits
            </span>
            <span className="font-medium">
              Private Aviation Redefined
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-[#DAD5CF] italic max-w-xl mx-auto lg:mx-0"
            style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)" }}
          >
            Experience world-class comfort, privacy, and performance
            with our premium fleet and personalized aviation services.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <LuxuryButton filled text="Book Your Flight" />
            <LuxuryButton text="Explore Fleet" />
          </motion.div>

        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="w-full max-w-md mx-auto lg:ml-auto"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-2xl">

            {/* TABS */}
            <div className="flex mb-5 bg-[#213A5C] rounded-lg overflow-hidden text-sm">
              {["jet", "heli"].map((tab) => (
                <motion.button
                  key={tab}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 transition ${
                    activeTab === tab
                      ? "bg-[#A3B5C0] text-[#0E2038]"
                      : "text-white hover:bg-[#2c4a73]"
                  }`}
                >
                  {tab === "jet" ? "Jet Charter" : "Helicopter"}
                </motion.button>
              ))}
            </div>

            {/* FORMS */}
            <AnimatePresence mode="wait">
              {activeTab === "jet" && (
                <motion.div
                  key="jet"
                  variants={tabAnim}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="space-y-3"
                >
                  <div className="grid sm:grid-cols-2 gap-3">
                    <AnimatedInput placeholder="From" />
                    <AnimatedInput placeholder="To" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <AnimatedInput type="date" />
                    <AnimatedInput placeholder="Passengers" type="number" />
                  </div>

                  <ActionButton text="Search Flights" />
                </motion.div>
              )}

              {activeTab === "heli" && (
                <motion.div
                  key="heli"
                  variants={tabAnim}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="space-y-3"
                >
                  <AnimatedInput placeholder="Full Name" />
                  <AnimatedInput type="email" placeholder="Email" />
                  <AnimatedInput type="tel" placeholder="Phone" />
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    rows="3"
                    placeholder="Message"
                    className="p-3 rounded-lg w-full text-black text-sm focus:outline-none"
                  />
                  <ActionButton text="Submit Inquiry" />
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

/* ================= REUSABLE UI ================= */

const AnimatedInput = ({ type = "text", placeholder }) => (
  <motion.input
    whileFocus={{ scale: 1.04 }}
    transition={{ type: "spring", stiffness: 300 }}
    type={type}
    placeholder={placeholder}
    className="p-3 rounded-lg bg-white text-black text-sm w-full focus:outline-none"
  />
);

const LuxuryButton = ({ text, filled }) => (
  <motion.button
    whileHover={{ scale: 1.06 }}
    whileTap={{ scale: 0.94 }}
    className={`px-8 py-3 rounded-full text-sm shadow-xl transition ${
      filled
        ? "bg-[#A3B5C0] text-[#0E2038]"
        : "border border-[#A3B5C0]"
    }`}
  >
    {text}
  </motion.button>
);

const ActionButton = ({ text }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-full bg-[#A3B5C0] text-[#0E2038] py-3 rounded-full font-medium text-sm"
  >
    {text}
  </motion.button>
);