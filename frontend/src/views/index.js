import React from 'react'
import { useHistory } from 'react-router-dom';
import "./../assets/css/main.css";
import MainNav from './../Component/nav.js';
import { Row, Col, Container } from 'react-bootstrap';

const Index = () => {
    const history = useHistory();
    return (
        <>
        <MainNav/>
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={12} md={3}>
            <h2>Menu List.</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
            <h2>Menu List.</h2>
            </Col>
            <Col xs={12} md={4}>
            <h2>Menu List.</h2>
            </Col>
            <Col xs={12} md={4}>
            <h2>Menu List.</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
            <h2>Menu List.</h2>
            </Col>
            <Col xs={12} md={4}>
            <h2>Menu List.</h2>
            </Col>
            <Col xs={12} md={4}>
            <h2>Menu List.</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
            <h2>Menu List.</h2>
            </Col>
            <Col xs={12} md={4}>
            <h2>Menu List.</h2>
            </Col>
            <Col xs={12} md={4}>
            <h2>Menu List.</h2>
            </Col>
          </Row>
        </Container>
        
        <button type="button" class="btn btn-outline-secondary" onClick={() => history.push('/useState')}>Use State</button>
        </>
    )
}

export default Index