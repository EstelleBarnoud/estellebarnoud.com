import React from 'react';
import { Container, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

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
            <IconButton href="https://www.linkedin.com/in/estellebarnoud/?locale=en_US" target="_blank" >
                <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton>
                <EmailIcon fontSize="large" onClick={handleClick} />
            </IconButton>
        </Container>
    )
}