import React, { Component } from "react";
import Player from "./Player";
import PlayerComputer from "./PlayerComputer";
import ThongTin from "./ThongTin";

export default class GameOanTuTi extends Component {
  render() {
    return (
      <div className="myContainer pt-5">
        <div className="row">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            {" "}
            <ThongTin />
          </div>
          <div className="col-4">
            {" "}
            <PlayerComputer />
          </div>
        </div>
        <button className="btn btn-success">Play Game</button>
      </div>
    );
  }
}
