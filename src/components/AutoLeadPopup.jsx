import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  format,
  addMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isAfter,
  isBefore,
} from "date-fns";

export default function AzzuraSearchWithFloatingIcon() {

const [open,setOpen] = useState(false)

return(
<>

{/* FLOATING SEARCH ICON */}

<motion.button
onClick={()=>setOpen(!open)}
whileHover={{scale:1.08}}
whileTap={{scale:0.95}}
style={{
position:"fixed",
bottom:"40px",
left:"50%",
transform:"translateX(-50%)",
width:"64px",
height:"64px",
borderRadius:"50%",
background:"linear-gradient(135deg,#E7C873,#C8A951)",
border:"none",
cursor:"pointer",
zIndex:9999,
display:"flex",
alignItems:"center",
justifyContent:"center",
boxShadow:"0 10px 35px rgba(0,0,0,.35)"
}}
>

{/* PREMIUM SVG ICON */}

<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
<circle cx="11" cy="11" r="7" stroke="#081A2F" strokeWidth="2"/>
<line x1="20" y1="20" x2="16.5" y2="16.5" stroke="#081A2F" strokeWidth="2"/>
</svg>

</motion.button>



{/* SEARCH PANEL */}

<AnimatePresence>

{open && (

<motion.div
initial={{opacity:0,y:40,scale:.9}}
animate={{opacity:1,y:0,scale:1}}
exit={{opacity:0,y:40,scale:.9}}
transition={{type:"spring",stiffness:140,damping:20}}
style={{
position:"fixed",
bottom:"110px",
left:"50%",
transform:"translateX(-50%)",
width:"95%",
maxWidth:"1150px",
zIndex:9998
}}
>

<FlightSearch/>

</motion.div>

)}

</AnimatePresence>

</>
)

}




