import React from 'react';
import './Header.css'; // Assuming you will create a Header.css for specific styles

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Madhav RO Sales</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;