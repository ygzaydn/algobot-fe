import React, { useState, useEffect } from "react";

import { Grid } from "@mui/material";

import { connect } from "react-redux";

import { isAuth, subscribed } from "../../redux/selectors";
import DashboardMenu from "../../utils/dashboardMenu/dashboardMenu";

import { Navigate } from "react-router-dom";
import SubscriptionExpired from "../../utils/subscriptionExpired/subscriptionExpired";

import { useParams } from "react-router-dom";
import AccountInfo from "../../utils/dashboardPages/accountInfo";
import OrderInfo from "../../utils/dashboardPages/orderInfo";
import Charts from "../../utils/dashboardPages/charts";

const Dashboard = ({ auth, subscribed }) => {
  const { state } = useParams();
  const [pageState, setPageState] = useState(state);

  useEffect(() => {
    setPageState(state);
  }, [state]);

  return (
    <Grid container className="dashboardpage">
      {!auth && <Navigate to="/" />}
      {subscribed ? (
        <>
          <Grid item xs={12} md={3} lg={3} className="dashboardpage__list">
            <DashboardMenu pageState={pageState} setPageState={setPageState} />
          </Grid>
          <Grid item xs={12} md={9} lg={9} className="dashboardpage__maingrid">
            {pageState === "account" && <AccountInfo />}
            {pageState === "orders" && <OrderInfo />}
            {pageState === "charts" && <Charts />}
          </Grid>
        </>
      ) : (
        <SubscriptionExpired />
      )}
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  auth: isAuth(state),
  subscribed: subscribed(state),
});

export default connect(mapStateToProps, null)(Dashboard);
