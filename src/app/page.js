'use client'
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import images from "@/images"
import Image from "next/image"

export default function Home() {
  const [width, setWidth] = useState(0)
  const carousel = useRef()
  
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div className="mx-80 mt-40">
      <motion.div ref={carousel} className="carousel cursor-grab overflow-hidden" whileTap={{ cursor: "grabbing" }}>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel flex backdrop-blur rounded-xl">
          {images.map((image, index) => {
            return (
              <motion.div key={index} className="item min-w-[30rem] min-h-[30rem] p-5">
                <div className="flex justify-between items-center bg-slate-200 p-2 rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-indigo-500 to-90%">
                  <Image className="w-full h-full rounded-full pointer-events-none" src={image} alt="image" whileHover={{ scale: 1.2 }} />
                </div>
              </motion.div>
            ) 
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}
