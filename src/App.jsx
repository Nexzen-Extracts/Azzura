import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Membership from "./pages/Membership";
import About from "./pages/About";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;