import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

const ViewBasedAnimations = () => {
  return (
    <>
    <div style={{
        height: "120vh",
        display: 'grid',
        placeContent: "center center",
        gap:"0.8rem"}}>scroll down a bit 👇</div>
    <motion.div
    style={{
        height:"100vh",
        background:"black",
        display: 'grid',
        placeContent: "center center",
    }}
    initial={{opacity: 0}}
    whileInView={{opacity: 1}} //to create view based animations
    transition={{duration:1}}
    >
        <Image src='https://www.mememaker.net/static/images/memes/4776936.jpg' width={800} height={800}/>
    </motion.div>
    </>
  )
}

export default ViewBasedAnimations