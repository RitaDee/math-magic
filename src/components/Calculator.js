import React, { useState } from 'react';

import calculate from '../logic/calculate';

const initialState = {
  total: 0,
  next: '',
  operation: '',
};

const Calculator = () => {
  const [state, setState] = useState(initialState);

  const { total, next, operation } = state;

  const onClickHandler = (event) => {
    const TargetValue = event.target.value;
    const updateState = calculate(state, TargetValue);
    setState(updateState);
  };

  return (
    <div className="calculatorF">
      <h2 className="calculatorT">Let&apos;s do some maths</h2>
      <div className="container">
        <div className="result">
          {total}
          {' '}
          {operation}
          {' '}
          {next}
        </div>
        <button onClick={onClickHandler} type="button" value="AC" className="key">
          AC
        </button>
        <button onClick={onClickHandler} type="button" value="+/-" className="key">
          +/-
        </button>
        <button onClick={onClickHandler} type="button" value="%" className="key">
          %
        </button>
        <button onClick={onClickHandler} type="button" value="÷" className="operator">
          ÷
        </button>
        <button onClick={onClickHandler} type="button" value="7" className="key">
          7
        </button>
        <button onClick={onClickHandler} type="button" value="8" className="key">
          8
        </button>
        <button onClick={onClickHandler} type="button" value="9" className="key">
          9
        </button>
        <button onClick={onClickHandler} type="button" value="x" className="operator">
          x
        </button>
        <button onClick={onClickHandler} type="button" value="4" className="key">
          4
        </button>
        <button onClick={onClickHandler} type="button" value="5" className="key">
          5
        </button>
        <button onClick={onClickHandler} type="button" value="6" className="key">
          6
        </button>
        <button onClick={onClickHandler} type="button" value="-" className="operator">
          -
        </button>
        <button onClick={onClickHandler} type="button" value="1" className="key">
          1
        </button>
        <button onClick={onClickHandler} type="button" value="2" className="key">
          2
        </button>
        <button onClick={onClickHandler} type="button" value="3" className="key">
          3
        </button>
        <button onClick={onClickHandler} type="button" value="+" className="operator">
          +
        </button>
        <button onClick={onClickHandler} type="button" value="0" className="key zero">
          0
        </button>
        <button onClick={onClickHandler} type="button" value="." className="key">
          .
        </button>
        <button onClick={onClickHandler} type="button" value="=" className="operator">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
