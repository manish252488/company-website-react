import { Button, Chip, Divider, Grid, TextField } from "@material-ui/core";
import { Facebook, Instagram } from "@material-ui/icons";
import React, { useState } from "react";

const SignUp = (props) => {
  const [state] = useState({
    fName: "",
    mName: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    password2: "",
    picture: "",
  });
  return (
    <div className="login-form">
      <Grid container xs spacing={1}>
        <Grid item xs={6}>
          <TextField
            type="text"
            defaultValue={state.fName}
            label="First Name"
            autoFocus
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="text"
            defaultValue={state.mName}
            label="Last Name"
            variant="standard"
            fullWidth
          />
        </Grid>
      </Grid>

      <TextField
        type="email"
        defaultValue={state.email}
        label="Email Id"
        variant="standard"
        fullWidth
      />
      <TextField
        type="text"
        defaultValue={state.password}
        label="Enter Password"
        variant="standard"
        fullWidth
      />
      <TextField
        type="text"
        defaultValue={state.password2}
        label="Re-Enter Password"
        variant="standard"
        fullWidth
      />

      <Button fullWidth>SignUp</Button>
      <Divider variant="middle" />
      <div className="social-logins">
        <Chip avatar={<Facebook />} label="Facebook" clickable />
        <Chip avatar={<Instagram />} label="Instagram" clickable />
      </div>
    </div>
  );
};

export default SignUp;
