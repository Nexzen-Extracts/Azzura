import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

function MembershipPricing() {
  const [billing, setBilling] = useState("monthly");

  const plans = {
    monthly: [
      {
        name: "Silver",
        price: 199,
        features: {
          "Priority Booking": true,
          "Global Access": true,
          "Dedicated Manager": false,
          "VIP Lounge": false,
          "Exclusive Events": false
        }
      },
      {
        name: "Gold",
        price: 399,
        popular: true,
        features: {
          "Priority Booking": true,
          "Global Access": true,
          "Dedicated Manager": true,
          "VIP Lounge": true,
          "Exclusive Events": false
        }
      },
      {
        name: "Platinum",
        price: 799,
        features: {
          "Priority Booking": true,
          "Global Access": true,
          "Dedicated Manager": true,
          "VIP Lounge": true,
          "Exclusive Events": true
        }
      }
    ],

    yearly: [
      {
        name: "Silver",
        price: 199 * 12 * 0.9,
        save: "Save 10%",
        features: {
          "Priority Booking": true,
          "Global Access": true,
          "Dedicated Manager": false,
          "VIP Lounge": false,
          "Exclusive Events": false
        }
      },
      {
        name: "Gold",
        price: 399 * 12 * 0.85,
        save: "Save 15%",
        popular: true,
        features: {
          "Priority Booking": true,
          "Global Access": true,
          "Dedicated Manager": true,
          "VIP Lounge": true,
          "Exclusive Events": false
        }
      },
      {
        name: "Platinum",
        price: 799 * 12 * 0.8,
        save: "Save 20%",
        features: {
          "Priority Booking": true,
          "Global Access": true,
          "Dedicated Manager": true,
          "VIP Lounge": true,
          "Exclusive Events": true
        }
      }
    ]
  };

  const featureList = [
    "Priority Booking",
    "Global Access",
    "Dedicated Manager",
    "VIP Lounge",
    "Exclusive Events"
  ];

  return (
    <section className="bg-black py-14 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[#D4AF37] tracking-[4px] text-sm uppercase mb-2">
            Membership Plans
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold">
            Choose Your Membership
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-[#0B1A2E] rounded-full p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-full text-sm ${
                billing === "monthly"
                  ? "bg-[#D4AF37] text-black"
                  : "text-gray-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2 rounded-full text-sm ${
                billing === "yearly"
                  ? "bg-[#D4AF37] text-black"
                  : "text-gray-300"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Cards Swap Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={billing}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {plans[billing].map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col bg-[#050505] border rounded-2xl p-8
                ${plan.popular ? "border-[#D4AF37]" : "border-white/10"}`}
              >
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>

                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${Math.round(plan.price)}
                  </span>
                  <span className="text-gray-400 text-sm ml-2">
                    /{billing === "monthly" ? "month" : "year"}
                  </span>

                  {plan.save && (
                    <p className="text-xs text-[#D4AF37] mt-1">{plan.save}</p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {featureList.map((feature, i) => (
                    <li key={i} className="flex justify-between text-sm">
                      <span className="text-gray-300">{feature}</span>
                      {plan.features[feature] ? (
                        <Check size={18} className="text-[#D4AF37]" />
                      ) : (
                        <X size={18} className="text-gray-600" />
                      )}
                    </li>
                  ))}
                </ul>

                {/* Local Premium Button */}
                <button
                  className="pricing-btn mt-auto"
                  data-text="Get Offer"
                ></button>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Local Button CSS (no global conflict) */}
      <style>
        {`
        .pricing-btn {
          width: 100%;
          height: 44px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(to right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a);
          background-size: 250%;
          background-position: left;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition-duration: 0.8s;
          overflow: hidden;
          font-weight: 600;
          font-size: 14px;
        }

        .pricing-btn::before {
          position: absolute;
          content: attr(data-text);
          color: #ffd277;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 97%;
          height: 90%;
          border-radius: 8px;
          background-color: rgba(0, 0, 0, 0.9);
        }

        .pricing-btn:hover {
          background-position: right;
        }

        .pricing-btn:active {
          transform: scale(0.96);
        }
        `}
      </style>
    </section>
  );
}

export default MembershipPricing;