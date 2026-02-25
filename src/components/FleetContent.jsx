import { useState } from "react";
import { motion } from "framer-motion";

const fleetData = [
  {
    id: 1,
    name: "Cessna Citation CJ2",
    type: "Light Jet",
    image:
      "https://cdn.avbuyer.com/live/uploads/image/372101_372200/aircraft-private-jets-cessna-citation-cj2-372185_6e151a7cb70e6c70_920X485.webp",
    interior: [
      "https://www.airsprint.com/assets/Uploads/Fleet/Citation-CJ2+/CJ2+_Cutaway_ASPLivery_2022R1_2500pxW__FocusFillWyIwLjE4IiwiLTAuMTciLDk1MCw4MDBd.jpg",
      "https://premieraviation.com/wp-content/uploads/2017/05/Citation-CJ2-Interior-Shot.jpg"
    ],
    seats: 7,
    speed: "400 KTS",
    base: "New Delhi",
    yom: "2002",
    pilots: 2,
    attendant: "No",
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
    base: "New Delhi",
    yom: "2008",
    pilots: 2,
    attendant: "Yes",
    baggage: "79 CUFT",
    range: "2400 NM",
    desc:
      "Spacious midsize jet offering superior comfort with strong runway performance and competitive range."
  },
  {
    id: 3,
    name: "Augusta A109",
    type: "Helicopter",
    image:
      "https://i.ytimg.com/vi/cv8McvcQxmY/maxresdefault.jpg",
    interior: [
      "https://www.agusta.com/uploads/media/a689da9db7abc8ad46509c4242dae791.jpg",
      "https://www.vip-charter-service.com/helicopters/Agusta%20109%20Grand/109%20Grand%20int1.jpg"
    ],
    seats: 6,
    speed: "155 KTS",
    base: "Mumbai",
    yom: "2015",
    pilots: 2,
    attendant: "No",
    baggage: "44 CUFT",
    range: "500 NM",
    desc:
      "Twin-engine helicopter designed for speed, flexibility and access to remote destinations."
  }
];

const types = ["All", "Light Jet", "Midsize Jet", "Helicopter"];

function FleetContent() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    filter === "All"
      ? fleetData
      : fleetData.filter(item => item.type === filter);

  /* ================= DETAIL VIEW ================= */
  if (selected) {
    return (
      <section className="bg-[#081421] py-16 px-6 text-white min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* Back */}
          <button
            onClick={() => setSelected(null)}
            className="mb-6 border border-white/30 px-4 py-2 rounded hover:bg-white hover:text-[#081421] transition"
          >
            ← Back to Fleet
          </button>

          {/* Top Info */}
          <div className="grid md:grid-cols-2 gap-10 bg-[#0B1A2E] border border-white/10 rounded-2xl p-6">

            <div className="h-[320px]">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-1">
                {selected.name}
              </h2>
              <p className="text-white/50 mb-4">{selected.type}</p>

              <p className="text-white/70 mb-6">
                {selected.desc}
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm text-white/80">
                <p>Seats: {selected.seats}</p>
                <p>Speed: {selected.speed}</p>
                <p>Base: {selected.base}</p>
                <p>YOM: {selected.yom}</p>
                <p>Pilots: {selected.pilots}</p>
                <p>Flight Attendant: {selected.attendant}</p>
                <p>Baggage: {selected.baggage}</p>
                <p>Range: {selected.range}</p>
              </div>
            </div>
          </div>

          {/* Interior + Map */}
          <div className="grid md:grid-cols-2 gap-10 mt-10">

            <div>
              <h3 className="mb-4 text-lg font-semibold">
                Interior Photos
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {selected.interior.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="h-[140px] w-full object-cover rounded"
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">
                Range Map
              </h3>
              <img
                src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/005/583/original/VT-MONrng.png?1705302597"
                className="w-full h-[300px] object-cover rounded bg-white"
              />
            </div>

          </div>

          {/* Specifications Table */}
          <div className="mt-10 bg-[#0B1A2E] border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-6">
              Specifications
            </h3>

            <div className="grid md:grid-cols-2 gap-4 text-sm text-white/80">
              <p>Aircraft Type: {selected.type}</p>
              <p>Seats: {selected.seats}</p>
              <p>Speed: {selected.speed}</p>
              <p>Range: {selected.range}</p>
              <p>Base: {selected.base}</p>
              <p>Year of Manufacture: {selected.yom}</p>
              <p>Pilots: {selected.pilots}</p>
              <p>Flight Attendant: {selected.attendant}</p>
              <p>Baggage Capacity: {selected.baggage}</p>
            </div>
          </div>

        </div>
      </section>
    );
  }

  /* ================= LIST VIEW ================= */
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

                <button
                  onClick={() => setSelected(item)}
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