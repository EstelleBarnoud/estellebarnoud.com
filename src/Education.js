import React from 'react';
import telecom from './images/telecom.png';
import columbia from './images/columbia.png';

const styles = {
    img_ed: {
        maxHeight: '80px',
    },
    img: {
        //flexBasis: '20%',
        maxHeight: '80px',
        maxWidth: '200px',
        margin: '1% 5%',
    },
    space: {
        marginTop: '7%',
    },
}

export default function Education() {
    return (
        <div>
            <div>
                <a style={styles.img} href="https://mse.ieor.columbia.edu/" target="_blank" rel="noopener noreferrer" >
                    <img src={columbia} style={styles.img_ed} alt="Columbia logo" />
                </a>
                <p>Master of Science in Management Science &amp; Engineering</p>
            </div>
            <div style={styles.space}>
                <a style={styles.img} href="https://www.telecom-paris.fr/" target="_blank" rel="noopener noreferrer" >
                    <img src={telecom} style={styles.img_ed} alt="Telecom logo" />
                </a>
                <p>Diplôme d’ingénieur – Master of Science in Data Science</p>
            </div>
        </div>
    );
  }