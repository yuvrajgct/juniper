import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button, CardContent, Grid } from "@mui/material";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import {
    Cake as CakeIcon,
} from "@mui/icons-material";

var cardStyle = {
    height: '415px',
}

export default function UpcomingClientEvents() {
    return (
        <Card sx={{ maxWidth: 300 }} style={cardStyle}>
            <CardActions>
                <Typography variant="h6" gutterBottom>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl>
                            Upcoming Client Anniversary
                        </Grid>
                    </Grid>
                </Typography>
            </CardActions>
            {/* <CardContent variant="h6" style={{ marginLeft: 90 }}>
        SUTURDAY 20TH APRIL{" "}
        <span>
          {" "}
          <img
            src="/birthday.png"
            alt=""
            style={{ height: "30px", marginLeft: -20, wedth: "30px" }}
          />
        </span>{" "}
        Test Surname
      </CardContent>
      <CardContent variant="h6" style={{ marginLeft: 90 }}>
        SUTURDAY 20TH APRIL{" "}
        <span>
          {" "}
          <img
            src="/birthday.png"
            alt=""
            style={{ height: "30px", marginLeft: -20, wedth: "30px" }}
          />
        </span>{" "}
        Test Surname
      </CardContent>
      <br />
      <CardContent variant="h6" style={{ marginLeft: 110 }}>
        MONDAY 18TH APRIL{" "}
        <span>
          {" "}
          <img
            src="/ring.jpg"
            alt=""
            style={{ height: "30px", marginLeft: -20, wedth: "30px" }}
          />
        </span>{" "}
        Test Surname
      </CardContent>
      <CardContent variant="h6" style={{ marginLeft: 130 }}>
        FRIDAY 1ST APRIL{" "}
        <span>
          {" "}
          <img
            src="/ring.jpg"
            alt=""
            style={{ height: "30px", marginLeft: -20, wedth: "30px" }}
          />
        </span>{" "}
        Test Surname
      </CardContent> */}
            <Timeline style={{ marginLeft: -160 }}>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <CakeIcon style={{ color: 'red' }} />
                        Saturday 20th April{" "}

                        <clientname style={{ marginLeft: 20 }}>BlueOne</clientname>

                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <CakeIcon style={{ color: 'red' }} />
                        Saturday 20th April{" "}

                        <clientname style={{ marginLeft: 20 }}>BlueOne</clientname>

                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <CakeIcon style={{ color: 'red' }} />
                        Saturday 20th April{" "}

                        <clientname style={{ marginLeft: 20 }}>BlueOne</clientname>

                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <CakeIcon style={{ color: 'red' }} />
                        Saturday 20th April{" "}

                        <clientname style={{ marginLeft: 20 }}>BlueOne</clientname>

                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <CakeIcon style={{ color: 'red' }} />
                        Saturday 20th April{" "}

                        <clientname style={{ marginLeft: 20 }}>BlueOne</clientname>

                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            {/* <Timeline style={{ marginLeft: -180 }}>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="success" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        {""}
                        SUTURDAY 20TH APRIL{" "}
                        <span>
                            <img
                                src="/ring.jpg"
                                alt=""
                                // style={{ height: "30px", marginLeft: -20, wedth: "30px" }},
                                style={{ height: "30px", wedth: "30px" }}
                            />
                        </span>
                        Test Surname
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="success" />
                    </TimelineSeparator>
                    <TimelineContent>
                        FRIDAY 20TH APRILL{" "}
                        <span>
                            <img
                                src="/ring.jpg"
                                alt=""
                                style={{ height: "30px", marginLeft: 10, wedth: "30px" }}
                            />
                        </span>
                        Test Surname
                    </TimelineContent>
                </TimelineItem>
            </Timeline> */}
        </Card>
    );
}
