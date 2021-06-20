import React from "react"

import { Box, Paper } from "@material-ui/core"

const CardBox = (props) => {
  return (
    <Paper>
      <Box paddingBottom={1} paddingTop={1}>{props.children}</Box>
    </Paper>
  )
}

export default CardBox
