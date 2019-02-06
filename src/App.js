import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

import messages from './messages';
import logo from './logo.svg';

import './App.css';

class App extends Component {

  state = {
    language: ''
  };

  spanishChangedHandler = () => {
    this.setState({
      language: 'es'
    });
  };

  englishChangedHandler = () => {
    this.setState({
      language: 'en'
    });
  };

  render() {
    return (
      <IntlProvider
        locale={this.state.language}
        messages={messages[this.state.language]}
      >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />


            <h3>
              <FormattedMessage
                id='title.hello'
                defaultMessage='The original message is: Hello to Everbody!!!'
              />
            </h3>

            <div className="buttons">
              <button onClick={this.englishChangedHandler}>English</button>
              <button onClick={this.spanishChangedHandler}>Español</button>
            </div>

            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
