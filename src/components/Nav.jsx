import React, { useState } from 'react'
import "./Nav.css"
import {RiMenu2Fill} from "react-icons/ri"
import {GrClose} from "react-icons/gr"

const Nav = () => {
    const [active,setActive] = useState(false)

    const handleClick = ()=>{
        if(active){
            setActive(false)
        }
        else{setActive(true)}
    }
  return (
    <>
    <header className={active?"header active":"header"} >
        <nav className="navbar">
            <ul className="ullist">
                <li><a className="navbar-links" href="#home">Home</a></li>
                <li><a className="navbar-links" href="#about">About</a></li>
                <li><a className="navbar-links" href="#skills">Skills</a></li>
                <li><a className="navbar-links" href="#projects">Projects</a></li>
                <li><a className="navbar-links" href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div className="mobile-navbar-btn">
            {/* <ion-icon name="menu-outline" className="mobile-nav-icon"></ion-icon>
            <ion-icon name="close-circle-outline" className="mobile-nav-icon"></ion-icon> */}
            <RiMenu2Fill name="menu-outline" className="mobile-nav-icon" onClick={handleClick} style={{fontSize:"100px"}} />
            <GrClose name="close-circle-outline" className="mobile-nav-icon" onClick={handleClick}/>
        </div>
    </header>
      
    </>
  )
}

export default Nav
