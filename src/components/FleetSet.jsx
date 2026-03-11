import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import bgImage from "../assets/runway.png";
import blueprint from "../assets/blueprint.png";
import speedGif from "../assets/speed.gif";
import rangeGif from "../assets/range.gif";
import JetExperience from "../components/JetExperience";

function Counter({ value }) {

const ref = useRef(null);
const isInView = useInView(ref, { once:false });

const [count,setCount] = useState(0);

useEffect(()=>{

if(!isInView) return;

let start = 0;
const duration = 1500;
const increment = value/(duration/16);

const timer = setInterval(()=>{

start += increment;

if(start >= value){
setCount(value);
clearInterval(timer);
}else{
setCount(Math.floor(start));
}

},16);

return ()=>clearInterval(timer);

},[isInView,value]);

return <span ref={ref}>{count}</span>;

}


function FleetSet({ fleet }) {

const leftAnim = {
hidden:{opacity:0,x:-60},
show:{opacity:1,x:0,transition:{duration:.8,ease:"easeOut"}}
};

const rightAnim = {
hidden:{opacity:0,x:60},
show:{opacity:1,x:0,transition:{duration:.8,ease:"easeOut"}}
};

return (

<div className="bg-white overflow-x-hidden">


{/* ================= SECTION 1 ================= */}
{/* CONTENT LEFT | IMAGE RIGHT */}

<section className="w-full">

<div className="flex flex-col lg:flex-row min-h-[70vh]">

{/* CONTENT */}

<motion.div
variants={leftAnim}
initial="hidden"
whileInView="show"
viewport={{ once:false, amount:0.3 }}
className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
>

<div className="max-w-xl">

<p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
Aircraft Overview
</p>

<h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0E2038] mb-5">
{fleet.name}
</h2>

<div className="w-16 h-[2px] bg-gray-300 mb-6" />

<p className="text-gray-600 leading-relaxed">
{fleet.desc}
</p>

<ul className="space-y-3 text-gray-700 mt-6">

<li className="flex gap-3"><span>•</span> Premium leather seating</li>
<li className="flex gap-3"><span>•</span> Quiet cabin experience</li>
<li className="flex gap-3"><span>•</span> Perfect for business travel</li>
<li className="flex gap-3"><span>•</span> Efficient short and mid-range flights</li>

</ul>

</div>

</motion.div>


{/* IMAGE */}

<motion.div
variants={rightAnim}
initial="hidden"
whileInView="show"
viewport={{ once:false, amount:0.3 }}
className="lg:w-1/2 h-[320px] lg:h-auto"
>

<img
src={fleet.image}
className="w-full h-full object-cover"
/>

</motion.div>

</div>

</section>



{/* ================= SECTION 2 ================= */}
{/* PARALLAX SPEED STRIP */}

{/* ================= AIRCRAFT PERFORMANCE ================= */}

<section className="w-full bg-[#F4F5F7] py-24">

<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">


{/* SPEED GIF */}

<motion.div
initial={{opacity:0,x:-60}}
whileInView={{opacity:1,x:0}}
transition={{duration:.8}}
className="h-[260px] bg-white border border-gray-200 rounded-lg flex items-center justify-center"
>

<img
src={speedGif}
className="w-36 object-contain"
/>

</motion.div>


{/* SPEED NUMBER */}

<motion.div
initial={{opacity:0,x:-60}}
whileInView={{opacity:1,x:0}}
transition={{duration:.8,delay:.1}}
className="h-[260px] bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center text-center"
>

<h3 className="text-5xl font-light text-[#0E2038]">

<Counter value={parseInt(fleet.speed)} />

</h3>

<p className="uppercase tracking-[4px] text-xs text-gray-500 mt-3">
Cruise Speed
</p>

</motion.div>



{/* RANGE NUMBER */}

<motion.div
initial={{opacity:0,x:60}}
whileInView={{opacity:1,x:0}}
transition={{duration:.8,delay:.1}}
className="h-[260px] bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center text-center"
>

<h3 className="text-5xl font-light text-[#0E2038]">

<Counter value={parseInt(fleet.range)} />

</h3>

<p className="uppercase tracking-[4px] text-xs text-gray-500 mt-3">
Flying Range
</p>

</motion.div>



{/* RANGE GIF */}

<motion.div
initial={{opacity:0,x:60}}
whileInView={{opacity:1,x:0}}
transition={{duration:.8}}
className="h-[260px] bg-white border border-gray-200 rounded-lg flex items-center justify-center"
>

<img
src={rangeGif}
className="w-36 object-contain"
/>

</motion.div>


</div>

</div>

</section>
{/* ================= AIRCRAFT SPECS ================= */}

<section className="w-full bg-[#F6F7F9]">

<div className="flex flex-col lg:flex-row min-h-[70vh]">


{/* LEFT IMAGE */}

<motion.div
initial={{opacity:0,x:-60}}
whileInView={{opacity:1,x:0}}
transition={{duration:.8}}
viewport={{ once:false, amount:0.3 }}
className="lg:w-1/2 h-[320px] lg:h-auto"
>

<img
src={fleet.image}
className="w-full h-full object-cover"
/>

</motion.div>



{/* RIGHT TABLE */}

<motion.div
initial={{opacity:0,x:60}}
whileInView={{opacity:1,x:0}}
transition={{duration:.8}}
viewport={{ once:false, amount:0.3 }}
className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
>

<div className="w-full max-w-xl">

<p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
Aircraft Specifications
</p>

<h2 className="text-3xl md:text-4xl font-light text-[#0E2038] mb-6">
Technical Details
</h2>

<div className="w-16 h-[2px] bg-gray-300 mb-8"/>


<table className="w-full border border-gray-200 text-sm">

<tbody>

<tr className="border-b">
<td className="p-4 text-gray-500">Seats</td>
<td className="p-4 font-medium text-[#0E2038]">{fleet.seats}</td>
</tr>

<tr className="border-b bg-gray-50">
<td className="p-4 text-gray-500">YOM</td>
<td className="p-4 font-medium text-[#0E2038]">2002</td>
</tr>

<tr className="border-b">
<td className="p-4 text-gray-500">Base</td>
<td className="p-4 font-medium text-[#0E2038]">New Delhi</td>
</tr>

<tr className="border-b bg-gray-50">
<td className="p-4 text-gray-500">Pilots</td>
<td className="p-4 font-medium text-[#0E2038]">2</td>
</tr>

<tr className="border-b">
<td className="p-4 text-gray-500">Baggage</td>
<td className="p-4 font-medium text-[#0E2038]">{fleet.baggage}</td>
</tr>

<tr className="border-b bg-gray-50">
<td className="p-4 text-gray-500">Speed</td>
<td className="p-4 font-medium text-[#0E2038]">{fleet.speed}</td>
</tr>

<tr>
<td className="p-4 text-gray-500">Flight Attendant</td>
<td className="p-4 font-medium text-[#0E2038]">No</td>
</tr>

</tbody>

</table>

</div>

</motion.div>


</div>

</section>
{/* ================= AIRCRAFT BLUEPRINT ================= */}

<section className="w-full py-24 bg-white">

<div className="max-w-6xl mx-auto px-6 text-center">


<motion.p
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
transition={{duration:.6}}
className="uppercase tracking-[5px] text-xs text-gray-400 mb-3"
>
Aircraft Design
</motion.p>


<motion.h2
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:.6}}
className="text-3xl md:text-4xl font-light text-[#0E2038] mb-6"
>
Jet Blueprint Layout
</motion.h2>


