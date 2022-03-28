import React from "react";
import { Form } from "react-bootstrap";
import "./../assets/css/login.css";

const Login = () => {
  return (
    <>
      <div className="Login">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Form className="cardlogin">
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control autoFocus type="email" />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <hr />
          <div align="right">
            <button type="button" class="btn btn-outline-primary">
              Login
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
