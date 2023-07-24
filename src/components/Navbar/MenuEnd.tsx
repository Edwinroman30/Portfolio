import {Link} from 'react-router-dom';
import {BsGithub, BsInstagram, BsLinkedin, BsGlobe} from 'react-icons/bs';
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';

export default function MenuEnd(){

   const {handlerLanguage} = useContext(LanguageContext);

    return(
        <div className="navbar-end">

            <div className="navbar-item">
                <div className="field is-grouped">
                    <div className="control has-icons-left">
                        <div className="select is-small">
                            <select onChange={handlerLanguage}>
                                <option value={"es"}>ES</option>
                                <option value={"en"}>EN</option>
                            </select>
                        </div>
                        <span className="icon is-small is-left">
                            <BsGlobe/>
                        </span>
                    </div>
                </div>
            </div>

            <div className="navbar-item">

                <div className="field is-grouped">
                    <p className="control">
                        <a className="bd-tw-button button" data-social-network="Linkedin" data-social-action="post" data-social-target="https://www.linkedin.com" target="_blank" href="https://www.linkedin.com/in/edwin-roman-9278a6214/">
                            <span className="icon">
                                <BsLinkedin/>
                            </span>
                        </a>
                    </p>

                    <p className="control">
                        <a className=" button" data-social-network="Instagram" data-social-action="story" data-social-target="https://www.instagram.com" target="_blank" href="https://www.instagram.com/edwinroman30/">
                            <span className="icon">
                                <BsInstagram/>
                            </span>
                        </a>
                    </p>

                    <p className="control">
                        <Link className=" button" data-social-network="Github" data-social-action="repository" data-social-target="https://github.com" target="_blank" to={"/github"}>
                            <span className="icon">
                                <BsGithub/>
                            </span>
                        </Link>
                    </p>
                </div>
            </div>

            

        </div>
    );
}
