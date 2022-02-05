import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const StatsItem = ({ info }) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = (visibility) => {
    setVisibility(visibility);
  };

  return (
    <Grid item xs={6} md={3} className="homepage__stats__box">
      <VisibilitySensor onChange={onChange} active={!isVisible}>
        <Grid
          item
          xs={12}
          offset={{ bottom: 200 }}
          style={{ minHeight: "6rem" }}
        >
          {isVisible && (
            <CountUp
              className="homepage__stats__box--stats"
              end={info.value}
              duration={3}
              suffix={info.unit === "%" ? "%" : ""}
            />
          )}
        </Grid>
      </VisibilitySensor>

      <Grid item xs={12}>
        <Typography variant="subtitle1" className="homepage__stats__box--name">
          {info.name}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default StatsItem;
