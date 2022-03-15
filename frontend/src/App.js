import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UseState from "./Component/Hooks/useState";
import UseEffect from "./Component/Hooks/useEffect";
import UseReducer from "./Component/Hooks/useReducer";
import Home from "./views/index";
import Index from "./Component/Hooks/home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Route path="/useState" component={UseState} />
      <Route path="/useEffect" component={UseEffect} />
      <Route path="/useReducer" component={UseReducer} />
      <Route path="/Index" component={Index} />
      <Route path="/" component={Home} exact />
    </Router>
  );
}

export default App;
