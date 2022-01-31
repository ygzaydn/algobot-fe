import React from "react";

import { Typography, Grid } from "@mui/material";
import { footerText } from "../../constants";
import { connect } from "react-redux";
import { language } from "../../redux/selectors";

const Footer = ({ language }) => {
  return (
    <Grid container className="footer">
      <Grid container>
        <Grid item xs={12} className="footer__grid">
          Logo
        </Grid>
        <Grid item xs={12} className="footer__grid">
          <Typography variant="h6" className="footer__name">
            {footerText[language].companyName}
          </Typography>
        </Grid>
        <Grid item xs={12} className="footer__grid">
          <Typography variant="subtitle1" className="footer__info">
            {footerText[language].additionalInfo}
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12} className="footer__grid">
        <Typography variant="subtitle2" className="footer__rights">
          {" "}
          {footerText[language].rights}
        </Typography>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({ language: language(state) });

export default connect(mapStateToProps, null)(Footer);
