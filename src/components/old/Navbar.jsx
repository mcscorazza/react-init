import React, { useState } from "react";
import './Navbar.css'

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
      <nav className={`navbar ${navbarOpen ? '' : 'nav-close'}`}>
        <span
          className="toggle"
          onClick={() => setNavbarOpen((prev) => !prev)}
        >
          {navbarOpen ? 
            <svg width="32px" height="32px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
          : 
            <svg width="32px" height="32px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path fill="#FFFFFF" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"/>
            </svg>
          }
        </span>
        <ul>
            <li><img src="./imgs/home.svg" alt="" /><span>HOME</span></li>
            <li><img src="./imgs/mail.svg" alt="" /><span>EMAIL</span></li>
            <li><img src="./imgs/client.svg" alt="" /><span>CLIENT</span></li>
            <li><img src="./imgs/gps.svg" alt="" /><span>GPS</span></li>
            <li><img src="./imgs/product.svg" alt="" /><span>PRODUCT</span></li>
            
        </ul>
      </nav>
    </div>
  );
}
