import './HomePage.css';
import React, { useContext, useRef } from 'react';
import LanguageContext from '../context/LanguageContext';
import { Link } from 'react-router-dom';

function HomePage() {
  
  const {language} = useContext(LanguageContext);
  const imgToggler = useRef<boolean>(false);

  const handlerHover = (e : React.MouseEvent<HTMLImageElement>) => {
    
    if(imgToggler.current)
      e.currentTarget.setAttribute("src","./img/reciving-diploma.JPG");
    else
      e.currentTarget.setAttribute("src","./img/reciving-medal.JPG");

    imgToggler.current = !imgToggler.current; 
  };


  return (
    <div>

      <section className='section columns is-vcentered'>

         <div className="column">
            <h1 className='title is-2'>{language.home.greatingTitle}</h1>
            <blockquote className='presentation-description'>
              {language.home.initialDescription}
            </blockquote>
            
            <div className="buttons my-4">
              <Link to={"sobre-mi"} className='button is-info '>
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
            <figure >
              <img className="image banner-image" src="./img/reciving-medal.JPG"  onMouseEnter={handlerHover} />
            </figure>
         </div>
      </section>

       <section className="hero is-info">
          <div className="hero-body">
              <blockquote className='title'>
                “Si quieres ir rápido, ve solo. Si quieres llegar lejos, ve acompañado.”
              </blockquote>
            <p className="subtitle">
               Proverbio africano
            </p>
            <button className='button'>{language.home.callToActionButtonText}</button>
          </div>
      </section> 
      
      <section className='section my-5'>
         <article className='level'>
            <div className="level-item has-text-centered">
              <Link to={"/sobre-mi"}>
                <p className="title">
                🤵
                </p>
                <hr />
                <p className='title'>¿Quién eres?</p>
                <hr />
              </Link>
            </div>

            <div className="level-item has-text-centered">
              <Link to={"/portafolio"}>
                <p className="title">
                🚀
                </p>
                <hr />
                <p className='title'>¿Qué haz hecho?</p>
                <hr />
              </Link>
            </div>

            <div className="level-item has-text-centered">
              <Link to='/contacto'>
                <p className="title">
                  💬
                </p>
                <hr />
                <p className='title'>¿Cómo te contacto?</p>
                <hr />
              </Link>
            </div>
         </article>
      </section>

    </div>
  )
}

export default HomePage;