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
import Avatar from "@mui/material/Avatar";
import { padding } from "@mui/system";
import styled from "@emotion/styled";

export default function UpcomingEvent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const Upcoming = styled.h6`
    position: absolute;
    height: 35px;
    left: 16px;
    right: 136px;
    top: 17px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;

    display: flex;
    align-items: center;

    color: #494949;
  `;
  const ChartWrapper = styled.div`
    height: 130px;
    width: auto;
    position: relative;
  `;
  return (
    <Card
      sx={{
        position: "absolute",
        width: "216px",
        height: "452px",
        left: "280px",
        top: "132px",

        background: "#FFFFFF",
        borderRadius: "10px",
      }}
    >
      <CardContent>
        <CardActions>
          <Typography gutterBottom variant="h6">
            Upcoming Events
          </Typography>
          <Button
            sx={{ backgroundColor: "#e8eaf6", marginLeft: "45px" }}
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
        <div style={{ marginLeft: "-160px" }}>
          <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {/* <Typography>
                  SUTURDAY 20TH APRIL
                  <Avatar alt="Remy Sharp" src="/Cake.PNG" />
                  Test Surname
                </Typography> */}
                {/* <Typography> */}
                <div>
                  <Typography sx={{ fontSize: "12px" }}>
                    SATURDAY 20TH APRIL
                  </Typography>

                  <img
                    src="/cack.PNG"
                    alt=""
                    style={{ height: "30px", marginLeft: -0, wedth: "30px" }}
                  />

                  <Typography sx={{ fontSize: "14px" }}>
                    Test Surname
                  </Typography>
                </div>
                {/* </Typography> */}
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="success" />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  FRIDAY 5TH APRIL
                  <br />
                  <img
                    src="/cack.PNG"
                    alt=""
                    style={{
                      height: "30px",
                      marginLeft: -5,
                      wedth: "30px",
                    }}
                  />
                  {/* <Avatar alt="Remy Sharp" src="/Cake.PNG" /> */}
                  Test Surname
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
          <Timeline
          // style={{ marginLeft: -180, marginTop: "50px" }}
          >
            <Timeline />
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  MONDAY 18TH APRIL
                  <br />
                  <img
                    src="/Ring.PNG"
                    alt=""
                    style={{ height: "30px", marginLeft: -5, wedth: "30px" }}
                  />
                  {/* <Avatar alt="Remy Sharp" src="/Ring.PNG" /> */}
                  Test Surname
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="success" />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  FRIDAY 1ST APRIL
                  <br />
                  <img
                    src="/Ring.PNG"
                    alt=""
                    style={{ height: "30px", marginLeft: -5, wedth: "30px" }}
                  />
                  {/* <Avatar alt="Remy Sharp" src="/Ring.PNG" /> */}
                  Test Surname
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </CardContent>
    </Card>
  );
}
