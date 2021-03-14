import {
  Backdrop,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { renderIfElse } from "../../config/Utils";
import Login from "./Login";
import SignUp from "./Signup";
import "./index.less";
import {
  CloseOutlined,
  ContactPhone,
  Facebook,
  Home,
  Instagram,
  Settings,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { hideAuthPage } from "../../store/actions";
import History from "../../@history";
import { loginPage } from "../../assets";

const tabs = {
  login: "login",
  signup: "signup",
};
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  close: {
    position: "absolute",
    right: 0,
    top: 0,
  },
}));
const Authpage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [tab, setTab] = useState(tabs.login);
  const display = useSelector(({ Auth }) => Auth.showAuthPage);
  const handleClose = () => {
    dispatch(hideAuthPage());
  };
  useEffect(() => {
    if (display) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => (document.body.style.overflow = "unset");
  }, [display]);
  return (
    <Backdrop className={classes.backdrop} open={display}>
      <Card className="auth-card" component={Paper}>
        <IconButton
          className={classes.close}
          onClick={handleClose}
          size="medium"
        >
          <CloseOutlined fontSize="inherit" />
        </IconButton>
        <div className="image" style={{ backgroundImage: `url(${loginPage})` }}>
          <div className="nav-bar">
            <Typography variant="h6">Follow us on:</Typography>
            <Facebook onClick={() => History.push("/")} />
            <Instagram onClick={() => History.push("/")} />
          </div>
        </div>
        <CardContent>
          <Typography align="center" variant="h4">
            <Facebook style={{ fontSize: 70 }} />
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
    </Backdrop>
  );
};
export default Authpage;
