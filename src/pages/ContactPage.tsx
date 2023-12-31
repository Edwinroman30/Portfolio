import { IoMdMailOpen } from 'react-icons/io';
import './ContactPage.css';
import { FormEvent } from 'react';

function ContactPage() {

  const handlerSummit = (e: FormEvent) =>{
    e.preventDefault();
    window.alert("Estamos trabajando para que esta funcionalidad esté en perfecto funcionamiento. Trate luego o vía el email proporcionado copiando este mismo contenido que desea enviar a su bandeja de email. Gracias por la intención.")
  };

  return (
    <section className='section'>
        <h1 className='is-size-1'>Contacto:</h1>
        <hr />
        <div className="columns is-desktop">
          
          <div className="column  is-one-third-desktop">
            <h3 className='label'>Medios:</h3>
            <p>Si el servicio de formulario no le es confiable, puede escribirme al siguiente correo:</p>
            <hr />
            
            <div className='has-text-centered'>
              <p>
                <IoMdMailOpen/>
              </p>
              ecompute30 <b>[ARROBA]</b> gmail . com
            </div>

          </div>
          
          {/* Form */}
          <div className="column">
            <form className="box" action='#' onSubmit={handlerSummit}>
              <div className="field">
                <label className="label">Su email/correo electrónico:</label>
                <div className="control">
                  <input className="input" type="email" placeholder="e.g. alex@example.com" required/>
                </div>
              </div>

              <div className="field">
                <label className="label">Mensaje a compartir:</label>
                <div className="control">
                  <textarea className="textarea" placeholder="Mensaje de 10 lineas..." rows={10} required></textarea>
                </div>
              </div>

              <div className="buttons">
                <button className="button is-info is-fullwidth">Enviar...</button>
              </div>
            </form>
          </div>

        </div>
        
    </section>
  )
}

export default ContactPage