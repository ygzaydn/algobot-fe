import * as React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { subscribeDialogText } from "../../constants";
import { connect } from "react-redux";
import { language } from "../../redux/selectors";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const WalletTabs = ({ language }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="wallettab">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          centered
          aria-label="full width tabs example"
          sx={{ flexGrow: 1, maxWidth: 480, bgcolor: "background.paper" }}
        >
          <Tab
            className="wallettab__tab"
            sx={{ flexGrow: 1, maxWidth: 480, bgcolor: "background.paper" }}
            label={subscribeDialogText[language].itemOne}
            {...a11yProps(0)}
          />
          <Tab
            className="wallettab__tab"
            sx={{ flexGrow: 1, maxWidth: 480, bgcolor: "background.paper" }}
            label={subscribeDialogText[language].itemTwo}
            {...a11yProps(1)}
          />
          <Tab
            className="wallettab__tab"
            sx={{ flexGrow: 1, maxWidth: 480, bgcolor: "background.paper" }}
            label={subscribeDialogText[language].itemThree}
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>

      <TabPanel
        className="wallettab__tabpanel"
        value={value}
        index={0}
        dir={theme.direction}
      >
        {subscribeDialogText[language].itemOneContent}
        <span>1BoatSLRHtKNngkdXEeobR76b53LETtpyT</span>
      </TabPanel>
      <TabPanel
        className="wallettab__tabpanel"
        value={value}
        index={1}
        dir={theme.direction}
      >
        {subscribeDialogText[language].itemTwoContent}
        <span>1BoatSLRHtKNngkdXEeobR76b53LETtpyT</span>
      </TabPanel>
      <TabPanel
        className="wallettab__tabpanel"
        value={value}
        index={2}
        dir={theme.direction}
      >
        {subscribeDialogText[language].itemThreeContent}
        <span>1BoatSLRHtKNngkdXEeobR76b53LETtpyT</span>
      </TabPanel>
    </Box>
  );
};

const mapStateToProps = (state) => ({ language: language(state) });

export default connect(mapStateToProps, null)(WalletTabs);
