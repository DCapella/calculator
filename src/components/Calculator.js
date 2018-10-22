import React from "react";

import "./calculator.css";
import { CalculatorDisplay } from "./CalculatorDisplay";


export class Calculator extends React.Component {
  render() {
    return (
      <div id="main">
        <h2>Calculator</h2>
        <div id="display-box">
          <div id="display-number">
            <p id="display-formula">{this.props.tExp}</p>
            <p>{this.props.number}</p>
          </div>
          <div id="display">
            <CalculatorDisplay state={this.props} />
          </div>
        </div>
        <div id="footer">
          <p>Created by David Capella</p>
        </div>
      </div>
    );
  }
}
