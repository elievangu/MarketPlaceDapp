import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
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
  button: {
    margin: theme.spacing(1),
  }
}));

const CompanyPanel = ({
  delais,
  reputation,
  remuneration,
  description,
  handleChangeRemuneration,
  handleChangeDelais,
  handleChangeReputation,
  handleChangeDescription,
  handleSubmit
}) => {
  const classes = useStyles();
  return (
    <>
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-amount">Rémunération</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={remuneration}
          onChange={handleChangeRemuneration}
          endAdornment={<InputAdornment position="end">wei</InputAdornment>}
          
          labelWidth={110}
        />
        
      </FormControl>
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-amount">Délais</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          
          value={delais}
          onChange={handleChangeDelais}
          endAdornment={<InputAdornment position="end">jours</InputAdornment>}
          labelWidth={50}
        />
      </FormControl>
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-amount">Réputation</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          
          value={reputation}
          onChange={handleChangeReputation}
          endAdornment={<InputAdornment position="end"><StarBorderIcon /></InputAdornment>}
          labelWidth={90}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">
          Description
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={description}
          onChange={handleChangeDescription}
          labelWidth={90}
        />
      </FormControl>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<AddIcon />}
        onSubmit={handleSubmit}
      >
        Nouvelle demande
      </Button>
    </>
  );
};

CompanyPanel.propTypes = {
  handleChangeRemuneration: PropTypes.func.isRequired,
  handleChangeDelais: PropTypes.func.isRequired,
  handleChangeReputation: PropTypes.func.isRequired,
  handleChangeDescription: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClickShowPassword: PropTypes.func.isRequired,
  handleMouseDownPassword: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  password: PropTypes.string.isRequired,
  showPassword: PropTypes.bool.isRequired,
};
export default CompanyPanel;
