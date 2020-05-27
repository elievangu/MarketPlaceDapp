import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Alert = ({ errorType, alertTitle, alertMessage, alertEmphasis }) => {
  //Severity errorType: error, warning, info, success
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert onClose={() => {}} severity={errorType}>
  <AlertTitle>{alertTitle}</AlertTitle>
  {alertMessage} <strong>{alertEmphasis}</strong>
      </Alert>
    </div>
  );
};

Alert.propTypes = {
  errorType: PropTypes.string.isRequired,
  alertTitle: PropTypes.string.isRequired,
  alertMessage: PropTypes.string.isRequired,
  alertEmphasis: PropTypes.string.isRequired
};
export default Alert;
