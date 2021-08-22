import React from 'react'

const Meter = (props)=>{
    return(
        <div id = 'meter-container'>
            <div id = "meter-down"onClick={()=>{if(props.currentMeter>1)props.changeMeter(props.currentMeter -1)}}></div>
            <span id="current-meter">{props.currentMeter}</span>
            <div id = "meter-up"onClick={()=>{if(props.currentMeter<6)props.changeMeter(props.currentMeter +1)}}></div>
        </div>
    )
}

export default Meter