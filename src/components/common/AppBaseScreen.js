import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import "./index.less";
import Footer from "./Footer";
const AppBaseScreen = (props) => {
  return (
    <div className="App">
      <AppBar>
        <Toolbar></Toolbar>
      </AppBar>
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};
export default AppBaseScreen;
