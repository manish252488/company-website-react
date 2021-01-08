import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import * as Actions from '../screens/Login/store/actions'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
  },
  title: {
    flexGrow: 1,
    textTransform: "capitalize"
  }, icon: {
    width: 50,
  }
}));

export default function TopNavBar(props) {
  const classes = useStyles();
  const { title, rightComponent, leftComponent, icon, showLogoutButton } = props;
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(Actions.logout())
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          {leftComponent && (leftComponent)}
          <img src={icon} className={classes.icon} alt="logo" />
          <Typography className={classes.title} variant="h5" noWrap>
            {title}
          </Typography>
          {rightComponent && (rightComponent)}
          {showLogoutButton && (<Button variant="contained" onClick={logout}>Logout</Button>)}
        </Toolbar>
      </AppBar>
    </div>
  );
}
TopNavBar.propTypes = {
  title: PropTypes.string.isRequired,
  leftComponent: PropTypes.shape({}),
  rightComponent: PropTypes.shape({}),
  showLogoutButton: PropTypes.bool
}
TopNavBar.defaultProps = {
  title: 'Default',
  icon: '/logo192.png',
  showLogoutButton: false
}