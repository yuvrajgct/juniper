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
import DoughnutChart from "../../components/pages/dashboard/default/DoughnutChart";
import Stats from "../../components/pages/dashboard/default/Stats";
import Table from "../../components/pages/dashboard/default/Table";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from "axios";
import Insights from "./Insights";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { margin } from "polished";

// const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

function Default() {
  axios
    .post("https://mis-sandGrid.bluone.in/services/associate/list-associate", {
      org_id: 1,
    })
    .then(function (response) {
      // router.push("/dashboard/default");

      // handle success
      console.log("response================================", response);
    })
    .catch(function (error) {
      // handle error
      console.log("========================");
      console.log(error);
    }); 
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
  const DognutChartdata = {
    labels: ["males", "females", "other"],
    datasets: [
      {
        data: [70, 20, 10],
        backgroundColor: [teal[500], indigo[500], orange[500]],
        borderWidth: 0,
        // borderColor: theme.palette.background.paper,
      },
    ],
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      
      <Helmet title="Default Dashboard" />
      <Grid
        justifyContent="space-between"
        container spacing={4}>
        <Grid item style={{marginTop:"-30px"}}>
          <Typography variant="h3" >
            Associate dashboard
          </Typography>
          <Typography>
            Dashboard <KeyboardArrowRightIcon style={{ marginBottom: "-6" }} />
            Associate
          </Typography>
        </Grid>
        <Grid item style={{ marginTop: "-30px" }}>
          <Actions />
        </Grid>
      </Grid>
         

 <Grid container spacing={6}  >
      <Grid item xs={3} style={{ height: "500px" }}>
        <Paper >
         <UpcomingEvent />

        </Paper>
      </Grid>
      <Grid xs container  style={{  height: "250px",margin:"10px" }}>
        <Grid item xs={3}>
          <DoughnutChart data={DognutChartdata}
              insideDognut={{ Heading: "associste", number: 207 }} />
        </Grid>
        <Grid item xs={5.5} style={{ backgroundColor: "gray",margin:"10px" }}>
          
        </Grid>
        <Grid item xs={3} >
            <Insights />
        </Grid>
      <Grid  container  style={{ height: "250px" }}>
        <Grid item xs={5.5} style={{margin:"10px" }}>
          <LineChart />
        </Grid>
        <Grid item xs={5.5} style={{ backgroundColor: "gray" ,margin:"10px" }}>
        
        </Grid>
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
