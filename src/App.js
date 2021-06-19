import "@fontsource/roboto"
import "./App.css"
import { Container, Grid, Box, Paper } from "@material-ui/core"

import Header from "./Components/header/Header"
import Links from "./Components/links/Links"

function App() {
  return (
    <div className="App">
      <Header />
      <Box paddingTop={2} >
        <Container maxWidth="lg">
          <Grid container direction="column" spacing={2} p={10}>
            <Grid item xs={12}>
              <Links />
            </Grid>
            <Grid item xs={12}>
              <Paper>About Me</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>Work Experience</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>Skills</Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default App
