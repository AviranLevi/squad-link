import React from 'react';

const Btn = ({ className, text, onClick }) => (
  <button onClick={onClick} className={`btn pointer ${className}`}>
    {text}
  </button>
);

export default Btn;
