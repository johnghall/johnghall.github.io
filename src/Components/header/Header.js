import { AppBar } from "@material-ui/core"
import React from "react"

import StyledTabs from "./StyledTabs"
import StyledTab from "./StyledTab"

const Header = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <AppBar>
      <StyledTabs value={value} onChange={handleChange}>
        <StyledTab label="Links" />
        <StyledTab label="About Me" />
        <StyledTab label="Work Experience" />
        <StyledTab label="Skills" />
      </StyledTabs>
    </AppBar>
  )
}

export default Header
