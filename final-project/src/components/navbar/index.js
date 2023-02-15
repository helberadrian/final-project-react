import { NavLink } from 'react-router-dom';
import './styles.css';
import logo from './media/logo.png';

const NavBar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="Logo"/>
            <ul className='menu'>
                <NavLink
                    to="/"
                    className="NavLink"
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                    Inicio
                </NavLink>
                <NavLink
                    to="/category"
                    className="NavLink"
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                    Categorias
                </NavLink>
                <NavLink
                    to="/contact"
                    className="NavLink"
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                    Contact
                </NavLink>
            </ul>
        </div>
    );
}

export default NavBar;