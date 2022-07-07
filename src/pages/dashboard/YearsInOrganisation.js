import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import dynamic from "next/dynamic";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CardContent, Card as MuiCard, Typography } from "@mui/material";
import { spacing } from "@mui/system";
import { teal, grey, orange, indigo } from "@mui/material/colors";
import { NoEncryption } from "@mui/icons-material";
import { getListAssociatByYear } from "../../Api/api";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
  height: 120px;
  width: 100%;
`;

const BarChart = () => {
  const [WorkExperince, setWorkExperince] = useState("");
  const [TotalCount, setTotalCount] = useState("");
  const [chartData, setChartData] = useState({});
  const ids = { org_id: 1 };

  // ----------------Api implimentation-----------------------------

  useEffect(() => {
    getAllListAssociatByYear();
  }, []);

  const getAllListAssociatByYear = async () => {
    const response = await getListAssociatByYear({ org_id: 1 });
    // console.log("data****", response);
    if (response.status === 200) {
      if (response.data.length && response.data != undefined) {
        setChartData(response.data);
      }
    }
  };
  // console.log("chartData", chartData);
  // -------------------------------------end --------------------------

  const data = [
    {
      name: "> 2 Years",
      data: [],
    },
    {
      name: "> 4 Years",
      data: [],
    },
    {
      name: "> 8 Years",
      data: [],
    },
    {
      name: "> 10 Years",
      data: [],
    },
  ];
  const datas = [
    { WorkExperince: "The Experince is above 8", TotalCount: "7" },
    { WorkExperince: "The Experince is less than 2", TotalCount: "11" },
    { WorkExperince: "The Experince is less than 4", TotalCount: "1" },
  ];
  const [first, setfirst] = React.useState(datas);
  // React.useEffect(async () => {
  datas.map((item, index) => {
    switch (item.WorkExperince) {
      case "The Experince is above 8":
        item.TotalCount && data[0].data.push(item.TotalCount);
        break;
      // case "The Experince is above 2":
      //   item.TotalCount && data[].data.push(item.TotalCount);
      //   break;
      // case "The Experince is above 2":
      //   item.TotalCount && data[].data.push(item.TotalCount);
      //   break;
      case "The Experince is less than 2":
        item.TotalCount && data[2].data.push(item.TotalCount);
        break;
      case "The Experince is less than 4":
        item.TotalCount && data[3].data.push(item.TotalCount);
        break;
    }
  });
  console.log(data);
  // }, []);
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
    // stroke: {
    //   width: 0,
    //   colors: ["#fff"],
    // },
    xaxis: {
      labels: {
        show: false,
      },
      categories: [""],
    },
    yaxis: {
      show: false,
    },
    // tooltip: {
    //   y: {
    //     //   formatter: function (val) {
    //     //     return val + "K";
    //     //   },
    //   },
    // },
    fill: {
      // opacity: 1,
    },
    legend: {
      show: false,
      position: "top",
      // horizontalAlign: "left",
      // offsetX: 40,
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
        <div>
          <ChartWrapper>
            <Chart
              options={options}
              series={data}
              type="bar"
              height="100"

              // style={{
              //   border: "1px solid red",
              // }}
            />
          </ChartWrapper>
        </div>
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
          <ArrowForwardIosIcon
            sx={{
              fontSize: "small",
              position: "absolute",
              right: "40px",
            }}
          />
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
          <ArrowForwardIosIcon
            sx={{
              fontSize: "small",
              position: "absolute",
              right: "40px",
            }}
          />
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
          <ArrowForwardIosIcon
            sx={{
              fontSize: "small",
              position: "absolute",
              right: "40px",
            }}
          />
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
          <ArrowForwardIosIcon
            sx={{
              fontSize: "small",
              position: "absolute",
              right: "40px",
            }}
          />
          8yrs
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withTheme(BarChart);
