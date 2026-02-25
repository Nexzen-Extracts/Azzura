import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Membership from "./pages/Membership";
<<<<<<< HEAD
import About from "./pages/About";
=======
import FleetPage from "./pages/FleetPage";
import YatraPage from "./pages/YatraPage";
import Charter from "./pages/Charter";
>>>>>>> b145840de5e36a06cdb527f9ebabe5bd29dae98a
// import SplashCursor from "./components/SplashCursor";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;