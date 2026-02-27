import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import otherBg from "../assets/other.png";

function FleetExperienceSection({ data }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  /* ===== STEP OPACITY CONTROLS (No Overlap) ===== */

  const step1Opacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  const step2Opacity = useTransform(scrollYProgress, [0.15, 0.3, 0.35], [0, 1, 0]);

  const step3Opacity = useTransform(scrollYProgress, [0.35, 0.5, 0.55], [0, 1, 0]);

  const step4Opacity = useTransform(scrollYProgress, [0.55, 0.7, 0.78], [0, 1, 0]);

  const step5Opacity = useTransform(scrollYProgress, [0.78, 0.9], [0, 1]);
  const step5Y = useTransform(scrollYProgress, [0.78, 1], [80, 0]);

  return (
    <section ref={ref}>
      <div className="h-[400vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* STEP 1 */}
          <motion.div
            style={{ opacity: step1Opacity }}
            className="absolute inset-0 z-10"
          >
            <img
              src={data.interior?.[0]}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* STEP 2 */}
          <motion.div
            style={{ opacity: step2Opacity }}
            className="absolute inset-0 flex bg-black z-20"
          >
            <div className="w-1/2">
              <img
                src={data.interior?.[0]}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 flex items-center justify-center text-white p-10">
              <div>
                <p className="tracking-[6px] mb-4">SEATS</p>
                <h2 className="text-5xl font-bold mb-4">
                  Up to {data.seats}
                </h2>
                <p className="text-white/70">
                  Premium luxury seating with spacious comfort.
                </p>
              </div>
            </div>
          </motion.div>

          {/* STEP 3 */}
          <motion.div
            style={{ opacity: step3Opacity }}
            className="absolute inset-0 flex bg-black z-30"
          >
            <div className="w-1/2 relative">
              <img
                src={data.interior?.[0]}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-[#0B1A2E] text-white p-5 rounded-lg">
                <h4 className="font-semibold mb-2">Seat Comfort</h4>
                <p className="text-sm text-white/70">
                  Premium cabin comfort with luxury interior.
                </p>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <img
                src={data.baggageImage}
                className="w-[420px] h-[260px] object-cover rounded-xl shadow-xl"
              />
            </div>
          </motion.div>

          {/* STEP 4 */}
          <motion.div
            style={{ opacity: step4Opacity }}
            className="absolute inset-0 flex bg-black z-40"
          >
            <div className="w-1/2">
              <img
                src={data.baggageImage}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 flex items-center justify-center text-white p-10">
              <div>
                <p className="tracking-[6px] mb-4">BAGGAGE</p>
                <h2 className="text-5xl font-bold mb-4">
                  {data.baggage}
                </h2>
                <p className="text-white/70">
                  {data.baggageText}
                </p>
              </div>
            </div>
          </motion.div>

          {/* STEP 5 – White Faded PNG Background */}
         {/* STEP 5 – White Background + PNG (Minimal Fade) */}
<motion.div
  style={{
    opacity: step5Opacity,
    y: step5Y
  }}
  className="absolute inset-0 flex items-center justify-center px-6 z-50 bg-white"
>
  {/* PNG Background Image */}
  <img
    src={otherBg}
    alt="World Map"
    className="absolute inset-0 w-full h-full object-contain opacity-90 pointer-events-none"
  />

  {/* Very minimal fade (optional – almost invisible) */}
  <div className="absolute inset-0 bg-white/10" />

  {/* Content */}
  <div className="relative z-10 w-full max-w-6xl">

    <h2 className="text-4xl md:text-5xl font-semibold text-center mb-14 text-[#0B1A2E]">
      Other Specifications
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <SpecCard
        title="Performance"
        data={[
          ["Speed", data.speed],
          ["Range", data.range],
          ["Type", data.type]
        ]}
      />

      <SpecCard
        title="Capacity"
        data={[
          ["Passengers", data.seats],
          ["Baggage", data.baggage],
          ["Pilots", data.pilots || "2"]
        ]}
      />

      <SpecCard
        title="Cabin"
        data={[
          ["Height", data.height],
          ["Width", data.width],
          ["Length", data.length]
        ]}
      />

      <SpecCard
        title="Aircraft"
        data={[
          ["Year", data.year],
          ["Base", data.base],
          ["Lavatory", data.lavatory || "0"]
        ]}
      />
    </div>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
}

function SpecCard({ title, data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl p-6 shadow-lg"
    >
      <h3 className="text-lg font-semibold mb-4 text-[#0B1A2E]">
        {title}
      </h3>

      {data.map(([label, value], i) => (
        <div
          key={i}
          className="flex justify-between text-sm py-2 border-b last:border-none"
        >
          <span className="text-gray-500">{label}</span>
          <span className="font-medium text-[#0B1A2E]">
            {value || "-"}
          </span>
        </div>
      ))}
    </motion.div>
  );
}

export default FleetExperienceSection;