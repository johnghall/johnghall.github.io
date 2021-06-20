import React from "react"

import headshot from "../../assets/headshot.jpg"

import { Grid, Typography, Box, CardMedia } from "@material-ui/core"
import CardBox from "../ui/CardBox"

const aboutMeText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit mattis 
felis. Proin ut egestas augue. Nulla eget purus luctus, vulputate ipsum non, pulvinar urna. Integer 
id tortor ut quam ullamcorper fringilla a vel lorem. Nam viverra a risus id dictum. Nulla facilisi. 
Quisque nec metus accumsan massa varius egestas. Duis vitae dui urna. Etiam velit eros, rhoncus ut 
mollis sed, aliquam at metus. Maecenas auctor augue ac tincidunt suscipit. Donec iaculis, felis sed 
tincidunt auctor, magna metus semper est, at lobortis ex augue non enim. Proin id neque pretium, 
malesuada ex et, facilisis erat. Nulla facilisi. Nunc dignissim eget libero vitae accumsan. Cras dolor 
lacus, mollis ut vestibulum eu, iaculis eu nibh. Sed non eleifend nibh. Nunc at nulla nec purus 
ullamcorper dictum a vel quam. Suspendisse eget eros vel nisl ornare consequat et sed turpis. Donec 
sed nulla sit amet orci molestie auctor. Fusce vehicula, tellus at volutpat consequat, quam nisi 
gravida orci, vitae sodales leo nunc tempor nisi. Fusce gravida dui magna, sit amet iaculis orci 
pulvinar ac. Phasellus aliquam vel nibh ut tempor. Duis condimentum congue arcu, ac interdum elit 
pulvinar et. Suspendisse potenti.`

const AboutMe = () => {
  return (
    <CardBox>
      <Typography variant="h6" align="center">
        About Me
      </Typography>
      <Grid container>
        <Grid item xs={8}>
          <Box padding={1}>
            <Typography align="left">{aboutMeText}</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box padding={1}>
            <CardMedia image={headshot} alt="Headshot" component="img" />
          </Box>
        </Grid>
      </Grid>
    </CardBox>
  )
}

export default AboutMe
