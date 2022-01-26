import React from "react";
import { Typography } from "@mui/material";

const HeaderMenuItem = ({ text, clickFunc, size, status }) => {
    let classes = "";

    if (size === "desktop") {
        classes += "header__menu--item ";
    } else if (size === "mobile") {
        classes += "header__menu--item--mobile ";
    }
    if (status === "active") {
        classes += "header__menu--item--active ";
    }

    return (
        <Typography
            className={classes}
            variant="subtitle1"
            onClick={() => clickFunc()}
        >
            {text}
        </Typography>
    );
};

export default HeaderMenuItem;
