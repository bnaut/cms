import React from 'react';
import './Card.scss';

const Card = ({ children, style }) => (
  <div className='card' style={style} >
    <div className='container'>
      {children}
    </div>
  </div>
);


export default Card;
