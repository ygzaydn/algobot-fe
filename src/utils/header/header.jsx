import React, { useState } from "react";

import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { headerText } from "../../constants";

import "../../style/main.scss";
import { ActionTypes } from "../../redux/actionTypes";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = ({ language, changeLanguageToTR, changeLanguageToEN }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                        onClick={() => navigate("#faq")}
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
                        onClick={() => navigate("/signin")}
                    >
                        {headerText[language].menuItem3}
                    </Typography>
                </Grid>
                <Grid item xs={8} className="header__menu--mobile">
                    <Grid item xs={4} />
                    <Grid item xs={7} justify="center" display="flex">
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
                        <MenuIcon
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            className="header__menu--item"
                        />
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    borderRadius: 20,
                                    border: "1px solid white",
                                },
                            }}
                            MenuListProps={{
                                style: {
                                    borderBottom: "0.1px solid lightgray",
                                    "aria-labelledby": "basic-button",
                                },
                            }}
                        >
                            <MenuItem
                                onClick={handleClose}
                                className="header__menu--item"
                            >
                                <Typography
                                    className="header__menu--active header__menu--item--mobile"
                                    variant="subtitle1"
                                    onClick={() => navigate("/")}
                                >
                                    {headerText[language].menuItem1}
                                </Typography>
                            </MenuItem>
                            <MenuItem
                                onClick={handleClose}
                                className="header__menu--item"
                            >
                                <Typography
                                    className="header__menu--item header__menu--item--mobile"
                                    variant="subtitle1"
                                    onClick={() => navigate("#faq")}
                                >
                                    {headerText[language].menuItem2}
                                </Typography>
                            </MenuItem>
                            <MenuItem
                                onClick={handleClose}
                                className="header__menu--item header__menu--item--mobile"
                            >
                                <Typography
                                    className="header__menu--item"
                                    variant="subtitle1"
                                    onClick={() => navigate("/signin")}
                                >
                                    {headerText[language].menuItem3}
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Grid>
                    <Grid item xs={1} />
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
