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

import { getGenderRatio } from "../../../../Api/api";

const Card = styled(MuiCard)(spacing);
const ChartWrapper = styled.div`
  height: 150px;
  width: 400px;
`;

const BarChart1 = ({ theme }) => {
  // const firstDatasetColor = teal[500];
  // const secondDatasetColor = teal[500];

  const [value, setValue] = React.useState([
    {
      Female: "",
      Male: "",
      Other: "",
    },
  ]);
  const [value2, setValue2] = React.useState([
    {
      Female: "",
      Male: "",
      Other: "",
    },
  ]);
  const [value3, setValue3] = React.useState([
    {
      Female: "",
      Male: "",
      Other: "",
    },
  ]);
  const [value4, setValue4] = React.useState([
    {
      Female: "",
      Male: "",
      Other: "",
    },
  ]);
  const [value5, setValue5] = React.useState([
    {
      Female: "",
      Male: "",
      Other: "",
    },
  ]);
  const [value6, setValue6] = React.useState([
    {
      Female: "",
      Male: "",
      Other: "",
    },
  ]);
  const [value7, setValue7] = React.useState([
    {
      Female: "",
      Male: "",
      Other: "",
    },
  ]);

  React.useEffect(() => {
    getAllGenderRatioList();
  }, []);

  const getAllGenderRatioList = async () => {
    const response = await getGenderRatio({ org_id: 1 });
    // console.log("data****", response);
    if (response.status === 200) {
      if (response.data && response.data != undefined) {
        response.data.map((data) => {
          if (data.AgeBracket == "18-27") {
            // const obj = {
            //   Female: data.Female,
            //   Male: data.Male,
            //   Other: data.Other,
            // };
            // setValue([obj]);
            setValue([data]);
          } else if (data.AgeBracket == "28-37") {
            setValue2([data]);
          } else if (data.AgeBracket == "38-47") {
            setValue3([data]);
          } else if (data.AgeBracket == "48-57") {
            setValue4([data]);
          } else if (data.AgeBracket == "58-67") {
            setValue5([data]);
          } else if (data.AgeBracket == "68-77") {
            setValue6([data]);
          } else if (data.AgeBracket == "78-90") {
            setValue7([data]);
          } else {
          }
        });

        // console.log("data****", response.data);
      }
    } else {
    }
  };

  // console.log("value ****", value);
  console.log("value2 ****", value2);
  // console.log("value3 ****", value3);
  // console.log("value4 ****", value4);
  // console.log("value5 ****", value5);
  // console.log("value6 ****", value6);
  console.log("value7 ****", value7);

  const data = {
    // labels: ["18-27", "28-37", "38-47", "48-57", "58-67", "68-77", "78-90"],
    labels: [
      value[0].Female > 0 || value[0].Male > 0 || value[0].Other > 0
        ? "18-27"
        : "",
      value2[0].Female > 0 || value2[0].Male > 0 || value2[0].Other > 0
        ? "28-37"
        : "",
      value3[0].Female > 0 || value3[0].Male > 0 || value3[0].Other > 0
        ? "38-47"
        : "",
      value4[0].Female > 0 || value4[0].Male > 0 || value4[0].Other > 0
        ? "48-57"
        : "",
      value5[0].Female > 0 || value5[0].Male > 0 || value5[0].Other > 0
        ? "58-67"
        : "",
      value6[0].Female > 0 || value6[0].Male > 0 || value6[0].Other > 0
        ? "68-77"
        : "",
      value7[0].Female > 0 || value7[0].Male > 0 || value7[0].Other > 0
        ? "78-90"
        : "",
    ],
    datasets: [
      {
        label: "Female",
        backgroundColor: indigo[500],
        borderColor: indigo[500],
        hoverBackgroundColor: indigo[500],
        hoverBorderColor: indigo[500],
        data: [
          value[0].Female ? value[0].Female : 0,
          value2[0].Female ? value2[0].Female : 0,
          value3[0].Female ? value3[0].Female : 0,
          value4[0].Female ? value4[0].Female : 0,
          value5[0].Female ? value5[0].Female : 0,
          value6[0].Female ? value6[0].Female : 0,
          value7[0].Female ? value7[0].Female : 0,
        ],
        barPercentage: 1.0,
        // height: 300,
        categoryPercentage: 0.5,
      },
      {
        label: "male",
        backgroundColor: teal[500],
        borderColor: teal[500],
        hoverBackgroundColor: teal[500],
        hoverBorderColor: teal[500],
        data: [
          value[0].Male ? value[0].Male : 0,
          value2[0].Male ? value2[0].Male : 0,
          value3[0].Male ? value3[0].Male : 0,
          value4[0].Male ? value4[0].Male : 0,
          value5[0].Male ? value5[0].Male : 0,
          value6[0].Male ? value6[0].Male : 0,
          value7[0].Male ? value7[0].Male : 0,
        ],
        // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        barPercentage: 0.5,
        categoryPercentage: 1.0,
        borderRadius: 0,
      },
      {
        label: "other",
        backgroundColor: orange[500],
        borderColor: orange[500],
        hoverBackgroundColor: orange[500],
        hoverBorderColor: orange[500],
        data: [
          value[0].Other ? value[0].Other : 0,
          value2[0].Other ? value2[0].Other : 0,
          value3[0].Other ? value3[0].Other : 0,
          value4[0].Other ? value4[0].Other : 0,
          value5[0].Other ? value5[0].Other : 0,
          value6[0].Other ? value6[0].Other : 0,
          value7[0].Other ? value7[0].Other : 0,
        ],
        // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        barPercentage: 0.5,
        categoryPercentage: 1.0,
        borderRadius: 0,
      },
    ],
  };

  console.log();

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
      mb={6}
      sx={{
        position: "absolute",
        width: "452px",
        height: "216px",
        left: "1010px",
        top: "604px",

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
      <CardContent sx={{ marginTop: "-40px" }}>
        <ChartWrapper>
          <Chart type="bar" data={data} options={options} />
        </ChartWrapper>
      </CardContent>
      <Typography
        variant="h5"
        style={{
          textAlign: "center",
          position: "relative",
        }}
      >
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
