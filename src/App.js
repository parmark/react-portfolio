import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Navigation from './components/Navigation'

function App() {
  return (
      <div className='App'>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
