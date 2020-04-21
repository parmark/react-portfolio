import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className='Navigation'>
            <Link to='/'>About Me</Link>
            <Link to='/portfolio'>Portfolio</Link>
        </div>
    )
}

export default Navigation;