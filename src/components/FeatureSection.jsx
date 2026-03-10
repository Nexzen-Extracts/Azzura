import { motion } from "framer-motion";

function FeatureSection({
  image,
  subtitle,
  title,
  description,

  buttonPrimaryText,
  buttonPrimaryLink,

  buttonSecondaryText,
  buttonSecondaryLink,

  reverse = false
}) {

const leftAnim = {
hidden: { opacity: 0, x: -60 },
show: {
opacity: 1,
x: 0,
transition: { duration: .8, ease: "easeOut" }
}
};

const rightAnim = {
hidden: { opacity: 0, x: 60 },
show: {
opacity: 1,
x: 0,
transition: { duration: .8, ease: "easeOut" }
}
};

return (

<section className="bg-[#0E2038] py-16 px-6 overflow-hidden">

<div
className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center ${
reverse ? "lg:flex-row-reverse" : ""
}`}
>

{/* IMAGE */}

<motion.div
variants={reverse ? rightAnim : leftAnim}
initial="hidden"
whileInView="show"
viewport={{ once:false, amount:0.3 }}
className="w-full"
>

<img
src={image}
alt={title}
loading="lazy"
className="w-full rounded-xl object-cover shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
/>

</motion.div>


{/* CONTENT */}

<motion.div
variants={reverse ? leftAnim : rightAnim}
initial="hidden"
whileInView="show"
viewport={{ once:false, amount:0.3 }}
>

<p className="uppercase tracking-[4px] text-xs text-gray-300 mb-3">
{subtitle}
</p>

<h2 className="text-3xl md:text-4xl font-light text-white mb-5 leading-tight">
{title}
</h2>

<div className="w-16 h-[2px] bg-gray-400 mb-6"/>

<p className="text-gray-300 leading-relaxed text-sm md:text-base mb-8 max-w-xl">
{description}
</p>


{/* BUTTONS */}

<div className="flex flex-wrap gap-4">

{buttonPrimaryText && (
<a
href={buttonPrimaryLink}
className="px-7 py-3 rounded-full bg-white text-[#0E2038] text-sm hover:bg-gray-200 transition"
>
{buttonPrimaryText}
</a>
)}

{buttonSecondaryText && (
<a
href={buttonSecondaryLink}
className="px-7 py-3 rounded-full border border-white text-white text-sm hover:bg-white hover:text-[#0E2038] transition"
>
{buttonSecondaryText}
</a>
)}

</div>

</motion.div>

</div>

</section>

);

}

export default FeatureSection;