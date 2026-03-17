import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Membership from "./pages/Membership";
import About from "./pages/About";
import FleetPage from "./pages/FleetPage";
import YatraPage from "./pages/YatraPage";
import Charter from "./pages/Charter";
import FleetDetails from "./components/FleetDetails";
import SustainabilityPage from "./pages/SustainabilityPage";
import ScrollToTop from "./components/ScrollToTop";

// ✅ ADD THIS
import Rewards from "./pages/Rewards";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/yatra" element={<YatraPage />} />
        <Route path="/charter" element={<Charter />} />
        <Route path="/fleet/:slug" element={<FleetDetails />} />
        <Route path="/sustainability" element={<SustainabilityPage />} />

        {/* ✅ NEW ROUTE */}
        <Route path="/rewards" element={<Rewards />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;