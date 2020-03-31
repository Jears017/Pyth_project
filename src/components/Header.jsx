import React from 'react';
import '../App.css';
import img from './python-logo.png'
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={img} alt="" />
      <nav className="nav_bar">
        <NavLink className="link" to="/home">Home</NavLink> 
        <NavLink className="link" to="/about">About</NavLink>
        <a className="link" href="#">Lectures</a>
        <a className="link" href="#">Tasks</a>
      </nav>
    </div>
  );
}

export default Header;
