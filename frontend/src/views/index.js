import React from 'react'
import { useHistory } from 'react-router-dom';

const Index = () => {
    const history = useHistory();
    return (
        <>
        <button type="button" class="btn btn-outline-secondary" onClick={() => history.push('/useState')}>Use State</button>
        </>
    )
}

export default Index