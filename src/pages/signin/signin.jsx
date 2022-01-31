import React from "react";

import { Grid } from "@mui/material";

import Form from "../../utils/form/form";
import Swal from "sweetalert2";

import "../../style/main.scss";

import { signInText } from "../../constants";
import { ActionTypes } from "../../redux/actionTypes";
import { Navigate } from "react-router-dom";

import { connect } from "react-redux";
import { ReactComponent as SigninPageLogo } from "../../assets/illustrations/signinpage-logo.svg";

const Signin = ({ language, loginRequest, auth }) => {
  const login = (info) => {
    loginRequest(info);
    Swal.fire({
      position: "center",
      icon: "success",
      width: 600,
      padding: "3em",
      color: `green`,
      background: "black",
      title: `${signInText[language].loginSuccessMessage}`,
      showConfirmButton: false,
      borderRadius: "20px",
      timer: 1500,
      zIndex: "1000",
    });
  };

  const functions = [login];
  return (
    <Grid container className="signin">
      {auth && <Navigate to="/" />}
      <Grid item xs={12} md={6} className="signin__formgrid">
        <Form
          options={signInText[language].titleText}
          fields={signInText[language].fields}
          sendButton={signInText[language].buttonText}
          additionalText={signInText[language].additionalText}
          clickFunction={functions}
        />
      </Grid>
      <Grid item xs={12} md={6} className="signin__icongrid">
        <SigninPageLogo />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  language: state.lang,
  auth: Object.keys(state.user).length > 0,
});
const mapDispatchToProps = (dispatch) => ({
  loginRequest: (info) =>
    dispatch({
      type: ActionTypes.LOGIN_USER,
      payload: { email: info.email, password: info.password },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
