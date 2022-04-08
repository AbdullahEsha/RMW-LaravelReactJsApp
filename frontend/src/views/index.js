import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MainNav from "./../Component/nav";
import Footer from "./../Component/footer";
//import Menu from "./../Component/menuApi";
import Menubar from "./../Component/menuBar";
import MenuCard from "./../Component/menuCard";
import "../assets/css/style.css";
import ImgMid1 from "../assets/images/o1.jpg";
import ImgMid2 from "../assets/images/o2.jpg";
import ImgBnr from "../assets/images/aboutImg.png";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

const Index = () => {
  const history = useHistory();

  //get menu data using api start
  const GetMenu = () => {
    axios.get("admin/index").then((response) => {
      console.log(response.data);
      setMenuData(response.data);
    });
  };

  //list for Menuber [...(menu[i].catagory) can be added.]
  const uniqueList = ["breakfast", "lunch", "supper", "dinner", "All"];

  const [menuData, setMenuData] = useState([]);
  const [menuList, setMenuList] = useState(uniqueList);

  console.log(setMenuList);

  //filter function for menu
  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(menuData);
      return;
    }

    const updatedList = menuData.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  useEffect(() => {
    GetMenu();
  }, []);
  //get menu data using api end

  //post booking using api start
  const [c_name, setCName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [b_date, setBDate] = useState("");
  const [n_person, setNPerson] = useState("");
  const [validationError, setValidationError] = useState({});

  console.log(validationError);

  const addBooking = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("c_name", c_name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("b_date", b_date);
    formData.append("n_person", n_person);

    await axios
      .post(`index`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        }).then(function () {
          window.location = "http://localhost:3000";
        });
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
  //post booking using api end

  return (
    <>
      <MainNav />
      <section id="home">
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
                  <h1 style={{ color: "white" }}>
                    Lorem Ipsum is of Lorem Ipsum.
                  </h1>
                </i>
                <i>
                  <h6 style={{ color: "white" }}>
                    Lorem Ipsum is simply dummy text of the Aldus PageMaker
                    including versions of Lorem Ipsum.including versions of
                    Lorem Ipsum.
                  </h6>
                </i>
              </div>
              <br />
              <button
                type="button"
                className="btn btn-warning"
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
      </section>
      <section className="menuBarCard" id="menu">
        <br />
        <br />
        <Container>
          <Row>
            <Col xs={12} md={6} align="center" className="clsbtm">
              <div className="cardx" id="crdx">
                <Row>
                  <Col xs={6} md={6}>
                    <img src={ImgMid1} className="card-img-top" alt="ImgMid1" />
                  </Col>
                  <Col xs={6} md={6}>
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: "white" }}>
                        Card title
                      </h5>
                      <p className="card-text" style={{ color: "white" }}>
                        Some quick example text to build onthe card's content.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} md={6} align="center" className="clsbtm">
              <div className="cardx" id="crdx">
                <Row>
                  <Col xs={6} md={6}>
                    <img src={ImgMid2} className="card-img-top" alt="ImgMid2" />
                  </Col>
                  <Col xs={6} md={6}>
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: "white" }}>
                        Card title
                      </h5>
                      <p className="card-text" style={{ color: "white" }}>
                        Some quick example text to build bulk of the card's
                        content.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>

        <div align="center">
          <h1>Menu</h1>
        </div>
        <Container>
          <Menubar filterItem={filterItem} menuList={menuList} />
          <MenuCard menuData={menuData} />
        </Container>
        <br />
        <br />
      </section>
      <section className="drksec" id="booktable">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div align="center">
                <h1 style={{ color: "white" }}>Some quick example</h1>
                <h6 style={{ color: "white" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </h6>
              </div>
              <br />
              <br />
            </Col>
            <Col xs={12} md={6}>
              <div align="center">
                <br />
                <img src={ImgBnr} className="" alt="ImgBnr" height="350px" />
                <br />
                <br />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="menuBarCard">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Form onSubmit={addBooking}>
                <br />
                <h1>
                  <i>Book A Table</i>
                </h1>
                <br />
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="c_name"
                    value={c_name}
                    onChange={(event) => {
                      setCName(event.target.value);
                    }}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phone"
                    value={phone}
                    onChange={(event) => {
                      setPhone(event.target.value);
                    }}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control"
                    name="b_date"
                    value={b_date}
                    onChange={(event) => {
                      setBDate(event.target.value);
                    }}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <select
                    className="form-control"
                    name="n_person"
                    value={n_person}
                    onChange={(event) => {
                      setNPerson(event.target.value);
                    }}
                    required
                  >
                    <option value="" disabled selected>
                      How many persons?
                    </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <br />
                <div class="form-group" align="right">
                  <button
                    type="submit"
                    name="submit"
                    class="btn btn-outline-primary"
                  >
                    Book
                  </button>
                </div>
              </Form>
            </Col>
            <Col xs={12} md={6}>
              <br />
              <br />
              <br />
              <br />
              <div className="mapouter">
                <div className="gmap_canvas">
                  {/* eslint-disable-next-line */}
                  <iframe
                    width="500"
                    height="300"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=taltola,%20khilgaon,%20Dhaka,%20Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  />
                  <br />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <br />
      </section>

      <Footer />
    </>
  );
};

export default Index;
