import React from "react";

import { Grid, Typography } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { connect } from "react-redux";

import { language } from "../../redux/selectors";
import { orderInfoText, orderInfo } from "../../constants";

function createData(coin, amount, position, leverage, status) {
  return { coin, amount, position, leverage, status };
}

const rows = orderInfo.map((el) =>
  createData(el.coin, el.amount, el.position, el.leverage, el.status)
);

const OrderInfo = ({ language }) => {
  return (
    <Grid item xs={12} className="dashboardpage__maingrid--c">
      <Grid container className="orderInfo">
        <Typography variant="h6" className="orderInfo__title">
          {orderInfoText[language].title}
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="customized table" stickyHeader>
            <TableHead className="orderInfo__header">
              <TableRow>
                <TableCell>{orderInfoText[language].coin}</TableCell>
                <TableCell align="center">
                  {orderInfoText[language].amount}
                </TableCell>
                <TableCell align="center">
                  {orderInfoText[language].position}
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
                  <TableCell component="th" scope="row">
                    {row.coin}
                  </TableCell>
                  <TableCell align="center">{row.amount}</TableCell>
                  <TableCell
                    className={`${
                      row.position === "open"
                        ? "orderInfo__item--active"
                        : "orderInfo__item--passive"
                    }`}
                    align="center"
                  >
                    {row.position}
                  </TableCell>
                  <TableCell
                    align="center"
                    className={`${
                      parseFloat(row.leverage) < 10
                        ? "orderInfo__item--low"
                        : parseFloat(row.leverage) < 15
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
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  language: language(state),
});

export default connect(mapStateToProps, null)(OrderInfo);
