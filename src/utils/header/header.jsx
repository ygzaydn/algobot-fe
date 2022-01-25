import React from "react";

import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { headerText } from "../../constants";

import "../../style/main.scss";
import { ActionTypes } from "../../redux/actionTypes";

const Header = ({ language, changeLanguageToTR, changeLanguageToEN }) => {
    const navigate = useNavigate();

    return (
        <header>
            <Grid container className="header">
                <Grid item xs={4} className="header__logo">
                    <Typography
                        color="textPrimary"
                        onClick={() => navigate("/")}
                        className="header__logo--image"
                    >
                        Logo
                    </Typography>
                </Grid>
                <Grid item xs={8} className="header__menu">
                    <Typography
                        className="header__menu--active"
                        variant="subtitle1"
                        onClick={() => navigate("/")}
                    >
                        {headerText[language].menuItem1}
                    </Typography>
                    <Typography
                        className="header__menu--item"
                        variant="subtitle1"
                    >
                        {headerText[language].menuItem2}
                    </Typography>

                    {language === "en" ? (
                        <Typography
                            className="header__menu--item"
                            variant="subtitle1"
                            onClick={() => changeLanguageToTR()}
                        >
                            TR/<strong>EN</strong>{" "}
                        </Typography>
                    ) : (
                        <Typography
                            className="header__menu--item"
                            variant="subtitle1"
                            onClick={() => changeLanguageToEN()}
                        >
                            <strong>TR</strong>/EN{" "}
                        </Typography>
                    )}

                    <Typography
                        className="header__menu--item"
                        variant="subtitle1"
                    >
                        {headerText[language].menuItem3}
                    </Typography>
                </Grid>
            </Grid>
        </header>
    );
};

const mapStateToProps = (state) => ({ language: state.lang });

const mapDispatchToProps = (dispatch) => ({
    changeLanguageToTR: () =>
        dispatch({ type: ActionTypes.SWITCH_LANGUAGE_TR }),
    changeLanguageToEN: () =>
        dispatch({ type: ActionTypes.SWITCH_LANGUAGE_EN }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
