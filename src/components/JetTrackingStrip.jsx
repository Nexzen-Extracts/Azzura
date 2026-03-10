import { useState } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function JetTrackingStrip() {

const [open,setOpen]=useState(false);
const [jetNumber,setJetNumber]=useState("");
const [result,setResult]=useState(null);

const planeIcon = new L.Icon({
iconUrl:"https://cdn-icons-png.flaticon.com/512/7893/7893979.png",
iconSize:[40,40]
});

const otherPlane = new L.Icon({
iconUrl:"https://cdn-icons-png.flaticon.com/512/34/34627.png",
iconSize:[22,22]
});

const dummyJets={

AZ101:{
route:"Delhi → Dubai",
status:"In Flight",
current:"Over Arabian Sea",
departure:"Delhi",
arrival:"Dubai",
eta:"1h 25m",
distance:"950 km remaining",
progress:60,
coords:[24.5,54.2],
path:[[28.6,77.2],[24.5,54.2]]
},

AZ202:{
route:"Char Dham Yatra",
status:"Boarding",
current:"Dehradun",
departure:"Dehradun",
arrival:"Kedarnath",
eta:"Departure soon",
distance:"220 km",
progress:10,
coords:[30.7,76.8],
path:[[30.3,78.0],[30.7,76.8]]
},

AZ303:{
route:"Mumbai → London",
status:"Cruising",
current:"Over Turkey",
departure:"Mumbai",
arrival:"London",
eta:"4h 10m",
distance:"3200 km",
progress:75,
coords:[41.0,28.9],
path:[[19.0,72.8],[51.5,-0.1]]
}

};

const otherJets=[
{pos:[35.6,139.7]},
{pos:[22.3,114.1]},
{pos:[40.7,-74]},
{pos:[48.8,2.3]}
];

const checkJet=()=>{
const data=dummyJets[jetNumber.toUpperCase()];
if(data){
  setResult(data);
}else{
  setResult({error:true});
}
};

return(

<>

{/* TRACKING STRIP */}

<section className="w-full bg-gradient-to-r from-[#0E2038] to-[#162F52] py-3 px-6">

<div className="max-w-7xl mx-auto flex items-center justify-between">

<p className="text-sm text-gray-300 flex items-center gap-2">

<span className="relative flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
</span>

Live Charter Jet Tracking

</p>

<button
onClick={()=>setOpen(true)}
className="px-5 py-2 text-xs bg-white text-[#0E2038] rounded-full hover:bg-gray-200 transition"
>

Track Jet

</button>

</div>

</section>


{/* FULLSCREEN DASHBOARD */}

{open &&(

<div className="fixed inset-0 z-[9999] bg-[#0b1628]">

<button
onClick={()=>setOpen(false)}
className="absolute right-6 top-6 text-gray-400 text-xl z-[1000]"
>
✕
</button>


<div className="grid lg:grid-cols-2 h-full">


{/* LEFT PANEL (DATA) */}

<div className="p-10 flex flex-col justify-center">

<h2 className="text-gray-200 text-3xl mb-6">
Charter Jet Tracker
</h2>

<div className="flex gap-3 mb-8">

<input
placeholder="Enter Jet Number (AZ101)"
value={jetNumber}
onChange={(e)=>setJetNumber(e.target.value)}
className="px-4 py-3 bg-white text-[#0E2038] placeholder-gray-400 rounded w-full outline-none"
/>

<button
onClick={checkJet}
className="px-6 py-3 bg-cyan-500 rounded"
>

Track

</button>

</div>
{result?.error && (
  <p className="text-sm text-red-400 mt-3">
    Your booking is not confirmed or scheduled.
  </p>
)}

{result && !result.error &&(

<div className="space-y-5">

<div>

<p className="text-gray-400 text-sm">Jet Number</p>
<p className="text-gray-200 text-xl">{jetNumber.toUpperCase()}</p>

</div>

<div>

<p className="text-gray-400 text-sm">Route</p>
<p className="text-gray-200">{result.route}</p>

</div>

<div>

<p className="text-gray-400 text-sm">Current Location</p>
<p className="text-gray-200">{result.current}</p>

</div>

<div>

<p className="text-gray-400 text-sm">Status</p>
<p className="text-gray-200">{result.status}</p>

</div>


{/* PROGRESS */}

<div>

<p className="text-gray-400 text-sm mb-2">Flight Progress</p>

<div className="w-full h-2 bg-gray-700 rounded">

<div
className="h-2 bg-cyan-400 rounded"
style={{width:`${result.progress}%`}}
></div>

</div>

</div>


<div className="grid grid-cols-2 gap-6 pt-4">

<div>

<p className="text-gray-400 text-sm">Departure</p>
<p className="text-gray-200">{result.departure}</p>

</div>

<div>

<p className="text-gray-400 text-sm">Arrival</p>
<p className="text-gray-200">{result.arrival}</p>

</div>

<div>

<p className="text-gray-400 text-sm">ETA</p>
<p className="text-gray-200">{result.eta}</p>

</div>

<div>

<p className="text-gray-400 text-sm">Distance</p>
<p className="text-gray-200">{result.distance}</p>

</div>

</div>

</div>

)}

</div>


{/* RIGHT PANEL (MAP) */}

<div className="h-full">

<MapContainer
center={[25,55]}
zoom={3}
style={{height:"100%",width:"100%"}}
>

<TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"/>

{otherJets.map((jet,i)=>(
<Marker key={i} position={jet.pos} icon={otherPlane}/>
))}

{result && !result.error &&(

<>
<Marker position={result.coords} icon={planeIcon}/>

<Polyline
positions={result.path}
pathOptions={{color:"#00c3ff",weight:3,dashArray:"6"}}
/>

</>

)}

</MapContainer>

</div>

</div>

</div>

)}

</>

);

}

export default JetTrackingStrip;