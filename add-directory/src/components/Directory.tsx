import {useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux'
import Typography from '@mui/material/Typography';

import {Actions, DirectoryStateArray} from '../states/DirectoryState'
import { useSelect } from '@mui/base';
import { AppState, namespace } from '../states/App';
import Button from '@mui/material/Button';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

export function Directory() {
    const directory = useSelector((state:AppState)=> state[namespace].DirectoryState.entries);
    const dispatch = useDispatch();

    return (
        <>
         <Typography variant="h3">Directory</Typography>
         <Button variant="outlined" onClick={}>Add Entry</Button>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Team</TableCell>
            <TableCell>Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {directory.map((row) => (
            <TableRow
              key={row.id}
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell>{row.team}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.number}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    )
}