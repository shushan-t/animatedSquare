import React, {Component } from 'react';
import "../Styles/square.css";

class SquareS extends Component {
    state = {
        count: 0,
        bool: false,
        text: "",
        animated: false,
        running: false
      };

      random = (number) => {
        return Math.floor(Math.random() * (number+1));
     };
      
    
      animationEnd = () => {
       
        this.setState({text: "X"})
        this.setState({ bool: true});
        this.setState({ animated: true});
     };


      handleIncrement = () => {
        this.setState({count: this.state.count + 1});
        this.setState({ animated: true});
        this.setState({ running: !this.state.running});
       
     };


     closePopUp = () => {
        this.setState({animated: false});
        this.setState({text: ""});
        this.setState({bool: false});
        this.setState({ running: !this.state.running});
     } 

    stopProp = (e)=>{
      e.stopPropagation();
    };


      render() {
        return (
         <div className={`box ${this.state.animated && "animated"} ${this.state.running? "running" :"paused"}`}
                          
            style={{ backgroundColor: 'rgb(' + this.random(255) + ',' + this.random(255) + ',' + this.random(255) + ')'}}  
            onClick={this.handleIncrement}
            onAnimationEnd={this.animationEnd}>
            
            {this.state.bool === true ?
            <p className="popUp" onClick={this.stopProp} >
               <u onClick={this.handleIncrement}>{this.state.count}</u>
               <button  onClick={this.closePopUp}>{this.state.text}</button>
            </p> : this.state.count}
           
            
         </div>
                 
        );
   } 
};

export default SquareS;

