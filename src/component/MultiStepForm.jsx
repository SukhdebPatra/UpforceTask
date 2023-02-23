import { useState } from "react";
import StepOne from "./UserInformation";
import StepTwo from "./AddressDetails";
import Final from "./Final";
import { useFormik } from "formik";

import * as Yup from "yup";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  FormHelperText,
  Button,
  Stack,
} from "@mui/material";

const steps = [" USER INFORMATION", "ADDRESS DETAILS", "THANK YOU"];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      mobileNo: "",
      email: "",
      birthday: "",
      age: "",
      bloodGroup: "",
      height: "",
      weight: "",
      gender: "",
      maritalStatus: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
  },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Email is required").email("Invalid email"),
      firstName: Yup.string().required("First Name is required"),
      middleName: Yup.string().required("Middle Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      birthday: Yup.string().required("Birthday is required"),
      age: Yup.number().required("age is required"),
      bloodGroup: Yup.string().required("BloodGroup is required"),
      height: Yup.number().required("height is required"),
      weight: Yup.number().required("weight is required"),
      gender: Yup.string().nullable().required("gender is required"),
      maritalStatus: Yup.string()
        .nullable()
        .required("maritalStatus is required"),
      mobileNo: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10)
      .required('A phone number is required'),
      // address1:Yup.string().required("address1 Name is required"),
      // address2: Yup.string().required("address2 Name is required"),
      // city: Yup.string().required("city Name is required"),
      // state: Yup.string().required("state Name is required"),
      // country: Yup.string().required("country Name is required"),
      // pinCode: Yup.number().max(6).required("pinCode Name is required"),
    }),
    onSubmit: () => {
      if (activeStep === steps.length - 1) {
        console.log("last step");
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    },
  });
  const formContent = (step) => {
    switch (step) {
      case 0:
        return <StepOne formik={formik} />;
      case 1:
        return <StepTwo formik={formik} />;
      case 2:
        return <Final formik={formik} />;
    }
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: "600px",
          padding: 2,
        }}
      >
        <Stepper
          activeStep={activeStep}
          orientation="horizontal"
          alternativeLabel
        >
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Grid container>
          <Grid item xs={12} sx={{ padding: "20px" }}>
            {formContent(activeStep)}
          </Grid>
          {formik.errors.submit && (
            <Grid item xs={12}>
              <FormHelperText error>{formik.errors.submit}</FormHelperText>
            </Grid>
          )}
          <Grid item xs={12} >
          <Stack spacing={2} direction="row">
            <Button variant="contained" disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button ></Button>
            ) : (
              <Button variant="contained" onClick={formik.handleSubmit}>Next</Button>
            )}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MultiStepForm;
