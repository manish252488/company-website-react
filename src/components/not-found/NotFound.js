import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { RedoOutlined } from "@material-ui/icons";
import React from "react";
import History from "../../@history";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));
const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid style={{ paddingTop: 80 }} container>
        <Grid item xs>
          <Typography variant={"h3"} color="secondary" align="center">
            Not Found!
          </Typography>
          <Button
            style={{ marginLeft: "38%", minWidth: "23%" }}
            color="primary"
            variant="contained"
            startIcon={<RedoOutlined />}
            onClick={() => History.push("/")}
          >
            back to home
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default NotFound;
