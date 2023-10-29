'use client';

import AnimationControls from './components/animationControls';
import Guestures from './components/guestures';
import MotionBasic from './components/motionBasics'
import ViewBasedAnimations from './components/viewBasedAnimations';
import ScrollbasedAnimations from './components/scrollbasedAnimations';

import React from 'react'
import { motion, useScroll } from 'framer-motion'

export default function Home() {
  const { scrollYProgress} = useScroll();
  return (
    <>
        <motion.div
        style={{
            scaleX: scrollYProgress,
            transformOrigin: "left",
            position: "sticky",
            top: 0,
            width: "100%",
            height: "40px",
            background:"blue"
        }}
        />
         <section>
            <MotionBasic/>
        </section>
        <section>
            <Guestures/>
        </section>
        <section>
            <AnimationControls/>
        </section>
        <section>
            <ScrollbasedAnimations/>
        </section>
        <section>
            <ViewBasedAnimations/>
        </section>
    </>
  )
}
