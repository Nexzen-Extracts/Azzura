import { useState } from "react";
import { motion } from "framer-motion";

function FleetMetrics({ fleet }) {

const [swapped,setSwapped] = useState(false);

const items = swapped
? [
{label:"Max Range",value:fleet.range,img:fleet.rangeImage},
{label:"Max Speed",value:fleet.speed,img:fleet.interior[1]}
]
: [
{label:"Max Speed",value:fleet.speed,img:fleet.interior[1]},
{label:"Max Range",value:fleet.range,img:fleet.rangeImage}
];

return(

<section className="w-full py-28 bg-white">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

{items.map((item,i)=>(

<motion.div
key={i}
onHoverEnd={()=>setSwapped(!swapped)}
whileHover={{scale:1.05}}
className="relative h-[420px] overflow-hidden rounded-xl cursor-pointer group"
>

{/* IMAGE */}

<img
src={item.img}
className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110"
/>

{/* OVERLAY */}

<div className="absolute inset-0 bg-black/40"/>

{/* CARD */}

<motion.div
whileHover={{scale:1.25,y:-10}}
transition={{type:"spring",stiffness:200}}
className="absolute inset-0 flex flex-col items-center justify-center text-white text-center"
>

<div className="bg-white/90 text-[#0E2038] text-xs tracking-[3px] px-5 py-2 rounded-full mb-4">
{item.label}
</div>

<h3 className="text-4xl font-light">
{item.value}
</h3>

</motion.div>

</motion.div>

))}

</div>

</section>

);
}

export default FleetMetrics;