import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import YatraContent from "../components/YatraContent";
import YatraExperience from "../components/YatraExperience";
import hero1 from "../assets/yatra/hero1.jpg";
import hero2 from "../assets/yatra/hero2.jpg";
import hero3 from "../assets/yatra/hero3.jpg";
import hero4 from "../assets/yatra/hero4.jpg";
import hero5 from "../assets/yatra/hero5.jpg";

function YatraPage() {
  const images = [hero1, hero2, hero3, hero4, hero5];
  const [index, setIndex] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* ===== Hero Section ===== */}
      <section className="relative h-screen w-full overflow-hidden bg-[#081421]">

        {/* Image Slider */}
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Chardham Yatra"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Lighter Overlay (better visibility) */}
        <div className="absolute inset-0 bg-[#081421]/50"></div>

        {/* Left Gradient (lighter) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081421]/80 via-[#081421]/40 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-6 sm:px-10 md:px-16 max-w-7xl mx-auto">
          <div className="text-white max-w-xl mt-16 md:mt-24">

            {/* Heading with Hover Effect */}
           <h1
  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight cursor-pointer transition-all duration-500 hover:scale-[1.03]"
  style={{
    fontFamily: "'Samarkan', sans-serif",
    textShadow: "0 8px 30px rgba(0,0,0,0.7)",
  }}
  onMouseEnter={(e) =>
    (e.currentTarget.style.textShadow =
      "0 0 25px rgba(14,165,233,0.9)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.textShadow =
      "0 8px 30px rgba(0,0,0,0.7)")
  }
>
  Chardham Yatra
</h1>

            {/* Smaller Subheading */}
            <p className="mt-5 text-white/85 text-sm sm:text-base md:text-lg leading-relaxed">
              Experience sacred journeys across India with private aviation,
              priority darshan, and seamless spiritual travel planning.
            </p>

          </div>
        </div>

      </section>
<YatraExperience />
      {/* <YatraContent /> */}
      <Footer />
    </>
  );
}

export default YatraPage;