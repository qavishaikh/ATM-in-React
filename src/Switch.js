import React, { useState } from 'react';

function App() {
  const [day, setDay] = useState('');
  const [message, setMessage] = useState('');

  const handleDayChange = (e) => {
    setDay(e.target.value.toLowerCase());
  };

  const displayMessage = () => {
    switch (day) {
      case 'sunday':
        setMessage('Today is Aram day');
        break;
      case 'saturday':
        setMessage('Today is Smit day');
        break;
       case 'monday':
        setMessage('Today is University day');
        break;
       case 'tuesday':
        setMessage('Today is NIC day');
        break;
       case 'wednessday':
        setMessage('Today is NGO day');
        break;
       case 'thursday':
        setMessage('Today is Karachi day');
        break;
       case 'friday':
        setMessage('Today is Friends day');
        break;
      default:
        setMessage('');
        break;
    }
  };

  return (
    <div>
      <h1>All Day of Week </h1>
      <input
        type="text"
        placeholder="Enter a day of the week"
        value={day}
        onChange={handleDayChange}
      />
      <button onClick={displayMessage}>Show Output</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
