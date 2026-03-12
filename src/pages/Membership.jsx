import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MembershipHero from "../components/MembershipHero";
import AboutMembership from "../components/AboutMembership";
import MembershipBenefits from "../components/MembershipBenefits";
import ClubSection from "../components/ClubSection";
import MembershipPricing from "../components/MembershipPricing";
import JetHighlight from "../components/JetHighlight";
import NewsletterSection from "../components/NewsletterSection";


function Membership() {
  return (
    <div className="bg-[#081421] text-white overflow-hidden">
      <Navbar />
      <MembershipHero />

      {/* Premium Sections */}
      <AboutMembership />
      <MembershipBenefits />
      <ClubSection />
      
      <MembershipPricing />
     

      
      <JetHighlight />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default Membership;