import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Details from './pages/Details';
import portfolio from './portfolio.json';
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
      <div className='App'>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            <Switch>
              {portfolio.map(project => 
                <Route 
                  path={project.detailsLink}
                  render={() => <Details 
                    image={project.image}
                    subImage={project.subImage}
                    techDetails={project.techDetils}
                    techUsed={project.techUsed}
                  />}  
                />)}
            </Switch>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