function FlightSearch(){

const containerRef = useRef(null)

const [tripType,setTripType] = useState("oneway")
const [activeField,setActiveField] = useState(null)

const [from,setFrom] = useState(null)
const [to,setTo] = useState(null)
const [airportQuery,setAirportQuery] = useState("")

const [departure,setDeparture] = useState(null)
const [returnDate,setReturnDate] = useState(null)

const [guests,setGuests] = useState(1)

const [month,setMonth] = useState(new Date())



/* AIRPORT DATA */

const airports=[
{code:"DEL",city:"New Delhi",name:"Indira Gandhi Intl"},
{code:"BOM",city:"Mumbai",name:"Chhatrapati Shivaji Intl"},
{code:"DXB",city:"Dubai",name:"Dubai International"},
{code:"LHR",city:"London",name:"Heathrow Airport"},
{code:"JFK",city:"New York",name:"John F Kennedy Intl"}
]

const filteredAirports=airports.filter(a=>
a.city.toLowerCase().includes(airportQuery.toLowerCase()) ||
a.code.toLowerCase().includes(airportQuery.toLowerCase())
)



/* OUTSIDE CLICK */

useEffect(()=>{

const handleOutside=(e)=>{
if(containerRef.current && !containerRef.current.contains(e.target)){
setActiveField(null)
}
}

document.addEventListener("mousedown",handleOutside)

return()=>document.removeEventListener("mousedown",handleOutside)

},[])



/* CALENDAR */

const renderCalendar=(offset)=>{

const currentMonth=addMonths(month,offset)
const start=startOfMonth(currentMonth)
const end=endOfMonth(currentMonth)

const days=eachDayOfInterval({start,end})

return(

<div className="flex-1">

<h3 className="text-white text-center mb-4">
{format(currentMonth,"MMMM yyyy")}
</h3>

<div className="grid grid-cols-7 gap-2">

{days.map((day,i)=>{

const selected=
(departure && isSameDay(day,departure)) ||
(returnDate && isSameDay(day,returnDate))

const inRange=
departure &&
returnDate &&
isAfter(day,departure) &&
isBefore(day,returnDate)

return(

<button
key={i}
onClick={()=>{

if(!departure || (departure && returnDate)){
setDeparture(day)
setReturnDate(null)
}else{
setReturnDate(day)
}

}}
className={`p-2 rounded-full text-sm transition
${selected?"bg-[#C8A951] text-black":""}
${inRange?"bg-white/20":""}
hover:bg-white/20 text-white`}
>

{format(day,"d")}

</button>

)

})}

</div>

</div>

)

}



/* SEARCH */

const handleSearch=()=>{

const data={
tripType,
from,
to,
departure,
returnDate,
guests
}

console.log("FINAL SEARCH:",data)

}



/* UI */

return(

<div className="bg-[#081A2F] py-10 px-4 flex justify-center rounded-2xl">

<div className="w-full max-w-6xl" ref={containerRef}>


{/* TRIP TYPE */}

<div className="flex gap-4 mb-6">

{["oneway","round"].map(type=>(

<button
key={type}
onClick={()=>setTripType(type)}
className={`px-6 py-2 rounded-full transition
${tripType===type
?"bg-[#C8A951] text-black"
:"border border-white/20 text-white"}
`}
>

{type==="oneway"?"One Way":"Round Trip"}

</button>

))}

</div>



{/* MAIN BAR */}

<div className="bg-[#0C2036] rounded-full p-2 flex items-center">

<div
onClick={()=>setActiveField("from")}
className={`flex-1 px-6 py-4 rounded-full cursor-pointer
${activeField==="from"?"bg-[#132A45]":""}`}
>

<p className="text-xs text-white/50">From</p>
<p className="text-white">
{from?`${from.city} (${from.code})`:"Select Airport"}
</p>

</div>



<div
onClick={()=>setActiveField("to")}
className={`flex-1 px-6 py-4 rounded-full cursor-pointer
${activeField==="to"?"bg-[#132A45]":""}`}
>

<p className="text-xs text-white/50">To</p>
<p className="text-white">
{to?`${to.city} (${to.code})`:"Select Airport"}
</p>

</div>



<div
onClick={()=>setActiveField("date")}
className={`flex-1 px-6 py-4 rounded-full cursor-pointer
${activeField==="date"?"bg-[#132A45]":""}`}
>

<p className="text-xs text-white/50">Dates</p>
<p className="text-white">
{departure?format(departure,"dd MMM"):"Select Dates"}
</p>

</div>



<div
onClick={()=>setActiveField("guest")}
className={`flex-1 px-6 py-4 rounded-full cursor-pointer
${activeField==="guest"?"bg-[#132A45]":""}`}
>

<p className="text-xs text-white/50">Guests</p>
<p className="text-white">{guests} Guest</p>

</div>

</div>



{/* DROPDOWNS */}

<AnimatePresence>

{(activeField==="from" || activeField==="to") && (

<motion.div
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
exit={{opacity:0}}
className="bg-[#0C2036] mt-4 p-6 rounded-2xl shadow-xl"
>

<input
autoFocus
value={airportQuery}
onChange={(e)=>setAirportQuery(e.target.value)}
placeholder="Search airport..."
className="w-full p-3 rounded-lg bg-[#132A45] text-white mb-4 outline-none"
/>

{filteredAirports.map(airport=>(

<div
key={airport.code}
onClick={()=>{

activeField==="from"
?setFrom(airport)
:setTo(airport)

setActiveField(null)

}}
className="flex items-center gap-3 p-3 hover:bg-[#132A45] rounded-lg cursor-pointer text-white"
>

✈ {airport.city} ({airport.code})

</div>

))}

</motion.div>

)}

</AnimatePresence>



<button
onClick={handleSearch}
className="mt-6 w-full py-4 bg-[#C8A951] hover:bg-[#E7C873] transition
text-black rounded-full font-semibold"
>

Search Flights

</button>

</div>

</div>

)

}