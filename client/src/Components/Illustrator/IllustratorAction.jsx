import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import PlaylistAddOutlinedIcon from "@material-ui/icons/PlaylistAddOutlined";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const IllustratorAction = () => {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        style={{color: green[800]}}
        className={classes.button}
        startIcon={<PlaylistAddOutlinedIcon />}
      >
        CANDIDATER
      </Button>
    </div>
  );
};

//IllustratorAction.propTypes = {};

export default IllustratorAction;
