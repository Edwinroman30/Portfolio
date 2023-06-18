import './Footer.css';

function Footer() {

  return (
    <footer className="footer">
        <div className="content has-text-centered">
            <p>
                <strong>©2022 - {new Date().getUTCFullYear()} </strong> by <a href="/about">Edwin Roman</a>.
            </p>
        </div>
    </footer>
  )
}

export default Footer