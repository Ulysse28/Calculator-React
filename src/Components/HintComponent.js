import react, { Component } from "react";


//Component to display an hint
class HintComponent extends Component {

    constructor() {
        super();
        this.state= {
            class : "hide",
        }
    }

    //Method to display the hint
    onClick = () =>{
        console.log('ok');
        this.setState({
            class:'show',
        })
    }
    
  render() {
    const {number1} = this.props;
    const {operator1} = this.props;

    return (
      <div className = "hint">
        <button onClick = {this.onClick}>Hint</button>
        <p className = {this.state.class} >{number1} {operator1}</p>    
      </div>
    );
  }
}

export default HintComponent;
