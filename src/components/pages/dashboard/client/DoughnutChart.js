import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import Chart from "react-chartjs-2";
import { MoreVertical } from "react-feather";

import { orange, green, teal } from "@mui/material/colors";
import {
  Grid,
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
import { maxHeight, spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const ChartWrapper = styled.div`
  height: 120px;
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

const DoughnutChart = ({ theme }) => {
  const data = {
    labels: ["Confirmed", "Prospect", "Others"],
    datasets: [
      {
        data: [81, 49, 10],
        backgroundColor: [theme.palette.secondary.main, teal[500], orange[500]],
        borderWidth: 0,
        borderColor: theme.palette.background.paper,
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
  var cardStyle = {
    height: '200px',
  }
  return (
    <Card mb={6} style={cardStyle}>
      <Grid container spacing={6} ml={1}>
        <Grid item xs={6} sm={6} md={6} lg={6} xl >
          prospects 49
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl>
          others 10
        </Grid>
      </Grid>

      <CardContent>
        <ChartWrapper>
          <DoughnutInner>
            <Typography variant="h5">Clients</Typography>
            <Typography variant="h2">207</Typography>
          </DoughnutInner>
          <Chart type="doughnut" data={data} options={options} />
        </ChartWrapper>
        <Typography mt={6} style={{ marginLeft: "50" }}>
          {" "}
          confirmed 81
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

export default withTheme(DoughnutChart);
