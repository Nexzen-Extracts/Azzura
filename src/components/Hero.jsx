import { motion } from "framer-motion";
import { useState } from "react";
import jetVideo from "../assets/jet.mp4"; // convert video to mp4 for best performance

function Hero() {
  const [activeTab, setActiveTab] = useState("jet");

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

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

      {/* Main Content */}
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                min-h-screen flex items-center
                grid lg:grid-cols-2 gap-10 lg:gap-14 text-white">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left max-w-xl mx-auto lg:mx-0"
        >
          {/* Heading */}
          <h1 className="leading-tight font-heading text-[clamp(1.8rem,4.5vw,3.2rem)]">
  <span className="italic font-normal block">
    Fly Beyond Limits
  </span>

  <span className="font-semibold whitespace-nowrap">
    Private Aviation Redefined
  </span>
</h1>

          {/* Description */}
          <p className="mt-4 text-xs sm:text-sm md:text-base text-[#DAD5CF] italic leading-relaxed">
            Experience world-class comfort, privacy, and performance with our
            premium fleet and personalized aviation services.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <button className="bg-[#A3B5C0] text-[#0E2038] px-6 py-2.5 rounded-full text-sm shadow-lg hover:bg-white transition w-full sm:w-auto">
              Book Your Flight
            </button>

            <button className="border border-[#A3B5C0] px-6 py-2.5 rounded-full text-sm hover:bg-[#A3B5C0] hover:text-[#0E2038] transition w-full sm:w-auto">
              Explore Fleet
            </button>
          </div>
        </motion.div>

        {/* RIGHT BOOKING CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-sm sm:max-w-md mx-auto lg:ml-auto"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-4 sm:p-5">

            {/* Tabs */}
            <div className="flex mb-4 bg-[#213A5C] rounded-lg overflow-hidden text-xs sm:text-sm">
              <button
                onClick={() => setActiveTab("jet")}
                className={`flex-1 py-2 transition ${
                  activeTab === "jet"
                    ? "bg-[#A3B5C0] text-[#0E2038]"
                    : "text-white hover:bg-[#2c4a73]"
                }`}
              >
                Jet Charter
              </button>

              <button
                onClick={() => setActiveTab("heli")}
                className={`flex-1 py-2 transition ${
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Input placeholder="From" />
                  <Input placeholder="To" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Input type="date" />
                  <Input placeholder="Passengers" type="number" />
                </div>

                <ActionButton text="Search Flights" />
              </div>
            )}

            {/* HELICOPTER FORM */}
            {activeTab === "heli" && (
              <div className="space-y-3">
                <Input placeholder="Full Name" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Phone" type="tel" />

                <textarea
                  rows="3"
                  placeholder="Message"
                  className="p-2.5 rounded-lg bg-white text-black text-xs sm:text-sm w-full focus:outline-none"
                ></textarea>

                <ActionButton text="Submit Inquiry" />
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;

/* Reusable Components */

const Input = ({ type = "text", placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="p-2.5 rounded-lg bg-white text-black text-xs sm:text-sm w-full focus:outline-none"
  />
);

const ActionButton = ({ text }) => (
  <button className="w-full bg-[#A3B5C0] text-[#0E2038] py-2.5 rounded-full text-sm font-semibold hover:bg-white transition">
    {text}
  </button>
);