import './HomePage.css';
import {useContext} from 'react';
import LanguageContext from '../context/LanguageContext';
import LastesWorkSection from '../components/LastesWorkSection';
import { Link } from 'react-router-dom';

function HomePage() {
  
  const {language} = useContext(LanguageContext);

  return (
    <div>

      <section className='section columns is-vcentered'>

         <div className="column">
            <h1 className='title is-2'>Hi there😁👋, I’m Edwin.</h1>
            <blockquote className='presentation-description'>
              {language.home.initialDescription}
            </blockquote>
            
            <div className="buttons my-4">
              <Link to={"sobre-mi"} className='button is-primary '>
                 {language.home.aboutMeButtonText}
              </Link>
              {false && 
                <button className='button is-info is-outlined'>
                   {language.home.callToActionButtonText}
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
            <button className='button'>{language.home.callToActionButtonText}</button>
          </div>
      </section>

      <LastesWorkSection/>
      
    </div>
  )
}

export default HomePage;