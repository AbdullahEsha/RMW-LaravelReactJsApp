import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Component/footer";
import "./../assets/css/style.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Order = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios
      .get("order/" + id)
      .then((response) => {
        console.log(response.data);
        setMenu(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <section>
        <Container align="center">
          <br />
          <br />
          <br />
          <br />
          <div
            className="crdmrgin"
            style={{ backgroundColor: "#ffffff9e" }}
            align="center"
          >
            <Row>
              <Col xs={12} md={6} id="containImg">
                <img
                  src={`http://127.0.0.1:8000/` + menu.img}
                  alt="ItemImage"
                  height="200px"
                  width="240px"
                />
              </Col>
              <Col xs={0} md={6}>
                <Row>
                  <Col xs={12} md={6} align="left">
                    <h3>{menu.name}</h3>
                  </Col>
                  <Col xs={0} md={6}></Col>
                </Row>
                <Row>
                  <Col xs={12} md={6} align="left">
                    <h6>{menu.category}</h6>
                  </Col>
                  <Col xs={0} md={6}></Col>
                </Row>
                <Row>
                  <Col xs={12} md={12} align="left">
                    <p>{menu.description}</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12} align="left">
                    <h3>{menu.price} + 3$ (as Delivery charge.)</h3>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6} align="left">
                    <br />
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Enter your phone number..."
                        className="form-control"
                        id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04"
                      />
                    </div>
                  </Col>
                  <Col xs={12} md={6} align="left">
                    <br />
                    <div className="form-group">
                      <select className="form-control">
                        <option value="" disabled selected>
                          How many item?
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12} align="left">
                    <br />
                    <div className="form-group">
                      <input
                        type="text"
                        name="location"
                        placeholder="Enter your location..."
                        className="form-control"
                        id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04"
                      />
                    </div>
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
