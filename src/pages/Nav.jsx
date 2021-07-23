import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as ReactLogo} from '../svgs/logo.svg';
import {ReactComponent as ReactMenu} from '../svgs/menu.svg';
import {ReactComponent as ReactEquis} from '../svgs/equis.svg';

function Nav() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav>
      <Link to="/">
      <ReactLogo className="nav__logo"/>
      </Link>
      <ul className="nav__ul">
        <Link to="/">
        <li className="nav__li">Inicio</li>
        </Link>

        <Link to="/especialidades">
        <li className="nav__li">Especialidades</li>
        </Link>

        <Link to="/cursos">
        <li className="nav__li">Cursos</li>
        </Link>

        <Link to="/perfil">
        <li className="nav__li">Perfil</li>
        </Link>
      </ul>

      <div className="nav__toggle" onClick={ handleClick }>
        <i className={click ? <ReactMenu/> : <ReactEquis/>}></i>
      </div>
    </nav>
  );
}

export default Nav;
