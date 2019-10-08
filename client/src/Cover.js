import React from 'react';
import { Container } from '@material-ui/core';
import GitHubCornerIcon from './GitHubCornerIcon.js';
import animation from './animation.css';
import cover from './images/cover.JPG';

const styles = {
    img: {
        maxWidth: '100%',
        height: 'auto',
        maxHeight: '100%',
    },
    container: {
        padding: 0,
        margin: -9,
    }
}

export default function Cover(props) {
  return (
    <Container style={styles.container}>
      <img src={cover} style={styles.img} alt="cover" />
      <a href="https://github.com/EstelleBarnoud/site-perso/" target="_blank" aria-label="View source on Github" class="no-print github-corner" >
        <GitHubCornerIcon />
      </a>
    </Container>
  )
}