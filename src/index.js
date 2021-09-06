import React, { Component } from "react";
import ReactDOM from "react-dom";
import ResultComponents from "./Components/ResultComponents.js";
import KeypadComponent from "./Components/KeypadComponent.js";
import CalculsComponent from "./Components/CalculsComponent.js";
import HintComponent from "./Components/HintComponent.js";

import "./css/index.css";

//Main class for the app
class App extends Component {
  constructor() {
    super();
    this.state = {
        //Array of the calculs
        calculs:[],
        //Results which will be displyed
        result: "", 
        //Random numbers
        randomNumber1: this.randomNumber(100),       
        randomNumber2:this.randomNumber(100),
        randomNumber3:this.randomNumber(100),
        //Random Operators
        randomOperator1:this.randomOperator(),
        randomOperator2:this.randomOperator(),
        temporaryResult:0,  
        arrayResult :[],      
    };
  }

  //functions when we click on a button
  onClick = (button) => {
    //"=" --> calculate function
    if (button === "=") {
      this.calculate();
      this.state.calculs.push(
        this.state.result + " = " + eval(this.state.result) + " | "
      );      
    }

    //"C" --> call the reset function
    else if (button === "C") {
      this.reset();
      //the result is reset too
      this.setState({calculs:[]});
    }
    //Backspace
    else if (button === "CE") {
      this.backspace();
    }
    //In any other case, display the number or sign which is on the button
    else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  //function calculate (+,-,*,/)
  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.result) + "",
        temporaryResult:eval(this.state.result), 
             
      });
      this.state.arrayResult.push(this.state.temporaryResult);
    } catch (e) {
      //If there is an error
      this.setState({
        result: "error",
      });
    }
  };

  // reset function
  reset = () => {
    this.setState({
      result: "",
      temporaryResult:0,
    });
  };

  //backspace function
  backspace = () => {
    this.setState({
        //delete the last item 
      result: this.state.result.slice(1, -1),
    });
  };

  //generate a random number between 0 and 99
  randomNumber = (max)=>{
    return  Math.floor(Math.random() * max);
  }

  //generator a random operator
  randomOperator = ()=>{
      const operators = ['+', '-', '*', '/'];
      return operators[this.randomNumber(3)];
  }

  //Calcul the operation generated with the random numbers and the random operators
  calculOperation = (number1, number2, number3, operator1, operator2)=>{
      return eval(number1  + operator1 + number2 + operator2 + number3);
  }

  deleteLastItem(array){
    array.pop();
    return array;
  }

  //Function to delete the last item of the array Calcul
  cancelCalcul = ()=>{  
   /// this.state.calculs.slice(-1);

  this.setState({
      calculs: this.deleteLastItem(this.state.calculs),
      temporaryResult : this.state.arrayResult,
   }) 
   
   console.log(typeof this.state.arrayResult);
   console.log(this.temporaryResult);

  }

  render() { 
    let {number1} = this.props;
    let {number2} = this.props;
    let {number3} = this.props;
    let {operator1} = this.props;
    let {operator2} = this.props;
    let {operation} = this.props;
    let {temporaryResult} = this.props;
  
    temporaryResult  = this.state.temporaryResult;
    number1 = this.state.randomNumber1;
    number2 = this.state.randomNumber2;
    number3 = this.state.randomNumber3;
    operator1 = this.state.randomOperator1;
    operator2 = this.state.randomOperator2;
    operation = this.calculOperation(number1, number2, number3, operator1, operator2);

    return (
      <div >
        <h1 className="title">A Calculator made with React</h1>
       
        <h2 className = 'title'>You have to find {operation} with {number1}, {number2} and {number3}</h2> 
        <button className="cancelCalcul" onClick = {this.cancelCalcul}>Cancel</button> 
        <div className="calculator-body">
        <div className='grid'>
          <div className="calculator">
            <ResultComponents result={this.state.result} />
            <KeypadComponent onClick={this.onClick} />
          </div> 
        <CalculsComponent  temporaryResult = {temporaryResult} resultat = {operation} calculs={this.state.calculs} />   
      </div>
      <HintComponent number1 = {number1} operator1 = {operator1}/>
      </div></div>
    );
  }
}

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
export default App;
