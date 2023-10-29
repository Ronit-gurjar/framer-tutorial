import React from 'react'
import { motion } from 'framer-motion';

const Guestures = () => {
  return (
    <div style={{
        display: 'grid',
        placeContent: "center",
        height: "100vh",
        gap:"0.8rem"
      }}>
        <motion.button className='btn'
            whileHover={{scale:1.10}} //change animation on hover
            whileTap={{scale:1.10, rotate:"3deg" ,y:10}}  //change animation on Tap
        >button</motion.button>
    </div>
  )
}

export default Guestures;
