import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className='navigation'>
            <Link className='link right' to='/react-portfolio'><p>About Me</p></Link>
            <Link className='link left' to='/react-portfolio/portfolio'><p>Portfolio</p></Link>
        </div>
    )
}

export default Navigation;