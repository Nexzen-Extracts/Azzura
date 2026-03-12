import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Membership from "./pages/Membership";
import About from "./pages/About";
import FleetPage from "./pages/FleetPage";
import YatraPage from "./pages/YatraPage";
import Charter from "./pages/Charter";
// import FleetDetails from "./pages/FleetDetails";
import AutoLeadPopup from "./components/AutoLeadPopup";
// import SplashCursor from "./components/SplashCursor";
import FleetContent from "./components/FleetContent";
import FleetDetails from "./components/FleetDetails";
import SustainabilityPage from "./pages/SustainabilityPage";

function App() {
  return (
    <BrowserRouter>
      {/* Global Cursor Effect */}
      {/* <SplashCursor /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/yatra" element={<YatraPage />} />
        <Route path="/charter" element={<Charter />} />
        {/* <Route path="/fleet/:id" element={<FleetDetails />} /> */}
         {/* <Route path="/fleet" element={<FleetContent />} /> */}

  <Route path="/fleet/:slug" element={<FleetDetails />} />
  <Route path="/sustainability" element={<SustainabilityPage />} />
        
      </Routes>
      <AutoLeadPopup />
    </BrowserRouter>
  );
}

export default App;