import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import { useRef, useEffect, useState } from "react";


function FleetCinematic({ data }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  /* ================= HERO ================= */

  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.3]);
  const heroOverlay = useTransform(scrollYProgress, [0.1, 0.3], [0, 0.5]);
  const heroTitleOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const heroOpacity = useTransform(scrollYProgress, [0.4, 0.55], [1, 0]);

  /* ================= MODEL CARD ================= */

  const cardY = useTransform(scrollYProgress, [0.3, 0.45], [0, -300]);
  const cardOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.92, 0.98],
    [0, 1, 1, 0]
  );

  /* ================= WHITE SECTION ================= */

  const whiteBg = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const sectionOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

  /* ================= SPEED ================= */

  const maxSpeed = parseInt(data.speed);

  const progress = useTransform(scrollYProgress, [0.65, 0.9], [0, 1]);

  const smoothProgress = useSpring(progress, {
    stiffness: 80,
    damping: 20
  });

  const [displaySpeed, setDisplaySpeed] = useState(0);

  useEffect(() => {
    return smoothProgress.on("change", (v) => {
      setDisplaySpeed(Math.round(v * maxSpeed));
    });
  }, [smoothProgress, maxSpeed]);

  /* ================= GAUGE ================= */

  const radius = 130;
  const circumference = Math.PI * radius;

  const dashOffset = useTransform(
    smoothProgress,
    [0, 1],
    [circumference, 0]
  );

  /* ================= TRANSITIONS ================= */

  const meterScale = useTransform(scrollYProgress, [0.9, 1], [1, 0.75]);
  const bigSpeedOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  const underSpeedOpacity = useTransform(scrollYProgress, [0.92, 1], [0, 1]);

  /* ================= RANGE ================= */

  const rangeOpacity = useTransform(scrollYProgress, [0.95, 1], [0, 1]);
  const rangeX = useTransform(scrollYProgress, [0.95, 1], [80, 0]);
  const rangeScale = useTransform(scrollYProgress, [0.95, 1], [0.9, 1]);
  const routeOpacity = useTransform(scrollYProgress, [0.97, 1], [0, 1]);

  return (
    <div ref={ref} className="bg-black">
      <div className="h-[380vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* ================= HERO ================= */}
          <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
            <motion.img
              src={data.image}
              style={{ scale: heroScale }}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <motion.div
              style={{ opacity: heroOverlay }}
              className="absolute inset-0 bg-black"
            />
            <motion.h1
              style={{ opacity: heroTitleOpacity }}
              className="absolute inset-0 flex items-center justify-center text-white text-6xl font-semibold"
            >
              {data.name}
            </motion.h1>
          </motion.div>

          {/* ================= MODEL CARD ================= */}
          <motion.div
            style={{ y: cardY, opacity: cardOpacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl z-20"
          >
            <div className="bg-[#0B1A2E] text-white rounded-2xl p-4 flex items-center gap-4 shadow-xl">
              <img
                src={data.interior[0]}
                className="w-28 h-20 rounded-lg object-cover"
              />
              <div>
                <p className="text-sm text-white/60">Aircraft Model</p>
                <h3 className="text-lg font-semibold">{data.name}</h3>
              </div>
            </div>
          </motion.div>

          {/* ================= WHITE BG ================= */}
          <motion.div
            style={{ opacity: whiteBg }}
            className="absolute inset-0 bg-white"
          />

          {/* ================= MAIN CONTENT ================= */}
          <motion.div
            style={{ opacity: sectionOpacity }}
            className="absolute inset-0 flex items-center justify-between px-24"
          >

            {/* ===== LEFT : SPEED METER ===== */}
            <motion.div
              style={{ scale: meterScale }}
              className="w-[480px] flex flex-col items-center"
            >
              <svg viewBox="0 0 320 240" className="w-full">

                {/* Background */}
                <path
                  d="M20 200 A130 130 0 0 1 300 200"
                  fill="none"
                  stroke="#e5e5e5"
                  strokeWidth="22"
                />

                {/* Progress */}
                <motion.path
                  d="M20 200 A130 130 0 0 1 300 200"
                  fill="none"
                  stroke="#0B1A2E"
                  strokeWidth="22"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  style={{ strokeDashoffset: dashOffset }}
                />

                {/* Labels */}
                <text x="20" y="220" fontSize="14" fill="#666">0</text>
                <text x="300" y="220" textAnchor="end" fontSize="14" fill="#666">
                  {maxSpeed}
                </text>

                {/* Digital */}
                <text
                  x="160"
                  y="160"
                  textAnchor="middle"
                  fontSize="42"
                  fontWeight="700"
                  fill="#0B1A2E"
                >
                  {displaySpeed}
                </text>

                <text
                  x="160"
                  y="185"
                  textAnchor="middle"
                  fontSize="14"
                  fill="#777"
                  letterSpacing="4"
                >
                  KTS
                </text>
              </svg>

              {/* After scroll */}
              <motion.div
                style={{ opacity: underSpeedOpacity }}
                className="mt-6 text-center"
              >
                <p className="text-5xl font-bold text-[#0B1A2E]">
                  {maxSpeed} KTS
                </p>
                <p className="text-gray-500 tracking-[4px] mt-2">
                  MAX SPEED
                </p>
              </motion.div>
            </motion.div>

            {/* ===== RIGHT : BIG SPEED (FIXED POSITION) ===== */}
            <motion.div
              style={{ opacity: bigSpeedOpacity }}
              className="absolute right-24 top-[68%] -translate-y-1/2 text-right"
            >
              <p className="text-gray-400 tracking-[6px] mb-4">
                CRUISING SPEED
              </p>

              <div className="text-9xl font-bold text-[#0B1A2E] leading-none">
                {displaySpeed}
              </div>

              <p className="text-gray-500 tracking-[4px] mt-4">
                MAX SPEED {maxSpeed} KTS
              </p>
            </motion.div>

            {/* ===== RANGE SECTION ===== */}
            <motion.div
              style={{
                opacity: rangeOpacity,
                x: rangeX,
                scale: rangeScale
              }}
              className="absolute right-24 flex flex-col items-end"
            >
              <p className="text-gray-400 tracking-[6px] mb-6 text-2xl">
                RANGE
              </p>

              <img
                src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/005/583/original/VT-MONrng.png"
                className="w-[520px] rounded-xl shadow-2xl"
              />

              <motion.p
                style={{ opacity: routeOpacity }}
                className="mt-6 text-[#0B1A2E] text-lg font-medium tracking-wide"
              >
                Delhi → Dehradun → Goa → Mumbai → Delhi
              </motion.p>
            </motion.div>

          </motion.div>
        </div>
      </div>
      
    </div>
    
  );
  
}

export default FleetCinematic;