import './Navbar.css';
import {useEffect, useRef, useState} from 'react';
import MenuStart from './MenuStart';
import MenuEnd from './MenuEnd';
import NavbarBrand from './NavbarBrand';

function Navbar() {

  const [showMenu, setShowMenu] = useState<boolean>(false);
  
  return (
    <nav className="navbar is-info is-fixed-top p-3" role="navigation" aria-label="main navigation">
        <NavbarBrand toggleMenuAction={()=> { setShowMenu(!showMenu)} } />
        <NavbarMenu showMenu={showMenu} />
    </nav>
  );
}


interface INavbarMenuProps extends React.PropsWithChildren{
    showMenu : boolean
}

const NavbarMenu : React.FC<INavbarMenuProps> = ({showMenu}) =>{

    const navMenuRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{

        if(showMenu){
           navMenuRef.current?.classList.toggle('is-active');
        }else{
           navMenuRef.current?.classList.remove('is-active');
        }
        
    },[showMenu])

    return(
        <div className="navbar-menu" ref={navMenuRef}>
            <MenuStart/>
            <MenuEnd/>
        </div>
    );
}

export default Navbar;