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
            name: "Marine Sprite",
            data: [44],
        },
        {
            name: "Striking Calf",
            data: [53],
        },
    ];

    const options = {
        chart: {
            stacked: true,
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        stroke: {
            width: 1,
            colors: ["#fff"],
        },
        xaxis: {
            categories: [2008],
            labels: {
                formatter: function (val) {
                    // return val + "K";
                },
            },
        },
        yaxis: {
            title: {
                text: undefined,
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "K";
                },
            },
        },
        fill: {
            opacity: 1,
        },
        legend: {
            position: "top",
            horizontalAlign: "left",
            offsetX: 40,
        },
        colors: [
            theme.palette.primary.light,
            theme.palette.success.light,
            theme.palette.warning.light,
            theme.palette.error.light,
            theme.palette.info.light,
        ],
    };

    return (
        <Card mb={1}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Bar Chart
                </Typography>
                <Typography variant="body2" gutterBottom>
                    A bar chart is the best tool for displaying comparisons between
                    categories of data.
                </Typography>

                <Spacer mb={6} />

                <ChartWrapper>
                    <Chart options={options} series={data} type="bar" height="350" />
                </ChartWrapper>
            </CardContent>
        </Card>
    );
};

export default withTheme(BarChart);
