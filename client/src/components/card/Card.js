import React from 'react';
import Title from '../title';

const Card = ({ className, title, onClick, coverImage = '' }) => (
  <div onClick={onClick} className={`card pointer ${className}`} style={{ backgroundImage: `url(${coverImage})` }}>
    <div className='card-title center-items transition'>
      <Title text={title} />
    </div>
  </div>
);

export default Card;
