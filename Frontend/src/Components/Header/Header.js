import React from 'react';
import '../../SASS/Components/_Header/_Header.scss';

const Header = () => {
    return (
        <header id="navBar">
            <div className="container">
                <a href="#">MERN<span>|Stack</span></a>
            </div>
        </header>
    )
}

export default Header
