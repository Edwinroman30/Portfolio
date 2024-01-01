import { Link } from 'react-router-dom';
import './PostListingPage.css'
import MessageBox from '../../components/Messagebox/MessageBox';
import meTalkingImage from '../../assets/img/me-talking-in-public.jpg';
import recivingDiplomaImage from '../../assets/img/reciving-diploma.jpg';
import manConfusedImg from '../../assets/img/blog/confused-man-with-illustration.jpg'
import { useEffect } from 'react';


function PostListingPage() {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);

  return (
    <section className="section">
      <h3 className="title">
        Blog:
      </h3>

      <MessageBox color='is-info' headerTitle='Importante:' message='Este blog esta siendo migrado a otra tecnología...'/>

      <div className="content">
        <h3>{ "Últimos post" }:</h3>
        <hr />

        <article className="postpreview-container">
            <img src={meTalkingImage}></img>
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
            <img src={recivingDiplomaImage}></img>
            <div className='content'>
                <Link to={"consejos-para-un-junior-developer-potenciando-tu-carrera"}>
                  <h2 className='is-size-5'>
                      ¡Cómo sobre vivir a una carrera técnica, sin morir en el intento!
                  </h2>
                </Link>
                <p>Saludos estimado lector/a, les informamos que nuestro blog se encuentra en proceso de migración a una nueva plataforma. Por esta razón, es posible que algunos contenidos no se muestren correctamente. Estamos trabajando para resolver este inconveniente lo antes posible. Agradecemos su paciencia y comprensión.</p>
                <p><b>Fecha:</b> 28 noviembre 2023</p>
            </div>
        </article>

        <article className="postpreview-container">
            <img src={manConfusedImg}></img>
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
