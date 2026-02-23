import { motion } from "framer-motion";
import { Headset, ShieldCheck, Settings, Plane } from "lucide-react";

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
  return (
    <section className="bg-[#F4F6F8] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-10 gap-10 items-center">

        {/* LEFT 70% */}
        <div className="lg:col-span-7">

          <h2 className="text-4xl md:text-5xl font-heading text-[#0E2038]">
            Time-Smart Luxury at Your Command
          </h2>

          <p className="text-[#6B7C8F] mt-6 max-w-2xl">
            We understand the value of your time. Our focus is on convenience,
            comfort, operational precision and uncompromising safety.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-10 mt-14">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-4">
                    <Icon className="text-[#A3B5C0]" />
                  </div>

                  <h3 className="font-semibold text-[#0E2038] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#6B7C8F]">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT 30% – Flight Route Animation */}
       {/* RIGHT 30% – Premium Route Map */}
<div className="lg:col-span-3 relative h-[360px] hidden lg:block">

  {/* Map Background */}
  <div className="absolute inset-0 rounded-2xl bg-[#0E2038] overflow-hidden shadow-lg">

    {/* Subtle grid/map texture */}
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,#ffffff,transparent_40%),radial-gradient(circle_at_70%_70%,#ffffff,transparent_40%)]"></div>

    {/* Routes SVG */}
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 300 300"
    >
      {/* Route 1 */}
      <path
        id="route1"
        d="M20 240 Q150 40 280 180"
        stroke="#A3B5C0"
        strokeWidth="1.5"
        fill="none"
        strokeOpacity="0.6"
      />

      {/* Route 2 */}
      <path
        id="route2"
        d="M40 60 Q200 160 260 40"
        stroke="#758D93"
        strokeWidth="1.5"
        fill="none"
        strokeOpacity="0.6"
      />
    </svg>

    {/* City Points */}
    <div className="absolute top-6 left-6 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_white]"></div>
    <div className="absolute top-16 right-10 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_white]"></div>
    <div className="absolute bottom-12 left-16 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_white]"></div>
    <div className="absolute bottom-20 right-12 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_white]"></div>

    {/* Moving Plane 1 */}
    <div
      className="absolute"
      style={{
        offsetPath: "path('M20 240 Q150 40 280 180')",
        animation: "fly1 8s linear infinite",
      }}
    >
      ✈
    </div>

    {/* Moving Plane 2 */}
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
</div>

      </div>
    </section>
  );
}

export default WhyChoose;
