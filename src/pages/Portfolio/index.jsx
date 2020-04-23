import React from 'react';
import portfolio from '../../portfolio.json';
import Project from '../../components/Project'
import './style.css'

function Portfolio() {
    return (
        <div className='portfolio'>
            {portfolio.map(project => 
                <Project 
                    name={project.name}
                    image={project.image}
                    description={project.description}
                    github={project.githubLink}
                    deploy={project.deployLink} 
                    link={project.detailsLink}
                    />
            )}
        </div>
    )
}

export default Portfolio;