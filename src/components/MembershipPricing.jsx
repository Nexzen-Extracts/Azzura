import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

function MembershipPricing() {

const [billing,setBilling] = useState("monthly");

const plans = {

monthly:[
{
name:"Silver",
price:199,
features:{
"Priority Booking":true,
"Global Access":true,
"Dedicated Manager":false,
"VIP Lounge":false,
"Exclusive Events":false
}
},
{
name:"Gold",
price:399,
popular:true,
features:{
"Priority Booking":true,
"Global Access":true,
"Dedicated Manager":true,
"VIP Lounge":true,
"Exclusive Events":false
}
},
{
name:"Platinum",
price:799,
features:{
"Priority Booking":true,
"Global Access":true,
"Dedicated Manager":true,
"VIP Lounge":true,
"Exclusive Events":true
}
}
],

yearly:[
{
name:"Silver",
price:199*12*0.9,
save:"Save 10%",
features:{
"Priority Booking":true,
"Global Access":true,
"Dedicated Manager":false,
"VIP Lounge":false,
"Exclusive Events":false
}
},
{
name:"Gold",
price:399*12*0.85,
save:"Save 15%",
popular:true,
features:{
"Priority Booking":true,
"Global Access":true,
"Dedicated Manager":true,
"VIP Lounge":true,
"Exclusive Events":false
}
},
{
name:"Platinum",
price:799*12*0.8,
save:"Save 20%",
features:{
"Priority Booking":true,
"Global Access":true,
"Dedicated Manager":true,
"VIP Lounge":true,
"Exclusive Events":true
}
}
]

};

const featureList=[
"Priority Booking",
"Global Access",
"Dedicated Manager",
"VIP Lounge",
"Exclusive Events"
];

return(

<section className="bg-white py-20 px-6 font-sans">

<div className="max-w-7xl mx-auto">

{/* Heading */}

<div className="text-center mb-16">

<p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
Membership Plans
</p>

<h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0E2038]">
Choose Your Membership
</h2>

<div className="w-16 h-[2px] bg-gray-300 mx-auto mt-6"/>

</div>


{/* Toggle */}

<div className="flex justify-center mb-14">

<div className="flex border border-gray-300 rounded-full p-1">

<button
onClick={()=>setBilling("monthly")}
className={`px-6 py-2 rounded-full text-sm transition ${
billing==="monthly"
?"bg-[#0E2038] text-white"
:"text-gray-500"
}`}
>
Monthly
</button>

<button
onClick={()=>setBilling("yearly")}
className={`px-6 py-2 rounded-full text-sm transition ${
billing==="yearly"
?"bg-[#0E2038] text-white"
:"text-gray-500"
}`}
>
Yearly
</button>

</div>

</div>



{/* Pricing Cards */}

<AnimatePresence mode="wait">

<motion.div
key={billing}
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-40}}
transition={{duration:.4}}
className="grid md:grid-cols-3 gap-8"
>

{plans[billing].map((plan,index)=>(

<div
key={index}
className={`flex flex-col border rounded-2xl p-8 bg-white shadow-sm
${plan.popular?"border-[#0E2038]":"border-gray-200"}
`}
>

<h3 className="text-xl font-medium text-[#0E2038] mb-2">
{plan.name}
</h3>


<div className="mb-6">

<span className="text-4xl font-light text-[#0E2038]">
${Math.round(plan.price)}
</span>

<span className="text-gray-400 text-sm ml-2">
/{billing==="monthly"?"month":"year"}
</span>

{plan.save && (
<p className="text-xs text-green-600 mt-1">
{plan.save}
</p>
)}

</div>



{/* Features */}

<ul className="space-y-3 mb-8 flex-grow">

{featureList.map((feature,i)=>(

<li key={i} className="flex justify-between text-sm">

<span className="text-gray-600">
{feature}
</span>

{plan.features[feature]?

<Check size={18} className="text-[#0E2038]"/>:

<X size={18} className="text-gray-300"/>

}

</li>

))}

</ul>



{/* Button */}

<button className="pricing-btn mt-auto">
Get Offer
</button>

</div>

))}

</motion.div>

</AnimatePresence>

</div>



<style>{`

.pricing-btn{
width:100%;
padding:13px 24px;
border:1px solid #0E2038;
background:transparent;
color:#0E2038;
font-size:14px;
letter-spacing:.5px;
transition:all .3s ease;
}

.pricing-btn:hover{
background:#0E2038;
color:#ffffff;
}

`}</style>

</section>

);

}

export default MembershipPricing;