import React from 'react'
import { motion, MotionConfig } from 'framer-motion';

const Guestures = () => {
  return (
    <div style={{
        display: 'grid',
        placeContent: "center",
        height: "100vh",
        gap:"0.8rem"
      }}>
        <MotionConfig     //Instead of setting transition prop inside each button we can just use MotionConfig to set it one for all
            transition={{
                duration: 0.150,
                ease: "easeInOut"
            }}
        >
        <motion.button className='btn'
            whileHover={{scale:1.10}} //change animation on hover
            whileTap={{scale:1.10, rotate:"3deg" ,y:10}}  //change animation on Tap
        >button 1</motion.button>
        <motion.button className='btn'
            whileHover={{scale:1.10}} //change animation on hover
            whileTap={{scale:1.10, rotate:"-3deg" ,y:10}}  //change animation on Tap
        >button 2</motion.button>
        </MotionConfig>
    </div>
  )
}

export default Guestures
