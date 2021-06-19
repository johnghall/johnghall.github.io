import { Tabs } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: "#00bcd4",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} centered />);

export default StyledTabs