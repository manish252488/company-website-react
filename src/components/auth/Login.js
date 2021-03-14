import { Button, Chip, TextField } from "@material-ui/core";

import Divider from "@material-ui/core/Divider";
import { Facebook, Instagram } from "@material-ui/icons";
import React, { useState } from "react";
import "./index.less";
const Login = (props) => {
  const [user, setUser] = useState("");
  const [userError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError] = useState(null);
  const login = () => {};
  return (
    <div className="login-form">
      <TextField
        type="text"
        defaultValue={user}
        label="Username/Email"
        onChange={setUser}
        helperText={userError ? userError.message : ""}
        autoFocus
        variant="standard"
        fullWidth
      />
      <TextField
        type="password"
        defaultValue={password}
        label="password"
        onChange={setPassword}
        helperText={passwordError ? passwordError.message : ""}
        fullWidth
        variant="standard"
      />
      <Button fullWidth onClick={login}>
        Login
      </Button>
      <Divider variant="middle" />
      <div className="social-logins">
        <Chip avatar={<Facebook />} label="Facebook" clickable />
        <Chip avatar={<Instagram />} label="Instagram" clickable />
      </div>
    </div>
  );
};
export default Login;
