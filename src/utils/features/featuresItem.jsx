import React from "react";
import { Grid, Typography } from "@mui/material";

const FeaturesItem = ({ info }) => {
    return (
        <Grid container className="homepage__features__box">
            <img
                src={require(`../../assets/logos/${info.iconName}.svg`)}
                alt={`${info.iconName}`}
                className="homepage__features__box--image"
            />
            <Grid item className="homepage__features__box--grid">
                <Grid item xs={12}>
                    <Typography
                        variant="h6"
                        className="homepage__features__box--name"
                    >
                        {info.name}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        variant="subtitle1"
                        className="homepage__features__box--description"
                    >
                        {info.description}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default FeaturesItem;
