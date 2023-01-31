import React from 'react';
import './styles.css';
import logo from './media/logo.png';

const NavBar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="Logo"/>
            <nav className='menu'>
                <li>
                    <ul>
                        <a href="">Inicio</a>
                    </ul>
                    <ul>
                        <a href="">Productos</a>
                    </ul>
                    <ul>
                        <a href="">Contacto</a>
                    </ul>
                </li>
            </nav>
        </div>
    );
}

export default NavBar;