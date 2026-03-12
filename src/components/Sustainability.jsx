import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Statistics from "../components/Statistics";

/* COUNTER */

function Counter({ value }) {

const [count,setCount] = useState(0);
const ref = useRef(null);

useEffect(()=>{

const observer = new IntersectionObserver(
(entries)=>{
if(entries[0].isIntersecting){

let start = 0;
const end = parseInt(value);
const duration = 2000;
const increment = end / (duration/16);

const timer = setInterval(()=>{

start += increment;

if(start >= end){
start = end;
clearInterval(timer);
}

setCount(Math.floor(start));

},16);

}
},
{threshold:0.5}
);

observer.observe(ref.current);

return ()=>observer.disconnect();

},[value]);

return <span ref={ref}>{count}</span>

}

export default function Sustainability(){

const leftAnim = {
hidden:{opacity:0,x:-60},
show:{opacity:1,x:0,transition:{duration:0.8,ease:"easeOut"}}
};

const rightAnim = {
hidden:{opacity:0,x:60},
show:{opacity:1,x:0,transition:{duration:0.8,ease:"easeOut"}}
};

return(

<div className="bg-white text-slate-900 overflow-x-hidden">


{/* HERO */}

<section className="relative w-full h-screen overflow-hidden">

{/* Background Image */}

<motion.img
src="https://www.nextor.org/wp-content/uploads/2024/07/image-2024-07-24T232953.999.jpg"
alt="Sustainability"
className="absolute inset-0 w-full h-full object-cover"
initial={{ scale: 1.08 }}
animate={{ scale: 1 }}
transition={{ duration: 8, ease: "easeOut" }}
/>

{/* Overlay */}

<div className="absolute inset-0 bg-black/45" />

{/* Content Wrapper */}

<div className="relative z-10 h-full flex justify-end items-end px-6 md:px-16 pb-16 md:pb-24">

<motion.div
initial={{ opacity: 0, x: 80 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: false, amount: 0.4 }}
transition={{ duration: 0.9, ease: "easeOut" }}
className="max-w-[520px] text-right text-white"
>

<p className="uppercase tracking-[6px] text-xs text-white/70 mb-5">
Sustainability
</p>

<h1 className="font-light text-[38px] sm:text-[48px] md:text-[56px] leading-[1.05] mb-6">
Sustainability
<br/>
In The Sky
</h1>

<p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md ml-auto">
Azura integrates sustainable aviation fuel, intelligent flight planning and
advanced aerospace technologies to reduce environmental impact while delivering
luxury private aviation experiences.
</p>

</motion.div>

</div>

</section>



{/* SECTION 1 */}

<section className="w-full">

<div className="flex flex-col lg:flex-row min-h-[70vh]">

<motion.div
variants={leftAnim}
initial="hidden"
whileInView="show"
viewport={{once:false}}
className="lg:w-1/2 h-[320px] lg:h-auto"
>

<img
src="https://purebluesustainability.com/wp-content/uploads/2022/02/Environmental-Sustainability-Examples-Tips-to-Implement-Them.jpg"
className="w-full h-full object-cover"
/>

</motion.div>


<motion.div
variants={rightAnim}
initial="hidden"
whileInView="show"
viewport={{once:false}}
className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
>

<div className="max-w-xl">

<p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
Sustainability
</p>

<h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0E2038] mb-5">
Our Environmental Responsibility
</h2>

<div className="w-16 h-[2px] bg-gray-300 mb-6"/>

<p className="text-gray-600 mb-4 leading-relaxed">
Aviation enables global connectivity and economic growth while requiring responsible environmental practices.
</p>

<p className="text-gray-600 mb-4 leading-relaxed">
Azura actively reduces aviation emissions through sustainable fuel technologies, optimized flight planning and operational innovation.
</p>

<p className="text-gray-600 leading-relaxed">
Through responsible aviation practices we ensure that luxury private travel evolves while protecting the natural environment for future generations.
</p>

</div>

</motion.div>

</div>

</section>



{/* SECTION 2 */}

<section className="w-full bg-[#F6F7F9]">

<div className="flex flex-col lg:flex-row min-h-[70vh]">

<motion.div
variants={leftAnim}
initial="hidden"
whileInView="show"
viewport={{once:false}}
className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
>

<div className="max-w-xl">

<p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
Sustainable Fuel
</p>

<h2 className="text-3xl md:text-4xl font-light text-[#0E2038] mb-5">
Sustainable Aviation Fuel
</h2>

<div className="w-16 h-[2px] bg-gray-300 mb-6"/>

<p className="text-gray-600 mb-4 leading-relaxed">
Sustainable Aviation Fuel (SAF) is a key solution for reducing aviation carbon emissions.
</p>

<p className="text-gray-600 mb-4 leading-relaxed">
These fuels are produced using renewable resources and can significantly lower lifecycle emissions compared to traditional jet fuel.
</p>

<p className="text-gray-600 leading-relaxed">
Azura collaborates with global aviation fuel partners to expand SAF adoption across major aviation hubs.
</p>

</div>

</motion.div>


<motion.div
variants={rightAnim}
initial="hidden"
whileInView="show"
viewport={{once:false}}
className="lg:w-1/2 h-[320px] lg:h-auto"
>

<img
src="https://www.energy.gov/sites/default/files/2024-11/airplane%20with%20biofuel%20trailer_0.jpg"
className="w-full h-full object-cover"
/>

</motion.div>

</div>

</section>



{/* SECTION 3 */}

<section className="w-full">

<div className="flex flex-col lg:flex-row min-h-[70vh]">

<motion.div
variants={leftAnim}
initial="hidden"
whileInView="show"
viewport={{once:false}}
className="lg:w-1/2 h-[320px] lg:h-auto"
>

<img
src="https://www.oag.com/hubfs/BLOGS-2023/flight-planning.jpg"
className="w-full h-full object-cover"
/>

</motion.div>


<motion.div
variants={rightAnim}
initial="hidden"
whileInView="show"
viewport={{once:false}}
className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
>

<div className="max-w-xl">

<p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
Flight Technology
</p>

<h2 className="text-3xl md:text-4xl font-light text-[#0E2038] mb-5">
Intelligent Flight Planning
</h2>

<div className="w-16 h-[2px] bg-gray-300 mb-6"/>

<p className="text-gray-600 mb-4 leading-relaxed">
Azura uses advanced aviation analytics and predictive software to optimize global flight routes.
</p>

<p className="text-gray-600 mb-4 leading-relaxed">
These systems analyze weather patterns, aircraft performance and global airspace conditions to determine the most efficient flight paths.
</p>

<p className="text-gray-600 leading-relaxed">
Through intelligent route optimization Azura reduces fuel consumption while delivering seamless luxury aviation experiences.
</p>

</div>

</motion.div>

</div>

</section>



{/* COUNTER SECTION */}

<Statistics />



{/* SECTION 4 */}

<section className="w-full bg-[#F6F7F9]">

<div className="flex flex-col lg:flex-row min-h-[70vh]">

<motion.div
variants={leftAnim}
initial="hidden"
whileInView="show"
viewport={{once:false}}
className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
>

<div className="max-w-xl">

<p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
Future Aviation
</p>

<h2 className="text-3xl md:text-4xl font-light text-[#0E2038] mb-5">
The Future of Sustainable Aviation
</h2>

<div className="w-16 h-[2px] bg-gray-300 mb-6"/>

<p className="text-gray-600 mb-4 leading-relaxed">
Electric propulsion systems, hybrid aircraft technologies and hydrogen energy solutions are transforming aviation.
</p>

<p className="text-gray-600 mb-4 leading-relaxed">
Azura invests in next generation aerospace innovations designed to reduce aviation emissions and improve efficiency.
</p>

<p className="text-gray-600 leading-relaxed">
Through research partnerships Azura continues building a cleaner future for global air travel.
</p>

</div>

</motion.div>


<motion.div
variants={rightAnim}
initial="hidden"
whileInView="show"
viewport={{once:false}}
className="lg:w-1/2 h-[320px] lg:h-auto"
>

<img
src="https://geographical.co.uk/wp-content/uploads/zero-emissions-plane.jpg"
className="w-full h-full object-cover"
/>

</motion.div>

</div>

</section>



{/* CTA */}

{/* <section className="py-32 bg-slate-900 text-white text-center px-6">

<h2 className="text-4xl md:text-5xl font-light mb-6">
Fly Smarter. Fly Sustainable.
</h2>

<p className="max-w-2xl mx-auto text-gray-300 mb-8">
Experience premium private aviation with Azura where luxury innovation and environmental responsibility combine to create the future of sustainable air travel.
</p>

<button className="px-10 py-4 bg-[#0E2038] rounded-full hover:bg-[#1A3354] transition">
Book a Sustainable Flight
</button>

</section> */}


</div>

)

}