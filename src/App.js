import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SingleCoctail from './pages/SingleCoctail';

// Navbar
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cocktail/:id" component={SingleCoctail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
