import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Globe,
  Star,
  Users,
  Plane
} from "lucide-react";

import benefitImg from "../assets/membership-benefit.jpg";
import benefitImg2 from "../assets/couple-2.jpg";

/* Force Same Font */
const fontStyle = {
  fontFamily: "Inter, system-ui, -apple-system, sans-serif"
};

function MembershipBenefits() {

const benefits = [
{
icon: Plane,
title: "Priority Aircraft Access",
desc:
"Guaranteed availability across our premium fleet, ensuring aircraft access even during peak travel periods and last-minute bookings."
},
{
icon: Clock,
title: "Flexible Scheduling",
desc:
"Fly on your timeline with flexible departure windows, quick confirmations and seamless itinerary adjustments."
},
{
icon: Globe,
title: "Global Coverage",
desc:
"Access private aviation across major destinations worldwide with our trusted global operator network."
},
{
icon: Shield,
title: "Certified Safety Standards",
desc:
"Every flight meets strict international aviation safety and operational compliance standards."
},
{
icon: Users,
title: "Dedicated Aviation Manager",
desc:
"A personal aviation specialist manages every detail of your journey from planning to arrival."
},
{
icon: Star,
title: "Exclusive Member Pricing",
desc:
"Transparent hourly pricing and preferential rates designed specifically for our members."
}
];

const first = benefits.slice(0,3);
const second = benefits.slice(3,6);

return (

<section
style={fontStyle}
className="bg-black py-24 px-6 text-white"
>

<div className="max-w-7xl mx-auto">

{/* ===== Heading ===== */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:.7}}
viewport={{once:true}}
className="text-center mb-20"
>

<p className="uppercase tracking-[6px] text-xs text-gray-400 mb-4">
Membership Benefits
</p>

<h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">
Designed for Effortless Private Travel
</h2>

<div className="w-16 h-[2px] bg-gray-500 mx-auto mt-6"/>

</motion.div>



{/* ===== ROW 1 ===== */}

<div className="grid lg:grid-cols-10 gap-8 items-center mb-12">

{/* LEFT CARDS */}

<div className="lg:col-span-7 grid md:grid-cols-3 gap-6">

{first.map((item,i)=>{

const Icon = item.icon;

return(

<motion.div
key={i}
initial={{opacity:0,x:-90}}
whileInView={{opacity:1,x:0}}
transition={{delay:i*0.1,duration:.6}}
viewport={{once:true}}
whileHover={{y:-8}}
className="p-7 border border-white/10 bg-[#070707] hover:border-white/20 transition-all duration-300"
>

<Icon className="mb-4 text-white" size={22}/>

<h3 className="text-lg font-medium tracking-wide mb-2">
{item.title}
</h3>

<p className="text-gray-400 leading-relaxed text-sm">
{item.desc}
</p>

</motion.div>

);

})}

</div>


{/* RIGHT IMAGE */}

<motion.div
initial={{opacity:0,x:100}}
whileInView={{opacity:1,x:0}}
transition={{duration:.8}}
viewport={{once:true}}
className="lg:col-span-3 h-[320px]"
>

<img
src={benefitImg}
alt="Membership Benefits"
className="w-full h-full object-cover"
/>

</motion.div>

</div>



{/* ===== ROW 2 ===== */}

<div className="grid lg:grid-cols-10 gap-8 items-center">

{/* LEFT IMAGE */}

<motion.div
initial={{opacity:0,x:-100}}
whileInView={{opacity:1,x:0}}
transition={{duration:.8}}
viewport={{once:true}}
className="lg:col-span-3 h-[320px]"
>

<img
src={benefitImg2}
alt="Membership Experience"
className="w-full h-full object-cover"
/>

</motion.div>


{/* RIGHT CARDS */}

<div className="lg:col-span-7 grid md:grid-cols-3 gap-6">

{second.map((item,i)=>{

const Icon = item.icon;

return(

<motion.div
key={i}
initial={{opacity:0,x:90}}
whileInView={{opacity:1,x:0}}
transition={{delay:i*0.1,duration:.6}}
viewport={{once:true}}
whileHover={{y:-8}}
className="p-7 border border-white/10 bg-[#070707] hover:border-white/20 transition-all duration-300"
>

<Icon className="mb-4 text-white" size={22}/>

<h3 className="text-lg font-medium tracking-wide mb-2">
{item.title}
</h3>

<p className="text-gray-400 leading-relaxed text-sm">
{item.desc}
</p>

</motion.div>

);

})}

</div>

</div>

</div>

</section>

);

}

export default MembershipBenefits;