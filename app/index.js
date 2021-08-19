// Your code here!
import React, {createRef} from 'react'
import ReactDOM from 'react-dom'

class Metro extends React.Component {
    constructor(){
        super();
        //raw dom access
        this.regular = createRef();
        this.accent = createRef();
    }
    render(){
        const regular = "./regular.wav"
        const accent = "./accent.wav"
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
        return (
            <div>
                <audio ref ={this.regular} src = {regular}></audio>
                <audio ref ={this.accent} src = {accent}></audio>
            </div>
        )
    }
}

ReactDOM.render(<Metro/>, document.querySelector("#app"));