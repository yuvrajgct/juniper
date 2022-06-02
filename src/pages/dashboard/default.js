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
import BloodGroupChart from "./BloodGroupChart";
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
    <div>
      
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
      
      <Grid container style={{ maxHeight: 500 }}>
        <Grid item xs={12} md={3} sm={3} lg={4} xl ><UpcomingEvent /></Grid> 
      
        {/* <Grid container rowSpacing={1} columnSpacing={{xs:1,sm:2,lg:3}} style={{maxHeight : 250}}> */}
        {/* <Grid container > */}
          <Grid item xs={12} md={3} sm={2} lg={2} xl ><DoughnutChart /></Grid>
          <Grid item xs={12} md={3} sm={4} lg={4} xl ><img src="/Box.png"  /></Grid>
        <Grid item xs={12} md={3} sm={2} lg={2} xl > <Insights /></Grid>
         <Grid>
          <Grid item xs={12} md={3} sm={2} lg={2} xl style={{ marginLeft: 300, marginTop: -220 }}> <LineChart /></Grid>
        </Grid> 
        <Grid>
          <Grid item xs={12} md={3} sm={2} lg={2} xl  style={{marginLeft: 750,marginTop:-220}}><img src="/Box.png" alt="" /></Grid>
        </Grid> 
        <Grid>
          <Grid item xs={12} md={3} sm={3} lg={2} xl spacing={2} style={{ maxWidth: 250 }}> <Paper><Tables /></Paper></Grid>
        </Grid> 
        <Grid>
          <Grid item xs={12} md={3} sm={3} lg={2} spacing={2} style={{ maxWidth: 250 }}> <Paper><BloodGroupChart/></Paper></Grid>
         </Grid> 
        
           </Grid> 
       {/* </Grid> */}
      
      {/* <Grid><img src="/Box.png" alt="" /></Grid> */}





        {/* <Grid item xs={12} sm={6} lg={3} xl >
            <UpcomingEvent />
          </Grid> 
          </Grid>
        <Grid item xs={9} container spacing={4}  > */}
          {/* <Grid item xs={12} sm={6}  lg={2} xl ><DoughnutChart /></Grid>
            <Grid item xs={12} sm={6}  lg={4} xl style={{ height: "250px" }}><img src="/Box.png"  alt="" /></Grid> */}
      
           {/* <Grid  container xs={12} sm={6}  lg={4} xl style={{ height: "250px" }}> */}
        {/* <Grid   style={{margin:"10px" }}>
            </Grid>
            <Grid container xs={12} sm={6}  lg={2} xl>

        <Grid   style={{ backgroundColor: "gray" ,height:"250px" }}>
            </Grid>
        
        </Grid>
          </Grid> 
          {/* <Tables />   */}
        {/* </Grid> 
        
        <Grid container  xs={4} sm={4} md={6} lg={3} xl >
          <Grid   >
        <img src="/Box.png"  alt="" />
          </Grid>
        </Grid>

        <Grid container xs={12} sm={12} md={6} lg={3} xl>
          <Grid item>
            <Insights />
          </Grid>
        </Grid> */}
          {/* <LineChart />   */}

         {/* <Grid  container  style={{ height: "250px" }}>
        <Grid item xs={5.5} style={{margin:"10px" }}>
          <LineChart />
        </Grid>
        <Grid item xs={5.5} style={{ backgroundColor: "gray" ,height:"250px" }}>
        
        </Grid>
          </Grid> */}

    {/* </Grid>  */}
       
  </div >
    
  );
}

Default.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Default;
