import { motion } from "framer-motion";
import { Headset, ShieldCheck, Settings } from "lucide-react";

const features = [
  {
    icon: Headset,
    title: "Customer Service",
    desc: "Personalized, value-driven support designed around your priorities and travel needs.",
  },
  {
    icon: Settings,
    title: "Operational Excellence",
    desc: "DGCA compliant operations ensuring reliability, efficiency and seamless experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Security",
    desc: "Certified crews, strict maintenance protocols and uncompromising safety standards.",
  },
];

function WhyChoose() {
  // Left content animation (from left)
  const leftVariant = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Right animation (from right)
  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#F4F6F8] py-20 md:py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-10 gap-10 items-center">

        {/* LEFT 70% */}
        <motion.div
          className="lg:col-span-7"
          variants={leftVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* SplitSection style heading */}
          <motion.p
            variants={itemVariant}
            className="uppercase tracking-[4px] text-xs text-gray-400 mb-3"
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            variants={itemVariant}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0E2038]"
          >
            Time-Smart Luxury at Your Command
          </motion.h2>

          <motion.div
            variants={itemVariant}
            className="w-16 h-[2px] bg-gray-300 mt-5 mb-6"
          />

          <motion.p
            variants={itemVariant}
            className="text-[#6B7C8F] max-w-2xl"
          >
            We understand the value of your time. Our focus is on convenience,
            comfort, operational precision and uncompromising safety.
          </motion.p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-10 mt-14">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariant}
                  viewport={{ once: false }}
                >
                  <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                    <Icon className="text-[#A3B5C0]" size={26} />
                  </div>

                  <h3 className="font-light text-[#0E2038] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#6B7C8F]">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT 30% – Route Map */}
        <motion.div
          className="lg:col-span-3 relative h-[360px] hidden lg:block"
          variants={rightVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="absolute inset-0 rounded-2xl bg-[#0E2038] overflow-hidden shadow-lg">

            {/* subtle texture */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,#ffffff,transparent_40%),radial-gradient(circle_at_70%_70%,#ffffff,transparent_40%)]"></div>

            {/* Routes */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
              <path
                d="M20 240 Q150 40 280 180"
                stroke="#A3B5C0"
                strokeWidth="1.5"
                fill="none"
                strokeOpacity="0.6"
              />
              <path
                d="M40 60 Q200 160 260 40"
                stroke="#758D93"
                strokeWidth="1.5"
                fill="none"
                strokeOpacity="0.6"
              />
            </svg>

            {/* City points */}
            <div className="absolute top-6 left-6 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_white]" />
            <div className="absolute top-16 right-10 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_white]" />
            <div className="absolute bottom-12 left-16 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_white]" />
            <div className="absolute bottom-20 right-12 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_white]" />

            {/* Moving planes */}
            <div
              className="absolute"
              style={{
                offsetPath: "path('M20 240 Q150 40 280 180')",
                animation: "fly1 8s linear infinite",
              }}
            >
              ✈
            </div>

            <div
              className="absolute text-[#A3B5C0]"
              style={{
                offsetPath: "path('M40 60 Q200 160 260 40')",
                animation: "fly2 10s linear infinite",
              }}
            >
              ✈
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default WhyChoose;