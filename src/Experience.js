import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Tabs, Tab, Container, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WorkExp from './WorkExp.js';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/BusinessCenter';
import NatureIcon from '@material-ui/icons/Eco';
import SportIcon from '@material-ui/icons/FitnessCenter';
import ToolIcon from '@material-ui/icons/Build';
import HeartIcon from '@material-ui/icons/Favorite';
import './App.css';
import telecom from './images/telecom.png';
import columbia from './images/columbia.png';
import mad from './images/mad.png';
import miedepain from './images/miedepain.png';
import ideescitoyennes from './images/ideescitoyennes.png';
import calm from './images/calm.png';

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
    space: {
        marginTop: '5%',
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
            >
                <Tab icon={<SchoolIcon />} label="Education" {...a11yProps(0)} />
                <Tab icon={<WorkIcon />} label="Career" {...a11yProps(1)} />
                <Tab icon={<NatureIcon />} label="Volunteering" {...a11yProps(2)} />
                <Tab icon={<SportIcon />} label="Skills" {...a11yProps(3)} />
                <Tab icon={<ToolIcon />} label="Projects" {...a11yProps(4)} />
                <Tab icon={<HeartIcon />} label="Passions" {...a11yProps(5)} />
            </Tabs>
            <TabPanel value={value} index={0} style={styles.panel}>
                <Container style={styles.container}>
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
                </Container>            
            </TabPanel>
            <TabPanel value={value} index={1} style={styles.panel}>
                <Container style={styles.container}>
                    <WorkExp />
                </Container>
            </TabPanel>
            <TabPanel value={value} index={2} style={styles.panel}>
                <Container style={styles.container}>
                    <div style={styles.content}>
                        <a style={styles.img} href="https://www.facebook.com/MakeADifferenceTPT/" target="_blank" rel="noopener noreferrer" >
                            <img src={mad} style={styles.img} alt="Make A Difference logo" />
                        </a>
                        <p style={styles.description}>President and founder</p>
                        <ul style={styles.list}>
                            <li>Founded &amp; chaired the association; Directed &amp; led projects such as charity work and recycling</li>
                            <li>Organized €1500+ event of 100+ attendants to raise awareness about disabilities</li>
                        </ul>
                    </div>
                    <div style={styles.content}>
                        <a style={styles.img} href="https://www.miedepain.asso.fr/" target="_blank" rel="noopener noreferrer" >
                            <img src={miedepain} style={styles.img} alt="La Mie de Pain logo" />
                        </a>
                        <p style={styles.description}>Volunteer</p>
                        <ul style={styles.list}>
                            <li>Helped serving up to 600 meals to those in need</li>
                        </ul>
                    </div>
                </Container>
            </TabPanel>
            <TabPanel value={value} index={3} style={styles.panel}>
                <Container style={styles.container}>
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
                </Container>
            </TabPanel>
            <TabPanel value={value} index={4} style={styles.panel}>
                <Container style={styles.container}>
                    <div>
                        <a href="https://github.com/EstelleBarnoud/sim_project" target="_blank" rel="noopener noreferrer" >
                            <img src={ideescitoyennes} style={styles.img} alt="Idees citoyennes Logo" />
                        </a>
                        <h4>Founder, Product Developer &amp; Manager of Web Platform engaging citizens to participate</h4>
                        <ul style={styles.list}>
                            <li>Benchmarked existing digital infrastructures and led survey on how citizens perceive their engagement</li>
                            <li>Developed MVP web platform using opensource &amp; most used technologies <i>[JSX][React][Redux][Node.js][Django]</i></li>
                        </ul>
                    </div>
                    <div>
                        <a href="https://perso.telecom-paristech.fr/ebarnoud/paf/dataviz.html" target="_blank" rel="noopener noreferrer" >
                            <img src={calm} style={styles.img} alt="CALM Logo" />
                        </a>
                        <h4>Data Analyst for non-profit organization enabling citizens to host refugees | Télécom</h4>
                        <ul style={styles.list}>
                            <li>Collaborated with non-profit organization CALM in 8-student team</li>
                            <li>Coded scripts to cleanse csv datasets <i>[Python]</i></li>
                            <li>Produced relevant visualization interpretable for the association <i>[HTML/CSS/JavaScript]</i></li>
                        </ul>
                    </div>
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