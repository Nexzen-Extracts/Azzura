import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import YatraContent from "../components/YatraContent";

function YatraPage() {
  return (
    <>
      <Navbar />

      {/* ===== Hero Section (Fleet style) ===== */}
      <section className="relative h-[70vh] bg-[#081421] overflow-hidden">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=1600"
          alt="AZURA Yatra"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Left Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081421]/95 via-[#081421]/70 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
          <div className="max-w-xl text-white">

            <p className="text-[#D4AF37] tracking-[4px] text-sm mb-3 uppercase">
              AZURA Yatra
            </p>

            <h1 className="text-4xl md:text-6xl font-heading leading-tight mb-6">
              Sacred Journeys.<br />
              Seamless Travel.
            </h1>

            <p className="text-white/70 text-lg">
              Experience spiritual destinations across India with private aviation,
              priority access and personalized travel planning.
            </p>

          </div>
        </div>

      </section>

      <YatraContent />
      <Footer />
    </>
  );
}

export default YatraPage;