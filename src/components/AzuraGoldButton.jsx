import React, { useEffect, useState } from "react";
import styled from "styled-components";
 
const AzuraGoldButton = ({ scrolled }) => {
 
const text = "AZURA GOLD";
const [displayText,setDisplayText] = useState("");
const [index,setIndex] = useState(0);
 
useEffect(()=>{
 
const timer=setTimeout(()=>{
 
setDisplayText(text.slice(0,index+1));
 
if(index<text.length){
setIndex(index+1);
}else{
setTimeout(()=>{
setDisplayText("");
setIndex(0);
},2000);
}
 
},120);
 
return ()=>clearTimeout(timer);
 
},[index]);
 
return(
 
<Wrapper scrolled={scrolled}>
 
<div className="glowing-box">
 
<div className="glowing-box-borders-masker">
<div className="glowing-box-borders"/>
</div>
 
<button className="glowing-box-button">
 
<span className="glowing-span">
{displayText}
</span>
 
</button>
 
</div>
 
</Wrapper>
 
);
 
};
 
const Wrapper = styled.div`
 
.glowing-box{
position:relative;
display:inline-block;
border-radius:999px;
overflow:hidden;
}
 
/* MOVING BORDER */
 
.glowing-box-borders{
 
position:absolute;
inset:0;
 
border-radius:999px;
 
animation:borderTurn 2.5s linear infinite;
 
background:conic-gradient(
from 0deg,
transparent 0deg,
transparent 340deg,
white 350deg,
transparent 360deg
);
 
}
 
/* SHOW ONLY BORDER */
 
.glowing-box-borders-masker{
 
position:absolute;
inset:0;
 
border-radius:999px;
 
padding:1.5px;
 
-webkit-mask:
linear-gradient(#fff 0 0) content-box,
linear-gradient(#fff 0 0);
 
-webkit-mask-composite:xor;
mask-composite:exclude;
 
pointer-events:none;
 
}
 
/* BUTTON */
 
.glowing-box-button{
 
width:150px;
height:36px;
 
display:flex;
align-items:center;
justify-content:center;
 
border-radius:999px;
 
font-size:13px;
 
white-space:nowrap;
 
position:relative;
z-index:2;
 
cursor:pointer;
 
transition:all .3s ease;
 
${({scrolled}) => scrolled ? `
background:#0E2038;
border:1px solid #0E2038;
color:white;
` : `
background:rgba(255,255,255,.06);
border:1px solid rgba(255,255,255,.6);
color:white;
backdrop-filter:blur(8px);
`}
 
}
 
/* TEXT */
 
.glowing-span{
 
display:block;
width:110px;
text-align:center;
 
background:linear-gradient(
180deg,
rgba(255,255,255,.7),
#ffffff
);
 
-webkit-background-clip:text;
background-clip:text;
 
color:transparent;
-webkit-text-fill-color:transparent;
 
}
 
/* BORDER ROTATION */
 
@keyframes borderTurn{
 
0%{
transform:rotate(0deg)
}
 
100%{
transform:rotate(360deg)
}
 
}
 
`;
 
export default AzuraGoldButton;