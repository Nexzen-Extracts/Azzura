import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Fleet from "../components/Fleet";
import Products from "../components/Products";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Fleet />
      <Products />
      <Services />
      <WhyChoose />
      <CTA />
<Footer />
    </div>
  );
}

export default Home;
