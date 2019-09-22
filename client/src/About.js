import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

export default function About() {
    return(
        <Container>
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
            <Button>
                Learn more
            </Button>
        </Container>
    )
}