import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UseState from "./Component/Hooks/useState";
import UseEffect from "./Component/Hooks/useEffect";
import UseReducer from "./Component/Hooks/useReducer";
import Home from "./views/index";
import Index from "./Component/Hooks/home";
import FullMenu from "./views/admin/index";
import Upload from "./views/admin/uploadItem";
import Login from "./views/login";
import "bootstrap/dist/css/bootstrap.min.css";
import Order from "./views/order";
import Bookings from "./views/admin/bookings";
import Orders from "./views/admin/orders";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

function App() {
  return (
    <Router>
      <Route path="/useState" component={UseState} />
      <Route path="/useEffect" component={UseEffect} />
      <Route path="/useReducer" component={UseReducer} />
      <Route path="/index" component={Index} />
      <Route path="/admin/index" component={FullMenu} />
      <Route path="/admin/bookings" component={Bookings} />
      <Route path="/admin/orders" component={Orders} />
      <Route path="/admin/upload" component={Upload} />
      <Route path="/login" component={Login} />
      <Route path="/order/:id" component={Order} />
      <Route path="/" component={Home} exact />
    </Router>
  );
}

export default App;
