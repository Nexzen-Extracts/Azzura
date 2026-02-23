import { useState } from "react";
import membershipImg from "../assets/membership-about.jpeg";
// import MembershipPopup from "./MembershipPopup";

function AboutMembership() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-[#081423] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="relative">
          <img
            src={membershipImg}
            alt="Membership"
            className="rounded-xl shadow-2xl object-cover w-full h-[420px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081423] to-transparent rounded-xl"></div>
        </div>

        {/* Right Content */}
        <div className="text-white">
          <h2 className="text-4xl font-semibold mb-6">
            Exclusive Membership Experience
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8">
            Our membership program is designed for frequent flyers who value
            flexibility, priority access, and transparent pricing. Enjoy
            guaranteed availability, premium fleet access, and personalized
            aviation support worldwide.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="px-8 py-3 rounded-full font-semibold
            bg-gradient-to-r from-[#B8962E] via-[#D4AF37] to-[#B8962E]
            text-[#081423] hover:brightness-110 transition"
          >
            Join Membership
          </button>
        </div>
      </div>

      {open && <MembershipPopup close={() => setOpen(false)} />}
    </section>
  );
}

export default AboutMembership;