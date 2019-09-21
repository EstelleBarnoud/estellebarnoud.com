import React from 'react';
import AppBar from './AppBar'
import './App.css';
import cover from './cover.JPG';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      //light: '#757ce8',
      main: '#8BBBEB',
      //dark: '#002884',
      //contrastText: '#fff',
    },
    secondary: {
      main: '#C51162',
    },
  },
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar />
        <img src={cover} className="App-cover" alt="cover" />
      </header>
      <body>
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
