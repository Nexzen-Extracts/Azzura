import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const fleetData = [
  {
    id: 1,
    name: "Cessna Citation CJ2",
    type: "Light Jet",
    image:
      "https://cdn.avbuyer.com/live/uploads/image/372101_372200/aircraft-private-jets-cessna-citation-cj2-372185_6e151a7cb70e6c70_920X485.webp",
    interior: [
      "https://premieraviation.com/wp-content/uploads/2017/05/Citation-CJ2-Interior-Shot.jpg",
      "https://www.airsprint.com/assets/Uploads/Fleet/Citation-CJ2+/CJ2+_Cutaway_ASPLivery_2022R1_2500pxW.jpg"
    ],
    seats: 7,
    speed: "400 KTS",
    baggage: "74 CUFT",
    range: "1500 NM",
    desc:
      "A light business jet known for high cruising speeds and excellent performance for short-haul flights."
  },
  {
    id: 2,
    name: "Hawker Beechcraft 750",
    type: "Midsize Jet",
    image:
      "https://smart-aviation.co.uk/wp-content/uploads/2024/04/Hawker750_2-scaled.jpg",
    interior: [
      "https://www.jetclass.com/storage/jets/163/large/hawker_750-int-1.jpg",
      "https://trilogyaviationgroup.com/wp-content/uploads/2020/01/hawker-750xp-charter-jet-6.jpg"
    ],
    seats: 9,
    speed: "430 KTS",
    baggage: "79 CUFT",
    range: "2400 NM",
    desc:
      "Spacious midsize jet offering superior comfort with strong runway performance and competitive range."
  }
];

const types = ["All", "Light Jet", "Midsize Jet"];

function FleetContent() {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const filtered =
    filter === "All"
      ? fleetData
      : fleetData.filter(item => item.type === filter);

  return (
    <section className="bg-[#081421] py-16 px-6 text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[260px_1fr] gap-10">

        {/* Filter */}
        <div className="bg-[#0B1A2E] border border-white/10 rounded-2xl p-6 h-fit">
          <h3 className="text-lg font-semibold mb-6">Aircraft Category</h3>

          <div className="space-y-3">
            {types.map(type => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition
                ${
                  filter === type
                    ? "bg-white text-[#081421]"
                    : "text-white/70 hover:bg-white/10"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {filtered.map(item => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              className="bg-[#0B1A2E] border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-[40%] h-[220px]">
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">
                    {item.name}
                  </h3>
                  <p className="text-white/50 mb-3">{item.type}</p>
                  <p className="text-white/70 text-sm">
                    {item.desc}
                  </p>
                </div>

                {/* View Details → Route */}
                <button
                  onClick={() => navigate(`/fleet/${item.id}`)}
                  className="mt-6 border border-white/30 px-5 py-2 rounded-lg hover:bg-white hover:text-[#081421] transition w-fit"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FleetContent;