import React from 'react';
import '../../SASS/Components/_Header/_Header.scss';
import Profile from './Profile';

const Header = () => {
    return (
        <header id="navBar">
            <div className="container">
                <a href="#">MERN<span>|Stack</span></a>
                <Profile />
            </div>
        </header>
    )
}

export default Header
