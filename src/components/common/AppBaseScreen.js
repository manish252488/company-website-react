import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import "./index.less";
const AppBaseScreen = (props) => {
  return (
    <div className="App">
      <AppBar>
        <Toolbar></Toolbar>
      </AppBar>
      <div>{props.children}</div>
      <footer>footer</footer>
    </div>
  );
};
export default AppBaseScreen;
