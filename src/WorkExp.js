import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import loreal from './images/loreal.jpg';
import cybelangel from './images/cybelangel2.png';
import gates from './images/gates-foundation.webp';
import bcv from './images/bluecloud.png';

const styles = {
    img: {
        flexBasis: '20%',
        maxHeight: '80px',
        maxWidth: '150px',
        // margin: '1% 5%',
    }
}

function createData(company, title, description) {
  return { company, title, description };
}

const rows = [
  createData(
    <a style={styles.img} href="https://www.loreal.com/" target="_blank" rel="noopener noreferrer" >
        <img src={loreal} style={styles.img} alt="L'Oreal" />
    </a>,
    <div>
        <p>Data Scientist &amp; Analyst</p>
        <i> Full time</i>
    </div>,
    <ul>
        <li>Designing hierarchical Bayes estimation with choice-based conjoint (CBC + HB) research to understand customer behavior and optimize brands portfolio &amp; pricing</li>
        <li>Using Machine Learning (e.g. Text Mining) to provide recommendations based on customer insight</li>
        <li>Automating processes (e.g. scraping, design tools) to boost RGM efficiency <i>[Python] [VBA]</i></li>
    </ul>
    ),
  createData(
    <a style={styles.img} href="https://cybelangel.com/" target="_blank" rel="noopener noreferrer" >
        <img src={cybelangel} style={styles.img} alt="CybelAngel" />
    </a>,
    <div>
        <p>Business Analyst</p>
        <i>Full time</i>
    </div>,
    <ul>
        <li>Prepared business data &amp; slides for pitch deck to raise $36M in series B round</li>
        <li>Analyzed &amp; forecasted sales performances to provide data-driven insights; implemented tools to automate data analyses</li>
        <li>Worked cross-teams on systematic tracking of KPIs; optimized sales &amp; marketing processes</li>
    </ul>
    ),
  createData(
    <a style={styles.img} href="https://www.gatesfoundation.org/" target="_blank" rel="noopener noreferrer" >
        <img src={gates} style={styles.img} alt="Gates Foundation" />
    </a>,
    <div>
        <p>Data Science Consultant</p>
        <i> Part time</i>
    </div>,
    <ul>
        <li>Created statistical machine learning robots to build linguistic glossaries <i>[Python]</i></li>
        <li>Implemented recurrent neural network to translate sentence-to-sentence <i>[TensorFlow][Python]</i></li>
    </ul>),
  createData(
    <a style={styles.img} href="www.bluecloudventures.com/" target="_blank" rel="noopener noreferrer" >
        <img src={bcv} style={styles.img} alt="Blue Cloud Ventures" />
    </a>,
    <div>
        <p>Data Science Consultant</p>
        <i> Part time</i>
    </div>,
    <ul style={styles.list}>
        <li>Automated search of new startups to invest in through ranking dashboard tool <i>[scraping][Power BI]</i></li>
    </ul>
    ),
  
];

export default function SimpleTable() {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.company}>
              <TableCell component="th" scope="row" align="center">
                {row.company}
              </TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}