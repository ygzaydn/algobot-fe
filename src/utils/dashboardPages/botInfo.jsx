import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { botAdditionalInfo } from "../../constants";
import { language } from "../../redux/selectors";
import { connect } from "react-redux";

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
                <Grid container className="bottab">
                    <Grid item xs={12}>
                        <Typography variant="h6" className="bottab__title">
                            {botInfo.botName}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            variant="subtitle1"
                            className="bottab__info"
                        >
                            <strong>&bull;</strong>{" "}
                            {botAdditionalInfo[language].tpPercentage}{" "}
                            <strong>5%</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            variant="subtitle1"
                            className="bottab__info"
                        >
                            <strong>&bull;</strong>{" "}
                            {botAdditionalInfo[language].stopLossPercentage}{" "}
                            <strong>15%</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            variant="subtitle1"
                            className="bottab__info"
                        >
                            <strong>&bull;</strong>{" "}
                            {botAdditionalInfo[language].leverageRate}{" "}
                            <strong>15</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            variant="subtitle1"
                            className="bottab__info"
                        >
                            <strong>&bull;</strong>{" "}
                            {botAdditionalInfo[language].openPositionNumber}{" "}
                            <strong>15</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            variant="subtitle1"
                            className="bottab__info"
                        >
                            <strong>&bull;</strong>{" "}
                            {botAdditionalInfo[language].closedPositionNumber}{" "}
                            <strong>5</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            variant="subtitle1"
                            className="bottab__info"
                        >
                            <strong>&bull;</strong>{" "}
                            {botAdditionalInfo[language].walletStart}{" "}
                            <strong>1000 USDT</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            variant="subtitle1"
                            className="bottab__info"
                        >
                            <strong>&bull;</strong>{" "}
                            {botAdditionalInfo[language].walletEnd}{" "}
                            <strong>1400 USDT</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            variant="subtitle1"
                            className="bottab__info bottab__center bottab__padding"
                        >
                            {botAdditionalInfo[language].overallProfitAmount}{" "}
                            <strong>400 USDT</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            variant="subtitle1"
                            className="bottab__info bottab__center"
                        >
                            {botAdditionalInfo[language].overallProfit}{" "}
                            <strong>40%</strong>
                        </Typography>
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1} component="div">
                Open Positions
            </TabPanel>
            <TabPanel value={value} index={2} component="div">
                Closed Positions
            </TabPanel>
        </Box>
    );
};

const mapStateToProps = (state) => ({
    language: language(state),
});

export default connect(mapStateToProps, null)(BotInfo);
