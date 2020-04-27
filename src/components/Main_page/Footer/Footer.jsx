import React from 'react';
import s from './Footer.module.css'


const Footer = () => {
  return (
    <div className={s.footer}>
      <nav className={s.nav_bar}>
        <a className={s.link} href="#">Home</a>
        <a className={s.link} href="#">About</a>
        <a className={s.link} href="#">Lectures</a>
        <a className={s.link} href="#">Tasks</a>
      </nav>
    </div>
    
  );
}

export default Footer;
