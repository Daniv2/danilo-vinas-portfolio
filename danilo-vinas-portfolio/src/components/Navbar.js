// src/components/Navbar.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../img/dos.jpeg'; // Assuming you have a logo image

const Navbar = () => {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
      // Scrolling down
      setScrollingUp(false);
    } else {
      // Scrolling up
      setScrollingUp(true);
    }

    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav className={`navbar ${scrollingUp ? '' : 'hidden'}`}>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
        </li>
        <li className="navbar-item"><Link to="/projects">Projects</Link></li>
        <li className="navbar-item"><Link to="/contact">Contact</Link></li>
        <li className="navbar-item dropdown">
          <button className="dropdown-button">Menu</button>
          <div className="dropdown-menu">
            <Link to="/about" className="dropdown-item">About</Link>
            <Link to="/design" className="dropdown-item">Design</Link>
            <Link to="/develop" className="dropdown-item">Develop</Link>
            <Link to="/blog" className="dropdown-item">Blog</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
