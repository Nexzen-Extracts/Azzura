import { motion } from "framer-motion";
import clubImg from "../assets/club.webp";

function ClubSection() {
  return (
    <section className="relative py-16 md:py-20 px-6 text-white overflow-hidden">

      {/* Background Image with cinematic effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={clubImg}
          alt="Private Members Club"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Premium Overlay (balanced, not too dark) */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <p className="text-[#D4AF37] tracking-[4px] text-xs uppercase mb-3">
            Private Members Club
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-5">
            Where Aviation Meets
            <br />
            Elite Lifestyle
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Join an exclusive circle of global leaders, entrepreneurs and elite
            travelers. AZURA Membership extends beyond flights into curated
            luxury experiences, private events and premium lifestyle privileges.
          </p>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• VIP airport & private lounge access</li>
            <li>• Exclusive members-only networking events</li>
            <li>• Luxury lifestyle & hospitality partnerships</li>
            <li>• 24/7 concierge & priority services</li>
          </ul>
        </motion.div>

        {/* Right Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            bg-black/40
            backdrop-blur-lg
            border border-white/10
            rounded-2xl
            p-8
            shadow-2xl
            max-w-md
            md:ml-auto
          "
        >
          <h3 className="text-xl font-semibold mb-4">
            Invitation Only Access
          </h3>

          <p className="text-gray-400 text-sm mb-6">
            Membership is limited to ensure exclusivity. Request your invitation
            to unlock private aviation privileges and elite lifestyle benefits.
          </p>

          <button className="Btn" data-text="Request Invitation"></button>
        </motion.div>
      </div>

      {/* Premium Button CSS */}
      <style>
        {`
        .Btn {
          width: 200px;
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

export default ClubSection;