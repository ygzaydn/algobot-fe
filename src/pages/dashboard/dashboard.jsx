import React from "react";

import { Grid } from "@mui/material";

import { connect } from "react-redux";

import { language, isAuth, subscribed } from "../../redux/selectors";
import DashboardMenu from "../../utils/dashboardMenu/dashboardMenu";
import AccountBalance from "../../utils/accountBalance/accountBalance";
import BalanceGraph from "../../utils/balanceGraph/balanceGraph";
import { Navigate } from "react-router-dom";
import SubscriptionExpired from "../../utils/subscriptionExpired/subscriptionExpired";

const Dashboard = ({ language, auth, subscribed }) => {
  return (
    <Grid container className="dashboardpage">
      {!auth && <Navigate to="/" />}
      {subscribed ? (
        <>
          <Grid item xs={12} md={3} lg={3} className="dashboardpage__list">
            <DashboardMenu />
          </Grid>
          <Grid item xs={12} md={9} lg={9} className="dashboardpage__maingrid">
            <Grid container style={{ height: "100%" }}>
              <Grid item xs={12} md={6} className="dashboardpage__maingrid--a">
                <AccountBalance value={1.029} profit={0.148} />
              </Grid>
              <Grid item xs={12} md={6} className="dashboardpage__maingrid--b">
                <BalanceGraph />
              </Grid>
              <Grid item xs={12} className="dashboardpage__maingrid--c">
                Portfolio
              </Grid>
            </Grid>
          </Grid>
        </>
      ) : (
        <SubscriptionExpired />
      )}
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  language: language(state),
  auth: isAuth(state),
  subscribed: subscribed(state),
});

export default connect(mapStateToProps, null)(Dashboard);
