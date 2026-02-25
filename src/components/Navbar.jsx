import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  /* ===== Services with Routes ===== */
  const servicesList = [
    { name: "Aircraft Management", path: "/aircraft-management" },
    { name: "Charter Services", path: "/charter" },
    { name: "Aircraft Sales & Sourcing", path: "/aircraft-sales" },
    { name: "MRO", path: "/mro" },
    { name: "Aviation Consultancy", path: "/consultancy" },
    { name: "Advanced Air Mobility", path: "/aam" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1A2E] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* ================= Desktop Menu ================= */}
        <nav className="hidden lg:flex items-center gap-4 text-sm">

          <NavBtn to="/yatra" text="Yatra" />
          <NavBtn to="/wed" text="Wed" />
          <NavBtn to="/rescue" text="Rescue" />
          <NavBtn to="/helisetgo" text="HeliSetGo" />

          {/* Membership Button */}
          <Link to="/membership">
            <div className="Btn" data-text="Membership"></div>
          </Link>

          {/* ===== Services Dropdown (Smooth) ===== */}
          <div className="relative group">
            <button className="px-4 py-2 rounded-full text-white hover:bg-white/10 flex items-center gap-1">
              Services
              <ChevronDown size={16} />
            </button>

            {/* Dropdown */}
            <div className="absolute top-full right-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="w-64 bg-[#0B1A2E] border border-white/10 rounded-xl shadow-2xl">
                <ul className="py-2 text-sm">
                  {servicesList.map((service, i) => (
                    <li key={i}>
                      <Link
                        to={service.path}
                        className="block px-5 py-2 text-white/80 hover:text-[#D4AF37] hover:bg-white/5 transition"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="ml-2 p-2 rounded-full hover:bg-white/10"
          >
            <Menu size={22} className="text-white" />
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 rounded-full hover:bg-white/10"
          >
            <Menu size={26} className="text-white" />
          </button>
        </div>
      </div>

      {/* ================= Overlay Panel ================= */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70"
          onClick={closeMenu}
        >
          <div
            className="fixed top-0 right-0 h-full w-full sm:w-80 bg-[#0B1A2E] shadow-2xl animate-slide overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
              <h2 className="text-white text-xl">Menu</h2>
              <button onClick={closeMenu}>
                <X size={26} className="text-white" />
              </button>
            </div>

            <div className="px-6 py-6 space-y-5 text-white">

              {/* ===== Mobile Full Menu ===== */}
              <div className="lg:hidden space-y-5">
                <MenuLink to="/yatra" text="AzurA Yatra" close={closeMenu} />
                <MenuLink to="/wed" text="AzurA Wed" close={closeMenu} />
                <MenuLink to="/rescue" text="AzurA Rescue" close={closeMenu} />
                <MenuLink to="/helisetgo" text="HeliSetGo" close={closeMenu} />

                {/* Services Accordion */}
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex justify-between items-center w-full text-left"
                  >
                    Services
                    <ChevronDown
                      size={18}
                      className={`transition ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {servicesOpen && (
                    <ul className="mt-3 space-y-2 text-sm text-white/70 border-l border-white/20 pl-3">
                      {servicesList.map((service, i) => (
                        <li key={i}>
                          <Link
                            to={service.path}
                            onClick={closeMenu}
                            className="block py-1 hover:text-[#D4AF37]"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* Membership (Mobile) */}
<Link to="/membership" onClick={closeMenu}>
  <div className="Btn w-full mt-2" data-text="Membership"></div>
</Link>
                </div>
              </div>

              {/* ===== Desktop Hamburger Content ===== */}
              <MenuLink to="/about" text="About" close={closeMenu} />
              <MenuLink to="/fleet" text="Fleet" close={closeMenu} />
              <MenuLink to="/contact" text="Contact" close={closeMenu} />

              <Link to="/contact" onClick={closeMenu}>
                <div className="Btn w-full mt-3" data-text="Book Now"></div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style>
        {`
        @keyframes slide {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide {
          animation: slide 0.3s ease-out;
        }

        .Btn {
          width: 140px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(to right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a);
          background-size: 250%;
          background-position: left;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition-duration: 1s;
          overflow: hidden;
          font-weight: 600;
          font-size: 14px;
        }

        .Btn.w-full {
          width: 100%;
        }

        .Btn::before {
          position: absolute;
          content: attr(data-text);
          color: #ffd277;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 97%;
          height: 90%;
          border-radius: 8px;
          background-color: rgba(0,0,0,0.85);
        }

        .Btn:hover {
          background-position: right;
        }

        .Btn:active {
          transform: scale(0.95);
        }
        `}
      </style>
    </header>
  );
}

function NavBtn({ to, text }) {
  return (
    <Link
      to={to}
      className="px-4 py-2 rounded-full text-white hover:bg-white/10 transition"
    >
      {text}
    </Link>
  );
}

function MenuLink({ to, text, close }) {
  return (
    <Link
      to={to}
      onClick={close}
      className="block text-white hover:text-[#D4AF37]"
    >
      {text}
    </Link>
  );
}

export default Navbar;