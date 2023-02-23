import React from 'react'
import {
  Grid,
  TextField,
  FormHelperText,
  Typography
} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const StepTwo = (props) => {
  const { formik } = props;
  return (
    <>
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        xs={6}
      >
        <TextField
          name="address1"
          label="address1"
          variant="outlined"
          type="text"
          fullWidth
          error={Boolean(formik.touched.address1 && formik.errors.address1)}
             
          onChange={formik.handleChange}
          value={formik.values.address1}
         
        />
          <Typography color='red
           ' variant="h6" gutterBottom>
        {formik.errors.address1 &&
              formik.touched.address1 &&
              String(formik.errors.address1)}
      </Typography>
      </Grid>
      <Grid
        item
        xs={6}
      >
        <TextField
          name="address2"
          label="address2"
          variant="outlined"
          
          type="text"
          fullWidth
          error={Boolean(formik.touched.address2 && formik.errors.address2)}
          onChange={formik.handleChange}
          value={formik.values.address2}
          helpertext={
            formik.errors.address2 &&
            // formik.touched.email &&
            String(formik.errors.address2)
          }
        />
      </Grid>
      <Grid
        item
        xs={6}
      >
          <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formik.values.city}
          label="City"
          name='city'
          onChange={formik.handleChange}
          error={Boolean(formik.touched.city && formik.errors.city)}
          helpertext={
            formik.errors.city &&
            // formik.touched.email &&
            String(formik.errors.city)
          }
        >
          <MenuItem value={"Chaibasa"}>Chaibasa</MenuItem>
          <MenuItem value={"Jamshedpur"}>Jamshedpur</MenuItem>
          <MenuItem value={"Bhubneswer"}>Bhubneswer</MenuItem>
          <MenuItem value={"Ranchi"}>Ranchi</MenuItem>
          <MenuItem value={"Bangalore"}>Bangalore</MenuItem>

        </Select>
      </FormControl>
      </Grid>
      <Grid
        item
        xs={6}
      >
          <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formik.values.state}
          label="State"
          name='state'
          onChange={formik.handleChange}
          error={Boolean(formik.touched.state && formik.errors.state)}
          helpertext={
            formik.errors.state &&
            // formik.touched.email &&
            String(formik.errors.state)
          }
        >
          <MenuItem value={"Jharkhand"}>Jharkhand</MenuItem>
          <MenuItem value={"Odisa"}>Odisa</MenuItem>
          <MenuItem value={"Bihar"}>Bihar</MenuItem>
          <MenuItem value={"Andhra"}>Andhra</MenuItem>
          
        </Select>
      </FormControl>
      </Grid>
      <Grid
        item
        xs={6}
      >
          <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formik.values.country}
          label="Country"
          name='country'
          onChange={formik.handleChange}
          error={Boolean(formik.touched.country && formik.errors.country)}
        >
          <MenuItem value={"India"}>India</MenuItem>
          <MenuItem value={"UK"}>UK</MenuItem>
          <MenuItem value={"Canada"}>Canada</MenuItem>
          <MenuItem value={"Iceland"}>Iceland</MenuItem>
          
        </Select>
      </FormControl>
      </Grid>
      <Grid
        item
        xs={6}
      >
        <TextField
          name="pinCode"
          label="pinCode"
          variant="outlined"
          
          type="text"
          fullWidth
          error={Boolean(formik.touched.pinCode && formik.errors.pinCode)}
          onChange={formik.handleChange}
          value={formik.values.pinCode}
        />
      </Grid>
     
     
      {formik.errors.submit && (
        <Grid
          item
          xs={12}
        >
          <FormHelperText error>
            {formik.errors.submit}
          </FormHelperText>
        </Grid>
      )}
    </Grid>
    </>
  )
}

export default StepTwo