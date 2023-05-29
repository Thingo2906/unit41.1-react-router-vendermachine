import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css'
function Navbar (){
    return (
        <nav className="navbar">
        <NavLink exact to ='/'>Home</NavLink>
        <NavLink exact to ='/Soda'>Soda</NavLink>
        <NavLink exact to = '/Chips'>Chips</NavLink>
        <NavLink exact to ='/Sardines'>Sardines</NavLink>
        </nav>
    )
}
export default Navbar;