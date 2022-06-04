import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import InterestTypeRadio from "./InterestTypeRadio";

import SimpleInterest from "./SimpleInterest";
import CompoundInterest from "./CompoundInterest";

function Calculator() {
  const [interestType, setInterestType] = useState("simple");

  const handleInterestTypeChange = (type) => {
    setInterestType(type);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={4}>
          <InterestTypeRadio
            val={interestType}
            setVal={handleInterestTypeChange}
          />
        </Grid>
      </Grid>
      {interestType==='simple' ? <SimpleInterest /> : <CompoundInterest />}
      
    </Box>
  );
}

export default Calculator;
