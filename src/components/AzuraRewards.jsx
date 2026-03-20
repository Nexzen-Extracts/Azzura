import { useState } from "react";
import { motion } from "framer-motion";
import redCard from "../assets/tiercard-red.avif";
import silverCard from "../assets/tiercard-silver.avif";
import goldCard from "../assets/tiercard-gold.avif";
import platinumCard from "../assets/tiercard-platinum.avif";
import heroImage2 from "../assets/section1.jpg";
import heroImage3 from "../assets/rewards2.jpg";
import ben1 from "../assets/ben1.jpg";
import ben2 from "../assets/ben2.jpg";
import ben3 from "../assets/ben3.jpg";
import ben4 from "../assets/ben4.jpg";
import calc from "../assets/calculator.jpg";


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

{/* ================= Smarter way ================= */}
<section className="w-full bg-white">

  {/* TOP HEADING */}
  <div className="text-center py-14 px-6">
    <motion.h2
      variants={leftAnim}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-4xl lg:text-5xl font-light text-[#0E2038]"
    >
      A Smarter Way to Fly Private
    </motion.h2>
  </div>

  {/* IMAGE SECTION */}
  <div className="px-3 lg:px-6">

    <div className="relative w-full overflow-hidden">

      {/* IMAGE */}
      <img
        src={heroImage2}
        alt="Rewards"
        className="w-full h-[260px] sm:h-[300px] lg:h-[360px] object-cover object-center"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* CONTENT */}
      <motion.div
        variants={leftAnim}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="absolute inset-0 flex flex-col justify-center px-6 lg:px-16 max-w-xl"
      >

        <h3 className="text-2xl lg:text-3xl font-light text-white mb-4 leading-snug whitespace-nowrap">
  EMBARK ON AN ELITE JOURNEY
</h3>

<p className="text-gray-200 mb-6 text-sm lg:text-base leading-relaxed">
  Join the Azura Privilege Circle and unlock a world of bespoke travel, exclusive rewards, and unparalleled luxury.
  <br />
  Enjoy <span className="font-semibold text-white">1,000 Welcome Reward Points</span> as you begin your journey with Azura.
</p>

        <div className="flex gap-3">
          <button className="bg-[#0E2038] px-5 py-2.5 rounded-md hover:opacity-90 transition shadow-sm">
            Book Now
          </button>

          <button className="border border-white px-5 py-2.5 rounded-md hover:bg-white hover:text-black transition">
            Enquiry Now
          </button>
        </div>

      </motion.div>

    </div>

  </div>

  {/* GAP */}
  <div className="h-12 lg:h-16"></div>

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
        src={heroImage3}
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
     backgroundImage: `url(${calc})`
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
{/* ================= BENEFITS (PREMIUM) ================= */}
<section className="w-full py-24 
bg-gradient-to-r from-white via-[#f5f7fa] to-[#0E2038]/10">

  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}   // 🔥 no repeat = no glitch
      transition={{ duration: 0.4 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-light text-[#0E2038] mb-3 tracking-wide">
        Exclusive Benefits
      </h2>
      <div className="w-16 h-[2px] bg-[#0E2038]/30 mx-auto" />
    </motion.div>

    {/* GRID */}
    <div className="grid md:grid-cols-4 gap-10">

      {[
        {
          title: "No Expiry",
          desc: "Your reward points never expire, giving you complete flexibility to redeem them whenever it suits your travel plans.",
          img: ben1
        },
        {
          title: "Priority Support",
          desc: "Enjoy faster assistance with dedicated member support, ensuring your travel experience remains smooth and hassle-free.",
          img: ben2
        },
        {
          title: "Tailored Travel",
          desc: "Experience personalized journeys designed around your preferences, from routes to onboard comfort and services.",
          img: ben3
        },
        {
          title: "Fast Booking",
          desc: "Book your private flights quickly and seamlessly with our optimized booking system built for convenience.",
          img: ben4
        }
      ].map((item, i) => {

        const isLeft = i < 2;

        return (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: isLeft ? -60 : 60
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}   // 🔥 smooth + no repeat glitch
            transition={{
              duration: 0.45,
              ease: "easeOut"
            }}
            className="group bg-white border border-gray-200 
            rounded-xl overflow-hidden 
            hover:shadow-2xl hover:-translate-y-2 
            transition duration-300 cursor-pointer will-change-transform"
          >

            {/* IMAGE */}
            <div className="w-full h-56 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">

              <h3 className="text-[#0E2038] text-lg mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>

          </motion.div>
        );
      })}

    </div>

  </div>

</section>

    </div>
  );
}

export default AzuraRewards;