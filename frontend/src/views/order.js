import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import Footer from "../Component/footer";
import "./../assets/css/style.css";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import TopBer from "../Component/topber";
import Swal from "sweetalert2";

const Order = () => {
  const { id } = useParams();

  // get item data by id
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
  // get item data by id end

  //order post an order
  const history = useHistory();

  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [validationError, setValidationError] = useState({});

  console.log(validationError);

  const addOrder = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("itemName", menu.name);
    formData.append("price", menu.price);
    formData.append("quantity", quantity);
    formData.append("phone", phone);
    formData.append("location", location);

    await axios
      .post(`order/` + id, formData)
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
  //order post an order end

  return (
    <>
      <TopBer />
      <section>
        <Container align="center">
          <Form onSubmit={addOrder}>
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
                          placeholder="Enter your phone number..."
                          className="form-control"
                          name="phone"
                          value={phone}
                          onChange={(event) => {
                            setPhone(event.target.value);
                          }}
                          required
                        />
                      </div>
                    </Col>
                    <Col xs={12} md={6} align="left">
                      <br />
                      <div className="form-group">
                        <select
                          className="form-control"
                          name="quantity"
                          onChange={(event) => {
                            setQuantity(event.target.value);
                          }}
                        >
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
                          placeholder="Enter your location..."
                          className="form-control"
                          name="location"
                          value={location}
                          onChange={(event) => {
                            setLocation(event.target.value);
                          }}
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={12} align="right">
                      <hr />
                      <input
                        type="hidden"
                        id="postId"
                        name="itemName"
                        value={itemName}
                        onChange={(event) => {
                          setItemName(event.target.value);
                        }}
                      />
                      <input
                        type="hidden"
                        id="postId"
                        name="price"
                        value={price}
                        onChange={(event) => {
                          setPrice(event.target.value);
                        }}
                      />
                      <button
                        name="submit"
                        type="submit"
                        className="btn btn-outline-dark btn-md"
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
          </Form>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Order;
