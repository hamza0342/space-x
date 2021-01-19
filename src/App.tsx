import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SpaceMission from './components/Missions/index'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import SpaceMissions from './SpaceMissions';
import Home from './Home';

function App() {

  return (

    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/spaceMissions" component={SpaceMissions} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;