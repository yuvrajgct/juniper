import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button, CardContent } from "@mui/material";
import { Button as MuiButton, Menu, MenuItem } from "@mui/material";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function UpcomingEvent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActions>
        <Typography gutterBottom variant="small" component="div">
          Upcoming Event
        </Typography>
        <Button
          sx={{ marginLeft: 10 }}
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          All
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>All</MenuItem>
          <MenuItem onClick={handleClose}>Birthday</MenuItem>
          <MenuItem onClick={handleClose}>Relieving Day</MenuItem>
          <MenuItem onClick={handleClose}>Work Anniversary</MenuItem>
          <MenuItem onClick={handleClose}>Marriage Anniversary</MenuItem>
        </Menu>
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
      <Timeline style={{ marginLeft: -180 }}>
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
                src="/birthday.png"
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
                src="/birthday.png"
                alt=""
                style={{ height: "30px", marginLeft: 10, wedth: "30px" }}
              />
            </span>
            Test Surname
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <Timeline style={{ marginLeft: -180 }}>
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
      </Timeline>
    </Card>
  );
}
