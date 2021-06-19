import React from "react"

import { Box, Button, Typography, Grid } from "@material-ui/core"

const LinkBox = (props) => {
  return (
    <Grid item xs={4}>
      <Button
        startIcon={<props.icon />}
        color="secondary"
        component="a"
        href={props.link}
        target="_blank"
      >
        {props.label}
      </Button>
    </Grid>
  )
}

export default LinkBox
