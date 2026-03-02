import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  const containerVariant = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-20 md:py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Cream Card */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="
            rounded-3xl
            p-10 sm:p-16
            bg-[#F7F3ED]   /* Light cream */
            border border-[#E8E1D8]
            shadow-sm
          "
        >
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div className="space-y-6">

              <p className="uppercase tracking-[4px] text-xs text-gray-400">
                Newsletter
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0E2038] leading-tight">
                Elevate Your Journey
              </h2>

              <div className="w-16 h-[2px] bg-gray-300" />

              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-lg">
                Subscribe for exclusive private jet offers and curated luxury
                aviation insights delivered directly to your inbox.
              </p>

            </div>

            {/* RIGHT */}
            <div>

              <AnimatePresence mode="wait">
                {!subscribed ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                  >

                    <div className="flex flex-col sm:flex-row gap-4">

                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="
                          flex-1 px-6 py-4 rounded-2xl
                          bg-white
                          border border-gray-300
                          text-[#0E2038]
                          placeholder-gray-400
                          focus:outline-none
                          focus:border-[#0E2038]
                          transition duration-300
                        "
                        required
                      />

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="
                          px-8 py-4 rounded-2xl
                          bg-[#0E2038]
                          text-white
                          text-sm
                          hover:bg-[#1A3354]
                          transition
                        "
                      >
                        Subscribe
                      </motion.button>

                    </div>

                    <p className="text-xs text-gray-500">
                      By subscribing, you agree to our{" "}
                      <span className="underline cursor-pointer">
                        Terms
                      </span>{" "}
                      and{" "}
                      <span className="underline cursor-pointer">
                        Privacy Policy
                      </span>.
                    </p>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="
                      flex flex-col items-center justify-center
                      bg-white
                      rounded-3xl
                      p-12
                      text-center
                      border border-gray-200
                    "
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="
                        w-16 h-16 rounded-full
                        bg-[#0E2038]/10
                        flex items-center justify-center mb-6
                      "
                    >
                      <Check className="text-[#0E2038]" size={28} />
                    </motion.div>

                    <h3 className="text-xl font-light text-[#0E2038] mb-2">
                      Thank You!
                    </h3>

                    <p className="text-gray-600 text-sm">
                      You’ve been added to our exclusive list.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default NewsletterSection;