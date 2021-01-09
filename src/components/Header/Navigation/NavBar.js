import React from 'react';
import { Link } from 'react-router-dom';

import { NavData } from './NavData';
import './NavBar.css';

function NavBar() {
    return (
        <ul className='nav-menu-items'>
            {NavData.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            <span>{item.title}</span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    )
}

export default NavBar;