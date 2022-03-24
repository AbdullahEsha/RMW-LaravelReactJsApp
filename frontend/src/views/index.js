import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MainNav from "./../Component/nav";
import Footer from "./../Component/footer";
import Menu from "./../Component/menuApi";
import Menubar from "./../Component/menuBar";
import MenuCard from "./../Component/menuCard";
import "../assets/css/style.css";
import ImgMid1 from "../assets/images/o1.jpg";
import ImgMid2 from "../assets/images/o2.jpg";
import ImgBnr from "../assets/images/aboutImg.png";
import { Container, Row, Col } from "react-bootstrap";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const Index = () => {
  const history = useHistory();
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  console.log(setMenuList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };
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
                class="btn btn-warning"
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
                    <div class="card-body">
                      <h5 class="card-title" style={{ color: "white" }}>
                        Card title
                      </h5>
                      <p class="card-text" style={{ color: "white" }}>
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
              <br />
              <h1>
                <i>Book A Table</i>
              </h1>
              <br />
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  name="Name"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                />
              </div>
              <br />
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                />
              </div>
              <br />
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  name="email"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                />
              </div>
              <br />
              <div class="form-group">
                <input
                  type="date"
                  class="form-control"
                  id="inputGroupFile04"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                />
              </div>
              <br />
              <div class="form-group">
                <select class="form-control nice-select wide">
                  <option value="" disabled selected>
                    How many persons?
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <br />
              <br />
              <br />
              <br />
              <div class="mapouter">
                <div class="gmap_canvas">
                  {/* eslint-disable-next-line */}
                  <iframe
                    width="500"
                    height="300"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Dhaka,%20Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
