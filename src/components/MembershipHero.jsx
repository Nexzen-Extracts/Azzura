import { motion } from "framer-motion";
import heroImg from "../assets/about-2026.jpg";

function MembershipHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background */}
      <motion.img
        src={heroImg}
        alt="Elite Membership"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 h-full flex justify-end items-end px-6 md:px-16 pb-16 md:pb-24">

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-[520px] text-right text-white"
        >

          {/* Small Label */}
          <p className="uppercase tracking-[6px] text-xs text-white/70 mb-5">
            Membership Program
          </p>

          {/* Heading */}
          <h1 className="font-light text-[36px] sm:text-[46px] md:text-[52px] leading-[1.05] mb-5">
            Elite Membership
          </h1>

          {/* Short Paragraph */}
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-sm ml-auto">
            Priority aircraft access and exclusive private aviation benefits.
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default MembershipHero;