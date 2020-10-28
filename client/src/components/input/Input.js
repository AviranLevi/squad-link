import React from 'react';

const Input = ({ className, type = 'text', name, onChange, value, placeHolder }) => (
  <input
    type={type}
    name={name}
    value={value}
    placeholder={placeHolder}
    onChange={onChange}
    className={`input ${className}`}
  />
);

export default Input;
