
import { motion } from "framer-motion";
import img2026 from "../assets/about11.webp";
import img2027 from "../assets/about12.webp";
import img2028 from "../assets/about-2028.jpg";
import img2029 from "../assets/azura-wed.webp";
import img2030 from "../assets/about-2030.jpg";

function AboutSection() {

  const leftAnim = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightAnim = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const viewportSettings = { once: false, amount: 0.3 };

  return (
    <div className="bg-white overflow-x-hidden">

      {/* SECTION 1 */}
      <section className="w-full">
        <div className="flex flex-col lg:flex-row min-h-[70vh]">

          <motion.div
            variants={leftAnim}
            initial="hidden"
            whileInView="show"
            viewport={viewportSettings}
            className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
          >
            <div className="max-w-xl">

              <p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
                Our Journey
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0E2038] mb-5">
                The Beginning of AZURA
              </h2>

              <div className="w-16 h-[2px] bg-gray-300 mb-6" />

              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2026, AZURA was built with a mission to redefine
                private aviation through precision, discretion and modern
                luxury travel experiences.
              </p>

              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3"><span>•</span>Launch of AZURA aviation brand</li>
                <li className="flex gap-3"><span>•</span>Expansion of modern aircraft fleet</li>
                <li className="flex gap-3"><span>•</span>Formation of global aviation partnerships</li>
              </ul>

            </div>
          </motion.div>

          <motion.div
            variants={rightAnim}
            initial="hidden"
            whileInView="show"
            viewport={viewportSettings}
            className="lg:w-1/2 h-[320px] lg:h-auto"
          >
            <img
              src={img2026}
              alt="AZURA Journey"
              loading="lazy"
              className="w-full h-full object-cover"
            />
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
            viewport={viewportSettings}
            className="lg:w-1/2 h-[320px] lg:h-auto"
          >
            <img
              src={img2029}
              alt="Future Vision"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={rightAnim}
            initial="hidden"
            whileInView="show"
            viewport={viewportSettings}
            className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
          >
            <div className="max-w-xl">

              <p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
                Future Vision
              </p>

              <h2 className="text-3xl md:text-4xl font-light text-[#0E2038] mb-5">
                Elevating Private Aviation
              </h2>

              <div className="w-16 h-[2px] bg-gray-300 mb-6" />

              <p className="text-gray-600 leading-relaxed">
                AZURA continues to grow by introducing premium aviation
                membership programs and sustainable travel strategies
                for the future of luxury aviation.
              </p>

            </div>
          </motion.div>

        </div>
      </section>


      {/* SECTION 3 */}
      <section className="py-12">
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 gap-8 items-center">

          <motion.div
            variants={leftAnim}
            initial="hidden"
            whileInView="show"
            viewport={viewportSettings}
            className="lg:w-[70%] grid md:grid-cols-3 gap-5"
          >

            {[
              { title:"Our Mission", text:"Deliver seamless private aviation experiences with precision and luxury." },
              { title:"Our Values", text:"Integrity, safety and excellence guide every journey we operate." },
              { title:"Our Goal", text:"To become a globally trusted private aviation platform." }
            ].map((card,i)=>(
              <div
                key={i}
                className="group border border-gray-200 p-6 rounded-lg transition-all duration-300 hover:bg-[#0E2038] hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-[#0E2038] group-hover:text-white mb-3">
                  {card.title}
                </h3>

                <p className="text-gray-600 group-hover:text-gray-200 text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}

          </motion.div>

          <motion.div
            variants={rightAnim}
            initial="hidden"
            whileInView="show"
            viewport={viewportSettings}
            className="lg:w-[30%]"
          >
            <img
              src={img2028}
              alt="Mission"
              loading="lazy"
              className="w-full h-[280px] object-cover rounded-lg"
            />
          </motion.div>

        </div>
      </section>


      {/* SECTION 4 */}
     {/* SECTION 4 */}
<section className="bg-[#F6F7F9]">
  <div className="flex flex-col lg:flex-row min-h-[70vh]">

    {/* IMAGE LEFT */}
    <motion.div
      variants={leftAnim}
      initial="hidden"
      whileInView="show"
      viewport={viewportSettings}
      className="lg:w-1/2 h-[320px] lg:h-auto"
    >
      <img
        src={img2027}
        alt="Why Choose"
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </motion.div>

    {/* CONTENT RIGHT */}
    <motion.div
      variants={rightAnim}
      initial="hidden"
      whileInView="show"
      viewport={viewportSettings}
      className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
    >
      <div className="max-w-xl">

        <p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
          Why Choose Us
        </p>

        <h2 className="text-3xl md:text-4xl font-light text-[#0E2038] mb-5">
          Excellence in Private Aviation
        </h2>

        <div className="w-16 h-[2px] bg-gray-300 mb-6"/>

        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3"><span>•</span>Global aircraft access</li>
          <li className="flex gap-3"><span>•</span>Experienced aviation specialists</li>
          <li className="flex gap-3"><span>•</span>Luxury cabin experience</li>
          <li className="flex gap-3"><span>•</span>Strict safety standards</li>
        </ul>

      </div>
    </motion.div>

  </div>
</section>


      {/* SECTION 5 */}
     {/* SECTION 5 */}
<section>
  <div className="flex flex-col lg:flex-row min-h-[70vh]">

    {/* CONTENT LEFT */}
    <motion.div
      variants={leftAnim}
      initial="hidden"
      whileInView="show"
      viewport={viewportSettings}
      className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-14 py-12"
    >
      <div className="max-w-xl">

        <p className="uppercase tracking-[5px] text-xs text-gray-400 mb-3">
          AZURA Experience
        </p>

        <h2 className="text-3xl md:text-4xl font-light text-[#0E2038] mb-5">
          Where Aviation Meets Precision & Luxury
        </h2>

        <div className="w-16 h-[2px] bg-gray-300 mb-6"/>

        <p className="text-gray-600 leading-relaxed">
          AZURA blends modern aviation technology with refined luxury travel.
          Every journey is crafted with precision, comfort and privacy.
        </p>

      </div>
    </motion.div>

    {/* IMAGE RIGHT */}
    <motion.div
      variants={rightAnim}
      initial="hidden"
      whileInView="show"
      viewport={viewportSettings}
      className="lg:w-1/2 h-[320px] lg:h-auto"
    >
      <img
        src={img2030}
        alt="Luxury"
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </motion.div>

  </div>
</section>

    </div>
  );
}

export default AboutSection;

