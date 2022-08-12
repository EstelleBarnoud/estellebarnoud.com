import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import gojob from './images/gojob.png';
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
    <a style={styles.img} href="https://www.gojob.com/" target="_blank" rel="noopener noreferrer" >
        <img src={gojob} style={styles.img} alt="Gojob" />
    </a>,
    <div>
        <p><b>Senior Analytics Engineer &amp; Data Engineer</b></p>
        <i> Full time</i>
    </div>,
    <ul>
        <li>Reduced # of customer escalations from 20 to 2 per month by migrating data models from old stack <i>[Airflow][DOMO]</i> to new <i>[Fivetran][BigQuery][dbt]</i></li>
        <li>Cut # of incidents by half by setting up automatic tests both on a daily basis to proactively fix data quality issues and on code changes for continuous integration <i>[GitLab][dbt]</i></li>
        <li>Increased analytics team impact by setting up a technical roadmap, recruiting 4 engineers, producing self-service documentation and upskilling via code reviews &amp; mentoring</li>
        <li>Served on-call rotations on 10+ data sources &amp; 150+ models</li>
    </ul>
    ),
  createData(
    <a style={styles.img} href="https://www.loreal.com/" target="_blank" rel="noopener noreferrer" >
        <img src={loreal} style={styles.img} alt="L'Oreal" />
    </a>,
    <div>
        <p><b>Data Scientist &amp; Analyst</b></p>
        <i> Full time</i>
    </div>,
    <ul>
        <li>Designed hierarchical Bayes estimation with choice-based conjoint research to understand customer behavior – saved $10M+ in portfolio &amp; pricing optimization</li>
        <li>Used Machine Learning to provide quantitative &amp; qualitative recommendations based on customer insight</li>
        <li>Automated processes to boost capabilities – optimized research designing from 5 days to 1 <i>[Python] [VBA]</i></li>
    </ul>
    ),
  createData(
    <a style={styles.img} href="https://cybelangel.com/" target="_blank" rel="noopener noreferrer" >
        <img src={cybelangel} style={styles.img} alt="CybelAngel" />
    </a>,
    <div>
        <p><b>Business Analyst</b></p>
        <i>Full time</i>
    </div>,
    <ul>
        <li>Prepared business data &amp; slides for pitch deck to raise $36M in series B round</li>
        <li>Analyzed &amp; forecast marketing and sales performance to recommend data-driven strategies</li>
        <li>Worked cross-teams on systematic tracking of KPIs; optimized sales &amp; marketing processes</li>
    </ul>
    ),
  createData(
    <a style={styles.img} href="https://www.gatesfoundation.org/" target="_blank" rel="noopener noreferrer" >
        <img src={gates} style={styles.img} alt="Gates Foundation" />
    </a>,
    <div>
        <p><b>Data Science Consultant</b></p>
        <i> Part time</i>
    </div>,
    <ul>
        <li>Applied statistical machine learning models to build linguistic glossaries <i>[Python]</i></li>
        <li>Implemented recurrent neural network to translate languages with limited data <i>[TensorFlow][Python]</i></li>
    </ul>),
  createData(
    <a style={styles.img} href="www.bluecloudventures.com/" target="_blank" rel="noopener noreferrer" >
        <img src={bcv} style={styles.img} alt="Blue Cloud Ventures" />
    </a>,
    <div>
        <p><b>Data Science Consultant</b></p>
        <i> Part time</i>
    </div>,
    <ul style={styles.list}>
        <li>Automated search of new startups to invest in through ranking dashboard tool <i>[Python][Power BI]</i></li>
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