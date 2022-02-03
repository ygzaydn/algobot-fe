import React, { useRef } from "react";

import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { headerText } from "../../constants";

import HeaderMenu from "./headerMenu";
import HeaderMenuItem from "./headerMenuItem";
import HeaderLanguageButton from "./headerLanguageButton";
import LoggedUserIcon from "../loggedUserIcon/loggedUserIcon";
import { isAuth, language } from "../../redux/selectors";

const Header = ({ language, auth }) => {
  const navigate = useNavigate();
  const header = useRef("");

  return (
    <header>
      <Grid container className="header" ref={header}>
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
          {auth && (
            <HeaderMenuItem
              size="desktop"
              text={headerText[language].menuItem4}
              clickFunc={() => navigate("/dashboard/account")}
            />
          )}
          {!auth ? (
            <HeaderMenuItem
              size="desktop"
              text={headerText[language].menuItem3}
              clickFunc={() => navigate("/signin")}
            />
          ) : (
            <LoggedUserIcon />
          )}
        </Grid>
        <Grid item xs={8} className="header__menu--mobile">
          <Grid item xs={4} />
          <Grid item xs={7} justifyContent="center" display="flex">
            <HeaderLanguageButton />
            {auth && <LoggedUserIcon />}
            <HeaderMenu />
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Grid>
    </header>
  );
};

const mapStateToProps = (state) => ({
  language: language(state),
  auth: isAuth(state),
});

export default connect(mapStateToProps, null)(Header);
