import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import Chart from "react-chartjs-2";
import { MoreVertical } from "react-feather";

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
  height: 350px;
  height: 150px;
  width: 400px;

  // margin: 50px;
`;

function LineChart({ theme }) {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");

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
        // "Jun",
        // "Jul",
        // "Aug",
        // "Sep",
        // "Oct",
        // "Nov",
        // "Dec",
      ],
      datasets: [
        {
          label: "Sales ($)",
          fill: true,
          backgroundColor: gradient,
          borderColor: theme.palette.secondary.main,

          tension: 0.4,
          data: [20, 40, 60, 70, 80, 90],
        },
        // {
        //   label: "Orders",
        //   fill: true,
        //   backgroundColor: "transparent",
        //   // borderColor: theme.palett1e.grey[500],
        //   borderDash: [4, 4],
        //   tension: 0.4,
        //   data: [
        //     958, 724, 629, 883, 915, 1214, 1476, 1212, 1554, 2128, 1466, 1827,
        //   ],
        // },
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
      <CardContent>
        <ChartWrapper>
          <Chart type="line" data={data} options={options} />
        </ChartWrapper>
      </CardContent>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        {" "}
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
