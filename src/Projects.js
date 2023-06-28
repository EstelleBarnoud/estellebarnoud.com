import React from 'react';
import { Table, TableContainer, TableBody, TableCell, TableRow } from '@material-ui/core';
import ideescitoyennes from './images/ideescitoyennes.png';
import calm from './images/calm.png';

const styles = {
    img: {
        flexBasis: '20%',
        maxHeight: '80px',
        maxWidth: '150px',
        // margin: '1% 5%',
    }
}

function createData(project, description) {
  return { project, description };
}

const rows = [
  createData(
    <a href="https://github.com/EstelleBarnoud/sim_project" target="_blank" rel="noopener noreferrer" >
        <img src={ideescitoyennes} style={styles.img} alt="Idees citoyennes Logo" />
    </a>,
    <div>
        <h4>Founder, Product Developer &amp; Manager of Web Platform engaging citizens to participate | Télécom</h4>
        <ul>
            <li>Benchmarked existing digital infrastructures and led survey on how citizens perceive their engagement</li>
            <li>Developed MVP web platform using opensource &amp; most used technologies <i>[JSX][React][Redux][Node.js][Django]</i></li>
        </ul>
    </div>,
    ),
  createData(
    <a href="https://perso.telecom-paristech.fr/ebarnoud/paf/dataviz.html" target="_blank" rel="noopener noreferrer" >
        <img src={calm} style={styles.img} alt="CALM Logo" />
    </a>,
    <div>
        <h4>Data Analyst for non-profit organization enabling citizens to host refugees | Télécom</h4>
        <ul>
            <li>Collaborated with non-profit organization CALM in 8-student team</li>
            <li>Coded scripts to cleanse csv datasets <i>[Python]</i></li>
            <li>Produced relevant visualization interpretable for the association <i>[HTML/CSS/JavaScript]</i></li>
        </ul>
    </div>,
    ),
  
];

export default function SimpleTable() {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.project}>
              <TableCell component="th" scope="row" align="center">
                {row.project}
              </TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}