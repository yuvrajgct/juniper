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

const LineChart = ({ theme }) => {
    const data = [
        {
            name: "BlueOne",
            data: [15, 30, 10, 38, 22, 36],
        },
        {
            name: "Red",
            data: [5, 10, 30, 25, 23, 40],
        },
    ];

    const options = {
        chart: {
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: true,
            // style: {
            //     colors: ['#333']
            // },
            offsetX: 30,
            background: {
                enabled: true,
                foreColor: '#fff',
                borderRadius: 2,
                //padding: 4,
                opacity: 0.9,
                borderWidth: 1,
                borderColor: '#fff'
            },
        },
        stroke: {
            width: [5, 5],
            curve: "smooth",
        },
        markers: {
            size: 0,
            style: "hollow", // full, hollow, inverted
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
            ],
            title: {
                text: "Months",
            },
        },
        yaxis: {
            show: true,
            title: {
                text: "Amount (in thousands $)",
            },

        },
        tooltip: {
            y: [
                {
                    title: {
                        formatter: function (val) {
                            return val + " (mins)";
                        },
                    },
                },
                {
                    title: {
                        formatter: function (val) {
                            return val + " per session";
                        },
                    },
                },
                {
                    title: {
                        formatter: function (val) {
                            return val;
                        },
                    },
                },
            ],
        },
        grid: {
            borderColor: "#f1f1f1",
        },
        colors: [
            theme.palette.primary.light,
            theme.palette.warning.light,
        ],
        markers: {
            size: 0,
        }
    };
    var cardStyle = {
        height: '200px',
    }
    return (
        <Card mb={6} style={cardStyle}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Last Month Highest & Lowest Paying Clients
                </Typography>

                <Spacer mb={6} />

                <ChartWrapper>
                    <Chart options={options} series={data} type="line" height="190" />
                </ChartWrapper>
            </CardContent>
        </Card>
    );
};

export default withTheme(LineChart);
