import React from "react";

import { Grid, Typography } from "@mui/material";

import "../../style/main.scss";

import { connect } from "react-redux";
import { homepageText } from "../../constants";

import { ReactComponent as HomepageLandingSvg } from "../../assets/illustrations/homepage-landing.svg";

const Homepage = ({ language }) => {
    return (
        <Grid container className="homepage">
            <Grid container className="homepage__container">
                <Grid item xs={12} className="homepage__landing">
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        className="homepage__landing--text"
                    >
                        <Typography variant="h6">
                            {homepageText[language].homepageLandingUpText}
                        </Typography>
                        <Typography variant="h2">
                            {homepageText[language].homepageLandingMainText}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={0}
                        sm={6}
                        className="homepage__landing--logo"
                    >
                        <HomepageLandingSvg />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

const mapStateToProps = (state) => ({ language: state.lang });

export default connect(mapStateToProps, null)(Homepage);