<div className="h-[2px] bg-gray-300 w-16 mx-auto mb-12" />


{/* BLUEPRINT IMAGE */}

<motion.img
initial={{opacity:0,scale:.95}}
whileInView={{opacity:1,scale:1}}
transition={{duration:.8}}
src={blueprint}
className="w-full max-w-5xl mx-auto"
/>

</div>

</section>

{/* ================= INTERIORS ================= */}

<section className="w-full py-24 bg-[#F6F7F9]">

<div className="max-w-7xl mx-auto px-6">

<motion.p
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
className="uppercase tracking-[5px] text-xs text-gray-400 mb-3 text-center"
>
Aircraft Interior
</motion.p>

<motion.h2
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
className="text-3xl md:text-4xl font-light text-[#0E2038] mb-12 text-center"
>
Luxury Cabin Interiors
</motion.h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

{fleet.interior.map((img,index)=>(
<motion.div
key={index}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*.1}}
className="overflow-hidden rounded-lg"
>

<img
src={img}
className="w-full h-[260px] object-cover hover:scale-105 transition"
/>

</motion.div>
))}

</div>

</div>

</section>

{/* ================= SEATING ================= */}

<section className="w-full">

<div className="flex flex-col lg:flex-row min-h-[70vh]">


{/* CONTENT */}

<motion.div
initial={{opacity:0,x:-60}}
whileInView={{opacity:1,x:0}}
transition={{duration:.8}}
className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
>

<div className="max-w-xl">

<p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
Cabin Seating
</p>

<h2 className="text-3xl md:text-4xl font-light text-[#0E2038] mb-6">
Comfortable Seating Layout
</h2>

<div className="w-16 h-[2px] bg-gray-300 mb-6"/>

<p className="text-gray-600 leading-relaxed">
This aircraft features a spacious cabin configuration
with seating for {fleet.seats} passengers designed
for comfort and productivity during private travel.
</p>

</div>

</motion.div>


{/* IMAGE */}

<motion.div
initial={{opacity:0,x:60}}
whileInView={{opacity:1,x:0}}
transition={{duration:.8}}
className="lg:w-1/2 h-[320px] lg:h-auto"
>

