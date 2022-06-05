import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function InterestTypeRadio(props) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">I want to get</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="interest-rate"
        name="radio-buttons-group"
        value={props.val}
        onChange={(e) => props.setVal(e.target.value)}
      >
        <FormControlLabel
          value="principle"
          control={<Radio />}
          label="Principle amount"
        />
        <FormControlLabel
          value="time"
          control={<Radio />}
          label="Time Period"
        />
        <FormControlLabel
          value="interest-rate"
          control={<Radio />}
          label="Interest Rate"
        />
        <FormControlLabel
          value="interest"
          control={<Radio />}
          label="Interest Amount"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default InterestTypeRadio;
