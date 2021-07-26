import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as ReactLogo} from '../svgs/logo.svg';

//SVG Library

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';


function Nav() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#ebb204' }}>
        <header className='header'>
          <Link>
            <ReactLogo to="/" className="header__logo"/>
          </Link>
          <Link to='#' className='header__toggle'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </header>



        <nav className={sidebar ? 'nav active' : 'nav'}>
          <ul className='nav__ul' onClick={showSidebar}>
            <li className='nav__toggle'>
              <Link to='#' className='menu-x'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span> 
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>


    
    // <nav>
    //   <Link to="/">
    //   <ReactLogo className="nav__logo"/>
    //   </Link>
    //   <ul className="nav__ul">
    //     <Link to="/">
    //     <li className="nav__li">Inicio</li>
    //     </Link>

    //     <Link to="/especialidades">
    //     <li className="nav__li">Especialidades</li>
    //     </Link>

    //     <Link to="/cursos">
    //     <li className="nav__li">Cursos</li>
    //     </Link>

    //     <Link to="/perfil">
    //     <li className="nav__li">Perfil</li>
    //     </Link>
    //   </ul>

    //   <div className="nav__toggle" onClick={ handleClick }>
    //     <i className={click ? <ReactEquis /> : <ReactMenu />}></i>
    //   </div>
    // </nav>
  );
}

export default Nav;
