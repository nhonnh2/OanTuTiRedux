import React, { Component } from "react";
import { connect } from "react-redux";
import { actChooseHand } from "../store/actions/OanTuTiAction";
class Player extends Component {
  render() {
    const { listHand, player, chooseHand } = this.props;
    return (
      <div className="player">
        <div className="result">
          <img src={listHand[player]} alt="" />
        </div>
        <div className="player__img">
          <img src="./image/player/player.png" alt="" />
        </div>
        <div className="listHand">
          {listHand.map((srcImgHand, idx) => {
            return (
              <button key={idx} onClick={() => chooseHand(idx)}>
                <img src={srcImgHand} alt="" />
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToDrops = (state) => ({
  player: state.gameOanTuTiReducer.player,
});
const mapDispatchToDrops = (dispatch) => ({
  chooseHand: (idx) => {
    dispatch(actChooseHand(idx));
  },
});
export default connect(mapStateToDrops, mapDispatchToDrops)(Player);
