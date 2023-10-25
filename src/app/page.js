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
        <motion.div>
          hello
        </motion.div>
      </div>
    </>
  )
}
