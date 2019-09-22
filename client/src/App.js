import React from 'react';
import AppBar from './AppBar';
import Cover from './Cover.js';
import Contact from './Contact.js';
import About from './About.js'
import './App.css';
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
        <Cover />
      </header>
      <body>
        <About />
        <Contact />
      </body>
    </div>
  );
}

export default App;
