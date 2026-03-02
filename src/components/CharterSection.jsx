import { motion } from "framer-motion";


/* ================= CONTENT ================= */

const points = [
  "On-demand private jet and helicopter charter worldwide",
  "Direct access to remote, regional, and private airports",
  "Complete privacy for business, VIP, and personal travel",
  "Flexible scheduling with zero commercial delays"
];

const chooseUs = [
  {
    title: "Global Charter Network",
    desc: "Access a wide range of aircraft worldwide for business, leisure, and emergency travel."
  },
  {
    title: "Experienced Aviation Team",
    desc: "Our flight specialists and certified crews ensure safe and seamless operations."
  },
  {
    title: "Luxury & Comfort",
    desc: "Modern aircraft with premium interiors, privacy and personalized experience."
  },
  {
    title: "Safety & Compliance",
    desc: "Strict maintenance protocols aligned with international aviation standards."
  }
];

function CharterSection() {
  const leftAnim = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const rightAnim = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-white">

      {/* ================= SECTION 1 ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={leftAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-[#0E2038] leading-tight">
              Private Jet & Helicopter Charter
            </h2>

            <p className="text-gray-600 mt-6 max-w-lg leading-relaxed">
              Experience the freedom of private aviation with fully customized
              charter solutions designed for corporate travel, luxury journeys,
              events, and time-critical missions.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((point, i) => (
                <li key={i} className="flex gap-3 text-gray-700">
                  <span className="text-[#0E2038] font-semibold">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT IMAGE (Slider removed) */}
          <motion.div
            variants={rightAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1540962351504-03099e0a754b"
              alt="Private Jet"
              className="rounded-2xl shadow-lg w-full object-cover h-[420px]"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="py-24 px-6 bg-[#F6F7F9]">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl lg:text-4xl font-light text-[#0E2038] mb-4">
            Why Choose Our Charter Services
          </h2>

          <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
            Operational excellence, safety, and luxury combined to deliver a
            seamless private aviation experience.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {chooseUs.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-medium text-[#0E2038] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3 ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGES */}
          <motion.div
            variants={leftAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="https://www.poonawallaaviation.com/images/about-bg.jpg"
              className="rounded-xl h-40 w-full object-cover"
            />
            <img
              src="https://www.dunesair.in/wp-content/uploads/2025/05/5fb32fa5bdc52345ff2a97b1_givsp-ext1.webp"
              className="rounded-xl h-40 w-full object-cover"
            />
            <img
              src="https://www.vistajet.com/globalassets/aircraft/new-fleet/citation-xls.png"
              className="rounded-xl h-40 w-full object-cover col-span-2"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={rightAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-[#0E2038] mb-6">
              Our Deliverables
            </h2>

            <ul className="space-y-4 text-gray-700">
              {[
                "Rapid response to quotation requests",
                "Matching the right aircraft to your needs",
                "Expert aircraft selection guidance",
                "Competitive and transparent pricing",
                "Dedicated client support manager",
                "Highest standards of safety and comfort"
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#0E2038] font-semibold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 4 ================= */}
      <section className="py-24 px-6 bg-[#F6F7F9]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            variants={leftAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <img
              src="https://i.pinimg.com/736x/ab/9a/26/ab9a260420c3057a0a1f7e9053965e16.jpg"
              className="rounded-2xl shadow-lg h-[480px] w-full object-cover"
            />
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            variants={rightAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-[#0E2038] mb-4">
              Request a Charter Quote
            </h2>

            <p className="text-gray-600 mb-8">
              Share your travel requirements and our aviation team will provide
              the best aircraft options.
            </p>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input className="input" placeholder="Full Name" />
                <input className="input" placeholder="Phone Number" />
              </div>

              <input className="input" placeholder="Email Address" />
              <textarea className="input h-32" placeholder="Your Message" />

              <button className="px-8 py-3 bg-[#0E2038] text-white rounded-full hover:bg-[#1A3354] transition">
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>

        <style>{`
          .input {
            width: 100%;
            padding: 12px 14px;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            outline: none;
            font-size: 14px;
            background: #fff;
          }
          .input:focus {
            border-color: #0E2038;
            box-shadow: 0 0 0 1px #0E2038;
          }
        `}</style>
      </section>

      
    </div>
  );
}

export default CharterSection;