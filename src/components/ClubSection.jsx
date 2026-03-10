import { motion } from "framer-motion";
import clubImg from "../assets/custom1.jpg";
import clubImg2 from "../assets/custom2.jpg";

function ClubSection() {

const leftAnim = {
hidden:{opacity:0,x:-60},
show:{
opacity:1,
x:0,
transition:{duration:.8,ease:"easeOut"}
}
};

const rightAnim = {
hidden:{opacity:0,x:60},
show:{
opacity:1,
x:0,
transition:{duration:.8,ease:"easeOut"}
}
};

return (

<div className="w-full font-sans overflow-hidden">

{/* ================= SECTION 1 (BLACK) ================= */}

<section className="bg-black text-white">

<div className="flex flex-col lg:flex-row min-h-[70vh]">

{/* LEFT CONTENT */}

<motion.div
variants={leftAnim}
initial="hidden"
whileInView="show"
viewport={{once:false,amount:.3}}
className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-14"
>

<div className="max-w-xl">

<p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
Private Members Club
</p>

<h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
Where Aviation Meets
<br/>
Elite Lifestyle
</h2>

<div className="w-16 h-[2px] bg-gray-500 mb-6" />

<p className="text-gray-300 leading-relaxed mb-6">
Join an exclusive circle of global leaders, entrepreneurs and elite travelers.
AZURA Membership extends beyond flights into curated luxury experiences,
private events and premium lifestyle privileges.
</p>

<ul className="space-y-2 text-gray-300 text-sm">
<li>• VIP airport & private lounge access</li>
<li>• Exclusive members-only networking events</li>
<li>• Luxury lifestyle & hospitality partnerships</li>
<li>• 24/7 concierge & priority services</li>
</ul>

</div>

</motion.div>


{/* RIGHT IMAGE */}

<motion.div
variants={rightAnim}
initial="hidden"
whileInView="show"
viewport={{once:false,amount:.3}}
className="lg:w-1/2 h-[340px] lg:h-auto"
>

<img
src={clubImg}
alt="Private Members Club"
className="w-full h-full object-cover"
/>

</motion.div>

</div>

</section>



{/* ================= SECTION 2 (WHITE) ================= */}

<section className="bg-white text-[#0E2038]">

<div className="flex flex-col lg:flex-row min-h-[70vh]">

{/* LEFT IMAGE */}

<motion.div
variants={leftAnim}
initial="hidden"
whileInView="show"
viewport={{once:false,amount:.3}}
className="lg:w-1/2 h-[340px] lg:h-auto"
>

<img
src={clubImg2}
alt="Members Experience"
className="w-full h-full object-cover"
/>

</motion.div>


{/* RIGHT CONTENT */}

<motion.div
variants={rightAnim}
initial="hidden"
whileInView="show"
viewport={{once:false,amount:.3}}
className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-14"
>

<div className="max-w-xl">

<p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
Invitation Only
</p>

<h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
Private Aviation
<br/>
Membership Access
</h2>

<div className="w-16 h-[2px] bg-gray-300 mb-6" />

<p className="text-gray-600 leading-relaxed mb-8">
Membership is limited to ensure exclusivity.
Request your invitation to unlock private aviation privileges,
premium travel experiences and elite lifestyle benefits.
</p>

<button className="club-btn">
Request Invitation
</button>

</div>

</motion.div>

</div>

</section>



<style>{`

.club-btn{
padding:14px 32px;
border:1px solid #0E2038;
background:transparent;
color:#0E2038;
font-size:14px;
letter-spacing:.5px;
transition:all .3s ease;
}

.club-btn:hover{
background:#0E2038;
color:#ffffff;
}

`}</style>

</div>

);

}

export default ClubSection;