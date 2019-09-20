import React from 'react';
import AppBar from './AppBar'
import logo from './cover.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World!
        </p>
        <AppBar />
      </header>
      <body>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.linkedin.com/in/estellebarnoud/?locale=en_US"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn profile
        </a>
      </body>
    </div>
  );
}

export default App;
