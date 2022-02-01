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
import { portfolioText, testPortfolio } from "../../constants";

function createData(coin, qty, value) {
  return { coin, qty, value };
}

const rows = testPortfolio.map((el) =>
  createData(el.coin, el.quantity, el.value)
);

const Portfolio = ({ language }) => {
  return (
    <Grid container className="portfolio">
      <Typography variant="h6" className="portfolio__title">
        {portfolioText[language].title}
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="customized table" stickyHeader>
          <TableHead className="portfolio__header">
            <TableRow>
              <TableCell>{portfolioText[language].coin}</TableCell>
              <TableCell align="center">
                {portfolioText[language].quantity}
              </TableCell>
              <TableCell align="center">
                {portfolioText[language].value}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.coin} className="portfolio__item">
                <TableCell component="th" scope="row">
                  {row.coin}
                </TableCell>
                <TableCell align="center">{row.qty}</TableCell>
                <TableCell align="center">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  language: language(state),
});

export default connect(mapStateToProps, null)(Portfolio);
