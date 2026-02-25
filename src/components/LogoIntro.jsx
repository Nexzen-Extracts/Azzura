import { motion } from "framer-motion";
import logo from "../assets/logo.png";

function LogoIntro({ onFinish }) {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] bg-[#081421] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.8 }}
      onAnimationComplete={onFinish}
    >
      {/* Large Premium Logo */}
      <motion.img
        src={logo}
        alt="Logo"
        className="w-[260px] md:w-[380px] lg:w-[460px] max-w-[80vw]"
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1]
        }}
      />
    </motion.div>
  );
}

export default LogoIntro;