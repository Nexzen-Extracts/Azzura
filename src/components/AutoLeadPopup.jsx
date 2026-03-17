import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    format,
    addMonths,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    isSameDay
} from "date-fns";

export default function AzzuraSearchWithFloatingIcon() {

    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)
    const [expand, setExpand] = useState(false)

    useEffect(() => {

        const timer = setTimeout(() => {

            setShow(true)

            setTimeout(() => {
                setExpand(true)
            }, 600)

        }, 3500)

        return () => clearTimeout(timer)

    }, [])


    return (

        <>

            {/* Apple style search pill */}

            <AnimatePresence>

                {show && !open && (

                    <motion.div
                        initial={{ y: 120, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 120, opacity: 0 }}
                        transition={{ duration: .5 }}
                        style={{
                            position: "fixed",
                            bottom: "35px",
                            left: "50%",
                            zIndex: 9999
                        }}
                    >

                        <motion.div
                            onClick={() => setOpen(true)}
                            animate={{ width: expand ? "auto" : "60px" }}
                            transition={{ duration: .45 }}
                            style={{
                                transform: "translateX(-50%)",  
                                height: "60px",
                                borderRadius: "40px",
                                background: "rgba(12,32,54,.75)",
                                backdropFilter: "blur(18px)",
                                border: "1px solid rgba(255,255,255,.15)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "12px",
                                padding: "0 18px",
                                cursor: "pointer",
                                overflow: "hidden",
                                boxShadow: "0 18px 45px rgba(0,0,0,.45)"
                            }}
                        >

                            <AnimatePresence>

                                {expand && (

                                    <motion.span
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0 }}
                                        style={{
                                            color: "#fff",
                                            fontSize: "16px",
                                            fontWeight: "500",
                                            whiteSpace: "nowrap"
                                        }}
                                    >

                                        Plan Your Journey

                                    </motion.span>

                                )}

                            </AnimatePresence>


                            <div style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                background: "#fff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>

                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#0E2038"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="11" cy="11" r="7" />
                                    <line x1="16.65" y1="16.65" x2="21" y2="21" />
                                </svg>

                            </div>

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>



            {/* FORM */}

            <AnimatePresence>

                {open && (

                    <motion.div
                        initial={{ opacity: 0, scale: .9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: .9, y: 40 }}
                        transition={{ duration: .35 }}
                        style={{
                            position: "fixed",
                            bottom: "110px",
                            left: "0",
                            right: "0",
                            margin: "auto",
                            width: "94%",
                            maxWidth: "820px",
                            zIndex: 9998
                        }}
                    >

                        <div
                            style={{
                                background: "rgba(255,255,255,.08)",
                                backdropFilter: "blur(18px)",
                                borderRadius: "20px",
                                border: "1px solid rgba(255,255,255,.2)",
                                boxShadow: "0 25px 60px rgba(0,0,0,.45)"
                            }}
                        >

                            <FlightSearch setOpen={setOpen} />

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>

        </>

    )

}



function FlightSearch({ setOpen }) {

    const containerRef = useRef(null)

    const [activeField, setActiveField] = useState(null)

    const [from, setFrom] = useState(null)
    const [to, setTo] = useState(null)

    const [airportQuery, setAirportQuery] = useState("")

    const [departure, setDeparture] = useState(null)
    const [returnDate, setReturnDate] = useState(null)

    const [month, setMonth] = useState(new Date())

    const [loading, setLoading] = useState(false)

    const [guests, setGuests] = useState({
        adults: 1,
        children: 0,
        infants: 0,
        pets: 0
    })

    const airports = [
        { code: "DEL", city: "New Delhi" },
        { code: "BOM", city: "Mumbai" },
        { code: "DXB", city: "Dubai" },
        { code: "LHR", city: "London" },
        { code: "JFK", city: "New York" }
    ]

    const filteredAirports = airports.filter(a =>
        a.city.toLowerCase().includes(airportQuery.toLowerCase()) ||
        a.code.toLowerCase().includes(airportQuery.toLowerCase())
    )



    useEffect(() => {

        const handleOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setActiveField(null)
            }
        }

        document.addEventListener("mousedown", handleOutside)

        return () => document.removeEventListener("mousedown", handleOutside)

    }, [])



    const renderCalendar = (offset) => {

        const currentMonth = addMonths(month, offset)

        const start = startOfMonth(currentMonth)
        const end = endOfMonth(currentMonth)

        const days = eachDayOfInterval({ start, end })

        return (

            <div className="flex-1 min-w-[260px]">

                <h3 className="text-white text-center mb-4">
                    {format(currentMonth, "MMMM yyyy")}
                </h3>

                <div className="grid grid-cols-7 gap-2">

                    {days.map(day => {

                        const selected =
                            (departure && isSameDay(day, departure)) ||
                            (returnDate && isSameDay(day, returnDate))

                        return (

                            <button
                                key={day}
                                onClick={() => {

                                    if (!departure || returnDate) {
                                        setDeparture(day)
                                        setReturnDate(null)
                                    } else {
                                        setReturnDate(day)
                                    }

                                }}
                                className={`p-2 rounded-full text-sm transition
${selected ? "bg-white text-black" : ""}
hover:bg-white/20 text-white`}
                            >

                                {format(day, "d")}

                            </button>

                        )

                    })}

                </div>

            </div>

        )

    }



    const totalGuests =
        guests.adults + guests.children + guests.infants



    return (

        <div ref={containerRef} className="p-5">

            <div className="bg-[#0C2036] rounded-xl p-2 flex flex-wrap md:flex-nowrap items-center">

                <div
                    onClick={() => setActiveField("from")}
                    className="flex-1 px-5 py-3 cursor-pointer hover:bg-[#132A45] rounded-lg"
                >

                    <p className="text-xs text-white/50">From</p>

                    <p className="text-white">
                        {from ? `${from.city} (${from.code})` : "Select Airport"}
                    </p>

                </div>



                <div
                    onClick={() => setActiveField("to")}
                    className="flex-1 px-5 py-3 cursor-pointer hover:bg-[#132A45] rounded-lg"
                >

                    <p className="text-xs text-white/50">To</p>

                    <p className="text-white">
                        {to ? `${to.city} (${to.code})` : "Select Airport"}
                    </p>

                </div>



                <div
                    onClick={() => setActiveField("date")}
                    className="flex-1 px-5 py-3 cursor-pointer hover:bg-[#132A45] rounded-lg"
                >

                    <p className="text-xs text-white/50">Dates</p>

                    <p className="text-white">
                        {departure ? format(departure, "dd MMM") : "Select Date"}
                    </p>

                </div>



                <div
                    onClick={() => setActiveField("guest")}
                    className="flex-1 px-5 py-3 cursor-pointer hover:bg-[#132A45] rounded-lg"
                >

                    <p className="text-xs text-white/50">Guests</p>

                    <p className="text-white">{totalGuests} Guests</p>

                </div>

            </div>



            {/* AIRPORT */}

            {(activeField === "from" || activeField === "to") && (

                <div className="mt-3 bg-[#0C2036] p-4 rounded-xl shadow-xl max-h-[260px] overflow-y-auto">

                    <input
                        autoFocus
                        value={airportQuery}
                        onChange={(e) => setAirportQuery(e.target.value)}
                        placeholder="Search airport"
                        className="w-full p-3 rounded-lg bg-[#132A45] text-white mb-3 outline-none"
                    />

                    {filteredAirports.map(a => (

                        <div
                            key={a.code}
                            onMouseDown={() => {

                                activeField === "from"
                                    ? setFrom(a)
                                    : setTo(a)

                                setAirportQuery("")
                                setActiveField(null)

                            }}
                            className="p-2 hover:bg-[#132A45] rounded-lg cursor-pointer text-white"
                        >

                            ✈ {a.city} ({a.code})

                        </div>

                    ))}

                </div>

            )}



            {/* CALENDAR */}

            {activeField === "date" && (

                <div className="mt-3 bg-[#0C2036] p-6 rounded-xl flex flex-col md:flex-row gap-10 shadow-xl">

                    {renderCalendar(0)}
                    {renderCalendar(1)}

                </div>

            )}



            {/* GUESTS */}

            {activeField === "guest" && (

                <div className="mt-3 bg-[#0C2036] p-6 rounded-xl shadow-xl">

                    {["adults", "children", "infants", "pets"].map(type => (

                        <div key={type} className="flex justify-between py-3 text-white">

                            <span className="capitalize">{type}</span>

                            <div className="flex gap-3 items-center">

                                <button
                                    onClick={() => setGuests({ ...guests, [type]: Math.max(0, guests[type] - 1) })}
                                    className="px-3 py-1 bg-white/10 rounded"
                                >-</button>

                                <span>{guests[type]}</span>

                                <button
                                    onClick={() => setGuests({ ...guests, [type]: guests[type] + 1 })}
                                    className="px-3 py-1 bg-white/10 rounded"
                                >+</button>

                            </div>

                        </div>

                    ))}

                </div>

            )}



            <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => {

                    setLoading(true)

                    setTimeout(() => {

                        setLoading(false)
                        setOpen(false)

                    }, 2000)

                }}
                className="mt-6 w-full py-4 bg-white text-black rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition"
            >

                {loading ? (
                    <>
                        <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                        Searching Flights
                    </>
                ) : "Search Flights"}

            </motion.button>

        </div>

    )

}