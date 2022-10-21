import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {createTheme, experimental_sx as sx, ThemeProvider} from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: sx({
          borderRadius: "5px",
          py: "13px",
          px: "18px",
          textTransform: "none",
        }),
        containedSuccess: sx({
          backgroundColor: "rgb(63, 192, 127)",
          fontSize: "15px",
          fontWeight: 600,
          ":hover": {
            backgroundColor: "rgb(50, 180, 110)"
          }
        })
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: sx({
          py: 0,
          color: "white"
        })
      }
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
