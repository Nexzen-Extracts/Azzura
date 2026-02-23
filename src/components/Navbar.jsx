import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1A2E] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl text-white tracking-widest font-semibold">
          Azzura
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-3 text-sm">

          <NavBtn to="/" text="Home" />
          <NavBtn to="/yatra" text="Yatra" />
          <NavBtn to="/wed" text="Wed" />
          <NavBtn to="/rescue" text="Rescue" />
          <NavBtn to="/helisetgo" text="HeliSetGo" />

          {/* Premium Gold Membership */}
          <Link
            to="/membership"
            className="px-5 py-2 rounded-full font-semibold
            bg-gradient-to-r from-[#B8962E] via-[#D4AF37] to-[#B8962E]
            text-[#081423]
            hover:brightness-110 transition-all duration-300"
          >
            Membership
          </Link>

          <NavBtn to="/contact" text="Contact" />

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="ml-2 p-2 rounded-full hover:bg-white/10 transition"
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

      {/* Overlay + Right Panel */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70"
          onClick={closeMenu}
        >
          {/* Panel */}
          <div
            className="fixed top-0 right-0 h-full w-full sm:w-80 bg-[#0B1A2E] shadow-2xl animate-slide overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <h2 className="text-white text-xl">Menu</h2>
              <button onClick={closeMenu}>
                <X size={26} className="text-white" />
              </button>
            </div>

            {/* Full Mobile Navigation */}
           <div className="px-6 py-6 space-y-5 text-white">

  {/* Mobile Only Navigation */}
  <div className="lg:hidden space-y-5">
    <MenuLink to="/" text="Home" close={closeMenu} />
    <MenuLink to="/yatra" text="Azzura Yatra" close={closeMenu} />
    <MenuLink to="/wed" text="Azzura Wed" close={closeMenu} />
    <MenuLink to="/rescue" text="Azzura Rescue" close={closeMenu} />
    <MenuLink to="/helisetgo" text="HeliSetGo" close={closeMenu} />
  </div>

  {/* Common Links (Desktop + Mobile) */}
  <MenuLink to="/about" text="About" close={closeMenu} />

  {/* Services Accordion */}
  <div>
    <button
      onClick={() => setServicesOpen(!servicesOpen)}
      className="flex justify-between items-center w-full text-left text-white"
    >
      Services
      <ChevronDown
        size={18}
        className={`transition ${servicesOpen ? "rotate-180" : ""}`}
      />
    </button>

    {servicesOpen && (
      <ul className="mt-3 space-y-2 text-sm text-white/70 border-l border-white/20 pl-3">
        <li>Aircraft Management</li>
        <li>Charter Services</li>
        <li>Aircraft Sales & Sourcing</li>
        <li>MRO</li>
        <li>Aviation Consultancy</li>
        <li>Advanced Air Mobility</li>
      </ul>
    )}
  </div>

  <MenuLink to="/fleet" text="Fleet" close={closeMenu} />

  {/* Membership (Mobile Only) */}
  <Link
    to="/membership"
    onClick={closeMenu}
    className="block text-center mt-4 py-3 rounded-full font-semibold
    bg-gradient-to-r from-[#B8962E] via-[#D4AF37] to-[#B8962E]
    text-[#081423] lg:hidden"
  >
    Membership
  </Link>

  <MenuLink to="/contact" text="Contact" close={closeMenu} />

  {/* Book Button */}
  <Link
    to="/contact"
    onClick={closeMenu}
    className="block mt-4 text-center bg-gradient-to-r from-[#B8962E] via-[#D4AF37] to-[#B8962E]
    text-[#081423] py-3 rounded-full font-semibold"
  >
    Book Now
  </Link>

</div>
          </div>
        </div>
      )}

      {/* Slide Animation */}
      <style>
        {`
          @keyframes slide {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
          .animate-slide {
            animation: slide 0.3s ease-out;
          }
        `}
      </style>
    </header>
  );
}

/* Desktop Buttons */
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

/* Mobile Links */
function MenuLink({ to, text, close }) {
  return (
    <Link
      to={to}
      onClick={close}
      className="block text-white hover:text-[#D4AF37] transition"
    >
      {text}
    </Link>
  );
}

export default Navbar;