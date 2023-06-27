import React from 'react';
import { Container, Divider, IconButton, Tooltip } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import ResumeIcon from '@material-ui/icons/Description';
import GitHubIcon from './Github.js';
import NodeJsIcon from './images/nodejs.png';
import ReactIcon from './images/react-full.png';
import MaterialUIIcon from './images/material-ui.png';

const styles = {
    icons: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '5%',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    node: {
        maxHeight: '40px',
        margin: '0% 5%',
    },
    tech: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '3%',
    },
}

const sendEmail = () =>
    window.open('mailto:estelle.barnoud@columbia.edu')

export default function Contact(){
    return(
        <Container id="contact" style={styles.container} >
            <Container style={styles.icons} >
                <Tooltip title="LinkedIn profile" >
                    <IconButton href="https://www.linkedin.com/in/estellebarnoud/?locale=en_US" target="_blank" rel="noopener noreferrer" >
                        <LinkedInIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="GitHub account">
                    <IconButton href="https://github.com/EstelleBarnoud/" target="_blank" rel="Norefferer" >
                        <GitHubIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Send an email">
                    <IconButton onClick={sendEmail}>
                        <EmailIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="See Resume" >
                    <IconButton href='/resume.pdf' target="_blank" rel="noreferrer">
                        <ResumeIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
            </Container>
            <Divider />
            <Container style={styles.tech}>
                <p>Developed using</p>
                <img src={NodeJsIcon} style={styles.node} alt="NodeJs icon"/>
                <img src={ReactIcon} style={styles.node} alt="React icon"/>
                <img src={MaterialUIIcon} style={styles.node} alt="Material UI icon"/>
            </Container>    
        </Container>
    )
}