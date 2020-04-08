import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import About from './Routes/About'
import Tech from './Routes/Tech'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="about" component={About}/>
          <Route path="tech" component={Tech}/>
          <Route path="contact" component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
