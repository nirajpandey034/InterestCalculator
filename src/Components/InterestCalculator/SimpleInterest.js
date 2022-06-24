import React, { useState, useEffect } from "react";

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
import {
  getSimpleInterest,
  getSimpleTime,
  getSimpleROI,
  getSimplePrinciple,
} from "./Interest";
import ParameterTypeRadio from "./ParameterTypeRadio";
import { timeList, roiList } from "../Constants";

function SimpleInterest() {
  const [principle, setPrinciple] = useState("");
  const [interestAmount, setInterestAmount] = useState("");
  const [time, setTime] = useState(0);
  const [roi, setROI] = useState(0);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [parameter, setParameter] = useState("interest");
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (parameter === "interest") {
      if (principle !== "" && time !== 0 && roi !== 0) {
        setIsButtonDisabled(false);
      } else setIsButtonDisabled(true);
    } else if (parameter === "principle") {
      if (interestAmount !== "" && time !== 0 && roi !== 0)
        setIsButtonDisabled(false);
      else setIsButtonDisabled(true);
    } else if (parameter === "time") {
      if (principle !== "" && interestAmount !== "" && roi !== 0)
        setIsButtonDisabled(false);
      else setIsButtonDisabled(true);
    } else if (parameter === "interest-rate") {
      if (principle !== "" && time !== 0 && interestAmount !== "")
        setIsButtonDisabled(false);
      else setIsButtonDisabled(true);
    } else setIsButtonDisabled(true);
  }, [principle, interestAmount, time, roi, parameter]);

  const getResult = () => {
    let result = 0;
    if (parameter === "interest") {
      result = getSimpleInterest(principle, time, roi);
      setResult(result);
    }
    if (parameter === "principle") {
      result = getSimplePrinciple(roi, interestAmount, time);
      setResult(result);
    }
    if (parameter === "time") {
      result = getSimpleTime(principle, interestAmount, roi);
      setResult(result);
    }
    if (parameter === "interest-rate") {
      result = getSimpleROI(principle, interestAmount, time);
      setResult(result);
    }
  };

  const handlePrincipleChange = (event) => {
    setPrinciple(event.target.value);
  };
  const handleInterestChange = (event) => {
    setInterestAmount(event.target.value);
  };
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
  const handleROIChange = (event) => {
    setROI(event.target.value);
  };

  const handleParameterTypeChange = (type) => {
    setParameter(type);
    //resetting values
    setPrinciple("");
    setInterestAmount("");
    setTime(0);
    setROI(0);
    setIsButtonDisabled(true);
    setResult(null);
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
      {parameter !== "principle" && (
        <Grid item xs={4}>
          <TextField
            id="principle"
            label="Principle"
            variant="outlined"
            value={principle}
            onChange={(event) => {
              handlePrincipleChange(event);
            }}
            inputProps={{ inputmode: "numeric", pattern: "[0-9]*" }}
          />
        </Grid>
      )}
      {parameter !== "interest" && (
        <Grid item xs={4}>
          <TextField
            id="interestAmount"
            label="Interest Amount"
            variant="outlined"
            value={interestAmount}
            onChange={(event) => {
              handleInterestChange(event);
            }}
            inputProps={{ inputmode: "numeric", pattern: "[0-9]*" }}
          />
        </Grid>
      )}
      {parameter !== "time" && (
        <Grid item xs={4}>
          <FormControl style={{ minWidth: 220 }}>
            <InputLabel id="demo-simple-select-label">Time Period</InputLabel>
            <Select
              labelId="demo-time-select-label"
              id="time"
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
      )}
      {parameter !== "interest-rate" && (
        <Grid item xs={4}>
          <FormControl style={{ minWidth: 220 }}>
            <InputLabel id="demo-simple-select-label">
              Rate of interest
            </InputLabel>
            <Select
              labelId="demo-roi-select-label"
              id="roi"
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
      )}

      <Grid item xs={12}>
        <Button
          disabled={isButtonDisabled}
          variant="contained"
          onClick={() => getResult()}
          style={{ textTransform: "none" }}
        >
          Get {parameter}
        </Button>
      </Grid>

      {result !== null && (
        <Grid item xs={12}>
          <Typography>
            Your {parameter} will be : <strong>{result}</strong>
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}

export default SimpleInterest;
