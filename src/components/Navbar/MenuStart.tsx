import {Link} from 'react-router-dom';


export default function MenuStart(){

    return(
       <div className="navbar-start m-auto">
            <Link className="navbar-item" to="/">
                Inicio
            </Link>
            <Link className="navbar-item" to={"/sobre-mi"}>
                Sobre mi
            </Link>
            <Link className="navbar-item" to={"/portafolio"}>
                Portafolio
            </Link>
            <Link className="navbar-item" to={"/blog"}>
                Blog
            </Link>
            <Link className="navbar-item" to={"/contacto"}>
                Contacto
            </Link>
        </div>
    );
}
