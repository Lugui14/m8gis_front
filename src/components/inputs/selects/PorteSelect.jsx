import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import PropTypes from "prop-types";

const PorteSelect = ({ error, ...props }) => {
  return (
    <FormControl fullWidth error={!!error}>
      <InputLabel id="porte-label">Porte</InputLabel>
      <Select
        fullWidth
        placeholder="Porte da empresa"
        labelId="porte-label"
        label="Porte"
        {...props}
      >
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default PorteSelect;

PorteSelect.propTypes = {
  error: PropTypes.string,
};
