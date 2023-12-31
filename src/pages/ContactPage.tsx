import './ContactPage.css';

function ContactPage() {
  return (
    <section className='section'>
        <h1 className='is-size-1'>Contacto:</h1>
        <hr />

        <form className="box" action='#'>
          <div className="field">
            <label className="label">Su email/correo electrónico:</label>
            <div className="control">
              <input className="input" type="email" placeholder="e.g. alex@example.com"/>
            </div>
          </div>

          <div className="field">
            <label className="label">Mensaje a compartir:</label>
            <div className="control">
              <textarea className="textarea" placeholder="Mensaje de 10 lineas..." rows={10}></textarea>
            </div>
          </div>

          <div className="buttons">
            <button className="button is-info is-fullwidth">Enviar...</button>
          </div>
        </form>
        
    </section>
  )
}

export default ContactPage