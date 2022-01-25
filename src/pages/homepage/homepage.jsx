import React from "react";

import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "../../style/main.scss";

import { ReactComponent as HomepageLandingSvg } from "../../assets/illustrations/homepage-landing.svg";

const Homepage = () => {
    const navigate = useNavigate();

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
                            Upper text will appear here
                        </Typography>
                        <Typography variant="h2">
                            Example landing page text will appear here
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

export default Homepage;
