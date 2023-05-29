import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Chips.css'
 function Chips () {
    const [bag, setBag] = useState(0);
    const addBag =() =>{
        setBag(bag => bag + 1);
    }
    return (
        <div className ="chips">
            <h1>BAGS EATEN: {bag}</h1>
            <button onClick ={addBag}>NOM NOM NOM</button>
            <Link to ='/'>GO BACK</Link>
        </div>
    )
 }
 export default Chips;