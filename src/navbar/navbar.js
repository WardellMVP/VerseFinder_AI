import React,{useState} from "react";
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import {SiHomeassistant} from 'react-icons/si';
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';
import { IconContext } from "react-icons/lib";



function Navbar()  {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return(
        <IconContext.Provider value = {{color: "#000"}}>
        <nav className = "navbar">
            <div className = 'navbar-container container'>
                <Link to = '/' className = "navbar-logo" >
                    <SiHomeassistant className="navbar-icon" onClick = {closeMobileMenu}/>
                    Holyscript
                </Link>
                <div className = 'menu-icon' onClick = {handleClick}>
                    {click ? <FaTimes/> : <FaBars color = '#fff'/>}
                    
                </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className  = 'nav-item'>
                        <NavLink to = '/' className ={({ isActive }) => 'nav-links' + (isActive ? " activated" : " ")}  onClick={closeMobileMenu}>
                            Home
                        </NavLink>

                    </li>
                    <li className  = 'nav-item'>
                        <NavLink to = '/about' className ={({ isActive }) => 'nav-links' + (isActive ? " activated" : " ")} onClick={closeMobileMenu}>
                            About
                            
                        </NavLink>

                    </li>
                    <li className  = 'nav-item'>
                        <NavLink to = '/contact' className ={({ isActive }) => 'nav-links' + (isActive ? " activated" : " ")}onClick={closeMobileMenu}>
                            Contact
                        </NavLink>

                    </li>
                </ul>
            </div>
        </nav>
        </IconContext.Provider>
    )
}
export default Navbar;