import { motion } from "framer-motion";
import { useState } from "react";
import jetVideo from "../assets/jet.mov";

// Sample airport list (you can expand later)
const airports = [
  "New York",
  "London",
  "Dubai",
  "Delhi",
  "Mumbai",
  "Paris",
  "Singapore",
  "Tokyo",
  "Los Angeles",
  "Sydney",
];

function Hero() {
  const [activeTab, setActiveTab] = useState("jet");
  const [fromSearch, setFromSearch] = useState("");
  const [toSearch, setToSearch] = useState("");

  const filteredFrom = airports.filter((a) =>
    a.toLowerCase().includes(fromSearch.toLowerCase())
  );

  const filteredTo = airports.filter((a) =>
    a.toLowerCase().includes(toSearch.toLowerCase())
  );

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={jetVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0E2038]/80"></div>

      {/* Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center text-white">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading leading-tight">
            Fly Beyond Limits
            <br />
            <span className="text-[#A3B5C0]">
              Private Aviation Redefined
            </span>
          </h1>

          <p className="mt-6 text-[#DAD5CF] max-w-lg font-body">
            Experience world-class comfort, privacy, and performance with our
            premium fleet and personalized aviation services.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-[#A3B5C0] text-[#0E2038] px-8 py-3 rounded-full font-body shadow-lg hover:bg-white transition">
              Book Your Flight
            </button>

            <button className="border border-[#A3B5C0] px-8 py-3 rounded-full font-body hover:bg-[#A3B5C0] hover:text-[#0E2038] transition">
              Explore Fleet
            </button>
          </div>
        </motion.div>

        {/* RIGHT BOOKING CARD */}
       {/* RIGHT BOOKING CARD */}
<motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="w-full max-w-md mx-auto md:ml-auto"
>
  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-5">

    {/* Tabs */}
    <div className="flex mb-5 bg-[#213A5C] rounded-lg overflow-hidden text-sm">
      <button
        onClick={() => setActiveTab("jet")}
        className={`flex-1 py-2 font-medium transition ${
          activeTab === "jet"
            ? "bg-[#A3B5C0] text-[#0E2038]"
            : "text-white hover:bg-[#2c4a73]"
        }`}
      >
        Jet Charter
      </button>

      <button
        onClick={() => setActiveTab("heli")}
        className={`flex-1 py-2 font-medium transition ${
          activeTab === "heli"
            ? "bg-[#A3B5C0] text-[#0E2038]"
            : "text-white hover:bg-[#2c4a73]"
        }`}
      >
        Helicopter
      </button>
    </div>

    {/* JET FORM */}
    {activeTab === "jet" && (
      <div className="space-y-3">

        {/* From & To */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="From"
            value={fromSearch}
            onChange={(e) => setFromSearch(e.target.value)}
            className="p-3 rounded-lg bg-white text-black text-sm w-full"
          />

          <input
            type="text"
            placeholder="To"
            value={toSearch}
            onChange={(e) => setToSearch(e.target.value)}
            className="p-3 rounded-lg bg-white text-black text-sm w-full"
          />
        </div>

        {/* Date & Passengers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="date"
            className="p-3 rounded-lg bg-white text-black text-sm w-full"
          />

          <input
            type="number"
            placeholder="Passengers"
            className="p-3 rounded-lg bg-white text-black text-sm w-full"
          />
        </div>

        <button className="w-full mt-2 bg-[#A3B5C0] text-[#0E2038] py-3 rounded-full font-semibold hover:bg-white transition">
          Search Flights
        </button>
      </div>
    )}

    {/* HELICOPTER FORM */}
    {activeTab === "heli" && (
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Full Name"
          className="p-3 rounded-lg bg-white text-black text-sm w-full"
        />

        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-lg bg-white text-black text-sm w-full"
        />

        <input
          type="tel"
          placeholder="Phone"
          className="p-3 rounded-lg bg-white text-black text-sm w-full"
        />

        <textarea
          placeholder="Message"
          rows="3"
          className="p-3 rounded-lg bg-white text-black text-sm w-full"
        ></textarea>

        <button className="w-full bg-[#A3B5C0] text-[#0E2038] py-3 rounded-full font-semibold hover:bg-white transition">
          Submit Inquiry
        </button>
      </div>
    )}
  </div>
</motion.div>

      </div>
    </section>
  );
}

export default Hero;
