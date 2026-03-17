import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logoDark from "../assets/logo-dark.png";
import logoWhite from "../assets/logo.png";
import AzuraGoldButton from "../components/AzuraGoldButton";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  /* Scroll effect */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===== NAV LINKS (NO REWARDS HERE) ===== */
  const navLinks = [
    { name: "Expedition", path: "/yatra" },
    { name: "Wed", path: "/wed" },
    { name: "Rescue", path: "/rescue" },
    { name: "HeliSetGo", path: "/helisetgo" },
    { name: "Azura Gold +", path: "/membership" },
  ];

  const servicesList = [
    { name: "Aircraft Management", path: "/aircraft-management" },
    { name: "Charter Services", path: "/charter" },
    { name: "Aircraft Sales & Sourcing", path: "/aircraft-sales" },
    { name: "MRO", path: "/mro" },
    { name: "Aviation Consultancy", path: "/consultancy" },
    { name: "Advanced Air Mobility", path: "/aam" },
  ];

  /* ===== SIDE MENU (REWARDS HERE ONLY) ===== */
  const menuLinks = [
    { name: "Elite Rewards", path: "/rewards" }, // ✅ ONLY HERE
    { name: "About", path: "/about" },
    { name: "Fleet", path: "/fleet" },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Merchandise", path: "/merchandise" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5">

        {/* ===== Mobile ===== */}
        <div className="flex lg:hidden items-center justify-between py-4">
          <Link to="/">
            <img
              src={scrolled ? logoDark : logoWhite}
              alt="logo"
              className="h-8"
            />
          </Link>

          <button onClick={() => setMenuOpen(true)}>
            <Menu
              size={26}
              className={scrolled ? "text-black" : "text-white"}
            />
          </button>
        </div>

        {/* ===== Desktop ===== */}
        <div className="hidden lg:flex flex-col items-center">

          {/* Logo */}
          <Link to="/" className="py-4">
            <img
              src={scrolled ? logoDark : logoWhite}
              alt="logo"
              className="h-10"
            />
          </Link>

          {/* Divider */}
          <div
            className={`w-full h-[1px] ${
              scrolled ? "bg-black/10" : "bg-white/20"
            }`}
          ></div>

          {/* Nav */}
          <div className="w-full flex items-center justify-center relative py-3">
            <nav className="flex items-center gap-6 text-sm font-medium">

              {navLinks.map((link, i) => {

                if (link.name === "Azura Gold +") {
                  return (
                    <Link key={i} to={link.path}>
                      <AzuraGoldButton $scrolled={scrolled} />
                    </Link>
                  );
                }

                return (
                  <NavItem
                    key={i}
                    to={link.path}
                    text={link.name}
                    scrolled={scrolled}
                  />
                );
              })}

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center gap-1 ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  Services <ChevronDown size={16} />
                </button>

                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <div className="w-64 bg-white border border-black/10 rounded-xl shadow-xl">
                    <ul className="py-2 text-sm">
                      {servicesList.map((service, i) => (
                        <li key={i}>
                          <Link
                            to={service.path}
                            className="block px-5 py-2 text-black/70 hover:bg-black/5"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </nav>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="absolute right-6"
            >
              <Menu
                size={26}
                className={scrolled ? "text-black" : "text-white"}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ===== Side Menu ===== */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-[9999]"
          onClick={closeMenu}
        >
          <div
            className="fixed right-0 top-0 h-full w-full sm:w-80 bg-white p-6 text-black animate-slide"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <img src={logoDark} alt="logo" className="h-8" />
              <button onClick={closeMenu}>
                <X size={26} />
              </button>
            </div>

            <div className="space-y-6 text-lg">
              {menuLinks.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  onClick={closeMenu}
                  className="block hover:underline"
                >
                  {item.name}
                </Link>
              ))}

              <Link to="/contact" onClick={closeMenu}>
                <div className="mt-6 bg-black text-white font-semibold py-3 rounded-lg text-center">
                  Book Now
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Animation */}
      <style>{`
        @keyframes slide {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide {
          animation: slide 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}

/* ===== Nav Item ===== */
function NavItem({ to, text, scrolled }) {
  return (
    <Link
      to={to}
      className={`relative pb-1 group ${
        scrolled ? "text-black" : "text-white"
      }`}
    >
      {text}
      <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

export default Navbar;