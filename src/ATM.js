import React, { useState } from 'react';

function ATMP() {
  const [p, setP] = useState('');
  const [denominations, setDenominations] = useState({
    fiveThousand: 0,
    oneThousand: 0,
    fiveHundred: 0,
    oneHundred: 0,
    fifty: 0,
    ten: 0,
    remaining: 0,
  });

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setP(inputValue);
    calculateCurrency(inputValue);
  };

  const calculateCurrency = (p) => {
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

    setDenominations({
      fiveThousand,
      oneThousand,
      fiveHundred,
      oneHundred,
      fifty,
      ten,
      remaining,
    });
  };

  return (
    <div>
      <label>Enter PKR: </label>
      <input type="number" value={p} onChange={handleInputChange} />
      <div>User Inputs: {p}</div>
      {Object.entries(denominations).map(([denomination, value]) => (
        <div key={denomination}>
          {denomination.charAt(0).toUpperCase() + denomination.slice(1)}: {value}
        </div>
      ))}
    </div>
  );
}

export default ATMP;
