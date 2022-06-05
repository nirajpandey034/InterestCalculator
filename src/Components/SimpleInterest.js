import React, { useState } from "react";

//mui files
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

//custom files
import { getSimpleInterest } from "./Interest";
import ParameterTypeRadio from "./ParameterTypeRadio";
import {timeList, roiList} from "./Constants";

function SimpleInterest() {
  const [principle, setPrinciple] = useState(0);
  const [time, setTime] = useState(0);
  const [roi, setROI] = useState(0);

  const [parameter, setParameter] = useState("interest");
  const [interest, setInterest] = useState(null);


  const getInterest = () => {
    let interest = getSimpleInterest(principle, time, roi);
    setInterest(interest);
  };

  const handlePrincipleChange = (event) => {
    setPrinciple(event.target.value);
  };
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
  const handleROIChange = (event) => {
    setROI(event.target.value);
  };

  const handleParameterTypeChange = (type) => {
    setParameter(type);
  };
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={12}>
        <ParameterTypeRadio
          val={parameter}
          setVal={handleParameterTypeChange}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="outlined-basic"
          label="Principle"
          variant="outlined"
          onChange={(event) => {
            handlePrincipleChange(event);
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <FormControl style={{ minWidth: 220 }}>
          <InputLabel id="demo-simple-select-label">Time Period</InputLabel>
          <Select
            labelId="demo-time-select-label"
            id="demo-time-select"
            value={time}
            label="Time Period"
            onChange={(event) => {
              handleTimeChange(event);
            }}
          >
            {timeList.map((ele) => {
              return (
                <MenuItem key={ele} value={ele}>
                  {ele}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl style={{ minWidth: 220 }}>
          <InputLabel id="demo-simple-select-label">
            Rate of interest
          </InputLabel>
          <Select
            labelId="demo-roi-select-label"
            id="demo-roi-select"
            value={roi}
            label="Rate of interest"
            onChange={(event) => {
              handleROIChange(event);
            }}
          >
            {roiList.map((ele) => {
              return (
                <MenuItem key={ele} value={ele}>
                  {ele}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={() => getInterest()}
          style={{ textTransform: "none" }}
        >
          Get Simple Interest
        </Button>
      </Grid>

      {interest !== null && (
        <Grid item xs={12}>
          <Typography>
            Your Interest Amount will be : <strong>{interest}</strong>
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}

export default SimpleInterest;
