import React from "react";

import { Grid } from "@mui/material";

import Form from "../../utils/form/form";

import "../../style/main.scss";

import { connect } from "react-redux";
import { ReactComponent as SigninPageLogo } from "../../assets/illustrations/signinpage-logo.svg";

const Signin = ({ language }) => {
  return (
    <Grid container className="signin">
      <Grid item xs={12} md={6}>
        <Form
          options={[
            { state: 0, text: "Sign in" },
            { state: 1, text: "Sign Up" },
          ]}
          fields={[
            {
              name: "Your email address",
            },
            { name: "Password" },
          ]}
          sendButton={{
            text: "Sign in",
            clickFunction: () => console.log("asd"),
          }}
          additionalText={{ status: true, text: "Forgot your password?" }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <SigninPageLogo />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({ language: state.lang });

export default connect(mapStateToProps, null)(Signin);
