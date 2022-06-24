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
import YearsInOrganisation from "./YearsInOrganisation"
import StackBarCharts from "../../components/pages/dashboard/default/StackBarCharts";
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

  // const postURL = "https://mis-sandbox.bluone.in/services/associate/get-gender";
  // const bodyData = {
  //   org_id: "1",
  // };
  // const option = {
  //   method: "post",
  //   body: JSON.stringify({
  //     org_id: "1",
  //   }),
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  // };

  // fetch(postURL, option)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  return (
    <Grid xs={12}
      justifyContent="space-between"
      container
      style={{ marginTop: "-30px" }}
    >
      <Helmet title="Default Dashboard" />
      <Grid item xs={12} lg={12} >
        <Typography variant="h3">
          Associate dashboard
          <Typography>
            Dashboard <KeyboardArrowRightIcon style={{ marginBottom: "-6" }} />
            Associate
          </Typography>
        </Typography>
      </Grid>
      <Grid item sx={12} lg={12} style={{
        marginLeft: "80%",marginRight:"20%",marginTop:"-4%"
      }}>
        <Actions />
      </Grid>

      <Grid my={8} />
      <Grid container spacing={6}>
        <Grid item lg={2.8} xs={12} md={12}>
          <Paper>
            <UpcomingEvent />{" "}
          </Paper>
        </Grid>
        <Grid container item lg={9} spacing={6}>
          <Grid item lg={3.2} xs={6} md={4} >
            <Paper>
              <DoughnutChart />
            </Paper>
          </Grid>
          <Grid item lg={6} xs={6} md={8}>
            <Paper > 
              <YearsInOrganisation />
            </Paper>
          </Grid>
          <Grid item lg={2.8} xs={6} md={6}>
            <Paper >
              <Insights />
            </Paper>
          </Grid>
          <Grid item lg={6} xs={6} md={6}>
            <Paper >
              <LineChart />
            </Paper>
          </Grid>
          <Grid item lg={6} xs={12} md={12}>
            <Paper>
              <BarChart />
            </Paper>
          </Grid>
        </Grid>
        
      </Grid>
      <Grid container spacing={6} >
        <Grid item lg={3} xs={6} md={6} sx={{
      position: "absolute",
      width: "216px",
      height: "452px",
      left: "280px",
      top: "604px",
      background: "#FFFFFF",
      borderRadius: "10px",
    }}>
          <Paper >
            <Tables />
          </Paper>
          </Grid>
        <Grid item lg={3} xs={6} md={6}>
          <Paper>
            <BloodGroupChart />
          </Paper>
          </Grid>
        <Grid item lg={1.3} xs={4} md={4}>
          <Paper>
            
          </Paper>
          </Grid>
        <Grid item lg={4.5} xs={8} md={8}>
          <Paper>
            <BarChart1 />
          </Paper>
        </Grid>
         {/* <Grid item lg={6} xs={12} md={12}>
            <Paper>
              <StackBarCharts/>
            </Paper>
          </Grid> */}
        {/* <Grid item lg={3} xs={6} md={6}>
          <Paper>
            <Tables />
          </Paper>
          </Grid> */}

        </Grid>
    </Grid>
  );
}

Default.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Default;
