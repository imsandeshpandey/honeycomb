import React, { useState } from 'react';
import './Header.css'

function Header() {
    const[top,setTop]=useState(true);
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      currentScrollPos>0 ? setTop(false):setTop(true);
    }
    console.log(top);
    return (
       

        <div className={`header ${!top && 'header-border'}`}>
 
            <div className="header-logo-container">
            <img src="https://honeycomb.sh/logo.svg" alt="" className="header-logo"/> 
            </div>
            

        </div>
    )
}

export default Header

