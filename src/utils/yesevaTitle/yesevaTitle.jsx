import React from "react";
import { Typography } from "@mui/material";

const YesevaTitle = ({ text }) => {
    return (
        <Typography variant="h4" className="homepage__stats--title">
            {text}
        </Typography>
    );
};

export default YesevaTitle;
