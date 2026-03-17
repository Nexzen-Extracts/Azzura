import jetVideo from "../assets/jet.mov";
import AirbnbSearch from "./AirbnbSearch";

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={jetVideo} type="video/mp4" />
      </video>

      <AirbnbSearch />

    </section>
  );
}

export default Hero;