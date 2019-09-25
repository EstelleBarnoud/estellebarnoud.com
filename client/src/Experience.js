import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Tabs, Tab, Container, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/BusinessCenter';
import NatureIcon from '@material-ui/icons/Eco';
import SportIcon from '@material-ui/icons/FitnessCenter';
import ToolIcon from '@material-ui/icons/Build';
import HeartIcon from '@material-ui/icons/Favorite';
import telecom from './telecom.png';
import columbia from './columbia2.png';
import cybelangel from './cybelangel2.png';
import gates from './gates-foundation.webp';
import bcv from './bluecloud2.png';
import mad from './mad.png';
import miedepain from './miedepain.png';

const styles = {
    img_ed: {
        maxHeight: '80px',
    },
    img: {
        flexBasis: '20%',
        maxHeight: '80px',
        maxWidth: '200px',
        margin: '5% 0%',
    },
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        maxHeight: '800px',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
    },
    space: {
        marginTop: '10%',
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: '5%',
      },
    chip: {
        margin: 2,
    },
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
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };  

    return(
        <div className={classes.root}>
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
            <TabPanel value={value} index={0}>
                <Container style={styles.container}>
                    <div>
                        <img src={columbia} style={styles.img_ed} alt="Columbia logo" />
                        <p>Master of Science in Management Science &amp; Engineering</p>
                    </div>
                    <div style={styles.space}>
                        <img src={telecom} style={styles.img_ed} alt="Telecom logo" />
                        <p>Diplôme d’ingénieur – equivalent to BS &amp; MS</p>
                        <i>Master Specilization: Data Science | Entrepreneurship</i>
                    </div>
                </Container>            
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Container style={styles.container}>
                    <div style={styles.content}>
                        <img src={cybelangel} style={styles.img} alt="CybelAngel logo" />
                        <p>Business Analyst</p>
                    </div>
                    <div style={styles.content}>
                        <img src={gates} style={styles.img} alt="Gates Foundation logo" />
                        <p>Part-time Consultant</p>
                    </div>
                    <div style={styles.content}>
                        <img src={bcv} style={styles.img} alt="Blue Cloud Ventures logo" />
                        <p>Part-time Consultant</p>
                    </div>
                </Container>  
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Container style={styles.container}>
                    <div style={styles.content}>
                        <img src={mad} style={styles.img} alt="Make A Difference logo" />
                        <p>President and founder</p>
                    </div>
                    <div style={styles.content}>
                        <img src={miedepain} style={styles.img} alt="La Mie de Pain logo" />
                        <p>Volunteer</p>
                    </div>
                </Container>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Container style={styles.container}>
                    <p>Programming &amp; Machine Learning</p>
                    <div style={styles.root}>
                        <Chip variant='outlined' label='Python' style={styles.chip} />
                        <Chip variant='outlined' label='sklearn' style={styles.chip} />
                        <Chip variant='outlined' label='pandas' style={styles.chip} />
                        <Chip variant='outlined' label='R' style={styles.chip} />
                        <Chip variant='outlined' label='Java' style={styles.chip} />
                        <Chip variant='outlined' label='SQL' style={styles.chip} />
                    </div>
                    <p>OS &amp; version control</p>
                    <div style={styles.root}>
                        <Chip variant='outlined' label='Linux' style={styles.chip} />
                        <Chip variant='outlined' label='Windows' style={styles.chip} />
                        <Chip variant='outlined' label='Git' style={styles.chip} />
                    </div>
                    <p>Web Development</p>
                    <div style={styles.root}>
                        <Chip variant='outlined' label='HTML' style={styles.chip} />
                        <Chip variant='outlined' label='CSS' style={styles.chip} />
                        <Chip variant='outlined' label='Javascript' style={styles.chip} />
                        <Chip variant='outlined' label='JSX' style={styles.chip} />
                        <Chip variant='outlined' label='React' style={styles.chip} />
                        <Chip variant='outlined' label='Redux' style={styles.chip} />
                    </div>
                    <p>Software</p>
                    <div style={styles.root}>
                        <Chip variant='outlined' label='Power BI' style={styles.chip} />
                        <Chip variant='outlined' label='Excel' style={styles.chip} />
                        <Chip variant='outlined' label='Salesforce' style={styles.chip} />  
                    </div>
                </Container>
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel>
            </div>
    )
}