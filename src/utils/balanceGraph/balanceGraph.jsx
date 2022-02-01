import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Grid, Typography } from "@mui/material";

import { connect } from "react-redux";
import { language } from "../../redux/selectors";

import { dashboardText, testPortfolio } from "../../constants";

ChartJS.register(ArcElement, Tooltip, Legend);

const label = testPortfolio.map((el) => el.coin);

export const data = {
  labels: [...label],

  options: {
    plugins: {
      legend: {
        position: "right",
      },
    },
  },
  datasets: [
    {
      data: { ...testPortfolio.map((el) => parseFloat(el.value)) },
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const BalanceGraph = ({ language }) => {
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  };
  return (
    <Grid container className="balancegraph">
      <Grid item xs={12} className="balancegraph__title">
        <Typography variant="h6">
          {dashboardText[language].balanceAllocationTitle}
        </Typography>
      </Grid>
      <Doughnut data={data} options={options} />;
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  language: language(state),
});

export default connect(mapStateToProps, null)(BalanceGraph);
