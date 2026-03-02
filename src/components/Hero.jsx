import jetVideo from "../assets/jet.mov";

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Video - Pure (No dark effect) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={jetVideo} type="video/mp4" />
      </video>

    </section>
  );
}

export default Hero;