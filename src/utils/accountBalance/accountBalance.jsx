import React from "react";
import { Grid, Typography } from "@mui/material";
import { language } from "../../redux/selectors";
import { connect } from "react-redux";

import { dashboardText, testPortfolio } from "../../constants";

const AccountBalance = ({ profit, language }) => {
  let value = 0;
  testPortfolio.forEach((el) => {
    value += parseFloat(el.value);
  });
  return (
    <Grid container className="accountbalance">
      <Grid item xs={12} className="accountbalance__title">
        <Typography variant="h6">
          {dashboardText[language].accountBalanceTitle}
        </Typography>
      </Grid>
      <Grid item xs={12} className="accountbalance__total">
        <Typography
          variant="subtitle2"
          className="accountbalance__total--title"
        >
          {dashboardText[language].accountBalanceTotal}
        </Typography>
        <Typography variant="h6" className="accountbalance__total--value">
          {value}USD
        </Typography>
      </Grid>

      <Grid item xs={12} className="accountbalance__profit">
        <Typography
          variant="subtitle2"
          className="accountbalance__profit--title"
        >
          {dashboardText[language].accountBalanceProfit}
        </Typography>
        <Typography
          variant="h6"
          className={
            parseFloat(profit) > 0
              ? "accountbalance__profit--pos"
              : "accountbalance__profit--neg"
          }
        >
          {parseFloat(profit) > 0 ? `+${profit}` : `-${profit}`}
        </Typography>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  language: language(state),
});

export default connect(mapStateToProps, null)(AccountBalance);
