import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";
import { green, red } from "@mui/material/colors";

import DashboardLayout from "../../layouts/Dashboard";
import UpcomingEvent from "./UpcomingEvent";

import Actions from "../../components/pages/dashboard/default/Actions";
import BarChart from "../../components/pages/dashboard/default/BarChart";
import LineChart from "../../components/pages/dashboard/default/LineChart";
import DoughnutChart from "../../components/pages/dashboard/default/DoughnutChart";
import Stats from "../../components/pages/dashboard/default/Stats";
import Table from "../../components/pages/dashboard/default/Table";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

function Default() {
  const { t } = useTranslation();
  const data2 = {
    labels: ["males", "femels", "other"],
    datasets: [
      {
        data: [260, 125, 54],
        backgroundColor: [red[500], red[500], red[500]],
        borderWidth: 3,
        // borderColor: theme.palette.background.paper,
      },
    ],
  };

  return (
    <React.Fragment>
      <Helmet title="Default Dashboard" />
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Associate dashboard
          </Typography>
          <Typography style={{ marginTop: "30" }}>
            Dashboard <KeyboardArrowRightIcon style={{ marginBottom: "-8" }} />{" "}
            Associate
          </Typography>
        </Grid>

        <Grid item>
          <Actions />
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          {/* <Stats
            title="Sales Today"
            amount="2.532"
            chip="Today"
            percentagetext="+26%"
            percentagecolor={green[500]}
          /> */}
          <UpcomingEvent />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          {/* <Stats
            title="Visitors"
            amount="170.212"
            chip="Annual"
            percentagetext="-14%"
            percentagecolor={red[500]}
          /> */}
          <DoughnutChart data={data2} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          {/* <Stats
            title="Total Earnings"
            amount="$ 24.300"
            chip="Monthly"
            percentagetext="+18%"
            percentagecolor={green[500]}
          /> */}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          {/* <Stats
            title="Pending Orders"
            amount="45"
            chip="Yearly"
            percentagetext="-9%"
            percentagecolor={red[500]}
            illustration="/static/img/illustrations/waiting.png"
          /> */}
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} lg={8}>
          {/* <LineChart /> */}
        </Grid>
        <Grid item xs={12} lg={4}>
          {/* <DoughnutChart /> */}
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={4}>
          {/* <BarChart /> */}
        </Grid>
        <Grid item xs={12} lg={8}>
          {/* <Table /> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Default.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Default;
