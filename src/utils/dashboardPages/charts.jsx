import React, { useState, useRef } from "react";

import { Grid, Typography, Button, TextField } from "@mui/material";

import { connect } from "react-redux";

import { language } from "../../redux/selectors";
import { AdvancedChart } from "react-tradingview-embed";
import { chartsInfoText } from "../../constants";

const Charts = ({ language }) => {
    const ref = useRef(null);
    const [searchCoin, setSearchCoin] = useState("BTC");
    return (
        <Grid item xs={12} className="dashboardpage__maingrid--c">
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h6" className="charts__title">
                        {chartsInfoText[language].title}
                    </Typography>
                </Grid>
                <Grid item xs={12} className="charts__buttongrid">
                    <TextField
                        id="filled-basic"
                        placeholder={
                            chartsInfoText[language].textFieldPlaceholder
                        }
                        variant="outlined"
                        color="primary"
                        className="charts__textfield"
                        ref={ref}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        className="charts__button"
                        onClick={() =>
                            setSearchCoin(
                                ref.current.firstChild.firstChild.value
                            )
                        }
                    >
                        {chartsInfoText[language].buttonText}
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <AdvancedChart
                        widgetProps={{
                            hideTopBar: false,
                            symbol: searchCoin + "USD",
                        }}
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
