import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from './AppBar.js';
import Contact from './Contact.js';
import About from './About.js';
import Experience from './Experience.js';
import './App.css';
import ReactGA from 'react-ga';

const trackingId = 'UA-108079703-2'; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

const theme = createMuiTheme({
  typography: {
    fontFamily: "ABeeZee",
    align: "center",
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <AppBar />
        </header>
        <About />
        <Experience />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
