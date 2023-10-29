import React from 'react'

const AnimationControls = () => {
  return (
    <div style={{
        display: 'grid',
        placeContent: "center",
        height: "100vh",
        gap:"0.8rem"
      }}>
        <button className='btn'>flip it</button>
        <div
            style={{
                width:150,
                height:150,
                background: "black"
            }}
        ></div>
    </div>
  )
}

export default AnimationControls