import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
const logo = '/shared/logo.svg'
const hamburger = '/shared/icon-hamburger.svg'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const { pathname } = useLocation()

    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="nav-links-container">
                <img src={hamburger} className="hamburger-icon visible" alt="menu" onClick={() => setMenuOpen(prev => !prev)} />
                <ul className={`nav-links underline-indicators ${menuOpen ? 'visible' : 'hidden'}`}>
                    <li className={pathname === '/' ? 'active' : ''}><NavLink to="/" end onClick={() => setMenuOpen(false)} className="page-link font-paragraph uppercase text-offwhite letter-spacing-large"><span>00</span> Home</NavLink></li>
                    <li className={pathname === '/destination' ? 'active' : ''}><NavLink to="/destination" onClick={() => setMenuOpen(false)} className="page-link font-paragraph uppercase text-offwhite letter-spacing-large"><span>01</span> Destination</NavLink></li>
                    <li className={pathname === '/crew' ? 'active' : ''}><NavLink to="/crew" onClick={() => setMenuOpen(false)} className="page-link font-paragraph uppercase text-offwhite letter-spacing-large"><span>02</span> Crew</NavLink></li>
                    <li className={pathname === '/technology' ? 'active' : ''}><NavLink to="/technology" onClick={() => setMenuOpen(false)} className="page-link font-paragraph uppercase text-offwhite letter-spacing-large"><span>03</span> Technology</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}