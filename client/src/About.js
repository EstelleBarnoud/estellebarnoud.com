import React from 'react';
import { Divider, Button, Container } from '@material-ui/core';
import profile from './profile.png';

const styles = {
    container: {
        display:'flex',
        justifyContent: 'space-around',
        padding: '5%',
        alignItems: 'center',
    },
    img: {
        maxWidth:'50%',
        height:'auto',
        maxHeight:'50%',
    },
    box: {
        maxWidth: '50%',
        height: 'auto',
    },
    description: {
        textAlign: 'left',
    },
    button: {
        
    }
}

export default function About() {
    return(
        <Container style={styles.container}>
            <div style={styles.box}>
                <img src={profile} className="App-profile" style={styles.img} alt="profile" />
            </div>
            <div>
                <div style={styles.description}>
                    <div>
                        <h2>Techy</h2>
                        <h2>Data-driven</h2>
                        <h2>Science curious</h2>
                        <Divider />
                        <h2>Forward-thinking with my feet on the ground</h2>
                    </div>
                    <p>
                        Hi there! I am an Engineer based on New York. I am to finish my second Master of Science at Columbia in December 2020 and I currently work as a Business Analyst in a cybersecurity startup.
                    </p>
                </div>
                <Button style={styles.button}>
                    Learn more
                </Button>
            </div>
        </Container>
    )
}