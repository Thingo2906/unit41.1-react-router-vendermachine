import React from 'react';
import {Link}  from 'react-router-dom';
import './Soda.css';
function Soda (){
    return (
        <div className ="soda">
            <h1>OMG SUGARRRR</h1>
            <Link to = "/">GO BACK</Link>    
        </div>
    )
}
export default Soda;