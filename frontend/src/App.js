import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UseState from "./Component/Hooks/useState";
import UseEffect from "./Component/Hooks/useEffect";
import UseReducer from "./Component/Hooks/useReducer";
import Home from "./views/index";
import Index from "./Component/Hooks/home";
import FullMenu from "./views/admin/index";
import Upload from "./views/admin/uploadItem";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Route path="/useState" component={UseState} />
      <Route path="/useEffect" component={UseEffect} />
      <Route path="/useReducer" component={UseReducer} />
      <Route path="/index" component={Index} />
      <Route path="/admin/index" component={FullMenu} />
      <Route path="/admin/upload" component={Upload} />
      <Route path="/" component={Home} exact />
    </Router>
  );
}

export default App;
