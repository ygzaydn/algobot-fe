import React, { useState } from "react";

import { Grid, Typography, Button } from "@mui/material";

import { accountText } from "../../constants";
import Swal from "sweetalert2";

import { connect } from "react-redux";
import { ReactComponent as AccountPageLogo } from "../../assets/illustrations/accountpage-logo.svg";
import { ActionTypes } from "../../redux/actionTypes";
import { Navigate } from "react-router-dom";

import { language, isAuth, user } from "../../redux/selectors";
import SubcribeDialog from "../../utils/subscribeDialog/subscribeDialog";

const ResetPassword = ({ language, logout, auth, user }) => {
  const [open, setOpen] = useState(false);

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
      <SubcribeDialog open={open} setOpen={setOpen} />
      {!auth && <Navigate to="/" />}
      <Grid item xs={12} md={6} className="accountpage__titlegrid">
        <Grid item xs={12}>
          <Typography variant="h6" className="accountpage__title">
            {accountText[language].title}
          </Typography>
        </Grid>
        <Grid item xs={12} className="accountpage__infogrid">
          <Typography variant="subtitle2" className="accountpage__infotext">
            <span>{accountText[language].infoText1}</span>
            {user.email}
          </Typography>
          <Typography variant="subtitle2" className="accountpage__infotext">
            <span>{accountText[language].infoText2}</span>
            {user.subscribed
              ? accountText[language].accountStatus.active
              : accountText[language].accountStatus.passive}
            {!user.subscribed && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setOpen(true)}
              >
                {accountText[language].subscribeButtonText}
              </Button>
            )}
          </Typography>
          <Typography variant="subtitle2" className="accountpage__infotext">
            <span>{accountText[language].infoText3}</span>
            {user.subscribed ? `${user.expireDate}` : "--------------"}
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
  language: language(state),
  auth: isAuth(state),
  user: user(state),
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch({ type: ActionTypes.LOGOUT_USER }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
