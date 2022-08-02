import React, { Component } from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

   clickHandle = (e) => {
     this.setState((state) => (calculate(state, e.target.name)));
   };

  render = () => {
    const { total, next, operation } = this.state;
    return (
      <div className="wrapper">
        <div className="display">
          {total}
          {operation}
          {next}
        </div>
        <button type="button" className="ac" onClick={this.clickHandle} name="AC">AC</button>
        <button type="button" className="plus-minus" onClick={this.clickHandle} name="+/-">+/-</button>
        <button type="button" className="percent" onClick={this.clickHandle} name="%">%</button>
        <button type="button" className="plus" onClick={this.clickHandle} name="÷">÷</button>
        <button type="button" className="numbers" onClick={this.clickHandle} name="7">7</button>
        <button type="button" className="numbers" onClick={this.clickHandle} name="8">8</button>
        <button type="button" className="numbers" onClick={this.clickHandle} name="9">9</button>
        <button type="button" className="cross" onClick={this.clickHandle} name="x">x</button>
        <button type="button" className="numbers" onClick={this.clickHandle} name="4">4</button>
        <button type="button" className="numbers" onClick={this.clickHandle} name="5">5</button>
        <button type="button" className="numbers" onClick={this.clickHandle} name="6">6</button>
        <button type="button" className="minus" onClick={this.clickHandle} name="-">-</button>
        <button type="button" className="numbers" onClick={this.clickHandle} name="1">1</button>
        <button type="button" className="numbers" onClick={this.clickHandle} name="2">2</button>
        <button type="button" className="numbers" onClick={this.clickHandle} name="3">3</button>
        <button type="button" className="plus" onClick={this.clickHandle} name="+">+</button>
        <button type="button" className="zero" onClick={this.clickHandle} name="0">0</button>
        <button type="button" className="period" onClick={this.clickHandle} name=".">.</button>
        <button type="button" className="equal" onClick={this.clickHandle} name="=">=</button>
      </div>
    );
  }
}
