import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Globe,
  Star,
  Users,
  Plane
} from "lucide-react";

function MembershipBenefits() {
  const benefits = [
    {
      icon: Plane,
      title: "Priority Aircraft Access",
      desc: "Guaranteed availability across our premium fleet whenever you need to fly."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      desc: "Fly on your timeline with last-minute bookings and seamless changes."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      desc: "Private aviation access across major destinations worldwide."
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      desc: "International safety standards with certified operators."
    },
    {
      icon: Users,
      title: "Dedicated Flight Manager",
      desc: "Personalized planning and concierge support."
    },
    {
      icon: Star,
      title: "Exclusive Member Pricing",
      desc: "Transparent rates and preferred pricing for members only."
    }
  ];

  return (
    <section className="bg-black py-12 md:py-16 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[#D4AF37] tracking-[4px] text-xs mb-3 uppercase">
            Membership Benefits
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
            Designed for Effortless Private Travel
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="
                  p-6 rounded-xl
                  border border-white/10
                  bg-[#050505]
                  hover:border-[#D4AF37]/40
                  transition-all duration-300
                "
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 mb-4">
                  <Icon className="text-[#D4AF37]" size={20} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default MembershipBenefits;