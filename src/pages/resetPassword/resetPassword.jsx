import React from "react";

import { Grid } from "@mui/material";

import Form from "../../utils/form/form";

import "../../style/main.scss";

import { resetPasswordText } from "../../constants";
import { Navigate } from "react-router";

import { connect } from "react-redux";
import { ReactComponent as SigninPageLogo } from "../../assets/illustrations/signinpage-logo.svg";

const ResetPassword = ({ language, auth }) => {
  return (
    <Grid container className="resetpassword">
      {auth && <Navigate to="/" />}
      <Grid item xs={12} md={6} className="resetpassword__formgrid">
        <Form
          options={resetPasswordText[language].titleText}
          fields={resetPasswordText[language].fields}
          sendButton={resetPasswordText[language].buttonText}
          additionalText={resetPasswordText[language].additionalText}
        />
      </Grid>
      <Grid item xs={12} md={6} className="resetpassword__icongrid">
        <SigninPageLogo />
      </Grid>
    </Grid>
  );
};
const mapStateToProps = (state) => ({
  language: state.lang,
  auth: Object.keys(state.user).length > 0,
});

export default connect(mapStateToProps, null)(ResetPassword);
