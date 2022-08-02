import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.name = 'eslint';
  }

  render() {
    return (
      <div className="wrapper">
        <div className="display">0</div>
        <div className="ac">AC</div>
        <div className="plus-minus">+/-</div>
        <div className="percent">%</div>
        <div className="plus">+</div>
        <div className="numbers">7</div>
        <div className="numbers">8</div>
        <div className="numbers">9</div>
        <div className="cross">x</div>
        <div className="numbers">4</div>
        <div className="numbers">5</div>
        <div className="numbers">6</div>
        <div className="minus">-</div>
        <div className="numbers">1</div>
        <div className="numbers">2</div>
        <div className="numbers">3</div>
        <div className="plus">+</div>
        <div className="zero">0</div>
        <div className="period">.</div>
        <div className="equal">=</div>
      </div>
    );
  }
}
