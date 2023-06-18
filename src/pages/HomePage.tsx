import {useContext} from 'react';
import './HomePage.css';
import AppContext from '../context/AppContext';
import LastesWorkSection from '../components/LastesWorkSection';

function HomePage() {
  
  const {isSpanish} = useContext(AppContext);

  return (
    <div>

      <section className='section columns is-vcentered'>

         <div className="column">
            <h1 className='title is-2'>Hi there😁👋, I’m Edwin.</h1>
            <p className='presentation-description'>
              {isSpanish ? `Desarrollador de software con aptitudes en el desarrollo de aplicaciones: visualmente amigable, escalables, testeables, multiplataforma y con las mejores prácticas y estándares en la Ingeniería de Software.`
                        : `A Backend Sofware Engineer/Developer with decents skills in front-end development, also a passionate of technologies world and how we used to solve real world situations.`}
            </p>
            
            <div className="buttons my-4">
              <button className='button is-primary is-outlined'>
                { isSpanish ? `Conoceme +` : `More about me` }
              </button>
              <button className='button is-info is-outlined'>
                { isSpanish ? `Dale vida a sus ideas` : `Start a project` }
              </button>
            </div>
         </div>

         <div className="column">
            <figure className="image is-square">
              <img className="is-rounded" src="./img/niwed.png" />
            </figure>
         </div>
      </section>

      <section className="hero is-primary">
          <div className="hero-body">
            <p className="title">
              <blockquote>
                “Si quieres ir rápido, ve solo. Si quieres llegar lejos, ve acompañado.”
              </blockquote>
            </p>
            <p className="subtitle">
               Proverbio africano
            </p>
            <button className='button'>💡 ¿Tienes una idea?</button>
          </div>
      </section>

      <LastesWorkSection isSpanish={isSpanish} />
      
    </div>
  )
}

export default HomePage;