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
  height: 200px;
  width: 100%;
`;

const BarChart = ({ theme }) => {
    const data = [
        {
            name: "",
            data: [100000000, 50000000, 30000000],
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
            categories: ['BlueOne', 'Red', 'Saarthi'],
            labels: {
                formatter: function (val) {
                    //return val + "K";
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
                    return "₹" + val;
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
                    Top 3 First Month Clients
                </Typography>

                <Spacer mb={6} />

                <ChartWrapper>
                    <Chart options={options} series={data} type="bar" height="200" />
                </ChartWrapper>
            </CardContent>
        </Card>
    );
};

export default withTheme(BarChart);
