import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className='navigation'>
            <Link className='link right' to='/'><p>About Me</p></Link>
            <Link className='link left' to='/portfolio'><p>Portfolio</p></Link>
        </div>
    )
}

export default Navigation;