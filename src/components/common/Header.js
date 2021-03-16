import {
  AppBar,
  Button,
  makeStyles,
  Typography,
  Toolbar,
} from "@material-ui/core";
import {
  HomeOutlined,
  PermContactCalendarOutlined,
  Person,
  SettingsOutlined,
} from "@material-ui/icons";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import History from "../../@history";
import { Logo } from "../../assets";
import { showAuthPage } from "../../store/actions";
import MoreOptions from "./MoreOptions";
const Header = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const login = () => dispatch(showAuthPage());
  const { t } = useTranslation();
  return (
    <AppBar position="static">
      <Toolbar>
        <Logo className={classes.menuButton} />
        <Typography variant="h6" className={classes.title}>
          {t("name")}
        </Typography>
        <div className="web-view">
          <Button
            onClick={() => History.push("/")}
            startIcon={<HomeOutlined />}
            color="inherit"
            variant="text"
          >
            {t("home")}
          </Button>
          <Button
            onClick={() => History.push("/services")}
            startIcon={<SettingsOutlined />}
            color="inherit"
            variant="text"
          >
            {t("services")}
          </Button>
          <Button
            onClick={() => History.push("/contacts")}
            startIcon={<PermContactCalendarOutlined />}
            color="inherit"
            variant="text"
          >
            {t("contacts")}
          </Button>
        </div>
        <Button
          className="login-button"
          onClick={login}
          startIcon={<Person />}
          color="inherit"
          variant="text"
        >
          {t("log-sign")}
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
    width: 60,
    height: 60,
    cursor: "pointer",
  },
  title: {
    flexGrow: 1,
  },
}));
export default Header;
