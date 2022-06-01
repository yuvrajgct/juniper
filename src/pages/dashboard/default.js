import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import {Grid,Divider as MuiDivider,Typography as MuiTypography,} from "@mui/material";
import { height, spacing } from "@mui/system";
import { green, red } from "@mui/material/colors";

import DashboardLayout from "../../layouts/Dashboard";
import UpcomingEvent from "./UpcomingEvent";
import { orange, indigo, teal } from "@mui/material/colors";

import Actions from "../../components/pages/dashboard/default/Actions";
import BarChart from "../../components/pages/dashboard/default/BarChart";
import LineChart from "../../components/pages/dashboard/default/LineChart";
import DoughnutChart from "../../components/pages/dashboard/default/DoughnutChart"
import Stats from "../../components/pages/dashboard/default/Stats";
import Tables from "./Tables";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from "axios";
import Insights from "./Insights";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { margin } from "polished";

// const Divider = styled(MuiDivider)(spacing);+













const Typography = styled(MuiTypography)(spacing);

function Default() {

  const useStyles = makeStyles((theme) => ({
    Grid: {
      width: "100%",
      margin:"10px"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      background: theme.palette.success.light,

    }
  }))

  const { t } = useTranslation();
 
  const classes = useStyles();
  return (
    <React.Fragment>
      
      <Helmet title="Default Dashboard" />
      <Grid
        justifyContent="space-between"
        container >
        <Grid item >
          <Typography variant="h3" >
            Associate dashboard
          <Typography>
            Dashboard <KeyboardArrowRightIcon style={{ marginBottom: "-6" }} />
            Associate
          </Typography>
          </Typography>
        </Grid>
        <Grid item >
          <Actions />
        </Grid>
      </Grid>

     
      <Grid my={4} />
      
   <Grid container spacing={2}  >
        <Grid  xs={12} sm={12} md={6} lg={3} xl>
          <Grid >
            <UpcomingEvent />
          </Grid>
          </Grid> 
        <Grid container xs={12} sm={12} md={6} lg={3} xl >
          <Grid>
            <DoughnutChart />
          </Grid>
          {/* <Tables />   */}
            </Grid>
        <Grid container  xs={12} sm={12} md={6} lg={3} xl >
          <Grid item sx={{height:"250px"}}  >
        <img src="/Box.png"  alt="" />
          </Grid>
        
        </Grid>
       
        <Grid container xs={12} sm={12} md={6} lg={3} xl>
          <Grid item>

            <Insights />
          </Grid>
        </Grid>
      <Grid  container  style={{ height: "250px" }}>
        <Grid item xs={5.5} style={{margin:"10px" }}>
          <LineChart />
        </Grid>
        <Grid item xs={5.5} style={{ backgroundColor: "gray" ,height:"250px" }}>
        
        </Grid>
          </Grid>

    </Grid> 
       
    </React.Fragment>
  );
}

Default.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Default;
