import React, { useState } from 'react';
import './Header.css'

function Header() {
    const[style,setStyle]=useState({});
    const[top,setTop]=useState(true);
    var prevScrollPos = window.pageYOffset;

    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
    //   var difference = prevScrollPos-currentScrollPos;
      if (prevScrollPos > currentScrollPos) {
    setStyle({top:"0"})
      } else {
        setStyle({top:"-65px"})
      }
      prevScrollPos = currentScrollPos;
      currentScrollPos>0 ? setTop(false):setTop(true);
    }
    console.log(top);
    return (
       

        <div className={`header ${!top && 'header-border'}`} style={style} >
 
            <div className="header-logo-container">
            <img src="https://honeycomb.sh/logo.svg" alt="" className="header-logo"/> 
            </div>
            

        </div>
    )
}

export default Header

