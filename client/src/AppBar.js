import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Slide, Button, ButtonGroup } from '@material-ui/core';

const styles = {
    bar: {
        display: "flex",
        justifyContent: "space-between",
        width: '100%',
    },
    hello: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
    },
    button: {
        padding: '2%',
    }
}

const handleClick = () =>
  document.getElementById("about").scrollIntoView({behavior: "smooth", inline: "nearest"});

const handleClick2 = () =>
  document.getElementById("experience").scrollIntoView({behavior: "smooth", inline: "nearest"});

const handleClick3 = () =>
  document.getElementById("contact").scrollIntoView({behavior: "smooth", inline: "nearest"});


function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar style={styles.bar}>
            <Typography edge='start' variant="h6" style={styles.hello}>Hello World!</Typography>
            <ButtonGroup fullWidth>
                <Button color="inherit" variant="text" onClick={handleClick} style={styles.button}>About me</Button>
                <Button color="inherit" variant="text" onClick={handleClick2} style={styles.button}>Experience</Button>
                <Button color="inherit" variant="text" onClick={handleClick3} style={styles.button}>Connect</Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}