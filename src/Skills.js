import React from 'react';
import { Avatar, Chip } from '@material-ui/core';
import python from './images/python.png';
import sql from './images/sql.png';
import bigquery from './images/bigquery.png';
import snowflake from './images/snowflake.png';
import dbt from './images/dbt.png';
import airflow from './images/airflow.png';
import fivetran from './images/fivetran.png';
import stitch from './images/stitch.png';
import git from './images/git.png';
import github from './images/github.png';
import gitlab from './images/gitlab.png';
import docker from './images/docker.png';
import looker from './images/looker.png';
import powerbi from './images/powerbi.png';
import tableau from './images/tableau.png';
import domo from './images/domo.png';
import excel from './images/excel.png';
import vba from './images/vba.png';
import postgresql from './images/postgresql.png';
import mongodb from './images/mongodb.png';
import salesforce from './images/salesforce.png';
import hubspot from './images/hubspot.webp';
import zendesk from './images/zendesk.png';
import pendo from './images/pendo.jpeg';
import ga from './images/google_analytics.webp';
import airtable from './images/airtable.png';
import pubsub from './images/pubsub.svg';
import html from './images/html.png';
import css from './images/css.webp';
import js from './images/javascript.png';
import react from './images/react.png';

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
        margin: 10,
    },
    icon: {
        width: 20,
        height: 20,
    }
}

export default function Skills() {
    return (
        <div>
            <div style={styles.category}>
                <p style={styles.name}>Programming</p>
                <div style={styles.root}>
                    <Chip variant='outlined' label='Python' style={styles.chip} avatar={
                        <Avatar alt="python" src={python} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='SQL' style={styles.chip} avatar={
                        <Avatar alt="sql" src={sql} style={styles.icon} />
                    } />
                </div>
            </div>
            <div style={styles.category}>
                <p style={styles.name}>Analytics engineering &amp; data pipelines</p>
                <div style={styles.root}>
                    <Chip variant='outlined' label='dbt' style={styles.chip} avatar={
                        <Avatar alt="dbt" src={dbt} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='BigQuery' style={styles.chip} avatar={
                        <Avatar alt="bigquery" src={bigquery} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='Snowflake' style={styles.chip} avatar={
                        <Avatar alt="snowflake" src={snowflake} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='Airflow' style={styles.chip} avatar={
                        <Avatar alt="airflow" src={airflow} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='Fivetran' style={styles.chip} avatar={
                        <Avatar alt="fivetran" src={fivetran} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='Stitch' style={styles.chip} avatar={
                        <Avatar alt="stitch" src={stitch} style={styles.icon} />
                    } />
                </div>
            </div>
            <div style={styles.category}>
                <p style={styles.name}>DevOps</p>
                <div style={styles.root}>
                    <Chip variant='outlined' label='git' style={styles.chip} avatar={
                        <Avatar alt="git" src={git} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='GitHub Actions' style={styles.chip} avatar={
                        <Avatar alt="github" src={github} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='GitLab CI' style={styles.chip} avatar={
                        <Avatar alt="gitlab" src={gitlab} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='Docker' style={styles.chip} avatar={
                        <Avatar alt="docker" src={docker} style={styles.icon} />
                    } />
                </div>
            </div>
            <div style={styles.category}>
                <p style={styles.name}>Data Visualization &amp; Analysis</p>
                <div style={styles.root}>
                    <Chip variant='outlined' label='Looker' style={styles.chip} avatar={
                        <Avatar alt="looker" src={looker} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='Power BI' style={styles.chip} avatar={
                        <Avatar alt="powerbi" src={powerbi} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='Tableau' style={styles.chip} avatar={
                        <Avatar alt="tableau" src={tableau} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='DOMO' style={styles.chip} avatar={
                        <Avatar alt="domo" src={domo} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='Excel' style={styles.chip} avatar={
                        <Avatar alt="excel" src={excel} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='VBA' style={styles.chip} avatar={
                        <Avatar alt="vba" src={vba} style={styles.icon} />
                    } />  
                </div>
            </div>
            <div style={styles.category}>
                <p style={styles.name}>Data sourcing (databases, events &amp; SaaS)</p>
                <div style={styles.root}>
                    <Chip variant='outlined' label='PostgreSQL' style={styles.chip} avatar={
                        <Avatar alt="postgresql" src={postgresql} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='MongoDB' style={styles.chip} avatar={
                        <Avatar alt="mongodb" src={mongodb} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='Salesforce' style={styles.chip} avatar={
                        <Avatar alt="salesforce" src={salesforce} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='HubSpot' style={styles.chip} avatar={
                        <Avatar alt="hubspot" src={hubspot} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='Zendesk' style={styles.chip} avatar={
                        <Avatar alt="zendesk" src={zendesk} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='Pendo' style={styles.chip} avatar={
                        <Avatar alt="pendo" src={pendo} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='Google Analytics' style={styles.chip} avatar={
                        <Avatar alt="ga" src={ga} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='AirTable' style={styles.chip} avatar={
                        <Avatar alt="aitable" src={airtable} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='PubSub' style={styles.chip} avatar={
                        <Avatar alt="pubsub" src={pubsub} style={styles.icon} />
                    } />
                </div>
            </div>
            <div style={styles.category}>
                <p style={styles.name}>Web Development (side projects)</p>
                <div style={styles.root}>
                    <Chip variant='outlined' label='HTML' style={styles.chip} avatar={
                        <Avatar alt="html" src={html} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='CSS' style={styles.chip} avatar={
                        <Avatar alt="css" src={css} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='Javascript' style={styles.chip} avatar={
                        <Avatar alt="javascript" src={js} style={styles.icon} />
                    } />
                    <Chip variant='outlined' label='React' style={styles.chip} avatar={
                        <Avatar alt="react" src={react} style={styles.icon} />
                    } />
                </div>
            </div>
        </div>
    );
}