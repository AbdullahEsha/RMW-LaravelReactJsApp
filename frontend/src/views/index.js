import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MainNav from "./../Component/nav";
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
                  including versions of Lorem Ipsum.including versions of Lorem
                  Ipsum.
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
      <section className="menuBarCard">
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
      <section className="drksec">
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
    </>
  );
};

export default Index;
