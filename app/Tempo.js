import React from 'react'

const Tempo = (props)=>{
    const handleChange =(e)=>{
        props.changeBPM(e.target.value)
    }

    return(
        <div id ='tempo'>
        <input type ="number" defaultValue= {null} placeholder="BPM" onChange={(e)=>handleChange(e)}></input>
        </div>
        )
}

export default Tempo