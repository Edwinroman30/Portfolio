import './HomePage.css';
import {useContext} from 'react';
import AppContext from '../context/AppContext';
import LastesWorkSection from '../components/LastesWorkSection';
import { Link } from 'react-router-dom';

function HomePage() {
  
  const {isSpanish} = useContext(AppContext);

  return (
    <div>

      <section className='section columns is-vcentered'>

         <div className="column">
            <h1 className='title is-2'>Hi there😁👋, I’m Edwin.</h1>
            <blockquote className='presentation-description'>
              {isSpanish ? `¡Desarrollador de software con aptitudes en el desarrollo de aplicaciones: visualmente amigable, escalables y adaptadas a sus necesidades!`
                        : `A Backend Sofware Engineer/Developer with decents skills in front-end development, also a passionate of technologies world and how we used to solve real world situations.`}
            </blockquote>
            
            <div className="buttons my-4">
              <Link to={"sobre-mi"} className='button is-primary '>
                { isSpanish ? `Conoceme +` : `More about me` }
              </Link>
              {false && 
                <button className='button is-info is-outlined'>
                  { isSpanish ? `Dale vida a sus ideas` : `Start a project` }
                </button>
              }
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