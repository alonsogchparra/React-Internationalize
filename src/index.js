import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

import App from './App';

import './index.css';

addLocaleData([...en, ...es]);


ReactDOM.render(<App />, document.getElementById('root'));
