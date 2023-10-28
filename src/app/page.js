'use client';

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div style={{
        display: 'grid',
        placeContent: "center",
        height: "100vh",
        gap:"0.8rem"
      }}>
        <motion.button className='btn' onClick={() => setIsVisible(!isVisible)} layout>SHOW/HIDE</motion.button>
        <AnimatePresence mode='popLayout'>
        {isVisible && 
        (<motion.div 
          initial={{ // used to set Initiale motion of div
            rotate:"0deg",
            y:0
          }}
          animate={{ // used to set animated motion of div
            rotate:"180deg",
            y:[0,50,-150,-100, 0]
          }}
          exit={{
            rotate:"0deg",
            y:0
          }}
          transition={{ // used to set transition prop to motion of div
            duration: 1,
            ease:"backInOut",
            times:[0,0.25,0.40,0.70,1]      
          }}
          style={{
            width:150,
            height:150,
            backgroundColor:"black"
          }}
        >
        </motion.div>)}
        </AnimatePresence>
      </div>
    </>
  )
}
