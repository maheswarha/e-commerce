import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const CustomFormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller fullWidth name={name} control={control} defaultValue="" render={({ field }) => <TextField {...field} label={label} required={required} />} />
    </Grid>
  );
};

export default CustomFormInput;
