import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Component/footer";
import MainNav from "../Component/nav";
import "./../assets/css/style.css";

const Order = () => {
  return (
    <>
      <MainNav />
      <section>
        <Container align="center">
          <br />
          <br />
          <br />
          <br />
          <div
            className="card crdmrgin"
            style={{ backgroundColor: "#ffffff9e" }}
          >
            <Row>
              <Col xs={12} md={12}>
                <img
                  src="https://www.adroitschoolbd.com/demo/images/flat-color-icons-svg/about.svg"
                  alt="ItemImage"
                  height="200px"
                  width="240px"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} align="left">
                <h3>name</h3>
              </Col>
              <Col xs={0} md={6}></Col>
            </Row>
            <Row>
              <Col xs={12} md={6} align="left">
                <h6>category</h6>
              </Col>
              <Col xs={0} md={6}></Col>
            </Row>
            <Row>
              <Col xs={12} md={12} align="left">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, at consectetur totam voluptatibus quibusdam iusto.
                  Accusamus quas, soluta ipsam autem eius necessitatibus fugiat
                  in .
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} align="left">
                <h3>20$</h3>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} align="right">
                <hr />
                <button
                  name="submit"
                  type="submit"
                  className="btn btn-primary btn-md"
                >
                  Confirm
                </button>
              </Col>
            </Row>
          </div>
          <br />
          <br />
          <br />
          <br />
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Order;
