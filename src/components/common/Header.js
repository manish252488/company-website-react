import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  Facebook,
  HomeOutlined,
  LocalMallOutlined,
  PermContactCalendarOutlined,
  Person,
  SettingsOutlined,
} from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import History from "../../@history";
import { showAuthPage } from "../../store/actions";
import MoreOptions from "./MoreOptions";
const Header = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const login = () => dispatch(showAuthPage());
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Facebook />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <div className="web-view">
          <Button
            onClick={() => History.push("/")}
            startIcon={<HomeOutlined />}
            color="inherit"
            variant="text"
          >
            Home
          </Button>
          <Button
            onClick={() => History.push("/products")}
            startIcon={<LocalMallOutlined />}
            color="inherit"
            variant="text"
          >
            Products
          </Button>
          <Button
            onClick={() => History.push("/services")}
            startIcon={<SettingsOutlined />}
            color="inherit"
            variant="text"
          >
            Services
          </Button>
          <Button
            onClick={() => History.push("/contacts")}
            startIcon={<PermContactCalendarOutlined />}
            color="inherit"
            variant="text"
          >
            Contacts
          </Button>
        </div>
        <Button
          className="login-button"
          onClick={login}
          startIcon={<Person />}
          color="inherit"
          variant="text"
        >
          Login/Register
        </Button>
        <div className="mobile-view">
          <MoreOptions />
        </div>
      </Toolbar>
    </AppBar>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default Header;
