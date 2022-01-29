import React from "react";

import { Grid } from "@mui/material";

import Form from "../../utils/form/form";

import "../../style/main.scss";

import { signInText } from "../../constants";

import { connect } from "react-redux";
import { ReactComponent as SigninPageLogo } from "../../assets/illustrations/signinpage-logo.svg";

const Signin = ({ language }) => {
  return (
    <Grid container className="signin">
      <Grid item xs={12} md={6} className="signin__formgrid">
        <Form
          options={signInText[language].titleText}
          fields={signInText[language].fields}
          sendButton={signInText[language].buttonText}
          additionalText={signInText[language].additionalText}
        />
      </Grid>
      <Grid item xs={12} md={6} className="signin__icongrid">
        <SigninPageLogo />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({ language: state.lang });

export default connect(mapStateToProps, null)(Signin);
