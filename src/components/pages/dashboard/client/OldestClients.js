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
  width: 115%;
`;

const ColumnChart = ({ theme }) => {
    const data = [
        {
            name: "Oldest Client",
            data: [50, 200, 100],
        },
    ];

    const options = {
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: "rounded",
                columnWidth: "110%",
                distributed: true
            },
        },
        dataLabels: {
            enabled: true,
            position: 'top',
            formatter: function (val, opt) {
                return opt.w.globals.labels[opt.dataPointIndex] + "$" + val + "k"
            },

        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
        },
        xaxis: {
            show: false,
            categories: [
                "",
                "",
                "",
            ],
        },
        yaxis: {
            show: false,
            title: {
                //text: "$ (thousands)",
            },

        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    //return "$ " + val + " thousands";
                },
            },
        },
        colors: [
            theme.palette.warning.light,
            theme.palette.primary.light,
            theme.palette.success.light,
        ],
        chart: {
            toolbar: {
                show: false,
            },
        }

    };
    var cardStyle = {
        height: '200px',
    }
    return (
        <Card mb={6} mt={1} style={cardStyle}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Oldest Clients
                </Typography>

                <Spacer mb={1} />

                <ChartWrapper>
                    <Chart options={options} series={data} type="bar" height="190" />
                </ChartWrapper>
            </CardContent>
        </Card>
    );
};

export default withTheme(ColumnChart);
