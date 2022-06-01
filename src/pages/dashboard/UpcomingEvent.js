import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button, CardContent } from "@mui/material";
import { Button as MuiButton, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { blueGrey } from "@mui/material/colors";

export default function UpcomingEvent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card sx={{ maxWidth: "250px" }}>
      <CardActions>
        <Typography gutterBottom variant="small" component="div">
          Upcoming Event
        </Typography>
        <Button
          sx={{ marginLeft: 20, backgroundColor: "#e8eaf6" }}
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          size="30px"
          variant="dark"
          onClick={handleClick}
        >
          All <KeyboardArrowDownIcon />
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

      <Timeline style={{ marginLeft: -180 }}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div>
              <div>SUTURDAY 20TH APRIL</div>
              <div>
                <img
                  src="/birthday.png"
                  alt=""
                  // style={{ height: "30px", marginLeft: -20, wedth: "30px" }},
                  style={{ height: "30px", wedth: "30px" }}
                />
                Test Surname
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
          </TimelineSeparator>
          <TimelineContent>
            <div>FRIDAY 5TH APRILL</div>
            <div>
              <img
                src="/birthday.png"
                alt=""
                style={{ height: "30px", marginLeft: 10, wedth: "30px" }}
              />
              Test Surname
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <Timeline style={{ marginLeft: -180, marginTop: "70px" }}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div> MONDAY 18TH APRIL</div>
            <div>
              <img
                src="/ring.jpg"
                alt=""
                // style={{ height: "30px", marginLeft: -20, wedth: "30px" }},
                style={{ height: "30px", wedth: "30px" }}
              />
              Test Surname
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
          </TimelineSeparator>
          <TimelineContent>
            <div>FRIDAY 1ST APRIL</div>
            <div>
              <img
                src="/ring.jpg"
                alt=""
                style={{ height: "30px", marginLeft: 10, wedth: "30px" }}
              />
              Test Surname
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Card>
  );
}
