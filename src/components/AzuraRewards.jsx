import { useState } from "react";
import { motion } from "framer-motion";
import redCard from "../assets/tiercard-red.avif";
import silverCard from "../assets/tiercard-silver.avif";
import goldCard from "../assets/tiercard-gold.avif";
import platinumCard from "../assets/tiercard-platinum.avif";

function AzuraRewards() {

  const [amount, setAmount] = useState(50000);

  // ✅ NEW STATE (IMPORTANT)
  const [selectedTier, setSelectedTier] = useState({
    name: "RED",
    rate: 5
  });

  // ✅ UPDATED CALCULATION
  const calculatePoints = () => {
    if (!amount) return 0;
    return Math.floor((amount / 100) * selectedTier.rate);
  };

  const leftAnim = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const rightAnim = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const boxAnimLeft = {
    hidden: { opacity: 0, x: -60 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2 }
    })
  };

  const boxAnimRight = {
    hidden: { opacity: 0, x: 60 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2 }
    })
  };

  const tiers = [
    { name: "Silver", desc: "Access essential benefits and start earning rewards.", img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c" },
    { name: "Gold", desc: "Priority booking and enhanced flexibility.", img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd" },
    { name: "Platinum", desc: "Enjoy lounge access and exclusive upgrades.", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8" },
    { name: "Elite", desc: "Concierge services and premium travel privileges.", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  ];


  return (
    <div className="bg-white overflow-x-hidden">

{/* ================= INTRO ================= */}
<section className="w-full bg-white">
  <div className="flex flex-col lg:flex-row min-h-[75vh] items-stretch">

    {/* LEFT CONTENT */}
    <motion.div
      variants={leftAnim}
      initial="hidden"
      whileInView="show"
      className="lg:w-1/2 flex items-center px-6 lg:px-14 py-12 relative z-10"
    >
      <div className="max-w-xl">
        <p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
          Rewards Program
        </p>

        <h2 className="text-4xl font-light text-[#0E2038] mb-5 leading-snug">
          A Smarter Way to Fly Private
        </h2>

        <div className="w-16 h-[2px] bg-gray-300 mb-6" />

        <p className="text-gray-600 leading-relaxed mb-6">
          With Azura Elite Rewards, every journey becomes more valuable. 
          Earn points on every flight, unlock exclusive privileges, and 
          experience a new standard of luxury aviation tailored for you.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4">
          <button className="bg-[#0E2038] text-white px-6 py-3 rounded-full hover:opacity-90 transition">
            Book Now
          </button>

          <button className="border border-[#0E2038] text-[#0E2038] px-6 py-3 rounded-full hover:bg-[#0E2038] hover:text-white transition">
            Enquiry Now
          </button>
        </div>
      </div>
    </motion.div>

    {/* RIGHT IMAGE WITH SMOOTH FADE */}
    <motion.div
      variants={rightAnim}
      initial="hidden"
      whileInView="show"
      className="lg:w-1/2 h-[320px] lg:h-auto relative overflow-hidden"
    >
      <img 
        src="https://cdn.prod.website-files.com/6714320ba85d0d0e22bc7471/68a7811b6ebbc7e33565bc06_file_e7ffa8kk.png"
        className="w-full h-full object-cover"
      />

      {/* 🔥 MAIN FADE (LEFT SIDE MERGE) */}
      <div className="hidden lg:block absolute top-0 left-0 h-full w-72
      bg-gradient-to-l from-transparent via-white/80 to-white" />

      {/* 🔥 EXTRA BLUR SMOOTHNESS */}
      <div className="hidden lg:block absolute top-0 left-0 h-full w-40 backdrop-blur-sm" />
    </motion.div>

  </div>
</section>

{/* ================= HOW IT WORKS ================= */}
<section className="w-full bg-[#F6F7F9]">
  <div className="flex flex-col lg:flex-row min-h-[70vh] items-stretch">

    {/* LEFT IMAGE WITH ULTRA SMOOTH FADE */}
    <motion.div
      variants={leftAnim}
      initial="hidden"
      whileInView="show"
      className="lg:w-1/2 h-[320px] lg:h-auto relative overflow-hidden"
    >
      <img
        src="https://t3.ftcdn.net/jpg/00/95/73/18/360_F_95731897_ZEQSc1AwZD4JOZes5PQiaIkFxnpArztH.jpg"
        className="w-full h-full object-cover"
      />

      {/* 🔥 MAIN GRADIENT FADE */}
      <div className="hidden lg:block absolute top-0 right-0 h-full w-72
      bg-gradient-to-r from-transparent via-[#F6F7F9]/80 to-[#F6F7F9]" />

      {/* 🔥 EXTRA BLUR FOR SMOOTH MERGE */}
      <div className="hidden lg:block absolute top-0 right-0 h-full w-40 backdrop-blur-sm" />
    </motion.div>

    {/* RIGHT CONTENT */}
    <motion.div
      variants={rightAnim}
      initial="hidden"
      whileInView="show"
      className="lg:w-1/2 flex items-center px-6 lg:px-14 py-12"
    >
      <div className="max-w-xl w-full">

        <h2 className="text-4xl font-light text-[#0E2038] mb-4">
          How Rewards Work
        </h2>

        <p className="text-gray-600 mb-6">
          Earn points and unlock premium benefits.
        </p>

        <div className="grid grid-cols-2 gap-4">

          {[
            "Earn points on every booking",
            "Refer clients for bonus rewards",
            "Unlock seasonal multipliers",
            "Upgrade tiers as you fly more",
          ].map((item, i) => (

            <div
              key={i}
              className="bg-white text-[#0E2038] font-medium p-4 rounded-xl 
              shadow-sm border hover:shadow-md hover:-translate-y-1 
              transition duration-300"
            >
              {item}
            </div>

          ))}

        </div>

      </div>
    </motion.div>

  </div>
</section>

{/* ================= MEMBERSHIP (FINAL PREMIUM FLIP - NO CUT) ================= */}
<section className="w-full py-24 pb-32 bg-gradient-to-b from-[#F6F7F9] to-white overflow-visible">

  {/* HEADING */}
  <div className="text-center mb-14 px-4">
    <h2 className="text-4xl font-semibold text-[#0E2038]">
      Boost Your Journey With Tiers
    </h2>
    <p className="text-gray-500 mt-2">
      Earn more as you move up. Unlock premium travel privileges.
    </p>
  </div>

  {/* CARDS */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-6 overflow-visible">

    {[
      {
        name: "RED",
        mp: 6,
        tp: 6,
        desc: "Start your journey with essential benefits.",
        img: redCard
      },
      {
        name: "SILVER",
        mp: 8,
        tp: 6,
        desc: "Priority booking with flexible travel.",
        img: silverCard
      },
      {
        name: "GOLD",
        mp: 9,
        tp: 6,
        desc: "Luxury upgrades and lounge access.",
        img: goldCard
      },
      {
        name: "PLATINUM",
        mp: 10,
        tp: 6,
        desc: "Concierge services & premium privileges.",
        img: platinumCard
      }
    ].map((tier, i) => (

      <div key={i} className="group relative overflow-visible [perspective:1200px]">

        <div className="relative h-[340px] w-full transition-transform duration-500 
        [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

          {/* FRONT */}
          <div className="absolute inset-0 rounded-3xl 
          bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] 
          [backface-visibility:hidden]">

            {/* IMAGE */}
            <div className="relative h-[170px]">
              <img
                src={tier.img}
                alt={tier.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* CONTENT */}
            <div className="px-5 py-6 text-center">

              <h3 className="text-sm font-semibold tracking-[2px] text-[#0E2038]">
                {tier.name}
              </h3>

              <div className="text-4xl font-semibold text-[#0E2038] mt-2">
                {tier.mp}
              </div>
              <p className="text-sm text-gray-500 mb-4">Points</p>

              <div className="w-12 h-[1px] bg-gray-300 mx-auto mb-4"></div>

              <div className="text-lg font-medium text-[#0E2038]">
                {tier.tp}
              </div>
              <p className="text-sm text-gray-500">Tier</p>

            </div>

          </div>

          {/* BACK */}
          <div className="absolute inset-0 rounded-3xl bg-[#0E2038] text-white 
          flex flex-col items-center justify-center text-center p-6
          [transform:rotateY(180deg)] [backface-visibility:hidden]">

            <h3 className="text-lg mb-3 tracking-wide">
              {tier.name}
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed">
              {tier.desc}
            </p>

          </div>

        </div>

      </div>

    ))}

  </div>

  {/* DESCRIPTION */}
  <div className="text-center mt-12 px-6">
    <p className="text-gray-600 text-sm max-w-2xl mx-auto">
      Earn Tier Points to unlock higher membership levels and exclusive benefits like priority access, premium services, and personalized travel experiences.
    </p>
  </div>

</section>

{/* ================= REDEEM (PREMIUM FINAL FADE) ================= */}
<section className="w-full py-24 
bg-gradient-to-r from-white via-[#f5f7fa] to-[#0E2038]/15">

  <div className="max-w-6xl mx-auto px-6">

    {/* HEADER */}
    <div className="mb-14">
      <h2 className="text-4xl font-semibold text-[#0E2038] mb-4 tracking-wide">
        Earn Beyond The Skies
      </h2>

      <p className="text-gray-600 max-w-3xl leading-relaxed">
        Earn rewards across premium services and elevate every journey with exclusive benefits.
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "Co-branded Cards",
          desc: "Earn rewards seamlessly on everyday spending.",
          icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/credit-card.svg"
        },
        {
          title: "Points Conversion",
          desc: "Convert points into valuable travel benefits.",
          icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/refresh.svg"
        },
        {
          title: "Car Rental",
          desc: "Enjoy premium car rentals with exclusive perks.",
          icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/car.svg"
        },
        {
          title: "Stays",
          desc: "Unlock luxury hotel stays worldwide.",
          icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/building-skyscraper.svg"
        },
        {
          title: "Experiences",
          desc: "Access curated elite experiences globally.",
          icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/star.svg"
        },
        {
          title: "Lifestyle",
          desc: "Enjoy premium lifestyle privileges.",
          icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/flower.svg"
        }
      ].map((item, i) => (

        <motion.div
          key={i}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="bg-white border border-gray-200 
          rounded-xl p-10 
          hover:shadow-lg hover:-translate-y-1 
          transition duration-300 cursor-pointer"
        >

          {/* ICON */}
          <div className="mb-5">
            <img
              src={item.icon}
              className="w-7 h-7 opacity-70"
            />
          </div>

          {/* TITLE */}
          <h3 className="text-[#0E2038] font-semibold text-lg mb-2">
            {item.title}
          </h3>

          {/* DESC */}
          <p className="text-gray-500 text-sm leading-relaxed">
            {item.desc}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================= CALCULATOR (COMPACT PREMIUM) ================= */}
<section className="relative py-12 md:py-16 overflow-hidden">

  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center md:bg-fixed"
    style={{
      backgroundImage:
        "url('https://images.squarespace-cdn.com/content/v1/629388d4dfb39c164f10b505/84ff83b8-c4fd-4512-82e1-7a04a40b4944/Cheapest-Private-Jet-to-charter.jpg')"
    }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/65" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

    {/* HEADING (COMPACT) */}
    <div className="text-center mb-8">
      <p className="uppercase tracking-[4px] text-xs text-gray-300 mb-2">
        Rewards Calculator
      </p>

      <h2 className="text-2xl md:text-3xl font-light mb-3">
        Estimate Your Rewards
      </h2>

      <div className="h-[1px] bg-white/40 w-12 mx-auto" />
    </div>

    {/* STRIP */}
    <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 
    flex flex-col lg:flex-row items-center justify-between gap-4 backdrop-blur-sm">

      {/* LEFT */}
      <div>
        <p className="text-xs text-gray-300">
          Select tier
        </p>

        <div className="flex gap-2 mt-2 flex-wrap">

          {[
            { name: "RED", rate: 5 },
            { name: "SILVER", rate: 6 },
            { name: "GOLD", rate: 7 },
            { name: "PLATINUM", rate: 8 }
          ].map((tier, i) => (

            <div
              key={i}
              onClick={() => setSelectedTier(tier)}
              className={`px-3 py-1.5 rounded-full text-xs cursor-pointer transition

              ${selectedTier?.name === tier.name
                  ? "bg-white text-[#0E2038]"
                  : "border border-white text-white hover:bg-white hover:text-[#0E2038]"
                }`}
            >
              {tier.name}
            </div>

          ))}

        </div>
      </div>

      {/* INPUT */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="₹ Amount"
        className="px-4 py-2 rounded text-black outline-none w-[140px]"
      />

      {/* RESULT */}
      <div className="text-center">
        <p className="text-xs text-gray-300">
          Points
        </p>
        <h3 className="text-2xl font-light">
          {selectedTier
            ? Math.floor((amount / 100) * selectedTier.rate)
            : 0}
          +
        </h3>
      </div>

    </div>

  </div>

</section>

{/* ================= BENEFITS (PREMIUM) ================= */}
<section className="w-full py-24 
bg-gradient-to-r from-white via-[#f5f7fa] to-[#0E2038]/10">

  <div className="max-w-6xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-light text-[#0E2038] mb-3 tracking-wide">
        Exclusive Benefits
      </h2>
      <div className="w-16 h-[2px] bg-[#0E2038]/30 mx-auto" />
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-4 gap-8">

      {[
        {
          title: "No Expiry",
          desc: "Your points remain valid with no expiration limits."
        },
        {
          title: "Priority Support",
          desc: "Get faster assistance with dedicated member service."
        },
        {
          title: "Tailored Travel",
          desc: "Personalized journeys crafted for your preferences."
        },
        {
          title: "Fast Booking",
          desc: "Quick and seamless booking experience every time."
        }
      ].map((item, i) => (

        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="group relative bg-white border border-gray-200 
          rounded-xl p-8 text-center 
          hover:shadow-xl hover:-translate-y-1 
          transition duration-300 cursor-pointer overflow-hidden"
        >

          {/* TOP ACCENT LINE */}
          <div className="absolute top-0 left-0 w-full h-[2px] 
          bg-gradient-to-r from-[#0E2038] to-transparent opacity-70" />

          {/* TITLE */}
          <h3 className="text-[#0E2038] font-semibold text-lg mb-3">
            {item.title}
          </h3>

          {/* DESC */}
          <p className="text-gray-500 text-sm leading-relaxed">
            {item.desc}
          </p>

          {/* HOVER OVERLAY */}
          <div className="absolute inset-0 bg-[#0E2038] opacity-0 
          group-hover:opacity-5 transition duration-300" />

        </motion.div>

      ))}

    </div>

  </div>

</section>

    </div>
  );
}

export default AzuraRewards;