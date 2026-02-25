import { motion } from "framer-motion";
import heroImg from "../assets/membership-hero.jpg";

function MembershipHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#081421]">

      {/* Background Image */}
      <motion.img
        src={heroImg}
        alt="Private Jet Membership"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#081421] via-[#081421]/70 to-[#081421]/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end justify-center md:justify-end px-6 md:px-16 pb-28 md:pb-32">

        <div className="max-w-xl text-center md:text-right text-white">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-heading leading-tight"
          >
            Elite Membership
          </motion.h1>

          {/* Paragraph (width controlled to match heading area) */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="
              mt-4
              text-[#C5D0DA]
              text-base md:text-lg
              leading-relaxed
              md:ml-auto
              max-w-md
            "
          >
            Priority access, exclusive pricing and private aviation
            without limits.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex justify-center md:justify-end"
          >
            <button className="Btn" data-text="Become a Member"></button>
          </motion.div>

        </div>
      </div>

      {/* Button CSS */}
      <style>
        {`
        .Btn {
          width: 180px;
          height: 45px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(to right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a);
          background-size: 250%;
          background-position: left;
          color: #ffd277;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition-duration: 1s;
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
          background-color: rgba(0, 0, 0, 0.85);
        }

        .Btn:hover {
          background-position: right;
        }

        .Btn:active {
          transform: scale(0.95);
        }
        `}
      </style>

    </section>
  );
}

export default MembershipHero;