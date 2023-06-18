import './ProjectCard.css';
import React,{PropsWithChildren} from 'react';
import IProject from './types/IProject';


interface ProjectCardProp extends PropsWithChildren{
    project : IProject;
};

const ProjectCard : React.FC<ProjectCardProp> = ({project}) => {

    
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={project.presentationImageUrl} alt={project.description} />
                </figure>
            </div>

            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{project.name}</p>
                        <p className="subtitle is-6">{project.platformEnvironment}</p>
                    </div>
                </div>
        
                <div className="content">
                   {project.description}
                </div>
            </div>

            <footer className="card-footer">
                <div className="card-footer-item">
                    <button className='button is-disable'>Seguir leyendo</button>
                </div>
            </footer>
        </div>
    );
}

export default ProjectCard