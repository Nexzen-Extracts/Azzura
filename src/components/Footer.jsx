import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";
 
import logo from "../assets/logo.png";
 
function Footer() {
 
  /* ================= Subtle Mouse Parallax ================= */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
 
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 25 });
 
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX - innerWidth / 2) / 150);
      mouseY.set((e.clientY - innerHeight / 2) / 150);
    };
 
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
 
  return (
    <footer className="relative overflow-hidden text-white bg-[#0B1220]">
 
      {/* ===== Premium Mesh Background ===== */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_40%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.05),transparent_50%)] blur-2xl opacity-70" />
 
      {/* ===== Glass Container ===== */}
      <motion.div
        style={{
          rotateX: smoothY,
          rotateY: smoothX,
          transformPerspective: 1000
        }}
        className="relative z-10 backdrop-blur-2xl bg-white/5 border-t border-white/10"
      >
 
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
 
          {/* ================= Column 1 ================= */}
          <ScrollColumn>
            <motion.img
              src={logo}
              alt="AZURA Logo"
              className="h-14 mb-6 drop-shadow-lg"
            />
 
            <motion.p className="text-[#A3B5C0] text-sm leading-relaxed">
              Delivering premium private aviation services with a focus on safety,
              comfort and operational excellence worldwide.
            </motion.p>
 
            {/* Social Icons */}
            <div className="flex gap-5 mt-8">
              {[
                {
                  Icon: FaFacebookF,
                  bg: "hover:bg-[#1877F2]",
                  border: "hover:border-[#1877F2]",
                  glow: "hover:shadow-[0_0_30px_rgba(24,119,242,0.6)]"
                },
                {
                  Icon: FaInstagram,
                  bg: "hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500",
                  border: "hover:border-pink-500",
                  glow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]"
                },
                {
                  Icon: FaLinkedinIn,
                  bg: "hover:bg-[#0A66C2]",
                  border: "hover:border-[#0A66C2]",
                  glow: "hover:shadow-[0_0_30px_rgba(10,102,194,0.6)]"
                },
                {
                  Icon: FaTwitter,
                  bg: "hover:bg-[#1DA1F2]",
                  border: "hover:border-[#1DA1F2]",
                  glow: "hover:shadow-[0_0_30px_rgba(29,161,242,0.6)]"
                }
              ].map(({ Icon, bg, border, glow }, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6, scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className={`group p-4 rounded-2xl bg-white/5 border border-white/10 cursor-pointer transition-all duration-500 ${bg} ${border} ${glow}`}
                >
                  <Icon className="text-lg text-gray-300 group-hover:text-white transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </ScrollColumn>
 
          <ScrollColumn title="Quick Links" links={[
            "Home","About","Membership","Products","Fleet","Contact"
          ]} />
 
          <ScrollColumn title="Services" links={[
            "Aircraft Management",
            "Aircraft Sourcing & Sales",
            "Charter Services",
            "MRO",
            "Aviation Consultancy",
            "Advanced Air Mobility"
          ]} />
 
          <ScrollColumn title="Contact" links={[
            "Email: info@Azuraaviation.com",
            "Phone: +91 98765 43210",
            "Address: Gurgaon, Haryana, India"
          ]} />
 
        </div>
 
        {/* Divider */}
        <div className="relative h-[1.5px] overflow-hidden">
  {/* Base subtle line */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C6A75E]/40 to-transparent"></div>
 
  {/* Slow moving golden glow */}
  <div className="absolute top-0 left-0 h-full w-[280px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent blur-sm opacity-90 animate-dividerLuxury"></div>
</div>
 
        {/* Bottom Bar */}
        <ScrollBottomBar />
 
      </motion.div>
    </footer>
  );
}
 
/* ================= Reusable Scroll Column ================= */
 
function ScrollColumn({ title, links, children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={{
        hidden: {
          opacity: 0,
          y: 60,
          filter: "blur(10px)"
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.12
          }
        }
      }}
    >
      {title && (
        <motion.h3
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          className="font-semibold mb-6 text-lg tracking-wide"
        >
          {title}
        </motion.h3>
      )}
 
      {links && (
        <ul className="space-y-4 text-[#A3B5C0] text-sm">
          {links.map((item, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="relative group w-fit cursor-pointer"
            >
              <span className="group-hover:text-white transition duration-300">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white/40 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>
      )}
 
      {children}
    </motion.div>
  );
}
 
/* ================= Bottom Bar Scroll ================= */
 
function ScrollBottomBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#A3B5C0] space-y-4 md:space-y-0"
    >
      <p>© {new Date().getFullYear()} Azura Aviation. All Rights Reserved.</p>
 
      <div className="flex gap-8">
        {["Privacy Policy","Terms","Cookies"].map((item,i)=>(
          <span key={i} className="relative group cursor-pointer">
            <span className="group-hover:text-white transition duration-300">
              {item}
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white/40 transition-all duration-300 group-hover:w-full"></span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
 
export default Footer;