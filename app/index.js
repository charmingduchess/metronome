// Your code here!
import React, {createRef} from 'react'
import ReactDOM from 'react-dom'

class Metro extends React.Component {
    constructor(){
        super();
        //raw dom access
        this.regular = createRef();
        this.accent = createRef();
        this.go = this.go.bind(this)
        this.regularSRC = "/Users/ozzie/metronome/regular.wav"
        this.accentSRC = "/Users/ozzie/metronome/accent.wav"
    }
    go(){
        let i = 1;
        setInterval(()=>{
            if(i === 1){
                //current is necessary for ref
                  this.accent.current.play()
            }
            else if (i===2){
                  this.regular.current.play()
            }
            else if (i ===3){
                  this.regular.current.play()
            }
            else if(i === 4){
                  this.accent.current.play()
            }
            else if ( i===5){
                  this.regular.current.play()
            }
            else if (i ===6){
                  this.regular.current.play()
                i=0
            }
            i++
        }, 167)
    }
    render(){

        return (
            <div>
                <button onClick={this.go}>play</button>
                <audio ref ={this.regular} src = {this.regularSRC}></audio>
                <audio ref ={this.accent} src = {this.accentSRC}></audio>
            </div>
        )
    }
}

ReactDOM.render(<Metro/>, document.querySelector("#app"));