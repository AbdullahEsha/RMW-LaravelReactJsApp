import React from 'react'
import { useHistory } from 'react-router-dom';
//import "./../assets/css/main.css";
// import MainNav from './../Component/nav.js';
// import { Row, Col, Container } from 'react-bootstrap';

const Index = () => {
    const history = useHistory();
    return (
        <>
        <button type="button" class="btn btn-outline-secondary" onClick={() => history.push('/useState')}>Use State</button>
        </>
    )
}

export default Index