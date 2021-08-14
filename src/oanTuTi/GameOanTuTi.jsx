import React, { Component } from "react";
import Player from "./Player";
import PlayerComputer from "./PlayerComputer";
import ThongTin from "./ThongTin";
import { connect } from "react-redux";
import { actPlayGame } from "../store/actions/OanTuTiAction";

class GameOanTuTi extends Component {
  // bua<=>0
  // bao<=>1
  // keo<=>2
  // ct:(p1+1) % 3 == p2 -->p2 thắng
  listHand = [
    "./image/hand/bua.png",
    "./image/hand/bao.png",
    "./image/hand/keo.png",
  ];
  render() {
    const { playGame } = this.props;
    return (
      <div className="myContainer pt-5">
        <div className="row">
          <div className="col-4">
            <Player listHand={this.listHand} />
          </div>
          <div className="col-4">
            {" "}
            <ThongTin />
          </div>
          <div className="col-4">
            {" "}
            <PlayerComputer listHand={this.listHand} />
          </div>
        </div>
        <button className="btn btn-success" onClick={playGame}>
          Play Game
        </button>
      </div>
    );
  }
}

const mapDisPatchToDrops = (dispatch) => ({
  playGame: () => {
    dispatch(actPlayGame());
  },
});
export default connect(null, mapDisPatchToDrops)(GameOanTuTi);
