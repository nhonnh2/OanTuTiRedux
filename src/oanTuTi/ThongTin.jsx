import React, { Component } from "react";

export default class ThongTin extends Component {
  render() {
    return (
      <div>
        <h1 className="text-warning">I'm iron man, i love you 3000</h1>
        <h1 className="text-success">
          Số bàn thắng: <span className="text-warning">0</span>
        </h1>
        <h1 className="text-success">
          Số lần chơi: <span className="text-warning">0</span>
        </h1>
      </div>
    );
  }
}
