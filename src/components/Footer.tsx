import './Footer.css';

function Footer() {

  return (
    <footer className="footer">
        <div className="has-text-centered">
            <p>
                <strong>©2022 - {new Date().getUTCFullYear()} </strong> 
            </p>
            <p>Elaborado por/by: 
              <a href="/sobre-mi"> Edwin Roman</a>.
            </p> 
        </div>
    </footer>
  )
}

export default Footer