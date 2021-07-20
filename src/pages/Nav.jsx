import { Link } from 'react-router-dom';
import {ReactComponent as ReactLogo} from '../svgs/logo.svg';

function Nav() {
  return (
    <nav>
      <Link to="/">
      <ReactLogo className="nav__logo"/>
      </Link>
      <ul className="nav__ul">
        <Link to="/">
        <li>Inicio</li>
        </Link>

        <Link to="/especialidades">
        <li>Especialidades</li>
        </Link>

        <Link to="/cursos">
        <li>Cursos</li>
        </Link>

        <Link to="/perfil">
        <li>Perfil</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
