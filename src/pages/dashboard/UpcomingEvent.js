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

export default function UpcomingEvent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card style={{ maxHeight: "560px" }} > 
      <CardContent style={{ maxHeight: "560px" }}>
       <CardActions> 
        <Typography gutterBottom variant="small" >
          Upcoming Event
        </Typography>
        <Button
          sx={{ backgroundColor: "#e8eaf6" }}
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
      <div style={{marginLeft:"-160px", }}>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent >
            
              SUTURDAY 20TH APRIL
               Test Surname
               <span> <Avatar alt="Remy Sharp" src="/birthday.png" /></span>
                {/* <img
                  src="/birthday.png"
                  alt=""
                  // style={{ height: "30px", marginLeft: -20, wedth: "30px" }},
                /> */}
              
            
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
          </TimelineSeparator>
          <TimelineContent>
            FRIDAY 5TH APRILL
            
              {/* <img src="/birthday.png" alt="" /> */}
              Test Surname
              <Avatar alt="Remy Sharp" src="/birthday.png" />
            
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
             MONDAY 18TH APRIL
            
              <Avatar alt="Remy Sharp" src="/ring.jpg" />
            
              Test Surname
            
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
          </TimelineSeparator>
          <TimelineContent>
            FRIDAY 1ST APRIL
              Test Surname
              <Avatar alt="Remy Sharp" src="/ring.jpg" />
            
          </TimelineContent>
        </TimelineItem>
        </Timeline>
        </div>
        </CardContent>
     </Card> 
  );
}
