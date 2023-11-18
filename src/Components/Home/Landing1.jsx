import React from 'react'
import { Typewriter } from "react-simple-typewriter";

const Landing1 = () => {
  return (
    <div>
        <h1 style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "normal" }}>
      Life is simple{" "}
      <span style={{ color: "red", fontWeight: "bold" }}>
        {/* Style will be inherited from the parent element */}
        <Typewriter
          words={["Eat", "Sleep", "Code", "Repeat!"]}
          loop={5}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
         
        />
      </span>
    </h1>
    </div>
  )
}

export default Landing1
