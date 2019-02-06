import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';

import Button from './components/Button/Button';
import Title from './components/Title/Title';
import messages from './utilities/messages';
import logo from './logo.svg';

import './App.css';

class App extends Component {

  state = {
    language: ''
  };

  setLanguage = language => () => {
    this.setState({
      language: language
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

            <Title />

            <div className="buttons">
              <Button
                label="English"
                translate={this.setLanguage('en')}
              />
              <Button
                label="Español"
                translate={this.setLanguage('es')}
              />
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
