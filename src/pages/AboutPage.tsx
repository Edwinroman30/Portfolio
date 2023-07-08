import './AboutPage.css';
import uasdLogo from '../assets/logo_uasd.svg';
import ondpLogo from '../assets/logo_ondp.png';
import itfamLogo from '../assets/logo_itfam.jpg'

function AboutPage() {


  return (
    <section className='container'>
        
        <article className="section">

            <h1 className='title is-1 text-right'>Hola 👋🏻</h1>
            <hr></hr>
            <div className="columns">
                <div className="column">
                    <div className="content is-large">
                        <p>Edwin Roman. Desarrollador de Software que disfruta transformar las operaciones industriales y de nuestro diario vivir, en soluciones adaptativas y confiables.</p>
                        <p>Él mismo se considera una persona curiosa y analítica, el cual disfruta aprender y compartir experiencias adquiridas con aquellos interesados.</p>
                        <p>Desde 2017 cuenta con experiencia en el desarrollo de aplicaciones y sistemas de información. Participando también en proyectos y actividades docentes del área.</p>

                    </div>
                </div>
                <div className="column">
                    <figure className="image is-5by3">
                        <img className='started-image' src="./img/me-talking-in-public.jpg" alt="Edwin Roman into the computer science faculty" />
                    </figure>
                </div>
            </div>
        </article>
        
        <article className="section is-medium">
            <h1 className='title is-3 text-left mt-3'>🏆 Lugares donde he aportado valor:</h1>
            <hr></hr>

            <div className="level">
                <div className="level-item has-text-centered">
                    <div>
                        <img src={uasdLogo}></img>
                        <div className='content'><small>IT Support - from 2019 to 2020</small></div>
                    </div>
                </div>
                
                <div className="level-item has-text-centered">
                    <div>
                        <img src={itfamLogo} ></img>
                        <div className='content'><small>Proffesor Assistance - from 2022 to 2022</small></div>
                    </div>
                </div>

                <div className="level-item has-text-centered">
                    <div>
                        <img src={ondpLogo} width={'150px'}></img>
                        <div className='content'><small>Software Engineer from 2022 to 2023</small></div>
                    </div>
                </div>
            </div>

        </article>

        <article className="section is-medium">
            <h1 className='title is-3 text-right'>📚 Educación:</h1>
            <hr></hr>

            
        </article>

        <article className="section is-medium">
            <h1 className='title is-3 text-left mt-3'>🎢 Mas allá del trabajo:</h1>
            <hr></hr>

            <div className="columns" style={{textAlign:"center"}}>
                <div className="column content is-large">
                    <h1>🏀</h1>
                    <p>¡Me gusta el baloncesto!</p>
                </div>
                <div className="column content is-large">
                    <h1>🔭⚙</h1>
                    <p>¡Las series de Ingeniería y ciencias!</p>
                </div>
                <div className="column content is-large">
                    <h1>🗿</h1>
                    <p>¡Estudiar idiomas y culturas!</p>
                </div>
            </div>
        </article>


    </section>
  );

}

export default AboutPage;