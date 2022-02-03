import React, { useState, useRef } from "react";

import { Grid, Typography, Button, TextField } from "@mui/material";

import { connect } from "react-redux";

import { language } from "../../redux/selectors";
import { AdvancedChart } from "react-tradingview-embed";
import { chartsInfoText } from "../../constants";

const Charts = ({ language }) => {
  const ref = useRef(null);
  const [searchCoin, setSearchCoin] = useState("BTC");
  console.log(ref);
  return (
    <Grid item xs={12} className="dashboardpage__maingrid--c">
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" className="orderInfo__title">
            {chartsInfoText[language].title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="filled-basic"
            placeholder={chartsInfoText[language].textFieldPlaceholder}
            variant="outlined"
            color="primary"
            className="subscribe__textfield"
            ref={ref}
          />
          <Button
            variant="contained"
            color="primary"
            className="accountpage__button"
            onClick={() =>
              setSearchCoin(ref.current.firstChild.firstChild.value)
            }
          >
            {chartsInfoText[language].buttonText}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <AdvancedChart
            widgetProps={{ hideTopBar: false, symbol: searchCoin + "USD" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  language: language(state),
});

export default connect(mapStateToProps, null)(Charts);
