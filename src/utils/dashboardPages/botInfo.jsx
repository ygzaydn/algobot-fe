import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { botAdditionalInfo, botInfo as generalBotInfo } from "../../constants";
import { language } from "../../redux/selectors";
import { connect } from "react-redux";
import DashboardTabBotInfo from "../dashboardTabPanels/dashboardTabBotInfo";
import DashboardTabOpenPositions from "../dashboardTabPanels/dashboardTabOpenPositions";
import DashboardTabClosedPositions from "../dashboardTabPanels/dashboardTabClosedPositions";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const BotInfo = ({ language, botInfo }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const myBot = generalBotInfo.filter(
        (el) => el.botName === botInfo.botName
    )[0];

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab
                        label={`${botAdditionalInfo[language].tabFirst}`}
                        {...a11yProps(0)}
                    />
                    <Tab
                        label={`${botAdditionalInfo[language].tabSecond}`}
                        {...a11yProps(1)}
                    />
                    <Tab
                        label={`${botAdditionalInfo[language].tabThird}`}
                        {...a11yProps(2)}
                    />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} component="div">
                <DashboardTabBotInfo botInfo={botInfo} myBot={myBot} />
            </TabPanel>
            <TabPanel value={value} index={1} component="div">
                <DashboardTabOpenPositions botInfo={botInfo} myBot={myBot} />
            </TabPanel>
            <TabPanel value={value} index={2} component="div">
                <DashboardTabClosedPositions botInfo={botInfo} myBot={myBot} />
            </TabPanel>
        </Box>
    );
};

const mapStateToProps = (state) => ({
    language: language(state),
});

export default connect(mapStateToProps, null)(BotInfo);
