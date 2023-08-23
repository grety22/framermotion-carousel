'use client'
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

import images from "@/images"
import Image from "next/image"

export default function Carousel() {
    const [width, setWidth] = useState(0)
    const carousel = useRef()
    
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <motion.div ref={carousel} className="carousel cursor-grab overflow-hidden" whileTap={{ cursor: "grabbing" }}>
            <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel flex backdrop-blur rounded-xl">
                {images.map((image, index) => {
                    return (
                        <motion.div key={index} className="item min-w-[20rem] min-h-[15rem] p-7" whileHover={{ scale: 1.1 }}>
                            <div className="flex justify-between items-center bg-slate-200 p-2 shadow-lg rounded-2xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-indigo-500 to-90%">
                                <Image className="w-full h-full rounded-2xl pointer-events-none" src={image} alt="image"  />
                            </div>
                        </motion.div>
                    ) 
                })}
            </motion.div>
        </motion.div>
    )
}