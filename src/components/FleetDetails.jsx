import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import FleetSet from "./FleetSet";

import { fleetData } from "./FleetContent";

function FleetDetails() {

const { slug } = useParams();
const id = slug.split("-").pop();

const fleet = fleetData.find(item => item.id === Number(id));

if (!fleet) {
return <div className="p-20 text-center">Fleet Not Found</div>;
}

return(

<div className="bg-white overflow-x-hidden">

<Navbar/>

{/* ================= HERO ================= */}

<section className="relative w-full h-screen overflow-hidden">

<motion.img
src={fleet.image}
alt={fleet.name}
className="absolute inset-0 w-full h-full object-cover"
initial={{scale:1.08}}
animate={{scale:1}}
transition={{duration:10,ease:[0.22,1,0.36,1]}}
/>

<div className="absolute inset-0 bg-black/45"/>

<div className="relative z-10 h-full flex justify-end items-end px-6 md:px-16 pb-16 md:pb-24">

<motion.div
initial={{opacity:0,x:80}}
whileInView={{opacity:1,x:0}}
viewport={{once:false,amount:0.4}}
transition={{duration:.9,ease:"easeOut"}}
className="max-w-[520px] text-right text-white"
>

<p className="uppercase tracking-[6px] text-xs text-white/70 mb-5">
Private Fleet
</p>

<h1 className="font-light text-[38px] sm:text-[48px] md:text-[56px] leading-[1.05] mb-6">
{fleet.name}
</h1>

<p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md ml-auto">
Experience luxury private aviation with unmatched comfort,
speed and efficiency designed for modern travelers.
</p>

</motion.div>

</div>

</section>


{/* ===== Fleet Sections Component ===== */}

<FleetSet fleet={fleet} />

<Footer/>

</div>

);
}

export default FleetDetails;