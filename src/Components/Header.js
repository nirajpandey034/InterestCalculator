import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MenuBar from "./ManuBar";
import CalculateIcon from "@mui/icons-material/Calculate";
import {useNavigate} from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }} style={{marginBottom: '8rem', marginLeft: '1rem', marginRight: '1rem'}}>
      <AppBar position="static">
        <Toolbar>
          <div
            style={{ display: "flex", flexDirection: "row", width: "inherit" }}
          >
            <div style={{ marginRight: "auto" }}>
              <CalculateIcon fontSize="large" style={{cursor: "pointer"}} onClick={()=>{navigate('/')}}/>
            </div>

            <div style={{ marginLeft: "auto" }}>
              <div style={{ display: "flex", flexDirection: "row"}}>
              <MenuBar />
              <Button color="inherit">Request</Button>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
