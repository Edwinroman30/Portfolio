import './NotFoundPage.css';
import {Link} from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className='section is-medium has-text-centered'>
      <h1 className='title is-2'>... Upp 🙃</h1>
      <h3 className='subtitle is-5 my-3'> 404: <br/> El posible recurso al que intenta consultar no esta disponible o se esta trabajando.</h3>
      <Link to={'/'}>
         <button className='button is-warning my-5 text-white'>
            Ir a inicio...
         </button>
      </Link>
    </section>
  )
}