import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import dynamic from "next/dynamic";

import { CardContent, Card as MuiCard, Typography } from "@mui/material";
import { spacing } from "@mui/system";
import { getTopservices } from "../../../../API/Clientapi";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const ChartWrapper = styled.div`
  height: 250px;
  width: 100%;
`;


const BarChart = ({ theme }) => {

    React.useEffect(() => {
        getAllgetTopservices();
    }, []);

    const getAllgetTopservices = async () => {
        const response = await getTopservices({ org_id: 1 });
        if (response.status === 200) {
            if (response.data && response.data != undefined) {
                console.log("----", response.data);
            }
        } else {
        }
    };

    const data = [
        {
            name: "",
            data: [100, 80, 73, 68, 52],
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
            categories: ['Marketing', 'Research', 'Design', 'Promotion', 'Advertisement'],
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
                    //return val + "K";
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
        <Card mb={1} style={cardStyle}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Top Services
                </Typography>
                <ChartWrapper>
                    <Chart options={options} series={data} type="bar" height="180" />
                </ChartWrapper>
            </CardContent>
        </Card>
    );
};

export default withTheme(BarChart);
