import React from "react";
import { Container } from "react-bootstrap";
import "./../assets/css/style.css";
import Footer from "./footer";
import TopBer from "./topber";

const Error = () => {
  return (
    <>
      <TopBer />
      <Container align="center">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="erclr">
          <h1 style={{ color: "red" }}>Opps...</h1>
          <br />
          <h2>
            502 Bad Gateway!!!{" "}
            <img
              src="https://cdn-icons.flaticon.com/png/512/158/premium/158398.png?token=exp=1649409950~hmac=c7a75e0907555850be8cf6b9feccf5c3"
              alt="sadimg"
              height={"50px"}
            />
          </h2>

          <br />
          <h3>
            Error Establishing a Database Connection. Please check your database
            connection.
          </h3>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
      <Footer />
    </>
  );
};

export default Error;
