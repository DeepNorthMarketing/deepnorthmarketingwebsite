import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../shared/images/Logo.svg';
import NavBar from './Navigation/NavBar';
import './Header.css';

const Footer = () => {
    return (
        <div className='header'>
            <Link to='/'>
                <img id='logo' src={ Logo } alt="Deep North Marketing Logo" />
            </Link>
            <NavBar />
        </div>
    );
    
};

export default Footer;