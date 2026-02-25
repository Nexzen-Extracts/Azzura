import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from "lucide-react";

import footerBg from "../assets/footer.jpg";

function Footer() {
  return (
    <footer className="relative text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0A1A2E]/90"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">

        {/* Top Footer */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 – Logo & About */}
          <div>
            <h2 className="text-2xl font-heading mb-4">AzurA</h2>
            <p className="text-[#A3B5C0] text-sm leading-relaxed">
              Delivering premium private aviation services with a focus on safety,
              comfort and operational excellence worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <Facebook className="cursor-pointer hover:text-[#D4AF37] transition" />
              <Instagram className="cursor-pointer hover:text-[#D4AF37] transition" />
              <Linkedin className="cursor-pointer hover:text-[#D4AF37] transition" />
              <Twitter className="cursor-pointer hover:text-[#D4AF37] transition" />
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-[#A3B5C0] text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Membership</li>
              <li className="hover:text-white cursor-pointer">Products</li>
              <li className="hover:text-white cursor-pointer">Fleet</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Column 3 – Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-[#A3B5C0] text-sm">
              <li>Aircraft Management</li>
              <li>Aircraft Sourcing & Sales</li>
              <li>Charter Services</li>
              <li>MRO</li>
              <li>Aviation Consultancy</li>
              <li>Advanced Air Mobility</li>
            </ul>
          </div>

          {/* Column 4 – Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-[#A3B5C0] text-sm">
              <li>Email: info@AzurAaviation.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: Gurgaon, Haryana, India</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-[#A3B5C0]">

            <p>
              © {new Date().getFullYear()} AzurA Aviation. All Rights Reserved.
            </p>

            <div className="flex gap-6 mt-2 md:mt-0">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms</span>
              <span className="hover:text-white cursor-pointer">Cookies</span>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;