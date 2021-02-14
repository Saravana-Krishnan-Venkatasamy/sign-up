import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StyledTableCell from './styledTableCell';
import StyledTableRow from './styledTableRow';
import useStyles from './useStyle';
import ApiFun from '../../_services/api'
//import rows from './rows'

export default function CustomizedTables() {
  const classes = useStyles();
  const [state, setState] = useState([])
  
    useEffect(() => {
      ApiFun.getApi('/comments')
        .then(json => {                
            if (json.data && json.data.length > 0) 
                setState(json.data)
            else {}
        }).catch((error) => {
            alert('data Fetching failed...!')
        }) 
    })
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Body</StyledTableCell>
            <StyledTableCell align="right">Post ID</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.body}</StyledTableCell>
              <StyledTableCell align="right">{row.postId}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
