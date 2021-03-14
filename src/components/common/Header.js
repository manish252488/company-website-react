import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Facebook, Person } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
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
        <Button
          onClick={login}
          startIcon={<Person />}
          color="inherit"
          variant="text"
        >
          Login/Register
        </Button>
        <MoreOptions />
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
