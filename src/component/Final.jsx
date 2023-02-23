import { Typography } from '@mui/material';
import React from 'react'



function Final(props) {
  const { formik } = props;
  console.log(formik.values)
  // const result = Object.values(formik.values);
  // console.log(result)
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