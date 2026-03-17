import { useState } from "react";

function AzuraRewards() {

  const [amount, setAmount] = useState(50000);

  const calculatePoints = () => {
    if (!amount) return 0;
    return Math.floor((amount / 100) * 5);
  };

  return (
    <div className="bg-white text-black min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="px-6 py-20 text-center max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
          Elevate Every Journey <br /> With Elite Rewards
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Experience private aviation like never before. Earn exclusive points on every journey and unlock premium privileges designed for elite travelers.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-black text-white px-7 py-3 rounded-full hover:opacity-80 transition">
            Start Earning
          </button>

          <button className="border border-gray-300 px-7 py-3 rounded-full hover:bg-black hover:text-white transition">
            Explore Benefits
          </button>
        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
          <p className="text-gray-600">
            Earn points effortlessly through bookings and unlock premium experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Book flights and earn reward points",
            "Refer clients and gain bonus credits",
            "Unlock seasonal multipliers",
            "Upgrade tier with more travel",
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
              {item}
            </div>
          ))}
        </div>
      </section>


      {/* ================= MEMBERSHIP TIERS ================= */}
      <section className="px-6 py-20">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold mb-4">Membership Tiers</h2>
          <p className="text-gray-600">
            Progress through tiers and unlock exclusive privileges.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Silver", perks: "Entry level benefits" },
            { name: "Gold", perks: "Priority booking access" },
            { name: "Platinum", perks: "Lounge & upgrades" },
            { name: "Elite", perks: "Concierge & luxury perks" },
          ].map((tier, i) => (
            <div key={i} className="border border-gray-200 p-6 rounded-2xl hover:shadow-md transition text-center">
              <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
              <p className="text-gray-600">{tier.perks}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ================= REWARDS & REDEMPTION ================= */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold mb-4">Redeem Your Rewards</h2>
          <p className="text-gray-600">
            Use your points to unlock premium travel experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Flight discounts",
            "Free flying hours",
            "Luxury add-ons",
            "VIP experiences",
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
              {item}
            </div>
          ))}
        </div>
      </section>


      {/* ================= POINTS CALCULATOR ================= */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Points Calculator</h2>

        <div className="max-w-xl mx-auto border border-gray-200 p-8 rounded-2xl">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />

          <p className="text-lg">
            You will earn{" "}
            <span className="font-semibold">
              {calculatePoints()} points
            </span>
          </p>
        </div>
      </section>


      {/* ================= BENEFITS ================= */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Elite Rewards</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "No expiry on points",
            "Priority assistance",
            "Personalized experience",
            "Fast-track bookings",
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
              {item}
            </div>
          ))}
        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="px-6 py-24 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6">
          Start Your Journey Today
        </h2>

        <p className="text-gray-600 mb-8">
          Join the elite network of travelers and unlock premium aviation privileges.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-black text-white px-8 py-3 rounded-full hover:opacity-80 transition">
            Book Now
          </button>

          <button className="border border-gray-300 px-8 py-3 rounded-full hover:bg-black hover:text-white transition">
            Join Membership
          </button>
        </div>
      </section>

    </div>
  );
}

export default AzuraRewards;