import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import mad from './images/mad.png';
import miedepain from './images/miedepain.png';

const styles = {
    img: {
        flexBasis: '20%',
        maxHeight: '80px',
        maxWidth: '150px',
        // margin: '1% 5%',
    }
}

function createData(association, title, description) {
  return { association, title, description };
}

const rows = [
  createData(
    <a style={styles.img} href="https://www.facebook.com/MakeADifferenceTPT/" target="_blank" rel="noopener noreferrer" >
      <img src={mad} style={styles.img} alt="Make A Difference logo" />
    </a>,
    <div>
        <p><b>President and founder</b></p>
        <i>Apr'17 - May'18</i>
    </div>,
    <ul>
      <li>Founded &amp; chaired the association; Directed &amp; led projects such as charity work and recycling</li>
      <li>Organized €1500+ event of 100+ attendants to raise awareness about disabilities</li>
    </ul>
    ),
  createData(
    <a style={styles.img} href="https://www.miedepain.asso.fr/" target="_blank" rel="noopener noreferrer" >
      <img src={miedepain} style={styles.img} alt="La Mie de Pain logo" />
    </a>,
    <div>
        <p><b>Volunteer</b></p>
        <i>Spring 2018</i>
    </div>,
    <ul>
        <li>Helped serving up to 600 meals to those in need</li>
    </ul>
    ),
  
];

export default function SimpleTable() {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.association}>
              <TableCell component="th" scope="row" align="center">
                {row.association}
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