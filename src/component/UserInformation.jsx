import React from "react";
import { Grid, TextField, FormHelperText, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

function StepOne(props) {
  const { formik } = props;
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            name="firstName"
            label="First Name"
            variant="outlined"
            type="text"
            fullWidth
            error={Boolean(formik.touched.firstName && formik.errors.firstName)}
            onChange={formik.handleChange}
            value={formik.values.firstName}
            // helperText={
            //   formik.errors.firstName &&
            //   // formik.touched.firstName &&
            //   String(formik.errors.firstName)
            // }
          />
           <Typography color='red
           ' variant="h6" gutterBottom>
        {formik.errors.firstName &&
              formik.touched.firstName &&
              String(formik.errors.firstName)}
      </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="middleName"
            label="Middle Name"
            variant="outlined"
            type="text"
            fullWidth
            error={Boolean(
              formik.touched.middleName && formik.errors.middleName
            )}
            onChange={formik.handleChange}
            value={formik.values.middleName}
           
          />
           <Typography color='red
           ' variant="h6" gutterBottom>
        {formik.errors.middleName &&
              formik.touched.middleName &&
              String(formik.errors.middleName)}
      </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="lastName"
            label="Last Name"
            variant="outlined"
            type="text"
            fullWidth
            error={Boolean(formik.touched.lastName && formik.errors.lastName)}
            onChange={formik.handleChange}
            value={formik.values.lastName}
            
          />
          <Typography color='red
           ' variant="h6" gutterBottom>
        {formik.errors.lastName &&
              formik.touched.lastName &&
              String(formik.errors.lastName)}
      </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            error={Boolean(formik.touched.email && formik.errors.email)}
            onChange={formik.handleChange}
            value={formik.values.email}
            
          />
            <Typography color='red
           ' variant="h6" gutterBottom>
        {formik.errors.email &&
              formik.touched.email &&
              String(formik.errors.email)}
      </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="mobileNo"
            label="Mobile No"
            variant="outlined"
            type="text"
            fullWidth
            error={Boolean(formik.touched.mobileNo && formik.errors.mobileNo)}
            onChange={formik.handleChange}
            value={formik.values.mobileNo}
           
          />
          <Typography color='red
           ' variant="h6" gutterBottom>
        {formik.errors.mobileNo &&
              formik.touched.mobileNo &&
              String(formik.errors.mobileNo)}
      </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="birthday"
            label="Birthday"
            variant="outlined"
            type="date"
            fullWidth
            error={Boolean(formik.touched.birthday && formik.errors.birthday)}
            onChange={formik.handleChange}
            value={formik.values.birthday}
           
          />
           <Typography color='red
           ' variant="h6" gutterBottom>
        {formik.errors.birthday &&
              formik.touched.birthday &&
              String(formik.errors.birthday)}
      </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="age"
            label="Age"
            variant="outlined"
            type="text"
            fullWidth
            error={Boolean(formik.touched.age && formik.errors.age)}
            onChange={formik.handleChange}
            value={formik.values.age}
           
          />
           <Typography color='red
           ' variant="h6" gutterBottom>
        {formik.errors.age &&
              formik.touched.age &&
              String(formik.errors.age)}
      </Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">BloodGroup</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formik.values.bloodGroup}
              label="BloodGroup"
              name="bloodGroup"
              onChange={formik.handleChange}
              error={Boolean(formik.touched.bloodGroup && formik.errors.bloodGroup)}
             
            >
              <MenuItem value={"A"}>A</MenuItem>
              <MenuItem value={"B"}>B</MenuItem>
              <MenuItem value={"Ab"}>AB</MenuItem>
              <MenuItem value={"O"}>O</MenuItem>
              <MenuItem value={"B+"}>B+</MenuItem>
            </Select>
            <Typography color='red
           ' variant="h6" gutterBottom>
        {formik.errors.bloodGroup &&
              formik.touched.bloodGroup &&
              String(formik.errors.bloodGroup)}
      </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="height"
            label="Height"
            variant="outlined"
            type="text"
            fullWidth
            error={Boolean(formik.touched.age && formik.errors.height)}
            onChange={formik.handleChange}
            value={formik.values.height}
            
          />
           <Typography color='red
           ' variant="h6" gutterBottom>
        {formik.errors.height &&
              formik.touched.height &&
              String(formik.errors.height)}
      </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="weight"
            label="Weight"
            variant="outlined"
            type="text"
            fullWidth
            error={Boolean(formik.touched.weight && formik.errors.weight)}
            onChange={formik.handleChange}
            value={formik.values.weight}
         
          />
          <Typography color='red
           ' variant="h6" gutterBottom>
        {formik.errors.weight &&
              formik.touched.weight &&
              String(formik.errors.weight)}
      </Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              error={formik.touched.gender && formik.errors.gender}
              onChange={formik.handleChange}
              
            >
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                name="gender"
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                name="gender"
              />
               
            </RadioGroup>
            <Typography color='red
           ' variant="h6" gutterBottom>
        {formik.errors.gender &&
              formik.touched.gender &&
              String(formik.errors.gender)}
      </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              MaritalStatus
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              error={
                formik.touched.maritalStatus && formik.errors.maritalStatus
              }
              onChange={formik.handleChange}
              
            >
              <FormControlLabel
                value="single"
                control={<Radio />}
                label="Single"
                name="maritalStatus"
              />
              <FormControlLabel
                value="married"
                control={<Radio />}
                label="Married"
                name="maritalStatus"
              />
              <FormControlLabel
                value="divorced"
                control={<Radio />}
                label="Divorced"
                name="maritalStatus"
              />
              <FormControlLabel
                value="widowed"
                control={<Radio />}
                label="Widowed"
                name="maritalStatus"
              />
            </RadioGroup>
            <Typography color='red
           ' variant="h6" gutterBottom>
        {formik.errors.maritalStatus &&
              formik.touched.maritalStatus &&
              String(formik.errors.maritalStatus)}
      </Typography>
          </FormControl>
        </Grid>
        {formik.errors.submit && (
          <Grid item xs={12}>
            <FormHelperText error>{formik.errors.submit}</FormHelperText>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default StepOne;
