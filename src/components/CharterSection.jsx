import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CTA from "./CTA"; // Global CTA Component

/* ================= CONTENT (SEO Optimized) ================= */

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
    desc: "Modern aircraft with premium interiors, privacy, and personalized onboard experience."
  },
  {
    title: "Safety & Compliance",
    desc: "Strict maintenance protocols and international aviation safety standards."
  }
];

const sliderImages = [
  "https://i.pinimg.com/originals/05/4e/dc/054edcc0981bfd8c87d3092a6b0682ba.gif",
  "https://accaircharter.co.uk/wp-content/uploads/2024/10/Private-Jet-In-The-Air_1200x600.gif",
  "https://www.middleburglife.com/wp-content/uploads/2018/02/You-can-arrive-in-style-and-on-your-own-schedule-flying-private.gif"
];

/* ================= COMPONENT ================= */

function CharterSection() {
  const [index, setIndex] = useState(0);

  /* Auto Slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      {/* ================= SECTION 1 (DARK) ================= */}
      <section className="bg-[#081421] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[7fr_3fr] gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
              Private Jet & Helicopter Charter Solutions
            </h2>

            <p className="text-white/70 mb-8 text-lg">
              Experience the freedom of private aviation with fully customized
              charter services designed for corporate travel, luxury journeys,
              pilgrimage, events, and time-critical missions.
            </p>

            <ul className="space-y-4">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <span className="text-[#D4AF37] text-lg">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT SLIDER */}
          <motion.div
            className="relative h-[340px] w-full overflow-hidden rounded-xl border border-white/10"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {sliderImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Private Charter Aircraft"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2 (LIGHT AVIATION STYLE) ================= */}
      <section className="bg-[#F4F7FB] py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-semibold text-[#081421] mb-4">
            Why Choose Our Charter Services
          </h2>

          <p className="text-[#5B6B7C] mb-14 max-w-2xl mx-auto">
            We combine operational excellence, safety, and luxury to deliver a
            reliable private aviation experience tailored to your travel needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chooseUs.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2 text-[#081421]">
                  {item.title}
                </h3>
                <p className="text-[#5B6B7C] text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR DELIVERABLES ================= */}
<section className="bg-[#081421] text-white py-24 px-6">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Our Deliverables
      </h2>

      <ul className="space-y-4 text-white/80">
        {[
          "Rapid response to quotation requests",
          "Matching the right aircraft to your specific travel needs",
          "Expert guidance on the best aircraft solution",
          "Competitive pricing for maximum value and efficiency",
          "Dedicated client services manager for personalized support",
          "Highest standards of safety, security, and comfort"
        ].map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-[#D4AF37]">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>

    {/* RIGHT IMAGES */}
    <motion.div
      className="grid grid-cols-2 gap-4"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <img
        src="https://www.poonawallaaviation.com/images/about-bg.jpg"
        className="rounded-xl object-cover h-40 w-full"
        alt="Jet"
      />
      <img
        src="https://www.dunesair.in/wp-content/uploads/2025/05/5fb32fa5bdc52345ff2a97b1_givsp-ext1.webp"
        className="rounded-xl object-cover h-40 w-full"
        alt="Helicopter"
      />
      <img
        src="https://www.vistajet.com/globalassets/aircraft/new-fleet/citation-xls.png?width=1929&height=523&mode=stretch"
        className="rounded-xl object-cover h-40 w-full col-span-2"
        alt="Charter"
      />
    </motion.div>

  </div>
</section>

{/* ================= BOOKING SECTION ================= */}
<section className="bg-[#F4F7FB] py-24 px-6">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* ===== LEFT IMAGE ===== */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="w-full h-[520px]"
    >
      <img
        src="https://i.pinimg.com/736x/ab/9a/26/ab9a260420c3057a0a1f7e9053965e16.jpg"
        alt="Private Jet Interior"
        className="w-full h-full object-cover rounded-lg"
      />
    </motion.div>

    {/* ===== RIGHT FORM (No Card) ===== */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <h2 className="text-3xl font-semibold text-[#081421] mb-3">
        Request a Charter Quote
      </h2>

      <p className="text-[#5B6B7C] mb-8">
        Share your travel requirements and our aviation team will provide the
        best aircraft options with competitive pricing.
      </p>

      <form className="space-y-5">

        {/* Name + Phone */}
        <div className="grid md:grid-cols-2 gap-4">
          <input className="form-input" placeholder="Full Name" />
          <input className="form-input" placeholder="+91 Phone Number" />
        </div>

        {/* Email */}
        <input className="form-input" placeholder="Email Address" />

        {/* Services */}
        <div>
          <p className="text-sm font-medium text-[#081421] mb-2">
            Select Services
          </p>

          <div className="grid grid-cols-2 gap-y-2 text-sm text-[#081421]">
            {[
              "Aircraft Management",
              "Aircraft Sourcing & Sales",
              "Membership Programs",
              "Charter Services",
              "MRO",
              "Aviation Consultancy"
            ].map((service, i) => (
              <label key={i} className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#D4AF37]" />
                {service}
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <textarea
          className="form-input h-32"
          placeholder="Your message"
        />

        {/* Submit */}
        <button className="w-full bg-[#D4AF37] text-[#081421] py-3 font-semibold tracking-wide hover:opacity-90 transition">
          SUBMIT REQUEST
        </button>
      </form>
    </motion.div>
  </div>

  {/* Form Styles */}
  <style>
    {`
    .form-input {
      width: 100%;
      padding: 12px 14px;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      outline: none;
      font-size: 14px;
      background: #ffffff;
    }

    .form-input:focus {
      border-color: #D4AF37;
      box-shadow: 0 0 0 1px #D4AF37;
    }
    `}
  </style>
</section>

      {/* ================= GLOBAL CTA ================= */}
      <CTA />

    </div>
  );
}

export default CharterSection;