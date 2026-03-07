import { useState } from "react";
import { motion } from "framer-motion";
import membershipImg from "../assets/interior-1.jpg";
import membershipImg2 from "../assets/interior-2.jpg";

function AboutMembership() {

  const [open, setOpen] = useState(false);

  const leftAnim = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightAnim = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-black font-sans overflow-x-hidden">

      {/* ================= SECTION 1 ================= */}
      <div className="flex flex-col lg:flex-row min-h-[70vh]">

        {/* LEFT IMAGE */}
        <motion.div
          variants={leftAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="lg:w-1/2 h-[320px] lg:h-auto"
        >
          <img
            src={membershipImg}
            alt="Membership"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          variants={rightAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
        >
          <div className="max-w-xl">

            <p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
              Membership Program
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-5">
              Exclusive Membership Experience
            </h2>

            <div className="w-16 h-[2px] bg-gray-500 mb-6" />

            <p className="text-gray-300 leading-relaxed mb-8">
              Our membership program provides priority aircraft access,
              flexible booking options and premium aviation services
              designed for frequent private flyers.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="membership-btn"
            >
              Become a Member
            </button>

          </div>
        </motion.div>
      </div>


      {/* ================= SECTION 2 ================= */}
      <div className="flex flex-col lg:flex-row min-h-[70vh]">

        {/* LEFT CONTENT */}
        <motion.div
          variants={leftAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
        >
          <div className="max-w-xl">

            <p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
              Membership Benefits
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-5">
              Priority Fleet Access
            </h2>

            <div className="w-16 h-[2px] bg-gray-500 mb-6" />

            <p className="text-gray-300 leading-relaxed">
              Members receive priority access to our premium fleet,
              ensuring aircraft availability even during peak travel
              periods. Enjoy flexible booking, transparent pricing,
              and seamless aviation support worldwide.
            </p>

          </div>
        </motion.div>


        {/* RIGHT IMAGE */}
        <motion.div
          variants={rightAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="lg:w-1/2 h-[320px] lg:h-auto"
        >
          <img
            src={membershipImg2}
            alt="Fleet Access"
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>


      <style>{`

        .membership-btn{
          padding:14px 32px;
          border:1px solid rgba(255,255,255,0.7);
          background:transparent;
          color:#ffffff;
          font-size:14px;
          letter-spacing:.5px;
          transition:all .3s ease;
        }

        .membership-btn:hover{
          background:#ffffff;
          color:#000000;
        }

      `}</style>

    </section>
  );
}

export default AboutMembership;