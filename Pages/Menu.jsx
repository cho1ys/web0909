import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='menu'>
            <Link to='/'className='homeMenu'>Home</Link>
            <Link to='/product' className='productMenu'>Product</Link>
        </div>
    );
};

export default Menu;