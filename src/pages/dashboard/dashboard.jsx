import React from "react";

import { Grid } from "@mui/material";

import { connect } from "react-redux";

import { language, isAuth } from "../../redux/selectors";
import DashboardMenu from "../../utils/dashboardMenu/dashboardMenu";
import AccountBalance from "../../utils/accountBalance/accountBalance";
import BalanceGraph from "../../utils/balanceGraph/balanceGraph";

const Dashboard = ({ language, auth }) => {
  return (
    <Grid container className="dashboardpage">
      {/*!auth && <Navigate to="/" />*/}
      <Grid item xs={12} sm={2} className="dashboardpage__list">
        <DashboardMenu />
      </Grid>
      <Grid item xs={12} sm={10} className="dashboardpage__maingrid">
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
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  language: language(state),
  auth: isAuth(state),
});

export default connect(mapStateToProps, null)(Dashboard);
