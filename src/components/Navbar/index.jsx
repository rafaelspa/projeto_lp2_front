import React from 'react';
import Logo from '../Logo';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link to="">
                    <Logo />
                </Link>
                <h3>Company</h3>
            </nav>
        </header>
    );
}

export default Navbar;

