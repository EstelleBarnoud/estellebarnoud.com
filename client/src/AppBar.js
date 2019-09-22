import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Slide, Button } from '@material-ui/core';

const styles = {
    bar: {
        display: "flex",
        justifyContent: "space-between"
    },
    buttons: {
        //display: "flex",
        //justifyContent: "space-around"
    },
}

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
            <Typography variant="h6">Hello World!</Typography>
            <div style={styles.buttons}>
                <Button color="inherit">About me</Button>
                <Button color="inherit">Experience</Button>
                <Button color="inherit">Projects</Button>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}