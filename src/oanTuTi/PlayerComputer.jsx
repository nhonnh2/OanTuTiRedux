import React, { Component } from "react";

export default class PlayerComputer extends Component {
  render() {
    return (
      <div className="player">
        <div className="result">
          <img src="./image/hand/keo.png" alt="" />
        </div>
        <div className="player__img">
          <img src="./image/player/playerComputer.png" alt="" />
        </div>
      </div>
    );
  }
}
