import React, { Component } from "react";
import { connect } from "react-redux";
class PlayerComputer extends Component {
  render() {
    const { listHand, computerPlayer } = this.props;
    return (
      <div className="player">
        <div className="result">
          <img src={listHand[computerPlayer]} alt="" />
        </div>
        <div className="player__img">
          <img src="./image/player/playerComputer.png" alt="" />
        </div>
      </div>
    );
  }
}
const mapStateToDrops = (state) => ({
  computerPlayer: state.gameOanTuTiReducer.computerPlayer,
});
export default connect(mapStateToDrops)(PlayerComputer);
