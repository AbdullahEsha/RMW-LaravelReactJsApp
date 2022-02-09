import React from 'react'
import { useHistory } from 'react-router-dom';
import "./../assets/css/main.css";
import MainNav from './../Component/nav.js';

const Index = () => {
    const history = useHistory();
    return (
        <>
        <MainNav/>
        <h1>Home</h1>
        <button type="button" class="btn btn-outline-secondary" onClick={() => history.push('/useState')}>Use State</button>
        </>
    )
}

export default Index