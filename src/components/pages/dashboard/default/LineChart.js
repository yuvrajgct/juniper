import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import Chart from "react-chartjs-2";
import { MoreVertical } from "react-feather";
import { getListAssociatByMonth } from "../../../../Api/api";

import {
  Typography,
  Card as MuiCard,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import { spacing } from "@mui/system";
import { alpha } from "@mui/material/styles";

const Card = styled(MuiCard)(spacing);

const ChartWrapper = styled.div`
  height: 330px;
  height: 150px;
  width: 400px;
  // marginleft: -20px;
  // marginbottom: 50px;
`;

function LineChart({ theme }) {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    let salesData = [
      958, 724, 629, 883, 915, 1214, 1476, 1212, 1554, 2128, 1466, 1827,
    ];
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, alpha(theme.palette.secondary.main, 0.0875));
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        // "Jul",
        // "Aug",
        // "Sep",
        // "Oct",
        // "Nov",
        // "Dec",
      ],
      datasets: [
        {
          // label: "JoiningMonth",
          fill: true,
          backgroundColor: gradient,
          // borderColor: theme.palette.secondary.main,

          tension: 0.4,
          data: [20, 40, 60, 70, 80, 90],
        },
        {
          // label: { joiningTotalCount: value.joiningTotalCount },
          fill: true,
          backgroundColor: "transparent",
          borderColor: theme.palette.secondary.main,
          borderDash: [4, 4],
          tension: 0.4,
          data: [0, 100, 500, 400, 300, 200],
        },
      ],
    };
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(0,0,0,0.0)",
        },
      },
      y: {
        grid: {
          color: "rgba(0,0,0,0.0375)",
          fontColor: "#fff",
        },
      },
    },
  };

  // const [value, setValue] = useState([]);
  const [associate, setAssociate] = useState("");
  const [leave, setLeave] = useState("");
  const [join, setJoin] = useState(0);

  // ------------------------Api  start -------------------------
  React.useEffect(() => {
    getAllListAssociatByMonth();
  }, []);

  const getAllListAssociatByMonth = async () => {
    const response = await getListAssociatByMonth({ org_id: 1 });
    console.log("data****", response);
    if (response.status === 200) {
      if (response.countdata) {
        // setAssociate(response.countdata);
      }
      // setLeave(response?.JoiningData[0]?.joiningTotalCount);
      const count = 0;
      response.relievingData &&
        response.relievingData.map(
          (joinCount) =>
            joinCount.RelievingTotalCount &&
            console.log("data,", joinCount.RelievingTotalCount)
        );
    }
  };
  console.log("data linechart****", associate, join, leave);
  // -------------------------Api  end-----------------------------

  return (
    <Card
      sx={{
        position: "absolute",
        width: "465px",
        height: "216px",
        left: "520px",
        top: "368px",
        background: " #FFFFFF",
        borderRadius: "10px",
      }}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings" size="large">
            <MoreVertical />
          </IconButton>
        }
        // title="Associates"
      />
      <CardContent sx={{ marginTop: "-40px" }}>
        <ChartWrapper>
          <Chart type="line" data={data} options={options} />
        </ChartWrapper>
      </CardContent>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        Months
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          // writingMode: "ertical-rl",
          transform: "rotate(-90deg)",
          // marginRight: "700px",
          marginLeft: "-30px",
          marginTop: "-130px",
          // marginTop: "100px",
          // textAlign: "center",
          // float: "bottom",
        }}
      >
        Associates
      </Typography>
    </Card>
  );
}
export default withTheme(LineChart);
