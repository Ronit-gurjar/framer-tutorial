import React from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const AnimationControls = () => {
    const controls = useAnimationControls(); //use this hook to access animation control props 
    const handleClick1=()=>{
        controls.start("flip");    // we can use the control like this
    }
    const handleClick2=()=>{
        controls.start({          // or we can use it like this
            transition:{ duration: 1.10},
            rotate:"-360deg"
        });
    }
  return (
    <div style={{
        display: 'grid',
        placeContent: "center",
        height: "100vh",
        gap:"0.8rem"
      }}>
        <button onClick={handleClick1} className='btn'>flip it</button>
        <motion.div
            style={{
                width:150,
                height:150,
                background: "black"
            }}
            variants={{  //this is how we can write props of our own
                initial:{
                    rotate: "0deg"
                },
                flip:{
                    rotate: "360deg"
                }
            }}
            initial="initial"
            animate={controls}
            exit={{
                rotate:"0deg"
              }}
            
        ></motion.div>
        <button onClick={handleClick2} className='btn'>flip it again</button>
    </div>
  )
}

export default AnimationControls