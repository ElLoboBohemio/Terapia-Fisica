//React Cosas
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react'

//CSS
import './styles/css/main.css';

//Páginas
import Loader from './pages/Loader';


const Nav = lazy(()=> import ('./pages/Nav'));
const Footer = lazy(()=> import ('./pages/Footer'));
const Inicio = lazy(()=> import ('./pages/Inicio'));
const Especialidades = lazy(()=> import ('./pages/Especialidades'));
const Error404 = lazy(()=> import ('./pages/Error404'));
const Perfil = lazy(()=> import ('./pages/Perfil'));
const Referencias = lazy(()=> import ('./pages/Referncias'));


function App() {
  return (
    <Router>
      <div>
      <Suspense fallback={<Loader />}>
        <Nav />
          <Switch> 
            <Route path="/" exact component={Inicio} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/especialidades" component={Especialidades} />
            <Route path="/referencias" component={Referencias} />
            <Route component={Error404} />
          </Switch>
        <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
