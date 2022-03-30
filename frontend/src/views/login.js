import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import "./../assets/css/login.css";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState({});

  console.log(validationError);

  const logCheck = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    await axios
      .post(`login`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        history.push("/");
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        } else {
          Swal.fire({
            icon: "error",
            text: response.data.message,
          });
        }
      });
  };
  return (
    <>
      <div className="Login">
        <Form onSubmit={logCheck} className="cardlogin" align="center">
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
            alt="img"
          />
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Enter email/phone number."
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required
            />
          </div>
          <br />
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Enter password."
              name="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
            />
          </div>
          <hr />
          <div align="right">
            <button type="submit" name="submit" class="btn btn-outline-primary">
              Login
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
