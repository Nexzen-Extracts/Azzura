import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AzuraRewards from "../components/AzuraRewards";
import heroImage from "../assets/rewards.jpeg";

function Rewards() {
  return (
    <>
      <Navbar />

      {/* ===== HERO SECTION (CHARACTER STYLE) ===== */}
      <section className="relative w-full h-screen overflow-hidden">

        {/* Background Image */}
        <motion.img
          src={heroImage}
          alt="Elite Rewards"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="relative z-10 h-full flex justify-start items-end px-6 md:px-16 pb-16 md:pb-24">

  <motion.div
    initial={{ opacity: 0, x: -80 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.4 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    className="max-w-[520px] text-left text-white"
  >
    <p className="uppercase tracking-[6px] text-xs text-white/70 mb-5">
      Elite Rewards
    </p>

    <h1 className="font-light text-[38px] sm:text-[48px] md:text-[56px] leading-[1.05] mb-6">
      Earn More.
      <br />
      Fly Better.
    </h1>

    <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md">
      Unlock exclusive rewards, priority access, and elite travel benefits every time you fly with Azura.
    </p>
  </motion.div>

</div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div className="bg-white">
        <AzuraRewards />
      </div>

      <Footer />
    </>
  );
}

export default Rewards;