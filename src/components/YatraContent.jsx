import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= COMMON IMAGES (FIXED) ================= */

const tourImages = [
  "https://www.yatrabyhelicopter.in/blog/wp-content/uploads/2024/05/Kedarnath-Temple.jpg",
  "https://m.media-amazon.com/images/I/71JeG+Rd+AL._AC_UF894,1000_QL80_.jpg",
  "https://travelvaidya.com/blog/wp-content/uploads/2025/05/gangotri-temple.webp",
  "https://www.chardhamtour.in/assets/images/tourism/yamunotri/yamunotri-geography.webp"
];

/* ================= PACKAGE DATA ================= */

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

function YatraContent() {
  const [activePackage, setActivePackage] = useState("6N 6D");
  const [openDay, setOpenDay] = useState(null);

  const data = packageData[activePackage];

  return (
    <section className="bg-[#081421] py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* ===== Smooth Toggle ===== */}
        <div className="flex flex-wrap gap-3 mb-10">
          {packages.map(pkg => (
            <motion.button
              key={pkg}
              layout
              transition={{ duration: 0.3 }}
              onClick={() => {
                setActivePackage(pkg);
                setOpenDay(null);
              }}
              className={`px-5 py-2 border rounded transition-all duration-300
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

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10">

          {/* ===== LEFT SIDE ===== */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePackage}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Info Cards */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <InfoCard title="Duration" value={data.duration} />
                <InfoCard title="Start From" value={data.price} />
                <InfoCard title="Date" value="Flexible" />
                <InfoCard title="Person" value="6 pax or less" />
              </div>

              {/* ===== Fixed Image Cards ===== */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {tourImages.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-xl overflow-hidden border border-white/10"
                  >
                    <img
                      src={img}
                      alt="Tour"
                      className="w-full h-32 object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Highlights */}
              <div className="bg-[#0B1A2E] border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Tour Highlights
                </h3>

                <ul className="space-y-2 text-sm text-white/80">
                  {data.highlights.map((item, i) => (
                    <li key={i}>✓ {item}</li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div className="space-y-4">
                {data.itinerary.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#0B1A2E] border border-white/10 rounded-lg"
                  >
                    <button
                      onClick={() =>
                        setOpenDay(openDay === index ? null : index)
                      }
                      className="w-full text-left px-5 py-4 flex justify-between"
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
                          className="px-5 pb-4 text-white/70 text-sm overflow-hidden"
                        >
                          {item.details}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ===== RIGHT FORM ===== */}
          <motion.div
            key={activePackage + "form"}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-[#0B1A2E] border border-white/10 rounded-2xl p-6 h-fit"
          >
            <h3 className="text-lg font-semibold mb-4">Book This Tour</h3>

            <p className="text-[#D4AF37] mb-6 text-sm">
              Starting from {data.price} / Seat
            </p>

            <form className="space-y-4">
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Input placeholder="Phone" />
              <Input placeholder="Select Date" />

              <select className="form-input" value={activePackage} readOnly>
                {packages.map(p => (
                  <option key={p}>{p}</option>
                ))}
              </select>

              <button className="w-full bg-[#D4AF37] text-[#081421] py-3 rounded font-semibold hover:scale-[1.02] transition">
                SUBMIT
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>
        {`
        .form-input {
          width: 100%;
          padding: 10px 12px;
          border-radius: 6px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
        }
        `}
      </style>
    </section>
  );
}

/* Small Components */
function InfoCard({ title, value }) {
  return (
    <div className="bg-[#0B1A2E] border border-white/10 rounded-lg p-4">
      <p className="text-white/50 text-xs mb-1">{title}</p>
      <p className="text-sm">{value}</p>
    </div>
  );
}

function Input({ placeholder }) {
  return <input className="form-input" placeholder={placeholder} />;
}

export default YatraContent;