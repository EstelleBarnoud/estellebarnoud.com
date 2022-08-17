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
    category: {
        margin: 23,
    },
    name: {
        fontWeight: 'bold',
        margin: 10
    },
}

export default function Skills() {
    return (
        <div>
            <div style={styles.category}>
                <p style={styles.name}>Programming</p>
                <div style={styles.root}>
                    <Chip variant='outlined' label='Python' style={styles.chip} />
                    <Chip variant='outlined' label='SQL' style={styles.chip} />
                </div>
            </div>
            <div style={styles.category}>
                <p style={styles.name}>Analytics engineering &amp; data pipelines</p>
                <div style={styles.root}>
                    <Chip variant='outlined' label='dbt' style={styles.chip} />
                    <Chip variant='outlined' label='BigQuery' style={styles.chip} />
                    <Chip variant='outlined' label='Airflow' style={styles.chip} />
                    <Chip variant='outlined' label='Fivetran' style={styles.chip} />
                </div>
            </div>
            <div style={styles.category}>
                <p style={styles.name}>DevOps</p>
                <div style={styles.root}>
                    <Chip variant='outlined' label='git' style={styles.chip} />
                    <Chip variant='outlined' label='GitLab CI' style={styles.chip} />
                    <Chip variant='outlined' label='Docker' style={styles.chip} />
                </div>
            </div>
            <div style={styles.category}>
                <p style={styles.name}>Data Visualization &amp; Analysis</p>
                <div style={styles.root}>
                    <Chip variant='outlined' label='Power BI' style={styles.chip} />
                    <Chip variant='outlined' label='Tableau' style={styles.chip} />
                    <Chip variant='outlined' label='Excel' style={styles.chip} />
                    <Chip variant='outlined' label='VBA' style={styles.chip} />  
                </div>
            </div>
            <div style={styles.category}>
                <p style={styles.name}>Data sourcing (databases, events &amp; SaaS)</p>
                <div style={styles.root}>
                    <Chip variant='outlined' label='PostgreSQL' style={styles.chip} />
                    <Chip variant='outlined' label='MongoDB' style={styles.chip} />
                    <Chip variant='outlined' label='Salesforce' style={styles.chip} />
                    <Chip variant='outlined' label='HubSpot' style={styles.chip} />
                    <Chip variant='outlined' label='Google Analytics' style={styles.chip} />
                    <Chip variant='outlined' label='AirTable' style={styles.chip} />
                    <Chip variant='outlined' label='PubSub' style={styles.chip} />
                </div>
            </div>
            <div style={styles.category}>
                <p style={styles.name}>Web Development (side projects)</p>
                <div style={styles.root}>
                    <Chip variant='outlined' label='HTML' style={styles.chip} />
                    <Chip variant='outlined' label='CSS' style={styles.chip} />
                    <Chip variant='outlined' label='Javascript' style={styles.chip} />
                    <Chip variant='outlined' label='React' style={styles.chip} />
                </div>
            </div>
        </div>
    );
}