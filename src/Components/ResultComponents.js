import React, { Component } from "react";


//Component which displays the result component
class ResultComponent extends Component {
  render() {
    const { result } = this.props;
    return (
      <div className="result">
        <p>{result}</p>
      </div>
    );
  }
}

export default ResultComponent;
