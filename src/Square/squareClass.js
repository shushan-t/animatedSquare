import React, {Component } from 'react';
import "../Styles/square.css";

class SquareClass extends Component {

    state = { 
        count: 0,
        bool: false
     };
   
    random=(number)=> {
      return Math.floor(Math.random() * (number+1));
    }

    changeState = () => {
        this.setState({ bool: !this.state.bool });
      };

    handleIncrement = () => {
      this.setState({count: this.state.count + 1})
    };

    formatCount () {
      const{ count } = this.state;
      return count === 0 ? 0 : count;
    }

    render() { 
        return (

        <div className="header-container" >
          <span >{this.formatCount()}</span>
          <button onClick={this.changeState}  >Click me</button>
            {this.state.bool ? <div onClick={this.handleIncrement} className='divAnimated' style={{
            backgroundColor: 'rgb(' + this.random(255) + ',' + this.random(255) + ',' + this.random(255) + ')'}} ></div> : null}
        </div>
         
      );
    }

    
}
 
export default SquareClass;

// onClick={this.style.backgroundColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')'}
