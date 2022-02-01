import React, { useState } from "react";

import { Typography, Grid, Button } from "@mui/material";

import { connect } from "react-redux";
import { language } from "../../redux/selectors";
import { subExpiredText } from "../../constants";
import SubscribeDialog from "../subscribeDialog/subscribeDialog";
import { useNavigate } from "react-router-dom";

const Footer = ({ language }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Grid container className="subexpired">
      <SubscribeDialog open={open} setOpen={setOpen} />
      <Grid item xs={12} className="subexpired__grid">
        <Typography variant="h4" className="subexpired__text">
          {subExpiredText[language].statement}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className="subexpired__button"
          onClick={() => setOpen(true)}
        >
          {subExpiredText[language].buttonText}
        </Button>

        <Button
          variant="contained"
          color="primary"
          className="subexpired__button"
          onClick={() => navigate("/account")}
        >
          {subExpiredText[language].buttonText2}
        </Button>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({ language: language(state) });

export default connect(mapStateToProps, null)(Footer);
