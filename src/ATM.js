import React, { Component } from 'react';

class CurrencyConverter extends Component {
  constructor() {
    super();
    this.state = {
      p: '',
      fiveThousand: 0,
      oneThousand: 0,
      fiveHundred: 0,
      oneHundred: 0,
      fifty: 0,
      ten: 0,
      remaining: 0,
    };
  }

  handleInputChange = (e) => {
    const inputValue = e.target.value;
    this.setState({ p: inputValue }, () => {
      this.calculateCurrency();
    });
  };

  calculateCurrency = () => {
    const { p } = this.state;
    const fiveThousand = Math.floor(p / 5000);
    const remainingAfterFiveThousand = p % 5000;

    const oneThousand = Math.floor(remainingAfterFiveThousand / 1000);
    const remainingAfterOneThousand = remainingAfterFiveThousand % 1000;

    const fiveHundred = Math.floor(remainingAfterOneThousand / 500);
    const remainingAfterFiveHundred = remainingAfterOneThousand % 500;

    const oneHundred = Math.floor(remainingAfterFiveHundred / 100);
    const remainingAfterOneHundred = remainingAfterFiveHundred % 100;

    const fifty = Math.floor(remainingAfterOneHundred / 50);
    const remainingAfterFifty = remainingAfterOneHundred % 50;
    
    const ten = Math.floor(remainingAfterFifty / 10);
    const remaining = remainingAfterFifty % 10;

    this.setState({
      fiveThousand,
      oneThousand,
      fiveHundred,
      oneHundred,
      fifty,
      ten,
      remaining,
    });
  };

  render() {
    const { p, fiveThousand, oneThousand, fiveHundred, oneHundred, fifty, ten, remaining } = this.state;

    return (
      <div>
        <label>Enter pKR: </label>
        <input type="number" value={p} onChange={this.handleInputChange} />
        <div>User Inputs: {p}</div>
        <div>5000: {fiveThousand}</div>
        <div>1000: {oneThousand}</div>
        <div>500: {fiveHundred}</div>
        <div>100: {oneHundred}</div>
        <div>50: {fifty}</div>
        <div>10: {ten}</div>
        <div>Remaining: {remaining}</div>
      </div>
    );
  }
}

export default CurrencyConverter;
