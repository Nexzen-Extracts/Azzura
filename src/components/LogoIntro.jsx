import { motion } from "framer-motion";
import logo from "../assets/logo.png";

function LogoIntro({ onFinish }) {

  return (
    <motion.div
      className="fixed inset-0 z-[99999] bg-[#081421] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      onAnimationComplete={onFinish}
    >

      {/* subtle background glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#1A3B5D] opacity-20 blur-[120px] rounded-full"></div>

      {/* Logo */}
      <motion.img
        src={logo}
        alt="Company Logo"
        className="relative w-[240px] md:w-[360px] lg:w-[420px] max-w-[80vw] will-change-transform"
        initial={{ scale: 1.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

    </motion.div>
  );
}

export default LogoIntro;