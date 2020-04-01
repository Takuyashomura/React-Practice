import React from 'react';
import {
HashRouter as Router,
Route,
Link
} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>

      <Route path="/" exact component={Home} />
      <Route path="/About/:id" exact component={About} />
    </Router>
  );
}

export default App;
