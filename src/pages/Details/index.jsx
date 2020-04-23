import React from 'react';

function Details(props) {
    return (
        <div className='project-specs'>
            <img src={props.image} alt="project"/>
            <div className='tech'>
                <h1><p>Technical Details</p></h1>
                <p>{props.techDetails}</p>
            </div>
            <div className='tech'>
                <h1><p>Techologies Used</p></h1>
                <ul>
                    {props.techUsed.split(',').map(tech => 
                        <li><p className='bold'>{tech}</p></li>)}
                </ul>
            </div>
            <img src={props.subImage} alt="sub project"/>
        </div>
    )
}

export default Details;