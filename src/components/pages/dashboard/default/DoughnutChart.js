import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import Chart from "react-chartjs-2";
import { MoreVertical } from "react-feather";

import { orange, indigo, teal } from "@mui/material/colors";
import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  IconButton,
  Table,
  TableBody,
  TableCell as MuiTableCell,
  TableHead,
  TableRow as MuiTableRow,
  Typography,
} from "@mui/material";
import { maxWidth, spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const ChartWrapper = styled.div`
  height: 168px;
  position: relative;
`;

const DoughnutInner = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -22px;
  text-align: center;
  z-index: 0;
`;

const TableRow = styled(MuiTableRow)`
  height: 42px;
`;

const TableCell = styled(MuiTableCell)`
  padding-top: 0;
  padding-bottom: 0;
`;

const GreenText = styled.span`
  color: ${() => green[400]};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

const RedText = styled.span`
  color: ${() => red[400]};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

const DoughnutChart = () => {
  const data = {
    labels: ["Males", "Females", "Other"],
    datasets: [
      {
        data: [70, 20, 10],
        backgroundColor: [teal[500], indigo[500], orange[500]],
        borderWidth: 0,
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
    cutout: "80%",
  };

  return (
    <Card mb={6} sx={{ maxWidth: "250px" }}>
      <CardHeader
        action={
          // <IconButton aria-label="settings" variant="h5">
          //   <MoreVertical />
          // </IconButton>
          <Typography variant="h6" style={{ marginRight: "50" }}>
            {" "}
            10% other
          </Typography>
        }
        title="20% Females"
      />

      <CardContent>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* <Typography variant="h6" style={{ marginRight: "50" }}>
            20% Female
          </Typography>
          <Typography variant="h6" style={{ marginRight: "50" }}>
            10% other
          </Typography> */}
        </div>
        <ChartWrapper>
          <DoughnutInner>
            <Typography variant="h5">Assosiete</Typography>
            <Typography variant="h2">207</Typography>
          </DoughnutInner>
          <Chart type="doughnut" data={data} options={options} />
        </ChartWrapper>
        <Typography variant="h6" style={{ marginLeft: "50" }}>
          {" "}
          70% Males
        </Typography>
        {/* <Table>
          <TableHead>
            <TableRow>
              <TableCell>Source</TableCell>
              <TableCell align="right">Revenue</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Social
              </TableCell>
              <TableCell align="right">260</TableCell>
              <TableCell align="right">
                <GreenText>+35%</GreenText>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Search Engines
              </TableCell>
              <TableCell align="right">125</TableCell>
              <TableCell align="right">
                <RedText>-12%</RedText>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Direct
              </TableCell>
              <TableCell align="right">54</TableCell>
              <TableCell align="right">
                <GreenText>+46%</GreenText>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Other
              </TableCell>
              <TableCell align="right">146</TableCell>
              <TableCell align="right">
                <GreenText>+24%</GreenText>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table> */}
      </CardContent>
    </Card>
  );
};

export default DoughnutChart;
