import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import bgImage from "../assets/runway.png";

const statsData = [
  { number: 95, label: "Professional Pilots" },
  { number: 68, label: "Jet Aircraft" },
  { number: 290, label: "Global Airports" },
  { number: 195, label: "Destinations" },
];

function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);

      const current = Math.floor(progress * value);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}

function Statistics() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="uppercase tracking-[4px] text-xs text-gray-300 mb-3"
        >
          Our Performance
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-3xl md:text-4xl lg:text-5xl font-light mb-6"
        >
          Aviation in Numbers
        </motion.h2>

        <div className="h-[2px] bg-white/40 w-16 mx-auto mb-14" />

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">

          {statsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: false }}
            >
              <h3 className="text-4xl md:text-5xl font-light mb-2 tracking-wide">
                <Counter value={item.number} />+
              </h3>

              <p className="text-gray-200 text-sm md:text-base">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Statistics;