import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@mui/material";
import { height, spacing } from "@mui/system";
import { green, red } from "@mui/material/colors";

import DashboardLayout from "../../layouts/Dashboard";
import UpcomingEvent from "./UpcomingEvent";
import { orange, indigo, teal } from "@mui/material/colors";

import Actions from "../../components/pages/dashboard/default/Actions";
import BarChart from "../../components/pages/dashboard/default/BarChart";
import LineChart from "../../components/pages/dashboard/default/LineChart";
import DoughnutChart from "../../components/pages/dashboard/default/DoughnutChart";
import Stats from "../../components/pages/dashboard/default/Stats";
import Tables from "./Tables";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Insights from "./Insights";
import BloodGroupChart from "./BloodGroupChart";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { margin } from "polished";
import BarChart1 from "../../components/pages/dashboard/default/BarChart1";

// const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

function Default() {
  const useStyles = makeStyles((theme) => ({
    Grid: {
      width: "100%",
      margin: "10px",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      background: theme.palette.success.light,
    },
  }));

  const { t } = useTranslation();

  const classes = useStyles();
  return (
    <Grid
      sx={12}
      sm={12}
      md={12}
      lg={12}
      justifyContent="space-between"
      container
    >
      <Helmet title="Default Dashboard" />

      <Typography variant="h3">
        Associate dashboard
        <Typography>
          Dashboard <KeyboardArrowRightIcon />
          Associate
        </Typography>
      </Typography>

      <Grid item>
        <Actions />
      </Grid>

      <Grid my={8} />

      <Grid container lg={12} spacing={2}>
        <Grid item xs={12} md={3} sm={3} lg={3}>
          <UpcomingEvent />
        </Grid>

        <Grid container spacing={2} lg={9}>
          <Grid item lg={3} sm={3} xs={12}>
            <DoughnutChart />
          </Grid>
          <Grid item lg={6} sm={3} xs={12}>
            <img src="/Box.png" />
          </Grid>
          <Grid item lg={3} sm={3} xs={12}>
            <Insights />
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xs={12}
            // style={{ marginLeft: 298, marginTop: -210 }}
          >
            <LineChart />
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xs={12}
            // style={{ marginLeft: 750, marginTop: -250 }}
          >
            <BarChart />
          </Grid>
          {/* </Grid> */}
        </Grid>
        <Grid item xs={6} sm={6} lg={3} spacing={2} style={{ maxWidth: 250 }}>
          {" "}
          <Tables />
        </Grid>
        <Grid item xs={6} sm={6} lg={3} spacing={2} style={{ maxWidth: 250 }}>
          {" "}
          <BloodGroupChart />
        </Grid>
        <Grid item xs={6} sm={6} lg={2.4}></Grid>
        <Grid item xs={6} sm={5.5} lg={4.5}>
          {" "}
          <BarChart1 />
        </Grid>
      </Grid>
    </Grid>
  );
}

Default.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Default;
