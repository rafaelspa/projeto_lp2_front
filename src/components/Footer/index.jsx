import React from 'react';
import Logo from '../Logo';
import './style.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <Logo/>
            <p>Printing Manager - Todos os direitos reservados</p>
            <p>Siganos-nos em nossas redes sociais:</p>
        </div>
    );
}

export default Footer;

