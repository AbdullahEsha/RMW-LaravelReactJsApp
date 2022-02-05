import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UseState from './Component/Hooks/useState';
import UseEffect from './Component/Hooks/useEffect';
import UseReducer from './Component/Hooks/useReducer';
import Index from './views/index';
import Home from './Component/Hooks/home';

function App() {
  return (
    <Router>
      <Route path="/useState" component={UseState} />
      <Route path="/useEffect" component={UseEffect} />
      <Route path="/useReducer" component={UseReducer} />
      <Route path="/home" component={Home} />
      <Route path="/" component={Index} exact />
    </Router>
  );
}

export default App;
