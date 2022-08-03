import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const clickHandle = (e) => {
    setState((state) => (calculate(state, e.target.name)));
  };
  const { total, next, operation } = state;
  return (
    <div className="wrapper">
      <div className="display">
        {total}
        {operation}
        {next}
      </div>
      <button type="button" className="ac" onClick={clickHandle} name="AC">AC</button>
      <button type="button" className="plus-minus" onClick={clickHandle} name="+/-">+/-</button>
      <button type="button" className="percent" onClick={clickHandle} name="%">%</button>
      <button type="button" className="plus" onClick={clickHandle} name="÷">÷</button>
      <button type="button" className="numbers" onClick={clickHandle} name="7">7</button>
      <button type="button" className="numbers" onClick={clickHandle} name="8">8</button>
      <button type="button" className="numbers" onClick={clickHandle} name="9">9</button>
      <button type="button" className="cross" onClick={clickHandle} name="x">x</button>
      <button type="button" className="numbers" onClick={clickHandle} name="4">4</button>
      <button type="button" className="numbers" onClick={clickHandle} name="5">5</button>
      <button type="button" className="numbers" onClick={clickHandle} name="6">6</button>
      <button type="button" className="minus" onClick={clickHandle} name="-">-</button>
      <button type="button" className="numbers" onClick={clickHandle} name="1">1</button>
      <button type="button" className="numbers" onClick={clickHandle} name="2">2</button>
      <button type="button" className="numbers" onClick={clickHandle} name="3">3</button>
      <button type="button" className="plus" onClick={clickHandle} name="+">+</button>
      <button type="button" className="zero" onClick={clickHandle} name="0">0</button>
      <button type="button" className="period" onClick={clickHandle} name=".">.</button>
      <button type="button" className="equal" onClick={clickHandle} name="=">=</button>
    </div>
  );
};

export default Calculator;
