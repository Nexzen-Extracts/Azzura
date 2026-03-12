import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import jetImg from "../assets/jet-highlight.webp";

function Counter({ end }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1500;
    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const value = Math.floor(progress * end);

      setCount(value);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, end]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

function JetHighlight() {

  const leftVariant = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" }
    }
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-white py-20 md:py-16 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="text-center lg:text-left"
        >

          <img
            src={jetImg}
            alt="Private jet aircraft"
            loading="lazy"
            decoding="async"
            className="w-full max-w-xl mx-auto lg:mx-0 will-change-transform"
          />

          <p className="uppercase tracking-[3px] text-xs text-gray-400 mt-6">
            Private jet passengers carried
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#0E2038] mt-2">
            <Counter end={367000} />+
          </h2>

        </motion.div>


        {/* RIGHT */}
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >

          <p className="uppercase tracking-[4px] text-xs text-gray-400 mb-3">
            Exclusive Access
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0E2038] mb-5">
            Where Journeys Begin?
          </h2>

          <div className="w-16 h-[2px] bg-gray-300 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
            Private aviation designed for those who value time, comfort,
            and discretion. Experience travel that moves at your pace.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">

            <button className="px-7 py-3 rounded-full bg-[#0E2038] text-white text-sm transition duration-300 hover:bg-[#1A3354] hover:scale-[1.03]">
              Book Your Flight
            </button>

            <button className="px-7 py-3 rounded-full border border-[#0E2038] text-[#0E2038] text-sm transition duration-300 hover:bg-[#0E2038] hover:text-white hover:scale-[1.03]">
              Join Membership
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default JetHighlight;