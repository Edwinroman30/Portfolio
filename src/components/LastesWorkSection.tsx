import React, {PropsWithChildren} from 'react'
import ProjectCard from './ProjectCard';
import IProject from './types/IProject';
import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import { Link } from 'react-router-dom';

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
  {
    id : 'p00022',
    name : 'Defensa Civil APP',
    platformEnvironment : "Web - Móvil",
    presentationImageUrl : "./img/defensacivil-historia.png",
    description : `Este proyecto persigue brindar a los ciudadanos información sobre los albergues de emergencia más cercanos, miembros, noticias y hasta formalizar reportes de incidencias para que el equipo de la DC pueda socorrerles.` 
  },
]

const LastesWorkSection : React.FC<PropsWithChildren> = () => {
 
    const {language} = useContext(LanguageContext);

    return (
       <section className="section">
          <h2 className='has-text-centered subtitle '>
            {language.home.projectSectionTitle.toUpperCase()}
          </h2>
          
          <hr className='navbar-divider'></hr>
          
          <article className='columns mt-6 is-flex-wrap-wrap'>
            {projects.map(elem => 
            (
              <div className="column is-primary is-half p-3 mb-6" key={elem.id}>
                <ProjectCard project={elem}></ProjectCard>
              </div>
            ))}
          </article>
           
          <article className="hero">
            <div className="hero-body has-text-centered">
              <Link to={"/portafolio"} className="button is-info">
                Conoce más...
              </Link>
            </div>
           </article>
       </section>
    );

}

export default LastesWorkSection