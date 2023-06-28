import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, useScrollTrigger, Slide, Button, ButtonGroup, Typography } from '@material-ui/core';

const styles = {
    bar: {
        display: "flex",
        justifyContent: "space-between",
        width: '100%',
        backgroundColor: '#8BBBEB',
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

const scrollToSection = (sectionId) => () =>
    document.getElementById(sectionId).scrollIntoView({behavior: "smooth", inline: "nearest"});


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
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar style={styles.bar}>
            <Typography variant="h5" noWrap component="div" style={styles.hello}>
              Hello World!
            </Typography>
            <ButtonGroup fullWidth>
                <Button color="inherit" variant="text" onClick={scrollToSection("about")} style={styles.button}>About me</Button>
                <Button color="inherit" variant="text" onClick={scrollToSection("experience")} style={styles.button}>Experience</Button>
                <Button color="inherit" variant="text" onClick={scrollToSection("contact")} style={styles.button}>Connect</Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}