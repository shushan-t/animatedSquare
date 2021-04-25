import React, {Component } from 'react';
import "../Styles/square.css";

class Square extends Component {
    state = {
        bool: false,
        count: 0
      };

      random = (number) => {
        return Math.floor(Math.random() * (number+1));
     }
      
     changeState = () => {
      this.setState({ bool: !this.state.bool });
    };
       changeClass = (e) => {
        let target = e.target;
        target.classList.add("animated");
      };

      removeClass = (e) => {
        let target = e.target;
        target.classList.remove("animated");

      };


      handleIncrement = () => {
        this.setState({count: this.state.count + 1})
      };


      formatCount () {
        const{ count } = this.state;
        return count === 0 ? 0 : count;
      };


      render() {
        return (
         <div className='div'
            style={{ backgroundColor: 'rgb(' + this.random(255) + ',' + this.random(255) + ',' + this.random(255) + ')'}}  
            onClick={this.handleIncrement}
            onMouseMove={this.changeClass} 
            onMouseDown={this.removeClass}>
            <span >{this.formatCount()}</span>
         </div>
                 
        );
   } 
}
 
export default Square;






