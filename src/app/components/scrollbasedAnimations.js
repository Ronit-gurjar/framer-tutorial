import React from 'react'
import { motion, useScroll } from 'framer-motion'

const ScrollbasedAnimations = () => {
    const { scrollYProgress} = useScroll();
  return (
    <div>
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
        <div
        style={{
            maxWidth:"750px",
            margin:"auto",
            padding:"1.2rem",
            display: "flex",
            flexDirection:"column",
            justifyContent: "space-between",
            lineHeight: "250%"
        }}
        >
            <p>Ad dolore id fugiat ullamco id. Non sit laborum dolor duis.
                 Labore quis dolore dolore ex laborum ut labore nostrud minim irure occaecat dolor incididunt eiusmod.</p>
            <p>Ad dolore id fugiat ullamco id. Non sit laborum dolor duis.
            Labore quis dolore dolore ex laborum ut labore nostrud minim irure occaecat dolor incididunt eiusmod.</p>
            <p>Ad dolore id fugiat ullamco id. Non sit laborum dolor duis.
            Labore quis dolore dolore ex laborum ut labore nostrud minim irure occaecat dolor incididunt eiusmod.</p>
            <p>Ad dolore id fugiat ullamco id. Non sit laborum dolor duis.
                 Labore quis dolore dolore ex laborum ut labore nostrud minim irure occaecat dolor incididunt eiusmod.</p>
            <p>Ad dolore id fugiat ullamco id. Non sit laborum dolor duis.
                 Labore quis dolore dolore ex laborum ut labore nostrud minim irure occaecat dolor incididunt eiusmod.</p>
            <p>Ad dolore id fugiat ullamco id. Non sit laborum dolor duis.
                 Labore quis dolore dolore ex laborum ut labore nostrud minim irure occaecat dolor incididunt eiusmod.</p>
            <p>Ad dolore id fugiat ullamco id. Non sit laborum dolor duis.
            Labore quis dolore dolore ex laborum ut labore nostrud minim irure occaecat dolor incididunt eiusmod.</p>
            <p>Ad dolore id fugiat ullamco id. Non sit laborum dolor duis.
            Labore quis dolore dolore ex laborum ut labore nostrud minim irure occaecat dolor incididunt eiusmod.</p>
            <p>Ad dolore id fugiat ullamco id. Non sit laborum dolor duis.
                 Labore quis dolore dolore ex laborum ut labore nostrud minim irure occaecat dolor incididunt eiusmod.</p>
            <p>Ad dolore id fugiat ullamco id. Non sit laborum dolor duis.
                 Labore quis dolore dolore ex laborum ut labore nostrud minim irure occaecat dolor incididunt eiusmod.</p>
                 <p>Ad dolore id fugiat ullamco id. Non sit laborum dolor duis.
                 Labore quis dolore dolore ex laborum ut labore nostrud minim irure occaecat dolor incididunt eiusmod.</p>
            <p>Ad dolore id fugiat ullamco id. Non sit laborum dolor duis.
            Labore quis dolore dolore ex laborum ut labore nostrud minim irure occaecat dolor incididunt eiusmod.</p>
            <p>Ad dolore id fugiat ullamco id. Non sit laborum dolor duis.
            Labore quis dolore dolore ex laborum ut labore nostrud minim irure occaecat dolor incididunt eiusmod.</p>
            <p>Ad dolore id fugiat ullamco id. Non sit laborum dolor duis.
                 Labore quis dolore dolore ex laborum ut labore nostrud minim irure occaecat dolor incididunt eiusmod.</p>
            <p>Ad dolore id fugiat ullamco id. Non sit laborum dolor duis.
                 Labore quis dolore dolore ex laborum ut labore nostrud minim irure occaecat dolor incididunt eiusmod.</p>
            <p>Ad dolore id fugiat ullamco id. Non sit laborum dolor duis.
                 Labore quis dolore dolore ex laborum ut labore nostrud minim irure occaecat dolor incididunt eiusmod.</p>
            <p>Ad dolore id fugiat ullamco id. Non sit laborum dolor duis.
            Labore quis dolore dolore ex laborum ut labore nostrud minim irure occaecat dolor incididunt eiusmod.</p>
            <p>Ad dolore id fugiat ullamco id. Non sit laborum dolor duis.
            Labore quis dolore dolore ex laborum ut labore nostrud minim irure occaecat dolor incididunt eiusmod.</p>
            <p>Ad dolore id fugiat ullamco id. Non sit laborum dolor duis.
                 Labore quis dolore dolore ex laborum ut labore nostrud minim irure occaecat dolor incididunt eiusmod.</p>
            <p>Ad dolore id fugiat ullamco id. Non sit laborum dolor duis.
                 Labore quis dolore dolore ex laborum ut labore nostrud minim irure occaecat dolor incididunt eiusmod.</p>
        </div>
    </div>
  )
}

export default ScrollbasedAnimations