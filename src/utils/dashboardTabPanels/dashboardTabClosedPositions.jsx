import React from "react";

import {
    Grid,
    Typography,
    Table,
    TableContainer,
    TableHead,
    Paper,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material";
import { botAdditionalInfo, orderInfo, orderInfoText } from "../../constants";
import { language } from "../../redux/selectors";
import { connect } from "react-redux";

const DashboardTabClosedPositions = ({ language, botInfo, myBot }) => {
    const tabState = myBot.openPositions;
    const rows = orderInfo.filter(
        (el) => el.botName === myBot.botName && el.position === "closed"
    );
    return (
        <Grid container className="bottab">
            <Grid item xs={12}>
                <Typography variant="h6" className="bottab__title">
                    {botInfo.botName}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {tabState === 0 ? (
                    <Typography
                        variant="h6"
                        className="bottab__title bottab__yeseva"
                    >
                        {botAdditionalInfo[language].noClosedPosition}
                    </Typography>
                ) : (
                    <Grid container className="orderInfo">
                        <Typography variant="h6" className="orderInfo__title">
                            {botAdditionalInfo[language].yesClosedPosition}
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table aria-label="customized table" stickyHeader>
                                <TableHead className="orderInfo__header">
                                    <TableRow>
                                        <TableCell>
                                            {orderInfoText[language].coin}
                                        </TableCell>
                                        <TableCell align="center">
                                            {orderInfoText[language].amount}
                                        </TableCell>

                                        <TableCell align="center">
                                            {orderInfoText[language].leverage}
                                        </TableCell>
                                        <TableCell align="center">
                                            {orderInfoText[language].status}
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={
                                                row.coin +
                                                row.amount +
                                                row.position +
                                                row.leverage +
                                                row.status
                                            }
                                            className="orderInfo__item"
                                        >
                                            <TableCell
                                                component="th"
                                                scope="row"
                                            >
                                                {row.coin}
                                            </TableCell>
                                            <TableCell align="center">
                                                {row.amount}
                                            </TableCell>

                                            <TableCell
                                                align="center"
                                                className={`${
                                                    parseFloat(row.leverage) <
                                                    10
                                                        ? "orderInfo__item--low"
                                                        : parseFloat(
                                                              row.leverage
                                                          ) < 15
                                                        ? "orderInfo__item--medium"
                                                        : "orderInfo__item--high"
                                                }`}
                                            >
                                                {row.leverage}x
                                            </TableCell>
                                            <TableCell
                                                align="center"
                                                className={`${
                                                    parseFloat(row.status) > 0
                                                        ? "orderInfo__item--positive"
                                                        : "orderInfo__item--negative"
                                                }`}
                                            >
                                                {row.status}%
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
};

const mapStateToProps = (state) => ({
    language: language(state),
});

export default connect(mapStateToProps, null)(DashboardTabClosedPositions);
