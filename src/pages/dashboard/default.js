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
import axios from 'axios';

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

  const postURL = "http://juniper-local.com/services/associate/get-gender";
  const postData = {
    org_id: "1",
  };
  const option = {
    method: "post",
    body: JSON.stringify({
      org_id: "1",
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };


// fetch(postURL, { // fake API endpoint
//   method: 'POST',
//   headers: {

//      'Accept': 'application/json',
//      'Content-Type': 'application/json',
//      'Access-Control-Allow-Origin': '*', 
//      // 'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   body: JSON.stringify(postData), // turn the JS object literal into a JSON string
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => {
//   console.error(err);
// });




try { 
  axios
  .post("https://mis-sandbox.bluone.in/services/associate/list-associate", { org_id: "1",
   headers: { 
     "Content-Type": "application/json",
     'Access-Control-Allow-Origin': '*'
   },
 })
  .then(function (response) {
                  // handle success
                  console.log(response);
                })
  .catch(function (error) {
                  // router.push("/dashboard/default");
                  // handle error
                  console.log(error);
                });
              // router.push("/private");
              // router.push("/dashboard/default");
            } catch (error) {
              const message = error.message || "Something went wrong";

              setStatus({ success: false });
              setErrors({ submit: message });
              setSubmitting(false);
            }




  // try { 
  //   axios.post("http://juniper-local.com/services/associate/list-associate", {
  //     headers: { 
  //      "Content-Type": "application/json",
  //      'Access-Control-Allow-Origin': '*'
  //    },
  //    org_id: "2",
  //  })
  //   .then(function (response) {
  //                 // handle success
  //                 console.log(response);
  //               })
  //   .catch(function (error) {

  //                 // handle error
  //                 console.log(error);
  //               });
  //             // router.push("/private");
  //             // router.push("/dashboard/default");
  //           } catch (error) {
  //             const message = error.message || "Something went wrong"; 
  //           }

  return (
    <Grid
    sx={12}
    sm={12}
    md={12}
    lg={12}
    justifyContent="space-between"
    container
    style={{ marginTop: "-30px" }}
    >
    <Helmet title="Default Dashboard" />
    <Grid item>
    <Typography variant="h3">
    Associate dashboard
    <Typography>
    Dashboard <KeyboardArrowRightIcon style={{ marginBottom: "-6" }} />
    Associate
    </Typography>
    </Typography>
    </Grid>
    <Grid item style={{ marginLeft: "600px" }}>
    <Actions />
    </Grid>

    <Grid my={8} />

    <Grid container spacing={2} direction={"row"}>
    <Grid container lg={2} direction={"row"}>
    <Grid item xs={4} md={1} sm={1} lg={12}>
    <UpcomingEvent />
    </Grid>
    </Grid>
    <Grid container direction={"row"} lg={9} spacing={4}>
    <Grid item xs={6} md={3} sm={3} lg={4}>
    <DoughnutChart />
    </Grid>
    <Grid item xs={6} md={6} sm={6} lg={4}>
    <img src="/Box.png" />
    </Grid>
    <Grid item xs={6} md={3} sm={3} lg={4}>
    {" "}
    <Insights />
    </Grid>
    <Grid
    item
    xs={6}
    sm={5.5}
    lg={6}
    // style={{ marginLeft: 298, marginTop: -210 }}
    >
    {" "}
    <LineChart />
    </Grid>
    <Grid
    item
    xs={6}
    sm={5.5}
    lg={6}
    // style={{ marginLeft: 750, marginTop: -250 }}
    >
    {" "}
    <BarChart />
    </Grid>
    </Grid>

    <Grid item xs={6} sm={6} lg={2.5} spacing={2} style={{ maxWidth: 250 }}>
    {" "}
    <Tables />
    </Grid>
    <Grid item xs={6} sm={6} lg={2.5} spacing={2} style={{ maxWidth: 250 }}>
    {" "}
    <BloodGroupChart />
    </Grid>
    <Grid item xs={6} sm={6} lg={2.4}></Grid>
    <Grid item xs={6} sm={5.5} lg={4.5}>
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
