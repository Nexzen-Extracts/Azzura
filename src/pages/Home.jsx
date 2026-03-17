import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Fleet from "../components/Fleet";
import Products from "../components/Products";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Footer from "../components/Footer";
import LogoIntro from "../components/LogoIntro";
import SplitSection from "../components/SplitSection";
import Statistics from "../components/Statistics";
import JetHighlight from "../components/JetHighlight";
import NewsletterSection from "../components/NewsletterSection";
import JetRoutes from "../components/JetRoutes";
import JetTrackingStrip from "../components/JetTrackingStrip";
import MerchandiseSection from "../components/MerchandiseSection";

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
        <SplitSection />
        <Statistics />
        <Fleet />
        <Products />
        <Services />
        <JetRoutes />
        <JetTrackingStrip />
        <WhyChoose />
        <JetHighlight />
        <MerchandiseSection />
        <NewsletterSection />
        <Footer />

      </motion.div>
    </>
  );
}

export default Home;