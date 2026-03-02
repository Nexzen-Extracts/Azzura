import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AutoLeadPopup() {
  const [showCircle, setShowCircle] = useState(false);
  const [expand, setExpand] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Step 1: Show circle after 6 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCircle(true);

      // Step 2: Expand after 1 sec
      setTimeout(() => {
        setExpand(true);
      }, 1000);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating CTA */}
      <AnimatePresence>
        {showCircle && (
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: "fixed",
              bottom: "30px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 9999,
            }}
          >
            <motion.button
              onClick={() => setShowModal(true)}
              initial={false}
              animate={{
                width: expand ? 320 : 60,
                borderRadius: expand ? 40 : "50%",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                height: "60px",
                background:
                  "linear-gradient(145deg, #2c2c2e, #1c1c1e)",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: expand ? "space-between" : "center",
                padding: expand ? "0 18px" : "0",
                boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                overflow: "hidden",
              }}
            >
              {/* Text */}
              <AnimatePresence>
                {expand && (
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Plan Your Journey
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Plus Circle */}
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "#123e69",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  fontWeight: "600",
                  flexShrink: 0,
                }}
              >
                +
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10000,
            }}
          >
            <motion.div
              initial={{ scale: 0.85, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#fff",
                padding: "28px",
                borderRadius: "14px",
                width: "90%",
                maxWidth: "420px",
                position: "relative",
              }}
            >
              <button
                onClick={() => setShowModal(false)}
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "10px",
                  border: "none",
                  background: "none",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
              >
                ×
              </button>

              <h2 style={{ marginBottom: 10 }}>Get Free Consultation</h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form submitted!");
                  setShowModal(false);
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginTop: "15px",
                }}
              >
                <input placeholder="Name" required style={inputStyle} />
                <input type="email" placeholder="Email" required style={inputStyle} />
                <input placeholder="Phone" required style={inputStyle} />

                <button
                  type="submit"
                  style={{
                    padding: "12px",
                    background: "#0a84ff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const inputStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "6px",
  fontSize: "14px",
};