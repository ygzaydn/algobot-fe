import React from "react";
import { Grid, Typography } from "@mui/material";

const AccountBalance = ({ value, profit }) => {
  return (
    <Grid container className="accountbalance">
      <Grid item xs={12} className="accountbalance__title">
        <Typography variant="h6">My trading account balance</Typography>
      </Grid>
      <Grid item xs={12} className="accountbalance__total">
        <Typography
          variant="subtitle2"
          className="accountbalance__total--title"
        >
          Total balance
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
          Profit today
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

export default AccountBalance;
