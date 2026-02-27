import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/* ===== LOCAL IMAGES (ONLY YATRA) ===== */
import y1 from "../assets/yatra1.jpg";
import y2 from "../assets/yatra2.jpg";
import y3 from "../assets/yatra3.jpg";
import y4 from "../assets/yatra4.jpg";

/* ===== PRODUCTS DATA ===== */
const products = [
  {
    title: "AzuraYatra",
    images: [y1, y2, y3, y4],
  },
  {
    title: "AzuraWed",
    images: [
      "https://i.pinimg.com/736x/3c/f7/cc/3cf7cc509705f1a96e9f55430d5901da.jpg",
      "https://serendipitycinema.com/wp-content/uploads/2017/02/Screen-Shot-2017-02-16-at-9.42.17-PM.png",
      "https://john-cain-photography.nyc3.digitaloceanspaces.com/wp-content/uploads/2020/05/15191945/2792_Thompson-Richards_Wedding_Reception-scaled.jpg",
      "https://static.wixstatic.com/media/644056_b0183809ce4043348cbd948360797754~mv2.jpeg/v1/fill/w_734,h_490,al_c,lg_1,q_90/644056_b0183809ce4043348cbd948360797754~mv2.webp",
    ],
  },
  {
    title: "HeliSetGo",
    images: [
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1200",
      "https://images.unsplash.com/photo-1504198266285-165a48b2f6c4?q=80&w=1200",
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200",
    ],
  },
  {
    title: "Azura Rescue",
    images: [
      "https://images.unsplash.com/photo-1584467735871-8f7b7c6d9d4b?q=80&w=1200",
      "https://images.unsplash.com/photo-1581093588401-22c0b0f90e0b?q=80&w=1200",
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200",
      "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=1200",
    ],
  },
];

/* ===== CARD COMPONENT ===== */
function ProductCard({ item, index }) {
  const [current, setCurrent] = useState(0);
  const [hover, setHover] = useState(false);

  // Auto slider
  useEffect(() => {
    if (hover) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % item.images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [hover, item.images.length]);

  // Check screen size (disable expansion on mobile)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  // 3rd & 4th expand left
  const expandLeft = index >= 2;

  return (
    <motion.div
      layout
      onMouseEnter={() => !isMobile && setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative"
      style={{ zIndex: hover ? 20 : 1 }}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="relative h-[340px] rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl"
        style={{
          width: hover && !isMobile ? "700px" : "100%",
          position: hover ? "absolute" : "relative",
          left: hover && !expandLeft ? 0 : "auto",
          right: hover && expandLeft ? 0 : "auto",
        }}
      >
        {/* Hover Mode → show 4 images in one row */}
        {hover && !isMobile ? (
          <div className="absolute inset-0 flex">
            {item.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-1/4 h-full object-cover"
              />
            ))}
          </div>
        ) : (
          // Normal slider
          <motion.img
            key={current}
            src={item.images[current]}
            alt=""
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Title */}
        <div className="absolute top-4 left-4 bg-white/95 text-[#0E2038] px-4 py-1 rounded-full text-sm font-semibold shadow">
          {item.title}
        </div>

        {/* Button */}
        <div className="absolute bottom-6 left-6">
          <button className="px-6 py-2 rounded-full bg-[#0E2038] text-white text-sm font-medium hover:bg-[#213A5C] transition">
            View Details
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ===== MAIN COMPONENT ===== */
function Products() {
  return (
    <section className="bg-[#F4F7FA] py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-heading text-[#0E2038]">
            Our Products
          </h2>
          <p className="text-[#758D93] mt-3">
            Premium aviation solutions tailored for every journey.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {products.map((item, index) => (
            <div key={index} className="relative">
              <ProductCard item={item} index={index} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Products;