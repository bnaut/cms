import React from 'react';

import './Text.scss'; 

const Text = ({ style, label, labelid }) => (
  <div className='text' style={style}>
    <label for={labelid} >{label}</label>
    <input type="text" name={labelid} id={labelid} />
  </div>
);

export default Text;
