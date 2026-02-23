import { motion } from "framer-motion";
import GridScan from "./ui/GridScan";

function MembershipHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center bg-[#081421]">

      {/* 3D Grid Background */}
      <GridScan
        lineColor="#1F3A5F"
        glowColor="#A3B5C0"
        gridSize={50}
        speed={0.3}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081421]/80 via-[#0B1A2B]/70 to-[#081421]/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-white pt-24">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-heading"
        >
          Elite Membership
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-[#A3B5C0] text-lg"
        >
          Priority access, exclusive pricing and private aviation without limits.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 px-10 py-4 rounded-full border border-[#A3B5C0] hover:bg-[#A3B5C0] hover:text-[#081421] transition"
        >
          Become a Member
        </motion.button>

      </div>
    </section>
  );
}

export default MembershipHero;


