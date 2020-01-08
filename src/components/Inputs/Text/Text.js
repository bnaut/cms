import React from 'react';
import { ReactComponent as Logo } from '../../../icons/edit.svg';

import './Text.scss'; 

const Text = ({ style, label, labelid }) => (
  <div className='text' style={style}>
    <label for={labelid}>{label}</label>
    <input type="text" name={labelid} id={labelid} />
    <Logo className='icon' />
  </div>
);

export default Text;
