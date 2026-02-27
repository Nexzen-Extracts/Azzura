import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ===== IMPORT LOCAL IMAGES ===== */
import kedarnath from "../assets/yatra1.jpg";
import badrinath from "../assets/yatra2.jpg";
import gangotri from "../assets/yatra3.jpg";
import yamunotri from "../assets/yatra4.jpg";

/* ===== IMAGE ARRAY ===== */
const tourImages = [kedarnath, badrinath, gangotri, yamunotri];

/* ===== PACKAGE DATA ===== */

const packageData = {
  "6N 6D": {
    duration: "6 Days",
    price: "₹2,00,000",
    highlights: [
      "Complete Char Dham Yatra",
      "VIP Darshan at all temples",
      "Luxury accommodation",
      "Helicopter transfers",
      "All meals included",
      "Ground assistance"
    ],
    itinerary: [
      { day: "Day 1: Arrival Dehradun", details: "Hotel transfer and briefing." },
      { day: "Day 2: Yamunotri", details: "Helicopter transfer and VIP darshan." },
      { day: "Day 3: Gangotri", details: "Morning darshan and stay." },
      { day: "Day 4: Kedarnath", details: "Direct helicopter darshan." },
      { day: "Day 5: Badrinath", details: "Special darshan and evening aarti." },
      { day: "Day 6: Return", details: "Return to Dehradun and departure." }
    ]
  },

  "2N 3D": {
    duration: "3 Days",
    price: "₹95,000",
    highlights: [
      "Kedarnath & Badrinath",
      "Priority darshan",
      "Helicopter transfers",
      "Premium stay"
    ],
    itinerary: [
      { day: "Day 1: Dehradun → Kedarnath", details: "Helicopter darshan." },
      { day: "Day 2: Kedarnath → Badrinath", details: "VIP darshan." },
      { day: "Day 3: Return", details: "Return to Dehradun." }
    ]
  },

  "1N 2D": {
    duration: "2 Days",
    price: "₹65,000",
    highlights: [
      "Same-day Kedarnath priority",
      "Helicopter service",
      "VIP darshan"
    ],
    itinerary: [
      { day: "Day 1: Dehradun → Kedarnath", details: "Darshan and stay." },
      { day: "Day 2: Return", details: "Return by helicopter." }
    ]
  },

  "Same Day": {
    duration: "1 Day",
    price: "₹35,000",
    highlights: [
      "Same day darshan",
      "Helicopter round trip",
      "Fast-track entry"
    ],
    itinerary: [
      { day: "Same Day Trip", details: "Morning departure and evening return." }
    ]
  }
};

const packages = Object.keys(packageData);

/* ===== ANIMATION VARIANTS ===== */

const sectionFade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const cardAnim = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function YatraContent() {
  const [activePackage, setActivePackage] = useState("6N 6D");
  const [openDay, setOpenDay] = useState(null);

  const data = packageData[activePackage];

  return (
    <motion.section
      variants={sectionFade}
      initial="hidden"
      animate="show"
      className="bg-[#081421] py-16 sm:py-20 px-4 sm:px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* ===== PACKAGE TOGGLE ===== */}
        <div className="flex flex-wrap gap-3 mb-8">
          {packages.map(pkg => (
            <motion.button
              key={pkg}
              layout
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setActivePackage(pkg);
                setOpenDay(null);
              }}
              className={`px-4 py-2 text-sm border rounded transition
              ${
                activePackage === pkg
                  ? "bg-[#D4AF37] text-[#081421] border-[#D4AF37]"
                  : "border-white/30 hover:bg-white/10"
              }`}
            >
              {pkg}
            </motion.button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-10">

          {/* ===== LEFT CONTENT ===== */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePackage}
              variants={cardAnim}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {/* Info Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <InfoCard title="Duration" value={data.duration} />
                <InfoCard title="Start From" value={data.price} />
                <InfoCard title="Date" value="Flexible" />
                <InfoCard title="Person" value="6 pax or less" />
              </div>

              {/* ===== BIGGER IMAGES + HOVER ANIMATION ===== */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {tourImages.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.07, y: -4 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="relative rounded-xl overflow-hidden border border-white/10 group"
                  >
                    <img
                      src={img}
                      alt="Tour"
                      className="w-full h-36 sm:h-44 lg:h-48 object-cover transition duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
                  </motion.div>
                ))}
              </div>

              {/* Highlights */}
              <motion.div variants={cardAnim} className="bg-[#0B1A2E] border border-white/10 rounded-xl p-5 mb-6 hover:shadow-lg hover:shadow-[#D4AF37]/10 transition">
                <h3 className="text-lg font-semibold mb-3">
                  Tour Highlights
                </h3>

                <ul className="space-y-2 text-sm text-white/80">
                  {data.highlights.map((item, i) => (
                    <li key={i}>✓ {item}</li>
                  ))}
                </ul>
              </motion.div>

              {/* Itinerary */}
              <div className="space-y-3">
                {data.itinerary.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2 }}
                    className="bg-[#0B1A2E] border border-white/10 rounded-lg"
                  >
                    <button
                      onClick={() =>
                        setOpenDay(openDay === index ? null : index)
                      }
                      className="w-full text-left px-4 py-3 flex justify-between text-sm"
                    >
                      {item.day}
                      <span>{openDay === index ? "-" : "+"}</span>
                    </button>

                    <AnimatePresence>
                      {openDay === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-4 pb-3 text-white/70 text-sm overflow-hidden"
                        >
                          {item.details}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ===== RIGHT FORM ===== */}
          <motion.div
            variants={cardAnim}
            className="bg-[#0B1A2E] border border-white/10 rounded-2xl p-5 h-fit hover:shadow-xl hover:shadow-[#D4AF37]/10 transition"
          >
            <h3 className="text-lg font-semibold mb-2">Book This Tour</h3>

            <p className="text-[#D4AF37] mb-5 text-sm">
              Starting from {data.price} / Seat
            </p>

            <form className="space-y-3">
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Input placeholder="Phone" />
              <Input type="date" />

              <select className="form-input" value={activePackage} disabled>
                {packages.map(p => (
                  <option key={p}>{p}</option>
                ))}
              </select>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-[#D4AF37] text-[#081421] py-2.5 rounded font-semibold transition"
              >
                SUBMIT
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          padding: 10px 12px;
          border-radius: 6px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          font-size: 14px;
        }
      `}</style>
    </motion.section>
  );
}

/* ===== SMALL COMPONENTS ===== */

function InfoCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="bg-[#0B1A2E] border border-white/10 rounded-lg p-3 transition"
    >
      <p className="text-white/50 text-xs mb-1">{title}</p>
      <p className="text-sm">{value}</p>
    </motion.div>
  );
}

function Input({ placeholder, type = "text" }) {
  return <input type={type} className="form-input" placeholder={placeholder} />;
}

export default YatraContent;