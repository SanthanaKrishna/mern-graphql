import React from 'react';
import { NavLink } from 'react-router-dom'
import '../style/header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="header" id="header">
                <NavLink to='/' exact>Home</NavLink>
                <NavLink to='/signup' exact>Signup</NavLink>
                <NavLink to='/sgnin' exact>Signin</NavLink>
            </div>
        )
    }
}

export default Header;
