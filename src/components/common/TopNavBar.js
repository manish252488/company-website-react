import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';
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
  },icon:{
      width:50,
  }
}));

export default function TopNavBar(props) {
  const classes = useStyles();
  const {title,rightComponent,leftComponent,icon}=props;
  const renderRightComponent=()=>(<>
        <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton></>
  )
  const renderLeftComponent=()=>(
        <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
        </IconButton>
  )
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          {leftComponent &&(leftComponent)}
          {!leftComponent && (renderLeftComponent())}
          <img src={icon} className={classes.icon} alt="logo"/>
          <Typography className={classes.title} variant="h5" noWrap>
          {title}
          </Typography>
        {rightComponent && (rightComponent)}
        {!rightComponent && (renderRightComponent())}
        </Toolbar>
      </AppBar>
    </div>
  );
}
TopNavBar.propTypes={
    title:PropTypes.string.isRequired,
    leftComponent:PropTypes.shape({}),
    rightComponent:PropTypes.shape({})
}
TopNavBar.defaultProps={
title:'Default',
icon:'/logo192.png'
}