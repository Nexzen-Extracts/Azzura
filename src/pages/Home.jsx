import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Fleet from "../components/Fleet";
import Products from "../components/Products";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import LogoIntro from "../components/LogoIntro";

function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <LogoIntro onFinish={() => setIntroDone(true)} />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introDone ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <Navbar />
        <Hero />
        <About />
        <Fleet />
        <Products />
        <Services />
        <WhyChoose />
        <CTA />
        <Footer />
      </motion.div>
    </>
  );
}

export default Home;