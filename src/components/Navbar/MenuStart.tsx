import {Link} from 'react-router-dom';


export default function MenuStart(){

    return(
       <div className="navbar-start m-auto">
            <Link className="navbar-item" to="/">
                Inicio
            </Link>
            <Link className="navbar-item" to={"/about"}>
                Sobre mi
            </Link>
            <Link className="navbar-item" to={"/porfolio"}>
                Portafolio
            </Link>
            <Link className="navbar-item" to={"/blog"}>
                Blog
            </Link>
            <Link className="navbar-item" to={"/contact"}>
                Contacto
            </Link>
        </div>
    );
}
