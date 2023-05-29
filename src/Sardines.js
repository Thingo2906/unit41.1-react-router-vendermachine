import React from 'react';
import {Link} from 'react-router-dom';
import './Sardines.css';
function Sardines (){
    return (
        <div className ="Sardines">
            <h1>YOU DON'T EAT THE SARDINES. THE SARDINES, THEY EAT YOU!</h1>
            <Link to = '/'>GO BACK</Link>
        </div>
    )
}
export default Sardines;