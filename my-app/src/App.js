import React, { Component } from 'react';
import './style.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Homepage } from './Homepage';
import { Bio } from './Bio';
import { More } from './More';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Link to="/" className="link">Home</Link>
          { ' ' }
          <Link to="/Bio" className="link">Bio</Link>
          { ' ' }
          <Link to="/More" className="link">More</Link>
          <Route exact path="/" component={ Homepage } />
          <Route path="/bio" component={ Bio } />
          <Route path="/more" component={ More } />
        </div>
      </Router>
    );
  }
}

export default App;
