import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function InterestTypeRadio(props) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Interest type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="simple"
        name="radio-buttons-group"
        value={props.val}
        onChange={(e)=>props.setVal(e.target.value)}
      >
        <FormControlLabel value="simple" control={<Radio />} label="Simple" />
        <FormControlLabel value="compound" control={<Radio />} label="Compound" />
      </RadioGroup>
    </FormControl>
  );
}

export default InterestTypeRadio;
