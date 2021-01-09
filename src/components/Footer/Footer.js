import React from 'react';

import Cliffs from '../../shared/images/Cliffs.svg';
import Trees from '../../shared/images/Trees.svg';
import Forest from '../../shared/images/Forest.svg';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <img id='cliffs' src={ Cliffs } alt="Cliffs" />
            <img id='trees' src={ Trees } alt="Trees" />
            <img id='forest' src={ Forest } alt="Forest" />
        </div>
    );
    
};

export default Footer;