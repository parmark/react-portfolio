import React from 'react';

function Project(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} alt="project"/>
            </div>
            <div className="card-content">
                <p className='black-text'>{props.description}</p>
            </div>
            <div className="card-action">
                <a className='black-text' href={props.github}>Github</a>
                <a className='black-text' href={props.deploy}>Site</a>
                <a className='black-text' href={props.link}></a>
            </div>
        </div>
    )
}

export default Project;