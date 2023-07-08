import React, {PropsWithChildren} from 'react'
import ProjectCard from './ProjectCard';
import IProject from './types/IProject';

interface ILanguageProps extends PropsWithChildren{
    isSpanish : boolean
};

const projects : Array<IProject> = [
  {
    id : 'p0001',
    name : 'Domedica APP',
    platformEnvironment : "Web - Móvil - Web Services",
    presentationImageUrl : "./img/domedica-public-login.png",
    description : `Domedica App es una herramienta en donde consultar 
    información sobre centros hospitalarios de manera sencilla, brindando una
    puerta de enlace entre dichos centros de interés y a los servicios que estos se 
    encuentran buscando.`
  },
  {
    id : 'p0002',
    name : 'Defensa Civil APP',
    platformEnvironment : "Web - Móvil",
    presentationImageUrl : "./img/defensacivil-historia.png",
    description : `Este proyecto persigue brindar a los ciudadanos información sobre los albergues de emergencia más cercanos, miembros, noticias y hasta formalizar reportes de incidencias para que el equipo de la DC pueda socorrerles.` 
  },
]

const LastesWorkSection : React.FC<ILanguageProps> = ({isSpanish}) => {
 
    return (
       <section className="section is-medium">
          <h2 className='has-text-centered subtitle is-5'>
            {isSpanish ? "Algunos de mis últimos proyectos:".toUpperCase() : "Some of my lastest works:".toUpperCase() }
          </h2>
          
          <hr className='navbar-divider'></hr>
          
          <article className='columns is-3 my-4'>
            {projects.map(elem => 
            (
              <div className="column is-4" key={elem.id}>
                <ProjectCard project={elem}></ProjectCard>
              </div>
            ))}
          </article>

       </section>
    );

}

export default LastesWorkSection