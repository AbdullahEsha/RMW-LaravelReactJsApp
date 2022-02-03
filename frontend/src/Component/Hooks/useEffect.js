import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import "./style.css";

const UseEffect = () => {
  const intialData = 0;
  const [myNum, setMyNum] = useState(intialData);
  const history = useHistory();

  useEffect(() => {
    document.title = `Chats(${myNum})`;
  });

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
      </div>
    </>
  );
};

export default UseEffect;