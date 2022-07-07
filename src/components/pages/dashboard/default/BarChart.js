import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import Chart from "react-chartjs-2";
import { MoreVertical } from "react-feather";
import { important, rgba } from "polished";
import axios from "axios";
import {
  Typography,
  Card as MuiCard,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import { spacing } from "@mui/system";
import { teal, indigo, orange } from "@mui/material/colors";
import { ForkRight, RampLeft } from "@mui/icons-material";
import { getListAssociat } from "../../../../Api/api";

const Card = styled(MuiCard)(spacing);
const ChartWrapper = styled.div`
  height: 150px;
  width: 350px;
`;
const lable = styled.h5`
  position: absolute;
  width: 73px;
  height: 16px;
  left: 223px;
  top: 190px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: #494949;
`;
const BarChart = ({ theme }) => {
  const [status, setStatus] = React.useState([]);

  const firstDatasetColor = theme.palette.secondary.main;
  const secondDatasetColor = rgba(theme.palette.secondary.main, 0.33);

  const [value, setValue] = React.useState([]);

  // ------------------------Api  start -------------------------
  React.useEffect(() => {
    getAllListAssociatSalaryRatio();
  }, []);

  const getAllListAssociatSalaryRatio = async () => {
    console.log("0000****1");
    const response = await getListAssociat({ org_id: 1 });
    console.log("data****", response);
    if (response.status === 200) {
      if (response.data && response.data != undefined) {
        // setValue(response.data);
        console.log("0000****", response.data);
      }
    } else {
    }
  };
  // console.log("0000****");
  // -------------------------Api  end-----------------------------

  // const data = {
  //   labels: [],
  //   datasets: [
  //     {
  //       label: "Age",
  //       backgroundColor: firstDatasetColor,
  //       borderColor: firstDatasetColor,
  //       hoverBackgroundColor: firstDatasetColor,
  //       hoverBorderColor: firstDatasetColor,
  //       data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
  //       barPercentage: 0.5,
  //       categoryPercentage: 1.0,
  //     },
  //     {
  //       label: "CTC",
  //       backgroundColor: firstDatasetColor,
  //       borderColor: firstDatasetColor,
  //       hoverBackgroundColor: firstDatasetColor,
  //       hoverBorderColor: firstDatasetColor,
  //       data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
  //       barPercentage: 0.5,
  //       categoryPercentage: 1.0,
  //     },
  //   ],
  // };

  const data = {
    labels: ["18-27", "28-37", "38-47", "48-57", "58-67", "68-77", "78-90"],
    datasets: [
      {
        label: "CTC",
        backgroundColor: indigo[500],
        borderColor: indigo[500],
        hoverBackgroundColor: indigo[500],
        hoverBorderColor: indigo[500],
        data: [
          // value[0].Female ? value[0].Female : 0,
          // value2[0].Female ? value2[0].Female : 0,
          // value3[0].Female ? value3[0].Female : 0,
          // value4[0].Female ? value4[0].Female : 0,
          // value5[0].Female ? value5[0].Female : 0,
          // value6[0].Female ? value6[0].Female : 0,
          // value7[0].Female ? value7[0].Female : 0,
          54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79,
        ],
        barPercentage: 1.0,
        // height: 300,
        categoryPercentage: 0.5,
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
      y: {
        grid: {
          display: false,
          // tooltip: {
          // y: {
          //     formatter: function (val) {
          //       return val + "K";
          //     },
          // },
        },
        // stacked: true,
        ticks: {
          formatter: function (val) {
            //       return val + "K";
          },
        },
        //   stepSize: 20,
        //   fontColor: theme.palette.text.secondary,
      },
      // },

      x: {
        stacked: true,
        grid: {
          color: "transparent",
        },
        // ticks: {
        //   fontColor: theme.palette.text.secondary,
        // },
      },
    },
  };

  return (
    <Card
      mb={6}
      sx={{
        position: "absolute",
        width: "452px",
        height: "220px",
        left: "1010px",
        top: "368px",

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
      <CardContent sx={{ marginTop: "-30px" }}>
        <ChartWrapper>
          <Chart type="bar" data={data} options={options} />
          <Typography
            variant="h5"
            style={{ textAlign: "center", position: "relative" }}
          >
            Age (Years)
          </Typography>
        </ChartWrapper>
      </CardContent>
      <Typography
        sx={{
          position: "absolute",
          // writingMode: "ertical-rl",
          transform: "rotate(-90deg)",
          // marginRight: "700px",
          marginLeft: "-55px",
          marginTop: "-130px",
          // marginTop: "100px",
          // textAlign: "center",
          // float: "bottom",
        }}
      >
        Avg. Annual CTC (₹)
      </Typography>
    </Card>
  );
};

export default withTheme(BarChart);
