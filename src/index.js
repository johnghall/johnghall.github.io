import { createMuiTheme, CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#616161",
    },
    secondary: {
      main: "#00bcd4",
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
