import React from 'react';

function Header() {
    return (
        <header>
            <img
                className='logo'
                src='https://www.pngall.com/wp-content/uploads/2016/05/Trollface.png'
                alt='Logo'
            />
            <div>Meme Generator</div>
            <ul>
                <a href='#contact'><li>Contact</li></a>
                <a href='#about'><li>About</li></a>
            </ul>
        </header>
    );
}

export default Header;