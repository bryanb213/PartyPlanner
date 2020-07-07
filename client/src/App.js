import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import AirportDetail from './components/AirportDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id" component={AirportDetail} />
      </Router>
    </div>
  );
}

export default App;
