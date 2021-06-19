import { Paper, Typography, Grid, Box } from "@material-ui/core"
import React from "react"

import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import DescriptionIcon from '@material-ui/icons/Description';

import LinkBox from "./LinkBox"
import Resume from "../../assets/resume.pdf"

const hrefLinks = {
  "li": "https://www.linkedin.com/in/john-hall-373222176/",
  "gh": "https://github.com/johnghall",
  "resume": Resume,
}

const Links = () => {
  return (
    <Paper>
      <Box paddingBottom={1} paddingTop={1}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">Links</Typography>
          </Grid>
          <LinkBox icon={LinkedInIcon} label="LinkedIn" link={hrefLinks.li} />
          <LinkBox icon={GitHubIcon} label="GitHub" link={hrefLinks.gh} />
          <LinkBox icon={DescriptionIcon} label="Resume" link={hrefLinks.resume} />
        </Grid>
      </Box>
    </Paper>
  )
}

export default Links
