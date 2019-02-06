import React from 'react';

import './Button.css';

const button = (props) => (
  <button onClick={props.translate}>{props.label}</button>
);

export default button;