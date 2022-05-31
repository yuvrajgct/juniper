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

import Actions from "../../components/pages/dashboard/client/Actions";
import DoughnutChart from "../../components/pages/dashboard/client/DoughnutChart";
import SimpleTable from "../../components/pages/dashboard/client/SimpleTable";
import TopfiveTable from "../../components/pages/dashboard/client/TopfiveTable";
import LowfiveTable from "../../components/pages/dashboard/client/LowfiveTable";
import TopClientServices from "../../components/pages/dashboard/client/TopClientServices";
import TopThreeFirstMonth from "../../components/pages/dashboard/client/TopThreeFirstMonth";
import OldestClients from "../../components/pages/dashboard/client/OldestClients";
import AveragePayingClient from "../../components/pages/dashboard/client/AveragePayingClient";
import Insight from "../../components/pages/dashboard/client/Insight";
import UpcomingClientEvents from "../../components/pages/dashboard/client/UpcomingClientEvents";
import PendingInvoices from "../../components/pages/dashboard/client/PendingInvoices";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

function Default() {
    const { t } = useTranslation();
    const data2 = {
        labels: ["Confirmed", "Prospect", "others"],
        datasets: [
            {
                data: [260, 125, 154],
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
                        Client dashboard
                    </Typography>
                    <Typography style={{ marginTop: "30" }}>
                        Dashboard <KeyboardArrowRightIcon style={{ marginBottom: "-8" }} />{" "}
                        Client
                    </Typography>
                </Grid>

                <Grid item>
                    <Actions />
                </Grid>
            </Grid>

            <Divider my={6} />

            <Grid container spacing={6}>
                <Grid item xs={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <DoughnutChart data={data2} />
                                </Grid>
                                <Grid item xs={12}>
                                    <UpcomingClientEvents />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid item xs={12}>
                                <DoughnutChart data={data2} />
                            </Grid>
                            <Grid item xs={12}>
                                <SimpleTable />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TopfiveTable />
                        </Grid>
                        <Grid item xs={4}>
                            <LowfiveTable />
                        </Grid>
                        <Grid item xs={4}>
                            <Insight />
                        </Grid>
                        <Grid item xs={8}>
                            <TopClientServices />
                        </Grid>
                        <Grid item xs={4}>
                            <PendingInvoices />
                        </Grid>
                        <Grid item xs={8}>
                            <LowfiveTable />
                        </Grid>
                        <Grid item xs={4}>
                            <TopClientServices />
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
