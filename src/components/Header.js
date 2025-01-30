import React from 'react';

function Header () {
    return (
        <div className="header">
            <h1>HeadNovel</h1>
            <input type="text" placeholder="Search..." />
            <div className="header__profile"></div>
        </div>
    );
}

export default Header;