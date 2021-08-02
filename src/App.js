//React Cosas
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Paginas
import Inicio from './pages/Inicio';
import Nav from './pages/Nav';
import Footer from './pages/Footer';

import Especialidades from './pages/Especialidades';
import Error404 from './pages/Error404';
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
          <Route path="/perfil" component={Perfil} />
          <Route path="/especialidades" component={Especialidades} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
