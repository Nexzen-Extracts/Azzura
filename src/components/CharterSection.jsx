import { motion } from "framer-motion";
import img1 from "../assets/charter-1.webp";
import img2 from "../assets/charter-2.jpg";
import img3 from "../assets/charter-3.webp";
import img4 from "../assets/charter-4.webp";


/* CONTENT */

const points = [
  "On-demand private jet and helicopter charter worldwide",
  "Direct access to remote and private airports",
  "Complete privacy for VIP and corporate travel",
  "Flexible scheduling with zero commercial delays",
];

function CharterSection() {
  const leftAnim = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightAnim = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white overflow-x-hidden">

      {/* ================= SECTION 1 ================= */}
      {/* LEFT CONTENT | RIGHT IMAGE (50-50) */}
      <section className="w-full">
        <div className="flex flex-col lg:flex-row min-h-[70vh]">

          {/* LEFT */}
          <motion.div
            variants={leftAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
          >
            <div className="max-w-xl">
              <p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
                Charter Services
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0E2038] mb-5">
                Private Jet & Helicopter Charter
              </h2>

              <div className="w-16 h-[2px] bg-gray-300 mb-6" />

              <p className="text-gray-600 mb-6 leading-relaxed">
                Experience complete freedom with customized private aviation
                solutions designed for business, luxury travel and critical missions.
              </p>

              <ul className="space-y-3 text-gray-700">
                {points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span>•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={rightAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:w-1/2 h-[320px] lg:h-auto"
          >
           <img
  src={img1}
  alt="Charter"
  className="w-full h-full object-cover"
/>
          </motion.div>
        </div>
      </section>


      {/* ================= SECTION 2 ================= */}
      {/* LEFT IMAGE | RIGHT CONTENT (50-50) */}
      <section className="w-full bg-[#F6F7F9]">
        <div className="flex flex-col lg:flex-row min-h-[70vh]">

          {/* LEFT IMAGE */}
          <motion.div
            variants={leftAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="lg:w-1/2 h-[320px] lg:h-auto"
          >
           <img
  src={img2}
  alt="Deliverables"
  className="w-full h-full object-cover"
/>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={rightAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
          >
            <div className="max-w-xl">
              <p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
                Our Deliverables
              </p>

              <h2 className="text-3xl md:text-4xl font-light text-[#0E2038] mb-5">
                Precision. Reliability. Safety.
              </h2>

              <div className="w-16 h-[2px] bg-gray-300 mb-6" />

              <ul className="space-y-3 text-gray-700">
                {[
                  "Rapid quotation response",
                  "Right aircraft matching",
                  "Expert aviation guidance",
                  "Transparent pricing",
                  "Dedicated support manager",
                  "Highest safety standards",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ================= SECTION 3 ================= */}
      {/* WHY CHOOSE (70-30) */}
      <section className="w-full">
        <div className="flex flex-col lg:flex-row min-h-[70vh]">

          {/* LEFT 70% */}
          <motion.div
            variants={leftAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="lg:w-[70%] flex items-center px-6 md:px-10 lg:px-14 py-12"
          >
            <div className="max-w-3xl">
              <p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
                Why Choose Us
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0E2038] mb-6">
                Excellence in Private Aviation
              </h2>

              <div className="w-16 h-[2px] bg-gray-300 mb-8" />

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  {
                    title: "Global Charter Network",
                    desc: "Access aircraft worldwide for business and leisure travel.",
                  },
                  {
                    title: "Experienced Aviation Team",
                    desc: "Certified crews ensure seamless operations.",
                  },
                  {
                    title: "Luxury & Comfort",
                    desc: "Premium interiors with privacy and comfort.",
                  },
                  {
                    title: "Safety & Compliance",
                    desc: "Strict maintenance and international standards.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 border border-gray-300 flex items-center justify-center text-[#0E2038] font-semibold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-[#0E2038] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT 30% */}
          <motion.div
            variants={rightAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="lg:w-[30%] h-[320px] lg:h-auto"
          >
           <img
  src={img3}
  alt="Why Choose"
  className="w-full h-full object-cover"
/>
          </motion.div>
        </div>
      </section>


      {/* ================= SECTION 4 ================= */}
      {/* LEFT IMAGE | RIGHT FORM (50-50) */}
      <section className="w-full bg-[#F6F7F9]">
        <div className="flex flex-col lg:flex-row min-h-[70vh]">

          {/* LEFT IMAGE */}
          <motion.div
            variants={leftAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="lg:w-1/2 h-[350px] lg:h-auto"
          >
                    <img
  src={img4}
  alt="Contact"
  className="w-full h-full object-cover"
/>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            variants={rightAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
          >
           <div className="max-w-xl w-full">
  <p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
    Request Quote
  </p>

  <h2 className="text-3xl md:text-4xl font-light text-[#0E2038] mb-6">
    Request a Charter Quote
  </h2>

  <p className="text-gray-600 mb-8 text-sm leading-relaxed">
    Share your travel requirements and our aviation team will provide the most
    suitable aircraft options with competitive pricing.
  </p>

  <form className="space-y-5">

    {/* Name + Phone */}
    <div className="grid md:grid-cols-2 gap-4">
      <input className="premium-input" placeholder="Full Name" />
      <input className="premium-input" placeholder="Phone Number" />
    </div>

    {/* Email */}
    <input className="premium-input" placeholder="Email Address" />

    {/* Trip Type */}
   <div className="relative">
  <select className="premium-input premium-select">
    <option value="">Select Service</option>
    <option>Private Jet Charter</option>
    <option>Helicopter Charter</option>
    <option>Emergency / Medical</option>
    <option>Corporate Travel</option>
  </select>

  {/* Custom Arrow */}
  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
    ▼
  </div>
</div>

    {/* Message */}
    <textarea
      className="premium-input h-32"
      placeholder="Tell us about your travel plan"
    />

    {/* Button */}
    <button className="w-full bg-[#0E2038] text-white py-3.5 rounded-full font-medium tracking-wide shadow-md hover:bg-[#1A3354] transition-all duration-300">
      Request Quote
    </button>
  </form>
</div>
          </motion.div>
        </div>

       <style>{`
  .premium-input {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid #e5e7eb;
    border-radius: 999px;
    font-size: 14px;
    background: #ffffff;
    color: #0E2038;
    outline: none;
    transition: all 0.25s ease;
  }

  textarea.premium-input {
    border-radius: 16px;
    resize: none;
  }

  .premium-input:focus {
    border-color: #0E2038;
    box-shadow: 0 4px 20px rgba(14, 32, 56, 0.08);
  }

  /* ===== Dropdown Fix ===== */
  .premium-select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-right: 40px;
    cursor: pointer;
  }

  .premium-select option {
    color: #0E2038;
    background: #ffffff;
  }
`}</style>
      </section>

    </div>
  );
}

export default CharterSection;