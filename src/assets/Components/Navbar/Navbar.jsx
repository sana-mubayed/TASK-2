import React from 'react'
import './Navbar.css';
import logo from '../../images/Logo Container.png';

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar__left">
                    <img src={logo} alt="Logo" className="navbar__logo" />
                </div>
                <ul className="navbar__links">
                    <li><a className='b-left b-right o-95' href="#home">Home</a></li>
                    <li><a className='b-right' href="#about">About Us</a></li>
                    <li><a className='b-right' href="#programs">Programs</a></li>
                    <li><a className='b-right' href="#admission">Admission</a></li>
                    <li><a cl href="#contact" className='o-75'>Contact</a></li>
                </ul>
            </nav>
        </>
    )
}
