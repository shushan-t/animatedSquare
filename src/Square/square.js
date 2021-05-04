import React, {Component } from 'react';
import "../Styles/square.css";

class Square extends Component {
    state = {
        bool: false,
        count: 0,
        imgUrl: "",
        animated: true
      };

      random = (number) => {
        return Math.floor(Math.random() * (number+1));
     }
      
    
      removeClassName = (e) => {
        let target = e.target;
        target.classList.remove("animated");
        this.setState({imgUrl: "https://picsum.photos/200"})
        this.setState({ bool: true});
        this.setState({ animated: false});
       

      };


      handleIncrement = () => {
        this.setState({count: this.state.count + 1})
        this.setState({ animated: true});
        this.setState({imgUrl: ""});
        this.setState({ bool: false});

      };


      formatCount = ()=> {
        const{ count } = this.state;
        return count === 0 ? 0 : count;
      };


      render() {
        return (
         <div className={`box ${this.state.animated && "animated"}`}
            style={{ backgroundColor: 'rgb(' + this.random(255) + ',' + this.random(255) + ',' + this.random(255) + ')'}}  
            onClick={this.handleIncrement}
            
            onAnimationEnd={this.removeClassName}>
              {this.state.bool === true ?
            <img src={this.state.imgUrl} alt="#" />:  <span >{this.formatCount()}</span>}
           
            
         </div>
                 
        );
   } 
}
 
export default Square;






