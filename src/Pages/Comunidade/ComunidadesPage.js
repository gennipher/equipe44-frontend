import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage'; 
import ComunidadesPage from './Pages/ComunidadesPage'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/comunidades" component={ComunidadesPage} /> {/* Rota para a página "Comunidades" */}
        {/* Adicione mais rotas conforme necessário */}
      </Switch>
    </Router>
  );
}

export default App;