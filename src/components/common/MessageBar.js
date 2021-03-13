import { Snackbar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { hideMessageBar } from "../../store/actions";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const MessageBar = () => {
  const message = useSelector(({ MessageBar }) => MessageBar);
  const dispatch = useDispatch();
  const open = message?.show;
  const handleClose = () => dispatch(hideMessageBar());
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={message.type}>
        {message?.message}
      </Alert>
    </Snackbar>
  );
};
export default MessageBar;
