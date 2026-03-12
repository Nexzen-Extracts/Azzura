import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sustainability from "../components/Sustainability";
import JetHighlight from "../components/JetHighlight";
import NewsletterSection from "../components/NewsletterSection";

export default function SustainabilityPage() {
  return (
    <>
      <Navbar />

      <main>
        <Sustainability />
      </main>
<JetHighlight />
      <NewsletterSection />
      <Footer />
    </>
  );
}