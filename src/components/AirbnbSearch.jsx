import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiPlus, FiMinus } from "react-icons/fi";

export default function AirbnbSearch() {

const [active,setActive] = useState(null)
const [expanded,setExpanded] = useState(false)

const [from,setFrom] = useState("")
const [to,setTo] = useState("")

const containerRef = useRef(null)

useEffect(()=>{
function handleClickOutside(e){
if(containerRef.current && !containerRef.current.contains(e.target)){
setActive(null)
setExpanded(false)
}
}
document.addEventListener("mousedown",handleClickOutside)
return ()=> document.removeEventListener("mousedown",handleClickOutside)
},[])

const [guests,setGuests] = useState({
adults:0,
children:0,
infants:0,
pets:0
})

const updateGuest=(type,val)=>{
setGuests(prev=>{
const newValue = prev[type] + val
return{
...prev,
[type]: newValue < 0 ? 0 : newValue
}
})
}

const locations=[
{title:"Nearby",desc:"Find what's around you"},
{title:"New Delhi, Delhi",desc:"For sights like India Gate"},
{title:"Jaipur, Rajasthan",desc:"For its stunning architecture"},
{title:"Dehradun, Uttarakhand",desc:"Hill destination"}
]

return (

<motion.div
ref={containerRef}
initial={{bottom:60}}
animate={{bottom: expanded ? (active ? 340 : 120) : 60}}
transition={{duration:.4}}
className="absolute left-1/2 -translate-x-1/2 z-50"
>

{/* 🔥 ICON */}

<AnimatePresence>
{!expanded && (
<motion.div
initial={{scale:0, opacity:0, y:20}}
animate={{scale:1, opacity:1, y:0}}
exit={{scale:0, opacity:0}}
onClick={()=>setExpanded(true)}
className="w-14 h-14 bg-[#0E2038] rounded-full flex items-center justify-center cursor-pointer shadow-xl"
>
<FiSearch size={20} className="text-white"/>
</motion.div>
)}
</AnimatePresence>


{/* 🔥 SEARCH BAR */}

<AnimatePresence>
{expanded && (

<motion.div
initial={{width:60, opacity:0, y:20}}
animate={{width:900, opacity:1, y:0}}
exit={{width:60, opacity:0}}
transition={{duration:.4, ease:"easeInOut"}}
className="relative"
>

<div className="bg-white rounded-full shadow-xl flex items-center p-1 overflow-hidden">

{/* WHERE */}

<div
onClick={()=>setActive("where")}
className={`flex-1 px-6 py-3 cursor-pointer rounded-full
${active==="where"?"bg-white shadow-md":"hover:bg-gray-100"}
`}
>
<p className="text-xs font-semibold text-black">Where</p>
<p className="text-sm text-gray-500">
{from && to ? `${from} → ${to}` : from || "Search destinations"}
</p>
</div>

<div className="h-8 w-[1px] bg-gray-200"></div>

{/* WHEN */}

<div
onClick={()=>setActive("when")}
className={`flex-1 px-6 py-3 cursor-pointer rounded-full
${active==="when"?"bg-white shadow-md":"hover:bg-gray-100"}
`}
>
<p className="text-xs font-semibold text-black">When</p>
<p className="text-sm text-gray-500">Add dates</p>
</div>

<div className="h-8 w-[1px] bg-gray-200"></div>

{/* WHO */}

<div
onClick={()=>setActive("who")}
className={`flex-1 px-6 py-3 cursor-pointer rounded-full
${active==="who"?"bg-white shadow-md":"hover:bg-gray-100"}
`}
>
<p className="text-xs font-semibold text-black">Who</p>
<p className="text-sm text-gray-500">
{Object.values(guests).reduce((a,b)=>a+b,0) || "Add guests"}
</p>
</div>

{/* SEARCH BUTTON */}

<motion.button
animate={{width:active?120:48}}
transition={{duration:.25}}
className="bg-[#0E2038] flex items-center justify-center gap-2 text-white h-11 rounded-full mr-2 overflow-hidden px-4"
>
<FiSearch size={18}/>
{active && <span>Search</span>}
</motion.button>

</div>


{/* 🔥 PANELS */}

<AnimatePresence>

{/* WHERE */}

{active==="where" && (
<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
exit={{opacity:0}}
className="absolute top-[85px] w-[520px] bg-white rounded-3xl shadow-2xl p-5"
>
<div className="grid grid-cols-2 gap-6">

<div>
<p className="text-sm font-semibold mb-3 text-black">From</p>
<div className="space-y-2">
{locations.map((loc,i)=>(
<div key={i}
onClick={()=>setFrom(loc.title)}
className="flex gap-3 items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
<div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">📍</div>
<div>
<p className="text-sm font-medium text-black">{loc.title}</p>
<p className="text-xs text-gray-500">{loc.desc}</p>
</div>
</div>
))}
</div>
</div>

<div>
<p className="text-sm font-semibold mb-3 text-black">To</p>
<div className="space-y-2">
{locations.map((loc,i)=>(
<div key={i}
onClick={()=>setTo(loc.title)}
className="flex gap-3 items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
<div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">📍</div>
<div>
<p className="text-sm font-medium text-black">{loc.title}</p>
<p className="text-xs text-gray-500">{loc.desc}</p>
</div>
</div>
))}
</div>
</div>

</div>
</motion.div>
)}

{/* WHEN */}

{active==="when" && (
<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
exit={{opacity:0}}
className="absolute top-[85px] w-full bg-white rounded-3xl shadow-2xl p-6"
>
<div className="grid grid-cols-2 gap-10">

<div>
<h3 className="text-sm font-semibold mb-3 text-black">March 2026</h3>
<div className="grid grid-cols-7 gap-1 text-sm">
{Array.from({length:31}).map((_,i)=>(
<div key={i} className="p-2 text-center rounded-full hover:bg-gray-200 cursor-pointer text-black">
{i+1}
</div>
))}
</div>
</div>

<div>
<h3 className="text-sm font-semibold mb-3 text-black">April 2026</h3>
<div className="grid grid-cols-7 gap-1 text-sm">
{Array.from({length:30}).map((_,i)=>(
<div key={i} className="p-2 text-center rounded-full hover:bg-gray-200 cursor-pointer text-black">
{i+1}
</div>
))}
</div>
</div>

</div>
</motion.div>
)}

{/* WHO */}

{active==="who" && (
<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
exit={{opacity:0}}
className="absolute top-[85px] right-0 w-[380px] bg-white rounded-3xl shadow-2xl p-5"
>

<div className="space-y-5">

{[
["adults","Adults","Ages 13+"],
["children","Children","Ages 2-12"],
["infants","Infants","Under 2"],
["pets","Pets","Bringing a service animal?"]
].map(([key,label,desc])=>(

<div key={key} className="flex justify-between items-center">

<div>
<p className="text-sm font-medium text-black">{label}</p>
<p className="text-xs text-gray-500">{desc}</p>
</div>

<div className="flex items-center gap-3">

<button onClick={()=>updateGuest(key,-1)}
className="w-8 h-8 border rounded-full flex items-center justify-center">
<FiMinus size={14}/>
</button>

<span className="text-sm font-medium text-black">
{guests[key]}
</span>

<button onClick={()=>updateGuest(key,1)}
className="w-8 h-8 border rounded-full flex items-center justify-center">
<FiPlus size={14}/>
</button>

</div>

</div>

))}

</div>

</motion.div>
)}

</AnimatePresence>

</motion.div>
)}
</AnimatePresence>

</motion.div>
)
}

