import {Link} from 'react-router-dom';
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';


export default function MenuStart(){

    const {language} = useContext(LanguageContext);

    return(
       <div className="navbar-start m-auto">
            <Link className="navbar-item" to="/">
               {language.menu.home}
            </Link>
            <Link className="navbar-item" to={"/sobre-mi"}>
               {language.menu.about}
            </Link>
            <Link className="navbar-item" to={"/portafolio"}>
               {language.menu.porfolio}
            </Link>
            <Link className="navbar-item" to={"/blog"}>
               {language.menu.blog}
            </Link>
            <Link className="navbar-item" to={"/contacto"}>
               {language.menu.contact}
            </Link>
        </div>
    );
}