<img
src={fleet.interior[0]}
className="w-full h-full object-cover"
/>

</motion.div>


</div>

</section>

{/* ================= BAGGAGE ================= */}

<section className="w-full bg-[#F6F7F9]">

<div className="flex flex-col lg:flex-row min-h-[70vh]">


{/* IMAGE */}

<motion.div
initial={{opacity:0,x:-60}}
whileInView={{opacity:1,x:0}}
transition={{duration:.8}}
className="lg:w-1/2 h-[320px] lg:h-auto"
>

<img
src={fleet.baggageImage}
className="w-full h-full object-cover"
/>

</motion.div>


{/* CONTENT */}

<motion.div
initial={{opacity:0,x:60}}
whileInView={{opacity:1,x:0}}
transition={{duration:.8}}
className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
>

<div className="max-w-xl">

<p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
Baggage Capacity
</p>

<h2 className="text-3xl md:text-4xl font-light text-[#0E2038] mb-6">
Spacious Luggage Storage
</h2>

<div className="w-16 h-[2px] bg-gray-300 mb-6"/>

<p className="text-gray-600 leading-relaxed">
The aircraft offers {fleet.baggage} baggage capacity,
ensuring passengers can travel comfortably with
their essential luggage and equipment.
</p>

</div>

</motion.div>


</div>

</section>

{/* ================= 360 JET VIEW ================= */}

<JetExperience />

{/* ================= FINAL SPECIFICATIONS ================= */}

<section className="w-full py-24 bg-[#F6F7F9]">

<div className="max-w-7xl mx-auto px-6">

{/* HEADING */}

<motion.p
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
className="uppercase tracking-[5px] text-xs text-gray-400 mb-3 text-center"
>
Aircraft Details
</motion.p>

<motion.h2
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
className="text-3xl md:text-4xl font-light text-[#0E2038] mb-12 text-center"
>
Other Specifications
</motion.h2>


<div className="grid lg:grid-cols-2 gap-8">


{/* LEFT TABLE */}

<motion.div
initial={{opacity:0,x:-60}}
whileInView={{opacity:1,x:0}}
transition={{duration:.8}}
className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
>

<table className="w-full text-sm">

<tbody>

<tr className="border-b">
<td className="p-4 font-medium text-[#0E2038]">Aircraft Type</td>
<td className="p-4 text-gray-700">{fleet.type}</td>
</tr>

<tr className="border-b bg-[#F9FAFB]">
<td className="p-4 font-medium text-[#0E2038]">Baggage Capacity</td>
<td className="p-4 text-gray-700">{fleet.baggage}</td>
</tr>

<tr className="border-b">
<td className="p-4 font-medium text-[#0E2038]">Cruise Speed</td>
<td className="p-4 text-gray-700">{fleet.speed}</td>
</tr>

<tr className="border-b bg-[#F9FAFB]">
<td className="p-4 font-medium text-[#0E2038]">Passengers</td>
<td className="p-4 text-gray-700">{fleet.seats}</td>
</tr>

<tr className="border-b">
<td className="p-4 font-medium text-[#0E2038]">Year of Manufacture</td>
<td className="p-4 text-gray-700">2002</td>
</tr>

<tr>
<td className="p-4 font-medium text-[#0E2038]">Home Base</td>
<td className="p-4 text-gray-700">New Delhi</td>
</tr>

</tbody>

</table>

</motion.div>



{/* RIGHT TABLE */}

<motion.div
initial={{opacity:0,x:60}}
whileInView={{opacity:1,x:0}}
transition={{duration:.8}}
className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
>

<table className="w-full text-sm">

<tbody>

<tr className="border-b">
<td className="p-4 font-medium text-[#0E2038]">Pilots</td>
<td className="p-4 text-gray-700">2</td>
</tr>

<tr className="border-b bg-[#F9FAFB]">
<td className="p-4 font-medium text-[#0E2038]">Cabin Crew</td>
<td className="p-4 text-gray-700">NA</td>
</tr>

<tr className="border-b">
<td className="p-4 font-medium text-[#0E2038]">Flying Range</td>
<td className="p-4 text-gray-700">1450 NM</td>
</tr>

<tr className="border-b bg-[#F9FAFB]">
<td className="p-4 font-medium text-[#0E2038]">Cabin Height</td>
<td className="p-4 text-gray-700">4.9 FT</td>
</tr>

<tr className="border-b">
<td className="p-4 font-medium text-[#0E2038]">Cabin Width</td>
<td className="p-4 text-gray-700">4.1 FT</td>
</tr>

<tr>
<td className="p-4 font-medium text-[#0E2038]">Cabin Length</td>
<td className="p-4 text-gray-700">13.7 FT</td>
</tr>

</tbody>

</table>

</motion.div>


</div>

</div>

</section>


</div>

);
}

export default FleetSet;