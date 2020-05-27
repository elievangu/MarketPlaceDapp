import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import StarBorderIcon from '@material-ui/icons/StarBorder';


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
}));

const CompanyPanel = ({
  delais,
  reputation,
  remuneration,
  description,
  handleChange
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
          labelWidth={90}
        />
      </FormControl>
    </>
  );
};

CompanyPanel.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClickShowPassword: PropTypes.func.isRequired,
  handleMouseDownPassword: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  password: PropTypes.string.isRequired,
  showPassword: PropTypes.bool.isRequired,
};
export default CompanyPanel;
