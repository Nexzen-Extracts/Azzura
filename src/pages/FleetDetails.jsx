import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FleetCinematic from "../components/FleetCinematic";
import FleetExperienceSection from "../components/FleetExperienceSection";
import { fleetData } from "../components/FleetContent";
import CTA from "../components/CTA";

function FleetDetails() {
  const { id } = useParams();
  const aircraft = fleetData.find(item => item.id === Number(id));

  if (!aircraft) {
    return <div className="p-20">Aircraft not found</div>;
  }

  return (
    <>
      <Navbar />
      <FleetCinematic data={aircraft} />
      <FleetExperienceSection data={aircraft} />
       <CTA data={aircraft} />
      <Footer />
    </>
  );
}

export default FleetDetails;