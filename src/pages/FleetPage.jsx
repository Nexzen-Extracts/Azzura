import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FleetContent from "../components/FleetContent";

const heroImage =
  "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1600";

function FleetPage() {
  return (
    <>
      <Navbar />

      {/* ===== Clean Fleet Hero ===== */}
      <section className="relative mt-16">

        <div className="relative h-[55vh] md:h-[60vh] w-full overflow-hidden">

          {/* Background */}
          <motion.img
            src={heroImage}
            alt="Fleet"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          />

          {/* Left text fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#081421]/85 via-[#081421]/40 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center px-6 md:px-16">
            <div className="max-w-xl text-white">

              <p className="text-sm tracking-[4px] uppercase text-[#D4AF37] mb-4">
                Our Fleet
              </p>

              <h1 className="text-4xl md:text-6xl font-heading leading-tight mb-4">
                Fly Beyond
                <br />
                Every Destination
              </h1>

              <p className="text-[#D0D8E0] text-base md:text-lg">
                A modern fleet engineered for performance, comfort and reliability across every mission.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* No gap here */}
      <FleetContent />

      <Footer />
    </>
  );
}

export default FleetPage;