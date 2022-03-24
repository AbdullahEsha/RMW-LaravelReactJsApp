import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/style.css";

const Footer = () => {
  return (
    <>
      <section className="drksec" id="about">
        <br />
        <Container>
          <Row align="center">
            <Col xs={12} md={4}>
              <br />
              <h3 style={{ color: "white" }}>Contact Us</h3>
              <br />
              <li>
                <a href="https://www.google.com/maps/place/Dhaka/@23.7807777,90.3492857,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.810332!4d90.4125181">
                  Location
                </a>
              </li>
              <li>
                <a href="tel:+4733378901">Call +4733378901</a>
              </li>
              <li>
                <a href="mailto:webmaster@example.com">webmaster@example.com</a>
              </li>
            </Col>
            <Col xs={12} md={4}>
              <br />
              <h3 style={{ color: "white" }}>Restaurant</h3>
              <br />
              <p style={{ color: "white" }}>
                Necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with
              </p>
              <div class="footer_social">
                <a href={"https://www.facebook.com/"} className="iconpad">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href={"https://www.facebook.com/"} className="iconpad">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href={"https://www.facebook.com/"} className="iconpad">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href={"https://www.facebook.com/"} className="iconpad">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href={"https://www.facebook.com/"} className="iconpad">
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                </a>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <br />
              <h3 style={{ color: "white" }}>Opening Hours</h3>
              <br />
              <p style={{ color: "white" }}>Everyday</p>
              <p style={{ color: "white" }}>10.00 Am -10.00 Pm</p>
            </Col>
          </Row>
          <Row align="center">
            <Col xs={12} md={12}>
              <br />
              <br />
              <br />
              <p style={{ color: "white" }}>
                © 2022 All Rights Reserved{" "}
                <a href="https://abdullahisha.github.io/" id="mynm">
                  <i>Shahriar Abdullah Isha</i>
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
