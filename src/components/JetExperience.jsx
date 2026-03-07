import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function JetExperience() {

  const [view, setView] = useState("exterior");

  const exterior =
    "https://sketchfab.com/models/6cae34b495594968b49b0062978430c9/embed";

  const interior =
    "https://sketchfab.com/models/f6e39402ce7e445aa383a87d78098047/embed";

  const buttonStyle = {
    padding: "12px 28px",
    borderRadius: "30px",
    border: "1px solid black",
    background: "white",
    color: "black",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    letterSpacing: "0.3px",
    transition: "all 0.3s ease"
  };

  const activeButton = {
    ...buttonStyle,
    background: "black",
    color: "white"
  };

  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          textAlign: "center"
        }}
      >

        {/* Heading */}

        <h2
          style={{
            fontSize: "clamp(30px,4vw,46px)",
            fontWeight: "600",
            marginBottom: "10px",
            color: "black",
            letterSpacing: "-0.5px"
          }}
        >
          Experience Our Private Jet
        </h2>

        {/* Subheading */}

        <p
          style={{
            fontSize: "clamp(14px,1.2vw,18px)",
            color: "black",
            opacity: "0.7",
            marginBottom: "28px"
          }}
        >
          Explore the aircraft exterior and step inside the luxury cabin in 360°
        </p>

        {/* Viewer */}

        <div
          style={{
            width: "100%",
            height: "clamp(360px,55vh,560px)",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 35px 80px rgba(0,0,0,0.12)",
            position: "relative"
          }}
        >

          <AnimatePresence mode="wait">

            {view === "exterior" && (
              <motion.iframe
                key="exterior"
                src={exterior}
                allow="autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  position: "absolute"
                }}
                initial={{ opacity: 0, scale: 1.12 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.8 }}
              />
            )}

            {view === "interior" && (
              <motion.iframe
                key="interior"
                src={interior}
                allow="autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  position: "absolute"
                }}
                initial={{ opacity: 0, scale: 1.25 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            )}

          </AnimatePresence>

        </div>

        {/* Switch Buttons */}

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap"
          }}
        >

          <button
            onClick={() => setView("exterior")}
            style={view === "exterior" ? activeButton : buttonStyle}
          >
            Exterior
          </button>

          <button
            onClick={() => setView("interior")}
            style={view === "interior" ? activeButton : buttonStyle}
          >
            Interior Cabin
          </button>

        </div>

      </div>
    </section>
  );
}

export default JetExperience;