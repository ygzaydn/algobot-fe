import React from "react";
import { Typography } from "@mui/material";
import { ActionTypes } from "../../redux/actionTypes";
import { connect } from "react-redux";
import { language } from "../../redux/selectors";

const HeaderLanguageButton = ({
  language,
  changeLanguageToTR,
  changeLanguageToEN,
}) => {
  return (
    <>
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
    </>
  );
};

const mapStateToProps = (state) => ({ language: language(state) });

const mapDispatchToProps = (dispatch) => ({
  changeLanguageToTR: () => dispatch({ type: ActionTypes.SWITCH_LANGUAGE_TR }),
  changeLanguageToEN: () => dispatch({ type: ActionTypes.SWITCH_LANGUAGE_EN }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderLanguageButton);
