import React from 'react';
import { Container, IconButton, Tooltip, SvgIcon } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import ResumeIcon from '@material-ui/icons/Description';

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
                <IconButton href="https://github.com/EstelleBarnoud/" target="_blank" rel="noreferrer" >
                    <SvgIcon>
                        <path fill="#737373" d="M1093.4,202.4c-0.1,0.1-0.3,0.1-0.4-0.1c-0.2-0.2-0.3-0.3-0.1-0.4c0.1-0.1,0.3-0.1,0.4,0.1 C1093.5,202.2,1093.5,202.4,1093.4,202.4z M1092.5,201.2c0.2,0.2,0.2,0.3,0,0.4c-0.1,0.1-0.3,0-0.3-0.2c-0.1-0.2-0.1-0.3,0-0.4 C1092.3,200.9,1092.4,200.9,1092.5,201.2z M1091.2,199.9c-0.1,0.1-0.2,0.1-0.3,0c-0.2-0.1-0.2-0.2-0.2-0.3c0-0.1,0.2-0.1,0.3,0 C1091.2,199.7,1091.3,199.8,1091.2,199.9z M1091.9,200.6c-0.1,0.1-0.2,0.1-0.3-0.1c-0.1-0.2-0.2-0.3,0-0.3 c0.1-0.1,0.2-0.1,0.3,0.1C1092,200.4,1092,200.5,1091.9,200.6z M1094.6,202.9c-0.1,0.2-0.2,0.3-0.4,0.2c-0.3-0.1-0.3-0.2-0.3-0.3 c0.1-0.2,0.2-0.2,0.4-0.2C1094.6,202.7,1094.6,202.8,1094.6,202.9z M1096,203.1c0,0.2-0.1,0.3-0.3,0.3c-0.3,0-0.3-0.1-0.3-0.3 c0-0.2,0.1-0.3,0.3-0.3C1095.8,202.9,1096,202.9,1096,203.1z M1097.1,202.9c0,0.2-0.1,0.3-0.3,0.3s-0.3,0-0.4-0.2 c0-0.2,0.1-0.3,0.3-0.3C1097,202.6,1097.1,202.7,1097.1,202.9z M1117.6,182.7v20.2c0,1.7-0.6,3.1-1.8,4.3 c-1.2,1.2-2.6,1.8-4.3,1.8h-4.8c-0.3,0-0.4,0-0.5,0s-0.3-0.1-0.4-0.1c-0.2-0.1-0.3-0.2-0.3-0.3c-0.1-0.2-0.1-0.3-0.1-0.6v-5 c0-1.3-0.3-2.3-1.1-3c0.8-0.1,1.5-0.3,2.2-0.3c0.7-0.2,1.3-0.4,2-0.8c0.7-0.4,1.3-0.8,1.7-1.4c0.4-0.6,0.8-1.3,1.1-2.3 s0.4-2,0.4-3.2c0-1.7-0.6-3.2-1.7-4.3c0.5-1.3,0.5-2.8-0.2-4.3c-0.4-0.1-1-0.1-1.7,0.3c-0.8,0.3-1.4,0.6-1.9,0.9l-0.8,0.5 c-1.3-0.3-2.7-0.6-4-0.6c-1.4,0-2.8,0.2-4,0.6c-0.3-0.2-0.5-0.3-0.9-0.6c-0.3-0.3-0.9-0.5-1.8-0.8c-0.8-0.3-1.4-0.4-1.8-0.3 c-0.6,1.6-0.7,3-0.2,4.3c-1.1,1.2-1.7,2.7-1.7,4.3c0,1.2,0.2,2.3,0.4,3.2c0.3,0.9,0.7,1.7,1.1,2.3s1,1,1.7,1.4 c0.7,0.4,1.3,0.7,2,0.8s1.3,0.3,2.2,0.3c-0.6,0.5-0.9,1.3-1,2.2c-0.3,0.2-0.6,0.3-0.9,0.3c-0.3,0.1-0.8,0.1-1.2,0.1 c-0.5,0-0.9-0.2-1.4-0.5c-0.5-0.3-0.8-0.8-1.2-1.3c-0.3-0.4-0.6-0.8-1-1.1c-0.4-0.3-0.8-0.4-1-0.5l-0.4-0.1c-0.3,0-0.5,0-0.6,0.1 c-0.1,0.1-0.2,0.2-0.1,0.3c0,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.3l0.2,0.1c0.3,0.2,0.6,0.4,0.9,0.8 c0.3,0.4,0.5,0.8,0.7,1.1l0.3,0.5c0.2,0.5,0.5,1,0.9,1.3s0.9,0.5,1.4,0.7c0.5,0.1,1,0.2,1.5,0.2c0.5,0,0.8,0,1.2-0.1l0.5-0.1 c0,0.5,0,1.3,0,2.2s0,1.4,0,1.4c0,0.3-0.1,0.5-0.3,0.7c-0.2,0.2-0.3,0.3-0.5,0.3s-0.4,0-0.7,0h-4.8c-1.7,0-3.1-0.6-4.3-1.8 c-1.2-1.2-1.8-2.6-1.8-4.3v-20.2c0-1.7,0.6-3.1,1.8-4.3c1.2-1.2,2.6-1.8,4.3-1.8h20.2c1.7,0,3.1,0.6,4.3,1.8 C1117,179.6,1117.6,181,1117.6,182.7L1117.6,182.7z"></path>
                    </SvgIcon>                
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