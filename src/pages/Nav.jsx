import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as ReactLogo} from '../svgs/logo.svg';

//SVG Library
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';


//SidebarData
import { SidebarData } from './SidebarData';

function Nav() {  
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#ebb204' }}>
        <header className='header'>
          <Link to="/">
            <ReactLogo to="/" className="header__logo"/>
          </Link>
          <Link to='#' className='header__toggle'>
            <FaBars onClick={showSidebar} />
          </Link>
        </header>

        <nav className={sidebar ? 'nav active' : 'nav'}>
          <ul className='nav__ul' onClick={showSidebar}>
            <li className='nav__toggle'>
              <Link to='#' className='menu-x'>
                <AiOutlineClose />
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
  );
}

export default Nav;
