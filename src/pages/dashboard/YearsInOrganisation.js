import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import dynamic from "next/dynamic";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CardContent, Card as MuiCard, Typography } from "@mui/material";
import { spacing } from "@mui/system";
import { teal, grey, orange, indigo } from "@mui/material/colors";
import { NoEncryption } from "@mui/icons-material";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);
const YearsOf = styled.h6`
  position: absolute;
  width: 236px;
  height: 16px;
  left: 20px;
  top: 20px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  color: #494949;
`;
const Typo = styled.small`
  position: absolute;
  width: 38px;
  height: 16px;
  left: 99px;
  top: 126px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;

  color: #494949;
`;

const ChartWrapper = styled.div`
  height: 130px;
  width: 100%;
`;

const BarChart = () => {
  const data = [
    {
      name: "> 2 Years",
      data: [10],
    },
    {
      name: "> 4 Years",
      data: [12],
    },
    {
      name: "> 8 Years",
      data: [5],
    },
    {
      name: "> 10 Years",
      data: [11],
    },
  ];

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
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
      colors: ["#fff"],
    },
    xaxis: {
      labels: {
        show: false,
      },
      categories: [""],
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      y: {
        //   formatter: function (val) {
        //     return val + "K";
        //   },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
      offsetX: 40,
    },
    colors: [indigo[500], orange[500], teal[500], grey[900]],
  };

  return (
    <Card
      sx={{
        position: "absolute",
        width: "452px",
        height: "216px",
        left: "760px",
        top: "132px",

        background: "#FFFFFF",
        borderRadius: "10px",
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Years In Organisation
        </Typography>

        <Spacer mb={6} />

        <ChartWrapper>
          <Chart options={options} series={data} type="bar" height="120" />
        </ChartWrapper>
        <Typography
          sx={{
            position: "absolute",
            width: "38px",
            height: "16px",
            left: "115px",
            top: " 156px",

            fontFamily: "Roboto",
            fontStyle: " normal",
            fontWeight: "400",
            fontSize: " 14px",
            lineHeight: "16px",
            textAslign: "right",

            color: "#494949",
          }}
        >
          {" "}
          2yrs
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            width: "38px",
            height: "16px",
            left: "200px",
            top: " 156px",

            fontFamily: "Roboto",
            fontStyle: " normal",
            fontWeight: "400",
            fontSize: " 14px",
            lineHeight: "16px",
            textAslign: "right",

            color: "#494949",
          }}
        >
          4yrs
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            width: "38px",
            height: "16px",
            left: "300px",
            top: " 156px",

            fontFamily: "Roboto",
            fontStyle: " normal",
            fontWeight: "400",
            fontSize: " 14px",
            lineHeight: "16px",
            textAslign: "right",

            color: "#494949",
          }}
        >
          6yrs
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            width: "38px",
            height: "16px",
            left: "400px",
            top: " 156px",

            fontFamily: "Roboto",
            fontStyle: " normal",
            fontWeight: "400",
            fontSize: " 14px",
            lineHeight: "16px",
            textAslign: "right",

            color: "#494949",
          }}
        >
          8yrs
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withTheme(BarChart);
