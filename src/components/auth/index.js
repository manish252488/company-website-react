import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { renderIfElse } from "../../config/Utils";
import Login from "./Login";
import SignUp from "./Signup";
import "./index.less";
import { ContactPhone, Facebook, Home, Settings } from "@material-ui/icons";
const tabs = {
  login: "login",
  signup: "signup",
};
const Authpage = (props) => {
  const [tab, setTab] = useState(tabs.login);
  return (
    <Card className="auth-card" component={Paper}>
      <div className="image">
        <div className="nav-bar">
          <Home onClick={() => props.history.push("/")} />
          <Settings onClick={() => props.history.push("/")} />
          <ContactPhone onClick={() => props.history.push("/")} />
        </div>
      </div>
      <CardContent>
        <Typography align="center" variant="h4">
          <Facebook style={{ fontSize: 70 }} />
          Some title
        </Typography>
        <ButtonGroup>
          <Button
            className={tab === tabs.login ? "active" : ""}
            onClick={() => setTab(tabs.login)}
          >
            Login
          </Button>
          <Button
            className={tab === tabs.signup ? "active" : ""}
            onClick={() => setTab(tabs.signup)}
          >
            SignUP
          </Button>
        </ButtonGroup>
        <div className="tabs">
          {renderIfElse(tab === tabs.login, <Login />, <SignUp />)}
        </div>
      </CardContent>
    </Card>
  );
};
export default Authpage;
