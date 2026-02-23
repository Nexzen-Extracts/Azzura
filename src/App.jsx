import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Membership from "./pages/Membership";
// import SplashCursor from "./components/SplashCursor";

function App() {
  return (
    <BrowserRouter>
      {/* Global Cursor Effect */}
      {/* <SplashCursor /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;