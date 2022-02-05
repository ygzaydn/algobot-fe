import React from "react";

import { Grid, Typography, Button } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { connect } from "react-redux";

import { language } from "../../redux/selectors";
import { botInfoText, botInfo } from "../../constants";

function createData(botName, profit, openPositions) {
  return { botName, profit, openPositions };
}

const rows = botInfo.map((el) =>
  createData(el.botName, el.profit, el.openPositions)
);

const BotInfo = ({ language }) => {
  return (
    <Grid item xs={12} className="dashboardpage__maingrid--c">
      <Grid container className="botInfo">
        <Typography variant="h6" className="botInfo__title">
          {botInfoText[language].title}
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="customized table" stickyHeader>
            <TableHead className="botInfo__header">
              <TableRow>
                <TableCell>{botInfoText[language].activeBots}</TableCell>
                <TableCell align="center">
                  {botInfoText[language].profit}
                </TableCell>
                <TableCell align="center">
                  {botInfoText[language].openPosition}
                </TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.botName} className="botInfo__item">
                  <TableCell component="th" scope="row">
                    {row.botName}
                  </TableCell>
                  <TableCell
                    className={`${
                      parseFloat(row.profit) < 0
                        ? "botInfo__item--neg"
                        : parseFloat(row.profit) < 100
                        ? "botInfo__item--posLow"
                        : "botInfo__item--posHigh"
                    }`}
                    align="center"
                  >
                    {row.profit}
                  </TableCell>
                  <TableCell
                    align="center"
                    className={`${
                      parseFloat(row.openPositions) < 3
                        ? "botInfo__item--low"
                        : parseFloat(row.openPositions) < 6
                        ? "botInfo__item--medium"
                        : "botInfo__item--high"
                    }`}
                  >
                    {row.openPositions}
                  </TableCell>
                  <TableCell align="center" className="botInfo__botButtonGrid">
                    <Button
                      variant="contained"
                      color="primary"
                      className="botInfo__botButton"
                    >
                      {botInfoText[language].optionsButtonText}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid xs={12} className="botInfo__newBotGrid">
        <Button
          variant="contained"
          color="secondary"
          className="botInfo__newBotButton"
        >
          {botInfoText[language].addNewBot}
        </Button>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  language: language(state),
});

export default connect(mapStateToProps, null)(BotInfo);
