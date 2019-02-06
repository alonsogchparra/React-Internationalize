import React from 'react';
import { FormattedMessage } from 'react-intl';

const title = (props) => (
  <h3>
    <FormattedMessage 
      id='title.hello'
      defaultMessage='The original message is: Hello to Everbody!!!'
    />
  </h3>
);

export default title;