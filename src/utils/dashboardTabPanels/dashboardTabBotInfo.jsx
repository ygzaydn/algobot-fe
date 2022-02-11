import * as React from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { botAdditionalInfo } from "../../constants";
import { language } from "../../redux/selectors";
import { connect } from "react-redux";

const DashboardTabBotInfo = ({ language, botInfo, myBot }) => {
    return (
        <Grid container className="bottab">
            <Grid item xs={12}>
                <Typography variant="h6" className="bottab__title">
                    {botInfo.botName}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="subtitle1" className="bottab__info">
                    <strong>&bull;</strong>{" "}
                    {botAdditionalInfo[language].tpPercentage}{" "}
                    <strong>{myBot.tpPercentage}%</strong>
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="subtitle1" className="bottab__info">
                    <strong>&bull;</strong>{" "}
                    {botAdditionalInfo[language].stopLossPercentage}{" "}
                    <strong>{myBot.stopLossPercentage}%</strong>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1" className="bottab__info">
                    <strong>&bull;</strong>{" "}
                    {botAdditionalInfo[language].leverageRate}{" "}
                    <strong>{myBot.leverage}</strong>
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="subtitle1" className="bottab__info">
                    <strong>&bull;</strong>{" "}
                    {botAdditionalInfo[language].openPositionNumber}{" "}
                    <strong>{myBot.openPositionNumber}</strong>
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="subtitle1" className="bottab__info">
                    <strong>&bull;</strong>{" "}
                    {botAdditionalInfo[language].closedPositionNumber}{" "}
                    <strong>{myBot.closedPositions}</strong>
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="subtitle1" className="bottab__info">
                    <strong>&bull;</strong>{" "}
                    {botAdditionalInfo[language].walletStart}{" "}
                    <strong>{myBot.startAmount} USD</strong>
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="subtitle1" className="bottab__info">
                    <strong>&bull;</strong>{" "}
                    {botAdditionalInfo[language].walletEnd}{" "}
                    <strong>{myBot.startAmount + myBot.profit} USD</strong>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    variant="subtitle1"
                    className="bottab__info bottab__center bottab__padding"
                >
                    {botAdditionalInfo[language].overallProfitAmount}{" "}
                    <strong>{myBot.profit} USD</strong>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    variant="subtitle1"
                    className="bottab__info bottab__center"
                >
                    {botAdditionalInfo[language].overallProfit}{" "}
                    <strong>
                        {(100 * (myBot.startAmount + myBot.profit)) /
                            myBot.startAmount}
                        %
                    </strong>
                </Typography>
            </Grid>
        </Grid>
    );
};

const mapStateToProps = (state) => ({
    language: language(state),
});

export default connect(mapStateToProps, null)(DashboardTabBotInfo);
