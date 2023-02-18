import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Header = () => {
    return (
        <div className='nav-header'>
            <NavLink to='/home'> Home </NavLink>
            <NavLink to='/adduser'> Add User </NavLink>
            <NavLink to='/about'> About </NavLink>
        </div>
    );
};

export default Header;