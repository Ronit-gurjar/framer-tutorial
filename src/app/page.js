'use client';

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <div style={{
        display: 'grid',
        placeContent: "center",
        height: "100vh",
        gap:"0.8rem"
      }}>
        <motion.div 
          initial={{ // used to set Initiale motion of div
            rotate:"0deg"
          }}
          animate={{ // used to set animated motion of div
            rotate:"180deg"
          }}
          exit={{
            rotate:"0deg"
          }}
          transition={{ // used to set transition prop to motion of div
            duration: 1,
            ease:"backInOut"          
          }}
          style={{
            width:150,
            height:150,
            backgroundColor:"black"
          }}
        >
        </motion.div>
      </div>
    </>
  )
}
