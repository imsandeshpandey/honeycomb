import React from 'react';
import './Header.css'

function Header() {
    // const[scroll,setScroll]=React.useState(0);

    // useEffect(() => {
    //     // const scrollListener = window.addEventListener('scroll', () => {
    //     //     console.log("Scrolling", window.pageYOffset);
    //     //     setScroll(window.pageYOffset);
    //     // })

    //     // // return () => {}
    // }, [])
    
    // console.log(scroll);
    return (
        <div className='header'>
            <div className="header-logo-container">
            <img src="https://honeycomb.sh/logo.svg" alt="" className="header-logo"/> 
            </div>
            

        </div>
    )
}

export default Header
