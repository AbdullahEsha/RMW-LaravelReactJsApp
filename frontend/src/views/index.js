import React from 'react'
import { useHistory } from 'react-router-dom';
import "./../assets/css/main.css";

const Index = () => {
    const history = useHistory();
    return (
        <>
            <h1>Home</h1>
            <div class="button2" onClick={() => history.push('/useState')}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Use State
            </div>
        </>
    )
}

export default Index
