import React from "react";
import { useHistory } from "react-router-dom";
import MainNav from "./../Component/nav.js";
import "./../Component/nav.js";
import "../assets/css/main.css";
import ImgMid1 from "../assets/images/o1.jpg";
import ImgMid2 from "../assets/images/o2.jpg";
import { Container, Row, Col } from "react-bootstrap";

const Index = () => {
  const history = useHistory();
  return (
    <>
      <MainNav />
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <i>
                <h1>Lorem Ipsum is simply lorem including of Lorem Ipsum.</h1>
              </i>
              <i>
                <h6>
                  Lorem Ipsum is simply dummy text of the Aldus PageMaker
                  including versions of Lorem Ipsum.Lorem Ipsum is simply dummy
                  text of the Aldus PageMaker including versions of Lorem Ipsum.
                </h6>
              </i>
            </div>
            <br />
            <button
              type="button"
              class="btn btn-outline-secondary"
              onClick={() => history.push("/useState")}
            >
              Use State
            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Col>
          <Col xs={0} md={6}></Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={12} md={6} align="center">
            <div className="card" id="crd">
              <Row>
                <Col xs={6} md={6}>
                  <img src={ImgMid1} className="card-img-top" alt="ImgMid1" />
                </Col>
                <Col xs={6} md={6}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={6} align="center">
            <div className="card" id="crd">
              <Row>
                <Col xs={6} md={6}>
                  <img src={ImgMid2} className="card-img-top" alt="ImgMid2" />
                </Col>
                <Col xs={6} md={6}>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div align="center">
          <h1>Menu</h1>
        </div>
      </Container>
    </>
  );
};

export default Index;
