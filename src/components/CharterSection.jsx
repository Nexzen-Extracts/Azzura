import {
  motion,
  AnimatePresence
} from "framer-motion";
import { useState, useEffect } from "react";
import charter1 from "../assets/charter1.jpg";
import charterinterior2 from "../assets/charter-interior-2.jpg";
import charterinterior from "../assets/charter-interior-3.jpg";
const features = [
  {
    title: "Global Private Jet Access",
    desc: "On-demand charter solutions across continents with priority routing and executive handling.",
    image: charter1
  },
  {
    title: "Remote & Private Airport Reach",
    desc: "Direct access to regional terminals and exclusive private aviation hubs worldwide.",
    image: charterinterior2
  },
  {
    title: "Total VIP Discretion",
    desc: "Confidential travel planning designed around leadership, privacy and precision.",
    image: charterinterior
  }
];

function PremiumCharterInteractive() {
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  /* ===== AUTO LOOP ===== */
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section className="bg-[#050B14] text-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* ===== HEADING ===== */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            The Future of <span className="text-[#D4AF37]">Private Charter</span>
          </h2>

          <p className="text-white/60 mt-5 text-lg">
            A seamless aviation ecosystem engineered for leaders who demand precision.
          </p>
        </div>

        {/* ===== GRID ===== */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* ===== LEFT CARDS (COMPACT) ===== */}
          <div className="space-y-5">

            {features.map((item, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => {
                  setIsHovering(true);
                  setActive(index);
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                }}
                whileHover={{ scale: 1.02 }}
                className={`p-5 rounded-xl border transition-all duration-400 cursor-pointer ${
                  active === index
                    ? "border-[#D4AF37] bg-[#0B1623] shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                    : "border-white/10"
                }`}
              >
                <h3
                  className={`text-lg font-semibold transition ${
                    active === index
                      ? "text-[#D4AF37]"
                      : "text-white"
                  }`}
                >
                  {item.title}
                </h3>

                <p className="text-white/60 mt-2 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>

          {/* ===== RIGHT IMAGE (PROPER BALANCED SIZE) ===== */}
          <div className="flex justify-center">
  <div className="relative w-full max-w-lg h-[360px] md:h-[420px] rounded-2xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.75)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={features[active].image}
                  src={features[active].image}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PremiumCharterInteractive;