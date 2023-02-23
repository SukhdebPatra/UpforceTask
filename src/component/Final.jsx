import { Typography } from '@mui/material';
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Final(props) {
  const { formik } = props;
  // console.log(formik.values)
  const result = Object.values(formik.values);
  console.log(result)
  // const data =formik.values
  

  return (
    <>
    <Typography variant="h3" color='green' component="h2">
 Data added successfully
</Typography>

    </>
  )
}

export default Final