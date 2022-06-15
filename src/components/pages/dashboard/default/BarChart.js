import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import Chart from "react-chartjs-2";
import { MoreVertical } from "react-feather";
import { rgba } from "polished";

import {
  Typography,
  Card as MuiCard,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const ChartWrapper = styled.div`
  height: 150px;
  width: 400px;
`;

const BarChart = ({ theme }) => {
  const firstDatasetColor = theme.palette.secondary.main;
  const secondDatasetColor = rgba(theme.palette.secondary.main, 0.33);

  const data = {
    labels: ["20-30", "30-40", "40-50", "50-60", "60-70", "70-80", "80-90"],

    datasets: [
      {
        label: "age",
        backgroundColor: firstDatasetColor,
        borderColor: firstDatasetColor,
        hoverBackgroundColor: firstDatasetColor,
        hoverBorderColor: firstDatasetColor,
        data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
        barPercentage: 1.0,
        // height: 300,
        categoryPercentage: 0.5,
      },
      {
        label: "CTC",
        backgroundColor: secondDatasetColor,
        borderColor: secondDatasetColor,
        hoverBackgroundColor: secondDatasetColor,
        hoverBorderColor: secondDatasetColor,
        data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
        barPercentage: 0.5,
        categoryPercentage: 0.0,
        borderRadius: 0,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      categories: {
        // formatter: function (val) {
        //   return val + "K";
        // },
      },
      y: {
        grid: {
          display: false,
        },
        stacked: true,
        ticks: {
          stepSize: 20,
          fontColor: theme.palette.text.secondary,
        },
      },

      x: {
        stacked: true,
        grid: {
          color: "transparent",
        },
        ticks: {
          fontColor: theme.palette.text.secondary,
        },
      },
    },
  };

  return (
    <Card
      // mb={6}
      sx={{
        position: "absolute",
        width: "452px",
        height: "216px",
        left: "1010px",
        top: "368px",
        background: "#FFFFFF",
        borderadius: "10px",
      }}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings" size="large">
            <MoreVertical />
          </IconButton>
        }
        // title="Avg.Annual CTC"
      />

      <CardContent>
        <ChartWrapper>
          <Chart type="bar" data={data} options={options} />
        </ChartWrapper>
      </CardContent>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        {" "}
        Age(years)
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          // writingMode: "ertical-rl",
          transform: "rotate(-90deg)",
          // marginRight: "700px",
          marginLeft: "-40px",
          marginTop: "-130px",
          // marginTop: "100px",
          // textAlign: "center",
          // float: "bottom",
        }}
      >
        Avg.Annual CTC
      </Typography>
    </Card>
  );
};

export default withTheme(BarChart);
