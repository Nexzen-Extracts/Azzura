import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import charterInterior from "../assets/charter-interior-1.jpg";

function CharterSectionForm() {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const totalSteps = 4;

  const next = () => {
    if (step < totalSteps + 1) setStep(step + 1);
  };

  const prev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      next();
    }
  };

  const handleSubmit = () => {
    setShowSuccess(true);
    setStep(1);
  };

  return (
    <>
      <section className="bg-[#040A12] text-white py-20 px-6 overflow-hidden">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.85)]">
            <img
              src={charterInterior}
              alt="Luxury Charter"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-8">
              <h3 className="text-xl font-semibold tracking-wide">
                Beyond Luxury. Beyond Expectations.
              </h3>
              <p className="text-white/60 text-sm mt-1">
                Experience precision-engineered private aviation.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>

            <h2 className="text-4xl font-semibold leading-tight mb-4">
              Start Your <span className="text-[#D4AF37]">Charter Request</span>
            </h2>

            <p className="text-white/60 mb-8">
              Enter your details and our aviation team will contact you shortly.
            </p>

            <div className="relative bg-gradient-to-br from-[#0B1623] to-[#07121D] border border-white/10 rounded-2xl p-10 shadow-[0_30px_80px_rgba(0,0,0,0.8)]">

              {step > 1 && (
                <button onClick={prev} className="nav-arrow left-[-22px]">
                  ←
                </button>
              )}

              {step <= totalSteps && (
                <button onClick={next} className="nav-arrow right-[-22px]">
                  →
                </button>
              )}

              <AnimatePresence mode="wait">

                {step === 1 && (
                  <SlideField key="name" label="Full Name" onKeyDown={handleKey} />
                )}

                {step === 2 && (
                  <SlideField key="email" label="Email Address" onKeyDown={handleKey} />
                )}

                {step === 3 && (
                  <SlideField key="phone" label="Contact Number" onKeyDown={handleKey} />
                )}

                {step === 4 && (
                  <SlideField key="message" label="Travel Details" textarea />
                )}

                {step === 5 && (
                  <motion.button
                    key="submit"
                    onClick={handleSubmit}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="submit-btn"
                  >
                    Submit Charter Request
                  </motion.button>
                )}

              </AnimatePresence>

            </div>

          </div>
        </div>
      </section>

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              className="bg-[#0B1623] border border-[#D4AF37]/40 rounded-2xl p-12 text-center shadow-[0_30px_100px_rgba(0,0,0,0.9)] max-w-md w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-5xl mb-4 text-[#D4AF37]">✓</div>
              <h3 className="text-2xl font-semibold mb-3">
                Thank You!
              </h3>
              <p className="text-white/60 mb-6">
                Your charter request has been received.
                Our aviation team will contact you shortly.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="submit-btn"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid rgba(212,175,55,0.6);
          background: rgba(212,175,55,0.08);
          color: #D4AF37;
          font-size: 20px;
          transition: 0.4s;
        }

        .nav-arrow:hover {
          background: #D4AF37;
          color: black;
          box-shadow: 0 0 30px rgba(212,175,55,0.6);
        }

        .glass-field {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 14px 16px;
          border-radius: 10px;
          color: white;
          outline: none;
          transition: 0.4s;
        }

        .glass-field:focus {
          border-color: #D4AF37;
          box-shadow: 0 0 20px rgba(212,175,55,0.25);
        }

        .submit-btn {
          width: 100%;
          padding: 16px;
          border-radius: 40px;
          font-weight: 600;
          background: linear-gradient(135deg, #D4AF37, #C49A2E);
          color: black;
          transition: 0.5s;
        }

        .submit-btn:hover {
          box-shadow: 0 0 50px rgba(212,175,55,0.7);
        }
        `}
      </style>
    </>
  );
}

function SlideField({ label, textarea, onKeyDown }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.4 }}
      className="space-y-3"
    >
      <label className="text-white/50 text-sm tracking-wide">
        {label}
      </label>

      {textarea ? (
        <textarea
          ref={inputRef}
          rows="3"
          className="glass-field resize-none"
        />
      ) : (
        <input
          ref={inputRef}
          type="text"
          className="glass-field"
          onKeyDown={onKeyDown}
        />
      )}
    </motion.div>
  );
}

export default CharterSectionForm;