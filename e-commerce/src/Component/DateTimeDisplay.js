import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <span style={{fontSize:'16px'}}>{type}</span>
      <p style={{fontSize:'32px',fontWeight:'700'}}>{value}</p>
    </div>
  );
};

export default DateTimeDisplay;
