import {Link} from 'react-router-dom';


interface INavbarBrandProps extends React.PropsWithChildren{
    toggleMenuAction : () => void
}

const NavbarBrand : React.FC<INavbarBrandProps> = ({ toggleMenuAction}) => {

    function handlerToggler(e : React.MouseEvent){
        e.preventDefault(); 
        toggleMenuAction();
    }
    

    return(
        <div className="navbar-brand">
            <Link className='navbar-item' to={"/"}>
                <p className='navbar-brand-name'>{"{Edwin Roman}"} </p>
            </Link>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={(e)=> handlerToggler(e)}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
    );
}

export default NavbarBrand;