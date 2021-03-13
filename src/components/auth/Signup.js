import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

const SignUp = (props) => {
  const [state, setState] = useState({
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
      <TextField
        type="text"
        defaultValue={state.fName}
        label="First Name"
        autoFocus
        variant="standard"
        fullWidth
      />
      <TextField
        type="text"
        defaultValue={state.mName}
        label="Last Name"
        variant="standard"
        fullWidth
      />
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
    </div>
  );
};

export default SignUp;
