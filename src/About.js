import React from 'react';
import { Divider, Button, Container } from '@material-ui/core';
import profile from './images/profile.png';
import GitHubCornerIcon from './GitHubCornerIcon.js';
import './animation.css';

const styles = {
    container: {
        display: 'block',
        justifyContent: 'space-around',
        padding: '3%',
        alignItems: 'center',
    },
    img: {
        maxWidth:'75%',
        height:'auto',
        maxHeight: 350,
        margin: '5%',
    },
    box: {
        display: 'inline-block',
        minWidth: '50%',
        height: 'auto',
    },
    description: {
        textAlign: 'left',
    },
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin: '2%',
    },
    text: {
        fontSize: '16px',
        margin: '8% 0%',
    },
};

const scrollToExperience = () =>
    document.getElementById("experience").scrollIntoView({behavior:"smooth", inline:"nearest"})

export default function About() {
    return(
        <Container id="about" style={styles.container}>
            <a href="https://github.com/EstelleBarnoud/site-perso/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source on Github"
                className="no-print github-corner" >
                <GitHubCornerIcon />
            </a>
            <div style={styles.box}>
                <img src={profile} className="App-profile" style={styles.img} alt="profile" />
            </div>
            <div style={styles.box}>
                <div style={styles.description}>
                    <div>
                        <h2>Laser-focused on bringing impactful analytics solutions</h2>
                        <h2>Eternal learner keen on helping people grow</h2>
                        <h2>Cheerful &amp; committed</h2>
                        <Divider />
                        <h3><i>"The way to get started is to quit talking and begin doing."</i></h3>
                        <h4>Walt Disney</h4>
                    </div>
                    <p style={styles.text}>
                        Hi there! I’m an Engineer based in New York City.<br/>
                        ✨ I’m interested in Analytics &amp; Data Engineering<br/>
                        🌱 I’m currently deep diving into DataOps
                    </p>
                </div>
                <Button style={styles.root} onClick={scrollToExperience}>
                    Learn more
                </Button>
            </div>
        </Container>
    )
}