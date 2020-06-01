import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
import LinkIcon from "@material-ui/icons/Link";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

const IllustratorPanel = ({ link, handleChangeLink, handleSubmit }) => {
  const classes = useStyles();
  return (
    <div className="illustrator_container">
      <FormControl id="link_input" fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Lien</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={link}
          onChange={handleChangeLink}
          startAdornment={
            <InputAdornment position="start">
              <LinkIcon />
            </InputAdornment>
          }
          labelWidth={60}
        />
      </FormControl>
      <Button
        id="button_link_submition"
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<SendIcon />}
        onSubmit={handleSubmit}
      >
        Enoyer
      </Button>
    </div>
  );
};

IllustratorPanel.propTypes = {
  link: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChangeLink: PropTypes.func.isRequired,
};

export default IllustratorPanel;
