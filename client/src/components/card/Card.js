import React from 'react';

const Card = ({ className, title, onClick, coverImage = '' }) => (
  <div onClick={onClick} className={`card pointer ${className}`} style={{ backgroundImage: `url(${coverImage})` }}>
    {title}
  </div>
);

export default Card;
