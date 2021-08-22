import React from 'react'

const Button = (props)=>{
    return (<div id = "play"
    // onMouseEnter={() => {
    //     document.body.style.cursor = "pointer";
    //   }}
    //   onMouseLeave={() => {
    //     document.body.style.cursor = "default";
    //   }}
          onClick={() => {
            props.playPause(props.playing);
          }}
        >
          play
        </div>)
}

export default Button