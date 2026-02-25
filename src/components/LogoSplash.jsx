import { motion } from "framer-motion";
import logo from "../assets/logo.png";

function LogoIntro({ onFinish }) {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.6 }}
      onAnimationComplete={onFinish}
    >
      {/* Flying Logo */}
      <motion.img
        src={logo}
        alt="Logo"
        className="absolute w-40 md:w-48"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
        initial={{
          scale: 1,
          x: "-50%",
          y: "-50%"
        }}
        animate={{
          scale: 0.5,
          x: "-45vw",   // move to left
          y: "-45vh"    // move to top (navbar area)
        }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1]
        }}
      />
    </motion.div>
  );
}

export default LogoIntro;