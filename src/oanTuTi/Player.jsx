import React, { Component } from "react";

export default class Player extends Component {
  render() {
    return (
      <div className="player">
        <div className="result">
          <img src="./image/hand/keo.png" alt="" />
        </div>
        <div className="player__img">
          <img src="./image/player/player.png" alt="" />
        </div>
        <div className="listHand">
          <button>
            <img src="./image/hand/keo.png" alt="" />
          </button>
          <button>
            <img src="./image/hand/bua.png" alt="" />
          </button>
          <button>
            <img src="./image/hand/bao.png" alt="" />
          </button>
        </div>
      </div>
    );
  }
}
