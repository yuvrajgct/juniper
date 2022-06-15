import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import Chart from "react-chartjs-2";
import { MoreVertical } from "react-feather";
import { important, rgba } from "polished";

import {
  Typography,
  Card as MuiCard,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import { spacing } from "@mui/system";
import { teal, indigo, orange } from "@mui/material/colors";
import { RampLeft } from "@mui/icons-material";

const Card = styled(MuiCard)(spacing);
const ChartWrapper = styled.div`
  height: 150px;
  width: 400px;
`;

const BarChart1 = ({ theme }) => {
  // const firstDatasetColor = teal[500];
  // const secondDatasetColor = teal[500];

  const data = {
    labels: [">2yrs", ">4yrs", ">6yrs", ">8yrs"],
    datasets: [
      {
        label: ">2years",
        backgroundColor: indigo[500],
        borderColor: indigo[500],
        hoverBackgroundColor: indigo[500],
        hoverBorderColor: indigo[500],
        data: [54],
        barPercentage: 1.0,
        transform: "rotate(-90deg)",
        // height: 300,
        categoryPercentage: 0.5,
      },
      {
        label: ">4years",
        backgroundColor: teal[500],
        borderColor: teal[500],
        hoverBackgroundColor: teal[500],
        hoverBorderColor: teal[500],
        data: [69],
        barPercentage: 0.5,
        categoryPercentage: 1.0,
        borderRadius: 0,
        transform: "rotate(-90deg)",
      },
      {
        label: ">6years",
        backgroundColor: orange[500],
        borderColor: orange[500],
        hoverBackgroundColor: orange[500],
        hoverBorderColor: orange[500],
        data: [69],
        barPercentage: 0.5,
        categoryPercentage: 1.0,
        borderRadius: 0,
        transform: "rotate(-90deg)",
      },
      {
        label: ">8years",
        backgroundColor: indigo[500],
        borderColor: indigo[500],
        hoverBackgroundColor: indigo[500],
        hoverBorderColor: indigo[500],
        data: [54],
        barPercentage: 1.0,
        // height: 300,
        categoryPercentage: 0.5,
        transform: "rotate(-90deg)",
      },
    ],
  };

  const options = {
    chart: {
      toolbar: {
        show: true,
      },
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 0,
      colors: ["#fff"],
    },
    xaxis: {
      categories: [""],
    },
    yaxis: {
      show: false,
    },
    // tooltip: {
    // y: {
    //   formatter: function (val) {
    //     return val + "K";
    //   },
    // },
    // },
    fill: {
      opacity: 1,
    },
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
      offsetX: 40,
    },
  };
  // const options = {
  //   maintainAspectRatio: false,
  //   chart: {
  //     toolbar: {
  //       show: true,
  //     },
  //     stacked: true,
  //   },
  //   plotOptions: {
  //     bar: {
  //       horizontal: false,
  //     },
  //   },
  //   plugins: {
  //     legend: {
  //       display: false,
  //     },
  //   },
  //   scales: {
  //     y: {
  //       grid: {
  //         display: false,
  //       },
  //       stacked: true,
  //       ticks: {
  //         stepSize: 20,
  //         fontColor: theme.palette.text.secondary,
  //       },
  //     },

  //     x: {
  //       stacked: true,
  //       grid: {
  //         color: "transparent",
  //       },
  //       ticks: {
  //         fontColor: theme.palette.text.secondary,
  //       },
  //     },
  //   },
  // };

  return (
    <Card
      mb={6}
      sx={{
        position: "absolute",
        width: "452px",
        height: "216px",
        left: "1010px",
        top: "800px",

        background: "#FFFFFF",
        borderRadius: "10px",
      }}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings" size="large">
            <MoreVertical />
          </IconButton>
        }
        // title="Associates(in hundreds)"
      />
      <CardContent>
        <ChartWrapper>
          <Chart type="bar" data={data} options={options} />
        </ChartWrapper>
      </CardContent>
      <Typography
        variant="h5"
        style={{ textAlign: "center", position: "relative" }}
      >
        {" "}
        Age(years)
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          // writingMode: "ertical-rl",
          transform: "rotate(-90deg)",
          // marginRight: "700px",
          marginLeft: "-65px",
          marginTop: "-130px",
          // marginTop: "100px",
          // textAlign: "center",
          // float: "bottom",
        }}
      >
        Associates(in hundreds)
      </Typography>
    </Card>
  );
};

export default withTheme(BarChart1);
