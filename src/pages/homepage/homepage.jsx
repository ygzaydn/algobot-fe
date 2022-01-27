import React from "react";

import { Grid, Typography } from "@mui/material";

import "../../style/main.scss";

import { connect } from "react-redux";
import { homepageText } from "../../constants";

import { ReactComponent as HomepageLandingSvg } from "../../assets/illustrations/homepage-landing.svg";
import { ReactComponent as HomepageFeaturesSvg } from "../../assets/illustrations/homepage-features.svg";

import FeaturesItem from "../../utils/features/featuresItem";
import StatsItem from "../../utils/stats/statsItem";
import YesevaTitle from "../../utils/yesevaTitle/yesevaTitle";
import FaqAccordion from "../../utils/faqAccordion/faqAccordion";

const Homepage = ({ language }) => {
    return (
        <Grid container className="homepage">
            <Grid container className="homepage__container">
                <Grid container className="homepage__landing">
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
                        <div className="homepage__landing--gradient--1" />
                        <div className="homepage__landing--gradient--2" />
                    </Grid>
                </Grid>
                <Grid container className="homepage__features">
                    <Grid
                        item
                        xs={0}
                        sm={6}
                        className="homepage__features__logogrid"
                    >
                        <HomepageFeaturesSvg />
                    </Grid>
                    <Grid
                        item
                        xs={0}
                        sm={6}
                        className="homepage__features__textgrid"
                    >
                        <YesevaTitle
                            text={homepageText[language].homepageFeaturesTitle}
                        />

                        {homepageText[language].homepageFeatures.map((el) => (
                            <FeaturesItem info={el} key={el.name} />
                        ))}
                    </Grid>
                </Grid>
                <Grid container className="homepage__stats">
                    <YesevaTitle
                        text={homepageText[language].homepageStatsTitle}
                    />

                    <Grid container className="homepage__stats--itembox">
                        {homepageText[language].homepageStats.map((el) => (
                            <StatsItem info={el} key={el.name} />
                        ))}
                    </Grid>
                </Grid>
                <Grid container className="homepage__faq" id="faq">
                    <YesevaTitle text={homepageText[language].faqTitle} />
                    <FaqAccordion info={homepageText[language].faqInfo} />
                </Grid>
            </Grid>
        </Grid>
    );
};

const mapStateToProps = (state) => ({ language: state.lang });

export default connect(mapStateToProps, null)(Homepage);
