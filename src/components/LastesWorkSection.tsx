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
    description : `Domedica App tiene como objetivo 
    ser un medio que les permita a los ciudadanos mediante el uso de sistemas 
    de información coordinados tener una herramienta en donde consultar 
    información sobre centros hospitalarios de manera sencilla, brindando una
    puerta de enlace entre dichos centros de interés y a los servicios que estos se 
    encuentran buscando.`
  },
  {
    id : 'p0002',
    name : 'Defensa Civil APP',
    platformEnvironment : "Web - Móvil",
    presentationImageUrl : "./img/defensacivil-historia.png",
    description : `Este proyecto busca proveerle al usuario(ciudadano) un medio de consulta portable e accesible sobre la Institución de la Defensa
    Civil de la República Dominicana, cuyas funcionalidades persiguen el brindar información sobre los albergues más cercanos, miembros, noticias y 
    hasta formalizar reportes de incidencias.` 
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