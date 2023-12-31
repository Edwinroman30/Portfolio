import { Link } from 'react-router-dom';
import './PostListingPage.css'

function PostListingPage() {

  return (
    <section className="section">
      <h3 className="title">
        Blog:
      </h3>

      <div className="content">
        <h3>{ "Últimos post" }:</h3>
        <hr />

        <article className="postpreview-container">
            <img src={"./img/me-talking-in-public.jpg"}></img>
            <div className='content'>
                <Link to={"consejos-para-un-junior-developer-potenciando-tu-carrera"}>
                  <h2 className='is-size-5'>
                      Consejos para un Junior Developer - Potenciando tu carrera!
                  </h2>
                </Link>
                <p>Saludos estimado lector/a, les informamos que nuestro blog se encuentra en proceso de migración a una nueva plataforma. Por esta razón, es posible que algunos contenidos no se muestren correctamente. Estamos trabajando para resolver este inconveniente lo antes posible. Agradecemos su paciencia y comprensión.</p>
                <p><b>Fecha:</b> 30 diciembre 2023</p>
            </div>
        </article>

        <article className="postpreview-container">
            <img src={"./img/reciving-diploma.JPG"}></img>
            <div className='content'>
                <Link to={"consejos-para-un-junior-developer-potenciando-tu-carrera"}>
                  <h2 className='is-size-5'>
                      ¡Cómo sobre vivir a una carrera técnica, sin morir en el intento!
                  </h2>
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quisquam fugiat consequuntur officia praesentium, ad doloribus optio asperiores incidunt magni nobis, perspiciatis dicta numquam aut ut neque illo provident ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eligendi quo! Ullam dignissimos architecto eos, minus similique voluptates id. Aspernatur, inventore voluptates dolorum laborum doloremque ratione assumenda. Quam, perferendis iusto?</p>
                <p><b>Fecha:</b> 28 noviembre 2023</p>
            </div>
        </article>

        <article className="postpreview-container">
            <img src={"./img/confused-man-with-illustration.jpg"}></img>
            <div className='content'>
                <h2 className='is-size-5'>
                    ¿Especialización o aspirar a Full-Stack cuando se esta iniciando?
                </h2>
                <p>Saludos estimado lector/a, les informamos que nuestro blog se encuentra en proceso de migración a una nueva plataforma. Por esta razón, es posible que algunos contenidos no se muestren correctamente. Estamos trabajando para resolver este inconveniente lo antes posible. Agradecemos su paciencia y comprensión.</p>
                <p><b>Fecha:</b> 12 noviembre 2023</p>
            </div>
        </article>

      </div>

    </section>
  );
}

export default PostListingPage;
