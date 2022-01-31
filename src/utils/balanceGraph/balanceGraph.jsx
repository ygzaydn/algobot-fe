import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Grid, Typography } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],

  options: {
    plugins: {
      legend: {
        position: "right",
      },
    },
  },
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
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

const BalanceGraph = () => {
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
        <Typography variant="h6">Balance allocation</Typography>
      </Grid>
      <Doughnut data={data} options={options} />;
    </Grid>
  );
};

export default BalanceGraph;
