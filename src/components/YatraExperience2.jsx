import { motion } from "framer-motion";

import { useEffect, useState } from "react";

import kedar from "../assets/yatra/kedarnath.webp";
import badri from "../assets/yatra/badrinath.webp";
import ganga from "../assets/yatra/gangotri.webp";
import yamuna from "../assets/yatra/yamunotri.webp";
import Statistics from "../components/Statistics";
import heli from "../assets/heli-expe.jpg";
import heli2 from "../assets/helipad.jpg"
import yatraexp from "../assets/yatra/hero2.webp"

import g1 from "../assets/yatra/gallery1.webp";
import g2 from "../assets/yatra/gallery2.webp";
import g3 from "../assets/yatra/gallery3.webp";
import g4 from "../assets/yatra/gallery4.webp";

function Counter({ end }) {

const [count,setCount]=useState(0);

useEffect(()=>{

let start=0;
const duration=1500;
const increment=end/(duration/16);

const timer=setInterval(()=>{

start+=increment;

if(start>=end){
start=end;
clearInterval(timer);
}

setCount(Math.floor(start));

},16);

return()=>clearInterval(timer);

},[end]);

return <span>{count}</span>;

}

function YatraExperience() {

const dhams = [
{ name:"Kedarnath", img:kedar },
{ name:"Badrinath", img:badri },
{ name:"Gangotri", img:ganga },
{ name:"Yamunotri", img:yamuna }
];

const gallery=[g1,g2,g3,g4];

const leftAnim={
hidden:{opacity:0,x:-60},
show:{opacity:1,x:0,transition:{duration:.8}}
};

const rightAnim={
hidden:{opacity:0,x:60},
show:{opacity:1,x:0,transition:{duration:.8}}
};

return(

<div className="bg-white overflow-x-hidden">


{/* ================= CHAR DHAM ================= */}

<section className="w-full py-20 px-6">

<div className="max-w-7xl mx-auto">

<h2 className="text-3xl md:text-4xl text-[#0E2038] mb-10 text-center">
The Sacred Char Dham
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

{dhams.map((d,i)=>(
<motion.div
key={i}
variants={leftAnim}
initial="hidden"
whileInView="show"
className="cursor-pointer"
>

<img
src={d.img}
className="w-full h-60 object-cover"
/>

<h3 className="mt-3 text-lg text-[#0E2038]">
{d.name}
</h3>

</motion.div>
))}

</div>

</div>

</section>


{/* ================= ABOUT YATRA ================= */}

<section className="w-full bg-[#F6F7F9]">

<div className="flex flex-col lg:flex-row min-h-[70vh]">

<motion.div
variants={leftAnim}
initial="hidden"
whileInView="show"
className="lg:w-1/2 h-[350px] lg:h-auto"
>

<img src={kedar} className="w-full h-full object-cover"/>

</motion.div>


<motion.div
variants={rightAnim}
initial="hidden"
whileInView="show"
className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
>

<div className="max-w-xl">

<p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
Spiritual Journey
</p>

<h2 className="text-3xl md:text-4xl font-light text-[#0E2038] mb-5">
About Char Dham Yatra
</h2>

<div className="w-16 h-[2px] bg-gray-300 mb-6"/>

<p className="text-gray-600 leading-relaxed">
The Char Dham Yatra is one of the most sacred pilgrimages in India.
It includes four holy shrines in the Himalayas — Kedarnath,
Badrinath, Gangotri and Yamunotri.
</p>

</div>

</motion.div>

</div>

</section>


{/* ================= HELICOPTER EXPERIENCE ================= */}

<section className="w-full">

<div className="flex flex-col lg:flex-row min-h-[70vh]">

<motion.div
variants={leftAnim}
initial="hidden"
whileInView="show"
className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
>

<div className="max-w-xl">

<p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
Luxury Pilgrimage
</p>

<h2 className="text-3xl md:text-4xl font-light text-[#0E2038] mb-5">
Helicopter Char Dham Experience
</h2>

<div className="w-16 h-[2px] bg-gray-300 mb-6"/>

<p className="text-gray-600 leading-relaxed">
Our helicopter Char Dham journey allows travelers to complete
the sacred pilgrimage quickly and comfortably while enjoying
the breathtaking Himalayan landscape.
</p>

</div>

</motion.div>


<motion.div
variants={rightAnim}
initial="hidden"
whileInView="show"
className="lg:w-1/2 h-[350px] lg:h-auto"
>

<img src={heli} className="w-full h-full object-cover"/>

</motion.div>

</div>

</section>


{/* ================= GALLERY ================= */}

<section className="py-16 overflow-hidden">

<motion.div
className="flex gap-4"
animate={{x:["0%","-50%"]}}
transition={{duration:22,ease:"linear",repeat:Infinity}}
style={{width:"max-content"}}
>

{[...gallery,...gallery].map((img,i)=>(
<img
key={i}
src={img}
className="w-64 h-44 object-cover flex-shrink-0"
/>
))}

</motion.div>

</section>


{/* ================= PACKAGES ================= */}

<section className="w-full bg-[#F6F7F9]">

<div className="flex flex-col lg:flex-row min-h-[70vh]">

<motion.div
variants={leftAnim}
initial="hidden"
whileInView="show"
className="lg:w-1/2 h-[350px] lg:h-auto"
>

<img src={g1} className="w-full h-full object-cover"/>

</motion.div>


<motion.div
variants={rightAnim}
initial="hidden"
whileInView="show"
className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
>

<div className="max-w-xl w-full">

<p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
Packages
</p>

<h2 className="text-3xl md:text-4xl font-light text-[#0E2038] mb-6">
Char Dham Yatra Packages
</h2>


<div className="space-y-4">


<details className="border rounded-lg p-4 cursor-pointer bg-white">

<summary className="flex justify-between text-lg text-[#0E2038] list-none">

Same Day Charter

<span>+</span>

</summary>

<p className="mt-3 text-gray-600 text-sm">

Morning departure from Dehradun with helicopter visit
to Kedarnath and Badrinath including VIP darshan.

</p>

</details>



<details className="border rounded-lg p-4 cursor-pointer bg-white">

<summary className="flex justify-between text-lg text-[#0E2038] list-none">

2 Days / 1 Night

<span>+</span>

</summary>

<p className="mt-3 text-gray-600 text-sm">

Yamunotri and Gangotri journey with overnight
stay and comfortable helicopter travel.

</p>

</details>



<details className="border rounded-lg p-4 cursor-pointer bg-white">

<summary className="flex justify-between text-lg text-[#0E2038] list-none">

3 Days / 2 Nights

<span>+</span>

</summary>

<p className="mt-3 text-gray-600 text-sm">

Relaxed pilgrimage including Kedarnath
and Badrinath with premium accommodation.

</p>

</details>



<details className="border rounded-lg p-4 cursor-pointer bg-white">

<summary className="flex justify-between text-lg text-[#0E2038] list-none">

4 Days / 3 Nights Luxury

<span>+</span>

</summary>

<p className="mt-3 text-gray-600 text-sm">

Full Char Dham coverage with helicopter charter,
VIP darshan and luxury resort stay.

</p>

</details>


</div>

</div>

</motion.div>

</div>

</section>



{/* ================= WHY CHOOSE US ================= */}

{/* ================= WHY CHOOSE US ================= */}

<section className="w-full bg-white">

<div className="flex flex-col lg:flex-row min-h-[70vh]">


{/* LEFT CONTENT */}

<motion.div
initial={{opacity:0,x:-60}}
whileInView={{opacity:1,x:0}}
transition={{duration:.8}}
className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
>

<div className="max-w-xl">

<p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
Why Choose Us
</p>

<h2 className="text-3xl md:text-4xl font-light text-[#0E2038] mb-6">
A Trusted Char Dham Helicopter Experience
</h2>

<div className="w-16 h-[2px] bg-gray-300 mb-8"/>


<div className="space-y-6 text-gray-600">


<div>
<h3 className="text-lg text-[#0E2038] mb-1">
Luxury Helicopters
</h3>
<p className="text-sm">
Modern helicopters designed for safe and comfortable
Himalayan journeys with experienced pilots.
</p>
</div>


<div>
<h3 className="text-lg text-[#0E2038] mb-1">
VIP Temple Darshan
</h3>
<p className="text-sm">
Priority temple access ensuring smooth and peaceful
darshan at every sacred destination.
</p>
</div>


<div>
<h3 className="text-lg text-[#0E2038] mb-1">
Expert Travel Assistance
</h3>
<p className="text-sm">
Dedicated trip managers guiding pilgrims throughout
the entire Char Dham journey.
</p>
</div>


<div>
<h3 className="text-lg text-[#0E2038] mb-1">
All Inclusive Experience
</h3>
<p className="text-sm">
Accommodation, transfers, meals and temple
arrangements handled seamlessly.
</p>
</div>


</div>

</div>

</motion.div>



{/* RIGHT IMAGE */}

<motion.div
initial={{opacity:0,x:60}}
whileInView={{opacity:1,x:0}}
transition={{duration:.8}}
className="lg:w-1/2 h-[350px] lg:h-auto"
>

<img
src={heli2}
className="w-full h-full object-cover"
/>

</motion.div>


</div>

</section>

{/* ================= TRUST STRIP ================= */}

<Statistics />

<section className="w-full bg-[#F6F7F9]">
  <div className="flex flex-col lg:flex-row min-h-[70vh]">

    {/* LEFT IMAGE */}
    <motion.div
      variants={leftAnim}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className="lg:w-1/2 h-[350px] lg:h-auto"
    >
      <img
        src={yatraexp}
        alt="Char Dham Helicopter Yatra"
        className="w-full h-full object-cover"
      />
    </motion.div>


    {/* RIGHT FORM */}
    <motion.div
      variants={rightAnim}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
    >

      <div className="max-w-xl w-full">

        <p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
          Request Quote
        </p>

        <h2 className="text-3xl md:text-4xl font-light text-[#0E2038] mb-6">
          Plan Your Char Dham Journey
        </h2>

        <p className="text-gray-600 mb-8 text-sm leading-relaxed">
          Share your travel preferences and our pilgrimage specialists
          will assist you in planning the perfect Char Dham helicopter
          journey with the most suitable package options.
        </p>

        <form className="space-y-5">

          {/* Name + Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="premium-input"
              placeholder="Full Name"
            />
            <input
              className="premium-input"
              placeholder="Contact Number"
            />
          </div>

          {/* Email */}
          <input
            className="premium-input"
            placeholder="Email Address"
          />

          {/* Package Select */}
          <div className="relative">

            <select className="premium-input premium-select">

              <option value="">Select Package</option>
              <option>Same Day Charter</option>
              <option>2 Days / 1 Night</option>
              <option>3 Days / 2 Nights</option>
              <option>4 Days / 3 Nights Luxury</option>

            </select>

            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
              ▼
            </div>

          </div>

          {/* Message */}
          <textarea
            className="premium-input h-32"
            placeholder="Tell us about your travel plan"
          />

          {/* Button */}
          <button className="w-full bg-[#0E2038] text-white py-3.5 rounded-full font-medium tracking-wide shadow-md hover:bg-[#1A3354] transition-all duration-300">

            Request Quote

          </button>

        </form>

      </div>

    </motion.div>

  </div>


  <style>{`

  .premium-input {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid #e5e7eb;
    border-radius: 999px;
    font-size: 14px;
    background: #ffffff;
    color: #0E2038;
    outline: none;
    transition: all 0.25s ease;
  }

  textarea.premium-input {
    border-radius: 16px;
    resize: none;
  }

  .premium-input:focus {
    border-color: #0E2038;
    box-shadow: 0 4px 20px rgba(14, 32, 56, 0.08);
  }

  .premium-select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-right: 40px;
    cursor: pointer;
  }

  .premium-select option {
    color: #0E2038;
    background: #ffffff;
  }

  `}</style>

</section>




</div>

);

}

export default YatraExperience;