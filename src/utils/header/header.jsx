import React from "react";

import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "../../style/main.scss";

const Header = () => {
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
                        HOME
                    </Typography>
                    <Typography
                        className="header__menu--item"
                        variant="subtitle1"
                    >
                        FAQ
                    </Typography>
                    <Typography
                        className="header__menu--item"
                        variant="subtitle1"
                    >
                        TR/EN
                    </Typography>
                    <Typography
                        className="header__menu--item"
                        variant="subtitle1"
                    >
                        SIGN IN
                    </Typography>
                </Grid>
            </Grid>
        </header>
    );
};

export default Header;
