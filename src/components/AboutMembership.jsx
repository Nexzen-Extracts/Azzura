import { useState } from "react";
import { motion } from "framer-motion";
import membershipImg from "../assets/membership-about.jpeg";
// import MembershipPopup from "./MembershipPopup";

function AboutMembership() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-black py-10 md:py-14 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full"
        >
          <img
            src={membershipImg}
            alt="Membership"
            className="rounded-lg object-cover w-full h-[360px] md:h-[420px] shadow-xl"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white max-w-lg"
        >
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 leading-tight">
            Exclusive Membership Experience
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
            Our membership program is designed for frequent flyers who value
            flexibility, priority access, and transparent pricing. Enjoy
            guaranteed availability, premium fleet access, and personalized
            aviation support worldwide.
          </p>

          {/* Premium Button */}
          <button
            onClick={() => setOpen(true)}
            className="Btn"
            data-text="Join Membership"
          ></button>
        </motion.div>
      </div>

      {/* Popup */}
      {open && <MembershipPopup close={() => setOpen(false)} />}

      {/* Premium Button CSS */}
      <style>
        {`
        .Btn {
          width: 180px;
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

        .Btn::before {
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
          transition-duration: 0.8s;
        }

        .Btn:hover {
          background-position: right;
        }

        .Btn:active {
          transform: scale(0.96);
        }
        `}
      </style>
    </section>
  );
}

export default AboutMembership;