import React from 'react';
import { Container, IconButton, Tooltip, SvgIcon } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import ResumeIcon from '@material-ui/icons/Description';
import GitHub from './Github.js';

const styles = {
    container: {
        //minHeight: '200px',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '5%',
    }
}

const handleClick = () =>
    window.open('mailto:estelle.barnoud@gmail.com')

export default function Contact(){
    return(
        <Container id="contact" style={styles.container} >
            <Tooltip title="LinkedIn profile" >
                <IconButton href="https://www.linkedin.com/in/estellebarnoud/?locale=en_US" target="_blank" rel="noopener noreferrer" >
                    <LinkedInIcon fontSize="large" />
                </IconButton>
            </Tooltip>
            <Tooltip title="GitHub account">
                <IconButton href="https://github.com/EstelleBarnoud/" target="_blank" rel="Norefferer" >
                    <GitHub />
                </IconButton>
            </Tooltip>
            <Tooltip title="Send an email">
                <IconButton onClick={handleClick}>
                    <EmailIcon fontSize="large" />
                </IconButton>
            </Tooltip>
            <Tooltip title="See Resume" >
                <IconButton href='/resume.pdf' target="_blank" rel="noreferrer">
                    <ResumeIcon fontSize="large" />
                </IconButton>
            </Tooltip>
        </Container>
    )
}