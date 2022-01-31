import React from "react";

import { Grid, Typography, Button } from "@mui/material";

import { accountText } from "../../constants";
import Swal from "sweetalert2";

import { connect } from "react-redux";
import { ReactComponent as AccountPageLogo } from "../../assets/illustrations/accountpage-logo.svg";
import { ActionTypes } from "../../redux/actionTypes";
import { Navigate } from "react-router-dom";

const ResetPassword = ({ language, logout, auth }) => {
  const logoutFunc = () => {
    logout();
    Swal.fire({
      position: "center",
      icon: "success",
      width: 600,
      padding: "3em",
      color: `green`,
      background: "black",
      title: `${accountText[language].logoutText}`,
      showConfirmButton: false,
      borderRadius: "20px",
      timer: 1500,
    });
  };

  return (
    <Grid container className="accountpage">
      {!auth && <Navigate to="/" />}
      <Grid item xs={12} md={6} className="accountpage__titlegrid">
        <Grid item xs={12}>
          <Typography variant="h6" className="accountpage__title">
            {accountText[language].title}
          </Typography>
        </Grid>
        <Grid item xs={12} className="accountpage__infogrid">
          <Typography variant="subtitle2" className="accountpage__infotext">
            {accountText[language].infoText1}
          </Typography>
          <Typography variant="subtitle2" className="accountpage__infotext">
            {accountText[language].infoText2}
          </Typography>
          <Typography variant="subtitle2" className="accountpage__infotext">
            {accountText[language].infoText3}
          </Typography>
        </Grid>
        <Grid item xs={12} className="accountpage__buttongrid">
          <Button
            variant="contained"
            color="primary"
            className="accountpage__button"
            onClick={() => logoutFunc()}
          >
            {accountText[language].buttonText}
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} className="resetpassword__icongrid">
        <AccountPageLogo />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  language: state.lang,
  auth: Object.keys(state.user).length > 0,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch({ type: ActionTypes.LOGOUT_USER }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
