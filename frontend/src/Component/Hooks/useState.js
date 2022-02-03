import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "./style.css";

const UseState = () => {
  const intialData = 0;
  const [myNum, setMyNum] = useState(intialData);
  console.log(myNum);

  const history = useHistory();

  return (
    <>
      <div className="center_div">
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

      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => myNum < 20 ? setMyNum(myNum + 1) : setMyNum(20)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div class="button2" onClick={() => myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>

    </>
  );
};

export default UseState;