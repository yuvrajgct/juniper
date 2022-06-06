import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import dynamic from "next/dynamic";

import { CardContent, Card as MuiCard, Typography } from "@mui/material";
import { spacing } from "@mui/system";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const ChartWrapper = styled.div`
  height: 350px;
  width: 100%;
`;

const BarChart = ({ theme }) => {
    const data = [
        {
            name: "> 2 Years",
            data: [10],
        },
        {
            name: "> 4 Years",
            data: [12],
        },
        {
            name: "> 8 Years",
            data: [5],
        },
        {
            name: "> 10 Years",
            data: [11],
        },
    ];

    const options = {
        chart: {
            toolbar: {
                show: false,
            },
            stacked: true,
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        stroke: {
            width: 0,
            colors: ["#fff"],
        },
        xaxis: {
            categories: [""],

        },
        yaxis: {
            show: false,

        },
        tooltip: {
            y: {
                // formatter: function (val) {
                //     return val + "K";
                // },
            },
        },
        fill: {
            opacity: 1,
        },
        legend: {
            show: false,
            position: "top",
            horizontalAlign: "left",
            offsetX: 40,
        },
        colors: [
            theme.palette.primary.light,
            theme.palette.warning.light,
            theme.palette.success.light,
            theme.palette.success.dark,
        ],
    };

    return (
        <Card mb={1}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Bar Chart
                </Typography>

                <Spacer mb={6} />

                <ChartWrapper>
                    <Chart options={options} series={data} type="bar" height="150" />
                </ChartWrapper>
            </CardContent>
        </Card>
    );
};

export default withTheme(BarChart);
