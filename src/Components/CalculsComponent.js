import React, { Component } from "react";

// Component which displays the calcul area
class CalculsComponent extends Component {

    //Constructor
    constructor(){
        super();
        this.state = {
            //Message result --> "Bravo" or "Essai encore"
            msgResultat: "",
        }
    }
 
  render() {
    const { calculs } = this.props;
    const {temporaryResult} = this.props;
    const {resultat} = this.props;
    let{msgResultat} = this.props;
    msgResultat = this.state.msgResultat;

    if(resultat == temporaryResult){
        this.state.msgResultat = "Bravo ! ";
     }else{
         this.state.msgResultat = "Essai encore !"
     }
  
    return (
      <div className="calculs">
        <h3>Calculs : </h3>
        <p>{calculs}</p>
        <p>{temporaryResult}</p>
        <p>{msgResultat}</p>     
      </div>
    );
  }
}

export default CalculsComponent;
