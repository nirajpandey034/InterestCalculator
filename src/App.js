import "./App.css";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Home from "./Components/Home";

import PubSub from "pubsub-js";
import { useEffect } from "react";

const light = {
  palette: {
    type: "light",
    background: {
      default: "#FFFFFF"
    },
    text: {
      primary: "#000000"
    },
    primary: {
      main: '#2196f3'
    },
    secondary: {
      main: '#000000'
    }
  },
};
const dark = {

  palette: {
    type: "dark",
    background: {
      default: "#F7CCAC" 
    },
    text: {
      primary: "#000000"
    },
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#2196f3'
    }
  },
};
function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    PubSub.subscribe("THEME_MODE", (msg, data) => {
      setTheme(data);
    });
  }, []);
  return (
    <ThemeProvider theme={theme==='light' ? createTheme(light) : createTheme(dark)}>
      <CssBaseline />
      <div className="App" >
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
