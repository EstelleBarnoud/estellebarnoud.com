import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from './AppBar.js';
import Cover from './Cover.js';
import Contact from './Contact.js';
import About from './About.js';
import Experience from './Experience.js';
import './App.css';

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
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
