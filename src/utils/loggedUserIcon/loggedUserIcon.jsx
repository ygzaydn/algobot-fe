import React from "react";
import { Grid, Typography } from "@mui/material";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

const LoggedUserIcon = ({ emailLetter }) => {
  const navigate = useNavigate();
  return (
    <Grid
      item
      className="header__loggeduser"
      onClick={() => navigate("/account")}
    >
      <Typography variant="subtitle1" className="header__loggeduser--letter">
        {emailLetter}
      </Typography>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  emailLetter: state.user.email.substring(0, 1).toUpperCase(),
});

export default connect(mapStateToProps, null)(LoggedUserIcon);
