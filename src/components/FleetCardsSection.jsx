import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function FleetCardsSection({ data }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  /* ===== Timeline ===== */

  // Baggage card enters
  const baggageY = useTransform(scrollYProgress, [0.05, 0.35], [120, 0]);
  const baggageOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);

  // Baggage slightly shrink when seats comes
  const baggageScale = useTransform(scrollYProgress, [0.4, 0.7], [1, 0.92]);

  // Seats card comes over
  const seatsY = useTransform(scrollYProgress, [0.55, 0.9], [160, 0]);
  const seatsOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);

  return (
    <section ref={ref} className="bg-[#0B1A2E]">
      {/* Controlled scroll height (no extra gap) */}
      <div className="h-[160vh] relative">

        {/* Sticky full screen */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-4">

          {/* ================= BAGGAGE ================= */}
          <motion.div
            style={{
              y: baggageY,
              opacity: baggageOpacity,
              scale: baggageScale
            }}
            className="
              absolute
              w-full max-w-5xl
              bg-white/8 backdrop-blur-xl
              border border-white/15
              rounded-2xl
              shadow-[0_25px_60px_rgba(0,0,0,0.45)]
              p-6 md:p-10
              flex flex-col md:flex-row
              items-center gap-6 md:gap-10
            "
          >
            {/* Image (from FleetContent) */}
            <div className="w-full md:w-1/2">
              <img
                src={data.baggageImage}
                alt="Baggage"
                className="w-full h-56 md:h-72 object-cover rounded-xl"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 text-white text-center md:text-left">
              <p className="tracking-[6px] text-gray-300 mb-3 text-sm">
                BAGGAGE
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {data.baggage}
              </h2>

              <p className="text-white/70 text-sm md:text-base max-w-md mx-auto md:mx-0">
                {data.baggageText}
              </p>
            </div>
          </motion.div>

          {/* ================= SEATS (ON TOP) ================= */}
          <motion.div
            style={{
              y: seatsY,
              opacity: seatsOpacity
            }}
            className="
              absolute
              w-full max-w-5xl
              bg-white/8 backdrop-blur-xl
              border border-white/15
              rounded-2xl
              shadow-[0_30px_70px_rgba(0,0,0,0.55)]
              p-6 md:p-10
              flex flex-col md:flex-row-reverse
              items-center gap-6 md:gap-10
            "
          >
            {/* Image (from FleetContent interior) */}
            <div className="w-full md:w-1/2">
              <img
                src={data.interior?.[0]}
                alt="Seats"
                className="w-full h-56 md:h-72 object-cover rounded-xl"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 text-white text-center md:text-left">
              <p className="tracking-[6px] text-gray-300 mb-3 text-sm">
                SEATS
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Up to {data.seats}
              </h2>

              <p className="text-white/70 text-sm md:text-base max-w-md mx-auto md:mx-0">
                {data.seatsText}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default FleetCardsSection;