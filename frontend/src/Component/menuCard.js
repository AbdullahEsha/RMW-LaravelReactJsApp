import React from "react";
import { Row, Col } from "react-bootstrap";

const MenuCard = ({ menuData }) => {
  console.log(menuData);
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, price, description } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  {/* <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author subtle"> {category}</span> */}
                  <img src={image} alt="images" className="card-media" />
                  <div
                    className="card-body"
                    style={{ backgroundColor: "#222831" }}
                  >
                    <h2 className="card-title"> {name} </h2>
                    <h6 className="card-title">{category}</h6>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <br />
                    <br />
                    <Row>
                      <Col xs={6} md={6}>
                        <h3 style={{ color: "#fff" }}>{price}</h3>
                      </Col>
                      <Col xs={6} md={6} align="right">
                        <a href="/order" id="odr">
                          Order Now
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
