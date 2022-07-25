import React from 'react';
import img from '../../logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='header'>
            <img src={img} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Navbar;