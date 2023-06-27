import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Tabs, Tab, Container, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WorkExp from './WorkExp.js';
import Education from './Education.js';
import Skills from './Skills.js';
import Projects from "./Projects.js";
import Volunteering from "./Volunteering.js";
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/BusinessCenter';
import NatureIcon from '@material-ui/icons/Eco';
import SportIcon from '@material-ui/icons/FitnessCenter';
import ToolIcon from '@material-ui/icons/Build';
import HeartIcon from '@material-ui/icons/Favorite';
import './App.css';

const styles = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        maxHeight: '800px',
        margin: '0 auto',
    },
    panel: {
        width: '100%',
    },
    description:{
        //flexGrowth: 4,
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
    },
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
    list: {
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    subtitle: {
        fontSize: '16px',
    },
    tabs: {
        minWidth: '130px',
    }
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));

export default function Experience() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (_, newValue) => {
      setValue(newValue);
    };  

    return(
        <div id="experience" className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
                style={styles.tabs}
            >
                <Tab icon={<WorkIcon />} label="Career" {...a11yProps(0)} />
                <Tab icon={<SchoolIcon />} label="Education" {...a11yProps(1)} />
                <Tab icon={<SportIcon />} label="Skills" {...a11yProps(2)} />
                <Tab icon={<ToolIcon />} label="Projects" {...a11yProps(3)} />
                <Tab icon={<NatureIcon />} label="Volunteering" {...a11yProps(4)} />
                <Tab icon={<HeartIcon />} label="Passions" {...a11yProps(5)} />
            </Tabs>
            <TabPanel value={value} index={0} style={styles.panel}>
                <Container style={styles.container}>
                    <WorkExp />
                </Container>
            </TabPanel>
            <TabPanel value={value} index={1} style={styles.panel}>
                <Container style={styles.container}>
                    <Education />
                </Container>            
            </TabPanel>
            <TabPanel value={value} index={2} style={styles.panel}>
                <Container style={styles.container}>
                    <Skills />
                </Container>
            </TabPanel>
            <TabPanel value={value} index={3} style={styles.panel}>
                <Container style={styles.container}>
                    <Projects />
                </Container>
            </TabPanel>
            <TabPanel value={value} index={4} style={styles.panel}>
                <Container style={styles.container}>
                    <Volunteering />
                </Container>
            </TabPanel>
            <TabPanel value={value} index={5} style={styles.panel}>
                <Container style={styles.container}>
                    <p style={styles.subtitle}>Music</p>
                    <div style={styles.root}>
                        <Chip variant='outlined' label='Violin' style={styles.chip} />
                        <Chip variant='outlined' label='Piano' style={styles.chip} />
                        <Chip variant='outlined' label='Singing' style={styles.chip} />
                    </div>
                    <p style={styles.subtitle}>Sport</p>
                    <div style={styles.root}>
                        <Chip variant='outlined' label='Hiking' style={styles.chip} />
                        <Chip variant='outlined' label='Rowing' style={styles.chip} />
                    </div>
                </Container>
            </TabPanel>
        </div>
    )
}