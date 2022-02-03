import React from "react";

import { Grid } from "@mui/material";

import { connect } from "react-redux";

import { isAuth, subscribed } from "../../redux/selectors";

import AccountBalance from "../accountBalance/accountBalance";
import BalanceGraph from "../balanceGraph/balanceGraph";

import Portfolio from "../portfolio/portfolio";

const AccountInfo = ({ auth, subscribed }) => {
  return (
    <Grid container style={{ height: "100%" }}>
      <Grid item xs={12} md={6} className="dashboardpage__maingrid--a">
        <AccountBalance profit={0.148} />
      </Grid>
      <Grid item xs={12} md={6} className="dashboardpage__maingrid--b">
        <BalanceGraph />
      </Grid>
      <Grid item xs={12} className="dashboardpage__maingrid--c">
        <Portfolio />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  auth: isAuth(state),
  subscribed: subscribed(state),
});

export default connect(mapStateToProps, null)(AccountInfo);
