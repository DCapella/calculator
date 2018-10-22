import React from "react";


export class CalculatorDisplay extends React.Component {
  render() {
    const map = {
      0: "clear", 1: "plusMinus", 2: "percent", 3: "divide",
      4: "seven", 5: "eight", 6: "nine", 7: "multiply",
      8: "four", 9: "five", 10: "six", 11: "subtract",
      12: "one", 13: "two", 14: "three", 15: "add",
      16: "zero", 17: "decimal", 18: "back", 19: "equals"
    }
    return (
      <div id="calculator-display">
        {this.props.state.displayItems.map((item, i) => {

          return (
            <div>
              <button onClick={this.props.state.updateInput} value={map[i]} id={map[i]}>{item}</button>
            </div>
          );
        })}
      </div>
    );
  }
}
