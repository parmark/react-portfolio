import React from 'react';
import './style.css'

function Home() {
    return (
        <div className="home-container">
            <div className='home'>
            <p className='bold'>Hello, my name is Kevin Parmar.</p>
            <p>I am a recent graduate of the UNCC Coding Boot Camp and am pursuring a career in Web Development.</p>
            <p></p>
            <p>
                <a className='link' href="https://github.com/parmark">Github</a>
                <a className='link' href="https://www.linkedin.com/in/kevin-parmar-9bbb5919b">LinkedIn</a>
            </p>
        </div>
        </div>
    )
}

export default Home;