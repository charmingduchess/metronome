// Your code here!
import React, { createRef } from "react";
import ReactDOM from "react-dom";
import meters from "./meters";
import Tempo from "./Tempo";
import Meter from "./Meter";
import Play from "./Button";
 
class Metro extends React.Component {
  constructor() {
    super();
    this.state = { playing: false, interval: 0, meter: 4, BPM: "" };
    this.regular = createRef();
    this.accent = createRef();
    this.go = this.go.bind(this);
    this.playPause = this.playPause.bind(this);
    this.meters = meters.map((f) => f.bind(this));
    this.changeBPM = this.changeBPM.bind(this);
    this.changeMeter = this.changeMeter.bind(this);
    this.stopMetro = this.stopMetro.bind(this);
  }
  playPause(playing) {
    if(this.state.BPM !== "") this.setState({ playing: !playing });
    this.go(!playing, this.state.BPM, this.state.meter);
  }
  go(playing, BPM, meter) {
    console.log("bpm", BPM);
    const meterFunc = this.meters[meter];
    let i = 1;
    if (!playing || BPM === "") {
      clearInterval(this.state.interval);
    } else if (playing) {
      const int = setInterval(() => {
        meterFunc(i);
        i === this.state.meter ? (i = 1) : i++;
      }, 60000 / BPM);
      this.setState({ interval: int });
    }
  }
  changeMeter(meter) {
    this.setState({ meter: meter });
    if (this.state.playing) {
      this.stopMetro()
      this.go(true, this.state.BPM, meter);
    }
  }
  stopMetro(){
    this.go(false, 0, 1);
  }
  changeBPM(BPM) {
    this.setState({ BPM: BPM });
    if (BPM === null) {
      this.setState({ playing: false });
      this.go(false, BPM);
    } else if (this.state.playing) {
      this.stopMetro()
      this.go(true, BPM, this.state.meter);
    }
  }
  render() {
    const regularSRC = "/clickLo.wav";
    const accentSRC = "/clickHi.wav";
    return (
      <div id = "container">
        <audio ref={this.regular} src={regularSRC}></audio>
        <audio ref={this.accent} src={accentSRC}></audio>
        
          <Meter
            currentMeter={this.state.meter}
            changeMeter={this.changeMeter}
          />
          <Play playing={this.state.playing} playPause={this.playPause} />
          <Tempo changeBPM={this.changeBPM} />
        
      </div>
    );
  }
}

ReactDOM.render(<Metro />, document.querySelector("#app"));
