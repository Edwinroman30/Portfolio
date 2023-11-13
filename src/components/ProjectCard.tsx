import './ProjectCard.css';
import React,{PropsWithChildren} from 'react';
import IProject from './types/IProject';
import {AiOutlineLink} from 'react-icons/ai';

interface ProjectCardProp extends PropsWithChildren{
    project : IProject;
};

const ProjectCard : React.FC<ProjectCardProp> = ({project}) => {

    
    return (
        <div className="is-flex is-flex-direction-column">

            <div className="">
                <div className="media mb-3">
                    <div className="media-content has-text-centered">
                        <p className="title is-4">{project.name}</p>
                        <p className="subtitle is-6">{project.platformEnvironment}</p>
                    </div>
                </div>
        
                <div className="content project-paragraph p-4 ">
                   {project.description}
                </div>
            </div>

            <div className="container-project-img">
                <figure className="project-img">
                    <img src={project.presentationImageUrl} alt={project.description} />
                </figure>
            </div>

            <footer className="">
                <div className="card-footer-item">
                    <button className='button is-medium is-disable'>
                        <AiOutlineLink></AiOutlineLink>
                    </button>
                </div>
            </footer>
        </div>
    );
}

export default ProjectCard