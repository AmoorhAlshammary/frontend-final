import React, { useState } from "react";

const Counter = (props) => {
    console.log(props,"propsssssss")
  const [counter, setCounter] = useState(0);
const [inputValue, setInputValue] = useState("");


  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };
  const changeInput=(e)=>{
    setInputValue(e.target.value);
  }
   const clickButton = () => {
       
     setCounter(inputValue*1);
   };
  return (
    
    <div className="counter">
        <input onChange={(e)=>{changeInput(e)}}/>
        <button onClick={()=>{clickButton()}} >Submit</button >
        
      <div className="buttons">
        <div>
          <button className="button" onClick={()=>{increase()}}>increase counter</button>
        </div>
        <div>
          <button className="button" onClick={()=>{decrease()}}>
            decrease counter
          </button>
        </div>
        <div>
          <button className="button" onClick={()=>{reset()}}>
            reset counter
          </button>
        </div>
      </div>
      <h1>counter is {counter}</h1>
    </div>
  );
};

export default Counter;
