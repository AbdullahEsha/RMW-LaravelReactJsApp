import React from 'react'
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    return (
        <>
            <div className="center_div">
                <div class="button2" onClick={() => history.push('/useState')}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Use State
                </div>
                <div class="button2" onClick={() => history.push('/useEffect')}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Use Effect
                </div>
                <div class="button2" onClick={() => history.push('/useReducer')}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Use Reducer
                </div>
            </div>
        </>
    )
}

export default Home
