import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import bgImage from "../assets/runway.png"; // your background

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
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}

function Statistics() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">

      {/* Fixed Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="uppercase tracking-[4px] text-xs text-gray-300 mb-3"
        >
          Our Performance
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl lg:text-5xl font-light mb-6"
        >
          Aviation in Numbers
        </motion.h2>

        <div className="h-[2px] bg-white/40 w-16 mx-auto mb-12" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {statsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-4xl md:text-5xl font-light mb-2">
                <Counter value={item.number} />+
              </h3>
              <p className="text-gray-200">{item.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Statistics;