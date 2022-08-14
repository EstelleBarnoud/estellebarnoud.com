import React from 'react';
import { Chip } from '@material-ui/core';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: '1%',
      },
    chip: {
        margin: 2,
    },
    categories: {
        fontSize: '14px',
    },
}

export default function Skills() {
    return (
        <div>
            <p style={styles.categories}>Coding, Machine Learning &amp; Stats</p>
            <div style={styles.root}>
                <Chip variant='outlined' label='Python' style={styles.chip} />
                <Chip variant='outlined' label='sklearn' style={styles.chip} />
                <Chip variant='outlined' label='pandas' style={styles.chip} />
                <Chip variant='outlined' label='R' style={styles.chip} />
                <Chip variant='outlined' label='Java' style={styles.chip} />
            </div>
            <p style={styles.categories}>OS &amp; Version Control</p>
            <div style={styles.root}>
                <Chip variant='outlined' label='Linux' style={styles.chip} />
                <Chip variant='outlined' label='Windows' style={styles.chip} />
                <Chip variant='outlined' label='Git' style={styles.chip} />
            </div>
            <p style={styles.categories}>Web Development</p>
            <div style={styles.root}>
                <Chip variant='outlined' label='HTML' style={styles.chip} />
                <Chip variant='outlined' label='CSS' style={styles.chip} />
                <Chip variant='outlined' label='Javascript' style={styles.chip} />
                <Chip variant='outlined' label='React' style={styles.chip} />
                <Chip variant='outlined' label='Redux' style={styles.chip} />
            </div>
            <p style={styles.categories}>Data Management, Visualization &amp; Analysis</p>
            <div style={styles.root}>
                <Chip variant='outlined' label='SQL' style={styles.chip} />
                <Chip variant='outlined' label='Excel' style={styles.chip} />
                <Chip variant='outlined' label='Power BI' style={styles.chip} />
                <Chip variant='outlined' label='Tableau' style={styles.chip} />
                <Chip variant='outlined' label='Salesforce' style={styles.chip} />  
            </div>
        </div>
    );
}