import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FleetContent from "../components/FleetContent";

import heroImage from "../assets/fleet-hero2.jpg";


function FleetPage() {
  return (
    <>
      <Navbar />

      {/* ===== Premium Fleet Hero ===== */}
      <section className="relative w-full h-screen overflow-hidden">

        {/* Background Image */}
        <motion.img
          src={heroImage}
          alt="Fleet"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex justify-end items-end px-6 md:px-16 pb-16 md:pb-24">

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-[520px] text-right text-white"
          >

            <p className="uppercase tracking-[6px] text-xs text-white/70 mb-5">
              Our Fleet
            </p>

            <h1 className="font-light text-[38px] sm:text-[48px] md:text-[56px] leading-[1.05] mb-6">
              Aircraft
              <br />
              Built for Excellence
            </h1>

            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md ml-auto">
              Discover a modern fleet designed for performance, comfort
              and reliability across every destination.
            </p>

          </motion.div>

        </div>

      </section>

      {/* Fleet Content */}
      <FleetContent />
     

      <Footer />
    </>
  );
}

export default FleetPage;