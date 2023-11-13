import './AboutPage.css';
import uasdLogo from '../assets/img/logo_uasd.svg';
import ondpLogo from '../assets/img/logo_ondp.png';
import itfamLogo from '../assets/img/logo_itfam.jpg';

function AboutPage() {


  return (
    <section className='container'>
        
        <article className="section">
            <h1 className='title is-1 text-right'>Hola 👋🏻</h1>
            <hr></hr>
            <div className="columns">
                <div className="column">
                    <div className="content is-medium">
                        <p>Edwin Roman es un desarrollador de software que disfruta transformar las operaciones industriales y de nuestro diario vivir, en soluciones adaptativas y confiables.</p>
                        <p>Él mismo se considera una persona curiosa, proactiva y analítica, cuyos intereses estan en el flujo de aprender y compartir experiencias adquiridas con aquellos interesados.</p>
                        <p>Desde 2017 cuenta con experiencia en el desarrollo de aplicaciones y sistemas de información. En dicho trayecto, ha tenido la oportunidad de participar en proyectos de TICs, ser de soporte en las actividades administrativas de las empresas y participar en actividades docentes del área.</p>
                    </div>
                </div>
                <div className="column">
                    <figure className="image is-5by3">
                        <img className='started-image' src="./img/me-talking-in-public.jpg" alt="Edwin Roman into the computer science faculty" />
                    </figure>
                </div>
            </div>
        </article>
        
        <article className="section">
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
                        <img src={itfamLogo} className='mb-5'></img>
                        <div className='content'><small>Professor Assistant - from 2022 to 2022</small></div>
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

        <article className="section">
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

        <article className='section'>

            <h1 className='title is-3 text-right mt-3'>📹 Sobre mi You Tube Channel:</h1>
            
            <div className="columns">
                <div className="column content is-large">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TFZWamWmhEk?si=YjxKpXB-KBBIhEYG&amp;start=27" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="column">
                    <div className="content is-medium">
                        <p>
                            Como ingeniero de software, mi pasión por la tecnología se ha fusionado con mi deseo de compartir conocimiento y fomentar el aprendizaje en la comunidad de TI. Cada línea de código que escribo y cada video que comparto en YouTube son impulsados por mi compromiso inquebrantable con la expansión del conocimiento.
                        </p>
                        <p>
                        Creo fervientemente que el conocimiento compartido es un faro que guía a la innovación y el progreso. A través de mi trabajo, aspiro a inspirar a otros a abrazar la curiosidad, a desafiar límites y a contribuir al florecimiento continuo de la comunidad tecnológica global."                        </p>
                    </div>
                </div>
            </div>

        </article>

    </section>
  );

}

export default AboutPage;