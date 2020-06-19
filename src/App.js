import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CoctailProvider } from './context/ContextCoctail';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SingleCocktail from './pages/SingleCocktail';

// Navbar
import Navbar from './components/Navbar';

function App() {
  return (
    <CoctailProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cocktail/:id" component={SingleCocktail} />
          <Route path="*" component = {NotFound} />
        </Switch>
      </Router>
    </CoctailProvider>
  );
}

export default App;
