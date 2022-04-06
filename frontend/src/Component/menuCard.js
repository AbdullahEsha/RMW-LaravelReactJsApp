import React from "react";
import { Row, Col } from "react-bootstrap";

const MenuCard = ({ menuData }) => {
  console.log(menuData);
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          return (
            <>
              <div className="card-container" key={curElem.id}>
                <div className="card">
                  <img
                    src={"http://localhost:8000/" + curElem.img}
                    alt="images"
                    className="card-media"
                    id="cardtop"
                  />
                  <div
                    className="card-body"
                    style={{ backgroundColor: "#222831" }}
                  >
                    <h2 className="card-title"> {curElem.name} </h2>
                    <h6 className="card-title"> {curElem.category} </h6>
                    <span className="card-description subtle">
                      {curElem.description}
                    </span>
                    <br />
                    <br />
                    <Row>
                      <Col xs={6} md={6}>
                        <h3 style={{ color: "#fff" }}>{curElem.price}</h3>
                      </Col>
                      <Col xs={6} md={6} align="right">
                        <a href={"/order/" + curElem.id}>
                          <img
                            src="https://www.svgrepo.com/show/46234/shopping-cart.svg"
                            alt="cartImg"
                            height={"40px"}
                            id="cartIcon"
                          />
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
