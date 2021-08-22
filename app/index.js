// Your code here!
import React, { createRef } from "react";
import ReactDOM from "react-dom";
import meters from "./meters";
import Tempo from "./Tempo";
import Meter from "./Meter";
import Button from "./Button";

class Metro extends React.Component {
  constructor() {
    super();
    this.state = { playing: false, interval: 0, meter: 6, BPM: "" };
    this.regular = createRef();
    this.accent = createRef();
    this.go = this.go.bind(this);
    this.playPause = this.playPause.bind(this);
    this.meters = meters.map((f) => f.bind(this));
    this.changeBPM = this.changeBPM.bind(this);
    this.changeMeter = this.changeMeter.bind(this);
  }
  playPause(playing) {
    this.setState({ playing: !playing });
    this.go(!playing, this.state.BPM, this.state.meter);
  }
  go(playing, BPM, meter) {
    console.log("bpm", BPM);
    const meterFunc = this.meters[meter];
    let i = 1;
    if (!playing || BPM === "") {
      console.log("clearing", this.state.interval);
      clearInterval(this.state.interval);
    } else if (playing) {
      const int = setInterval(() => {
        meterFunc(i);
        i === this.state.meter ? (i = 1) : i++;
      }, 60000 / BPM);
      this.setState({ interval: int });
      //console.log(this.state.interval)
    }
  }
  changeMeter(meter) {
    this.setState({ meter: meter });
    if (this.state.playing) {
      this.go(false, 0, 1);
      this.go(true, this.state.BPM, meter);
    }
  }
  changeBPM(BPM) {
    //changes bpm, restarts metronome with new bpm or stops it if there is no input
    this.setState({ BPM: BPM });
    if (BPM === null) {
      this.setState({ playing: false });
      this.go(false, BPM);
    } else if (this.state.playing) {
      this.go(false, 0, 1);
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
          <Button playing={this.state.playing} playPause={this.playPause} />
          <Tempo changeBPM={this.changeBPM} />
        
      </div>
    );
  }
}

ReactDOM.render(<Metro />, document.querySelector("#app"));
