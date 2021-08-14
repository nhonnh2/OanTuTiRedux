import React, { Component } from "react";
import { connect } from "react-redux";
class ThongTin extends Component {
  render() {
    const { soBanThang, soLanChoi } = this.props;
    return (
      <div>
        <h1 className="text-warning">I'm iron man, i love you 3000</h1>
        <h1 className="text-success">
          Số bàn thắng: <span className="text-warning">{soBanThang}</span>
        </h1>
        <h1 className="text-success">
          Số lần chơi: <span className="text-warning">{soLanChoi}</span>
        </h1>
      </div>
    );
  }
}
const mapStateToDrops = (state) => ({
  soBanThang: state.gameOanTuTiReducer.soBanThang,
  soLanChoi: state.gameOanTuTiReducer.soLanChoi,
});
export default connect(mapStateToDrops)(ThongTin);
