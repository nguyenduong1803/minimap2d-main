import React from 'react'
import styles from "./Radar.module.css"
function Rada() {
  const refRange = React.useRef();
    const [deg,setDeg] =React.useState(45)
    const aroundCircle={
        transform: `rotate(${deg}deg)`
    }

const handleRange=()=>{

  setDeg(()=>{
    let range= refRange.current.value
    return range
  })
}  
  return (
    <div>
        <div className={styles.circle} >
            <div className={styles.line} style={aroundCircle}></div>
      
        </div>
        <input 
        onChange={()=>handleRange()}
        ref={refRange}
        className={`${styles.range} `}
        step="1"
        start="90"
        min="-90"
        max="180"
        type="range"
        />
        
    </div>
  )
}

export default Rada