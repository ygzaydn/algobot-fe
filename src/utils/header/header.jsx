import React from "react";

import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { headerText } from "../../constants";

import HeaderMenu from "./headerMenu";
import HeaderMenuItem from "./headerMenuItem";
import HeaderLanguageButton from "./headerLanguageButton";

const Header = ({ language }) => {
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
                <Grid item xs={8} className="header__menu--desktop">
                    <HeaderMenuItem
                        status="active"
                        size="desktop"
                        text={headerText[language].menuItem1}
                        clickFunc={() => navigate("/")}
                    />
                    <HeaderMenuItem
                        size="desktop"
                        text={headerText[language].menuItem2}
                        clickFunc={() => navigate("/#faq")}
                    />
                    <HeaderLanguageButton />

                    <HeaderMenuItem
                        size="desktop"
                        text={headerText[language].menuItem3}
                        clickFunc={() => navigate("/signin")}
                    />
                </Grid>
                <Grid item xs={8} className="header__menu--mobile">
                    <Grid item xs={4} />
                    <Grid item xs={7} justify="center" display="flex">
                        <HeaderLanguageButton />
                        <HeaderMenu />
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </Grid>
        </header>
    );
};

const mapStateToProps = (state) => ({ language: state.lang });

export default connect(mapStateToProps, null)(Header);
