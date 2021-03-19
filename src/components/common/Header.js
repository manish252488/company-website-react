import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core";
import {
  HomeOutlined,
  PermContactCalendarOutlined,
  SettingsOutlined,
} from "@material-ui/icons";
import React from "react";
import { useTranslation } from "react-i18next"; /* 
import { useDispatch } from "react-redux"; */
import History from "../../@history";
import {
  Logo,
  Favicon,
} from "../../assets"; /* 
import { showAuthPage } from "../../store/actions"; */ /* 
import MoreOptions from "./MoreOptions"; */
const Header = (props) => {
  const classes = useStyles();
  /* const dispatch = useDispatch();
  const login = () => dispatch(showAuthPage());  */
  const { t } = useTranslation();
  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.left}>
          <Favicon className={classes.logo} />
          <Logo className={classes.menuButton} />
        </div>
        {/* <div className="web-view"> */}
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
        {/* </div> */}
        {/*   <Button
          className="login-button"
          onClick={login}
          startIcon={<Person />}
          color="inherit"
          variant="text"
        >
          {t("log-sign")}
        </Button> */}
        {/* <div className="mobile-view">
          <MoreOptions />
        </div> */}
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
    width: 150,
    height: 50,
    cursor: "pointer",
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: 70,
    height: 70,
    padding: 5,
  },
  left: {
    flexGrow: 1,
  },
}));
export default Header;
