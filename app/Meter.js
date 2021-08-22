import React from 'react'

const Meter = (props)=>{
    return(
        <div id = 'meter-container'>
            <div id = "meter-down"onClick={()=>{props.changeMeter(props.currentMeter -1)}}></div>
            <span id="current-meter">{props.currentMeter}</span>
            <div id = "meter-up"onClick={()=>{props.changeMeter(props.currentMeter +1)}}></div>
        </div>
    )
}

export default Meter