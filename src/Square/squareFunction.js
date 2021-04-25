import {useState} from 'react';
import "../Styles/square.css";
    
function SquareFunction(){

    const random = (number) => {
          return Math.floor(Math.random() * (number+1));
       }

    const styles = {
        padding:"50px",
        background:'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')',
        width: '10%',
        position: 'relative'
    }

    const colors = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    const [color, setColor] = useState(colors);
    const [count, setCount] = useState(0)
   
    
    const click = (e)=>{
        setCount(count + 1)
        let target = e.target;
        target.classList.add("animated");
        target.style.backgroundColor = colors;
        setColor(color);
    }

    const remove = (e)=>{
        let target = e.target;
        target.classList.remove("animated");
        
    }
    return (
    <div className='App' onClick = {click} style={styles} onMouseDown={remove}>
         <p className="count"> {count} </p>
    </div>
    );
}

export default SquareFunction;
