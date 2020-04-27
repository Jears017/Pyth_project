import React from 'react';
import img from './../../python-logo.png'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'


const Header = () => {
  return (
    <div className={s.header}>
      <img className={s.logo} src={img} alt="" />
      <nav className={s.nav_bar}>
        <NavLink className={s.link} to="/home">Home</NavLink> 
        <NavLink className={s.link} to="/about">About</NavLink>
        <a className={s.link} href="#">Lectures</a>
        <a className={s.link} href="#">Tasks</a>
      </nav>
    </div>
  );
}

export default Header;
