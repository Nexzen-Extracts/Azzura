import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import bgImage from "../assets/yatra/gallery4.webp";

const stats = [
  { number: 1200, label: "Pilgrims Served" },
  { number: 4, label: "Sacred Dhams" },
  { number: 12, label: "Helicopter Routes" },
  { number: 15, label: "Years Experience" },
];

function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const step = value / (duration / 16);

    const timer = setInterval(() => {
      start += step;

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

function YatraStats() {
  return (
    <section className="relative py-16 md:py-18 overflow-hidden">

      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase tracking-[5px] text-xs text-gray-300 mb-3"
        >
          Our Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-light mb-6"
        >
          Char Dham in Numbers
        </motion.h2>

        <div className="h-[2px] w-16 bg-white/40 mx-auto mb-10" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >

              <h3 className="text-4xl md:text-5xl font-light mb-2">
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

export default YatraStats;