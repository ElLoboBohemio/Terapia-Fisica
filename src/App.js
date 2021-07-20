//React Cosas
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Paginas
import Inicio from './pages/Inicio';
import Nav from './pages/Nav';

import Especialidades from './pages/Especialidades';
import Error404 from './pages/Error404';
import Cursos from './pages/Cursos';
import Perfil from './pages/Perfil';

//CSS
import './styles/css/main.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch> 
          <Route path="/" exact component={Inicio} />
          <Route path="/especialidades" component={Especialidades} />
          <Route path="/cursos" component={Cursos} />
          <Route path="/perfil" component={Perfil} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
