import React from 'react';
import Logo from '../Logo';
import { Link } from 'react-router-dom'
import "./style.css"

const Navbar = () => {
    return (
        <header>
            <nav className="container">
                <div className="nav-content">
                    <Link to="">
                        <Logo />
                    </Link>
                    <h3>Company</h3>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;

