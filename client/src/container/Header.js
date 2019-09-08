import React from 'react';
import { NavLink } from 'react-router-dom'
import '../style/header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
                        {/* <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" /> */}
                    </a>
                    <NavLink to="/" exact className="navbar-brand" >Home</NavLink>
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <NavLink to='/signup' className="nav-link">Signup</NavLink>
                            </li>
                            <li className="navbar-item">
                                <NavLink to='/login' className="nav-link" >Signin</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;
