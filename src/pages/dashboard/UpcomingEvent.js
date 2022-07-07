import React from "react";
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
import {
  getUpcomingWorkEvents,
  getUpcomingMaregeEvents,
  getupcomingBirthdayEvents,
  getUpcomingRelievingDay,
  getAllUpcomingEvents,
} from "../../Api/api";

export default function UpcomingEvent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [menuValue, setmenuValue] = React.useState("All");

  const [hide, sethide] = React.useState(false);
  const [hide2, sethide2] = React.useState(false);
  const [hide3, sethide3] = React.useState(false);
  const [hide4, sethide4] = React.useState(false);
  const [hide5, sethide5] = React.useState(true);

  const handleAllEvents = (e) => {
    e.preventDefault();
    setmenuValue("All");
    sethide(false);
    sethide2(false);
    sethide3(false);
    sethide4(false);
    sethide5(true);
    handleClose();
  };

  const handleAllWorkEvents = (e) => {
    e.preventDefault();
    setmenuValue("work");
    sethide(true);
    sethide2(false);
    sethide3(false);
    sethide4(false);
    sethide5(false);
    handleClose();
  };

  const handleAllMaregeEvents = (e) => {
    e.preventDefault();
    setmenuValue("Mrg");
    sethide(false);
    sethide2(true);
    sethide3(false);
    sethide4(false);
    sethide5(false);
    handleClose();
  };

  const handleAllBirthdayEvents = (e) => {
    e.preventDefault();
    setmenuValue("Bdy");
    sethide(false);
    sethide2(false);
    sethide3(true);
    sethide4(false);
    sethide5(false);
    handleClose();
  };

  const handleAllRelevingEvents = (e) => {
    e.preventDefault();
    setmenuValue("Rel");
    sethide(false);
    sethide2(false);
    sethide3(false);
    sethide4(true);
    sethide5(false);
    handleClose();
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

  const [value, setValue] = React.useState([]);
  const [value2, setValue2] = React.useState([]);
  const [value3, setValue3] = React.useState([]);
  const [value4, setValue4] = React.useState([]);
  const [value5, setValue5] = React.useState([]);

  // ------------------------Api  start -------------------------
  React.useEffect(() => {
    getAllUpcomingWorkEventsList();
    getAllUpcomingMaregeList();
    getAllUpcomingBirthdayEvents();
    getAllUpcomingRelievingDay();
    getAllUpcomingEventsForAll();
  }, []);

  const getAllUpcomingWorkEventsList = async () => {
    const response = await getUpcomingWorkEvents({ org_id: 1 });
    console.log("data****", response);
    if (response.status === 200) {
      if (response.data && response.data != undefined) {
        setValue(response.data);
        // console.log("data****", response.data);
      }
    } else {
    }
  };

  const getAllUpcomingMaregeList = async () => {
    const response = await getUpcomingMaregeEvents({ org_id: 1 });
    console.log("data****", response);
    if (response.status === 200) {
      if (response.data && response.data != undefined) {
        setValue2(response.data);
        // console.log("data****", response.data);
      }
    }
  };

  const getAllUpcomingBirthdayEvents = async () => {
    const response = await getupcomingBirthdayEvents({ org_id: 1 });
    console.log("data****", response);
    if (response.status === 200) {
      if (response.data && response.data != undefined) {
        setValue3(response.data);
        // console.log("data****", response.data);
      }
    } else {
    }
  };

  const getAllUpcomingRelievingDay = async () => {
    const response = await getUpcomingRelievingDay({ org_id: 1 });
    console.log("data****", response);
    if (response.status === 200) {
      if (response.data && response.data != undefined) {
        setValue4(response.data);
        // console.log("data****", response.data);
      }
    }
  };

  const getAllUpcomingEventsForAll = async () => {
    const response = await getAllUpcomingEvents({ org_id: 1 });
    console.log("data****", response);
    if (response.status === 200) {
      if (response.data && response.data != undefined) {
        setValue5(response.data);
        // console.log("data****", response.data);
      }
    }
  };
  // -------------------------Api  end-----------------------------

  return (
    <Card
      sx={{
        // overflowY: "scroll",
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
            {menuValue} <KeyboardArrowDownIcon />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleAllEvents}>All</MenuItem>
            <MenuItem onClick={handleAllBirthdayEvents}>Birthday</MenuItem>
            <MenuItem onClick={handleAllRelevingEvents}>Relieving Day</MenuItem>
            <MenuItem onClick={handleAllWorkEvents}>Work Anniversary</MenuItem>
            <MenuItem onClick={handleAllMaregeEvents}>
              Marriage Anniversary
            </MenuItem>
          </Menu>
        </CardActions>

        {/* {value?.map((data) => {
          return (
            <div style={{ marginLeft: "-170px" }}>
              <Timeline>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="success" />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div>
                      <Typography sx={{ fontSize: "11px" }}>
                        {data.date.toUpperCase()}
                      </Typography>
                      <img
                        src="/cack.PNG"
                        alt=""
                        style={{ height: "30px", wedth: "25px" }}
                      />
                      <Typography
                        sx={{
                          fontSize: "11px",
                          marginTop: "-30px",
                          marginLeft: "28px",
                        }}
                      >
                        {" "}
                        {data.fullName}
                      </Typography>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          );
        })} */}

        <div id="scroll-container" style={{ marginLeft: "-170px" }}>
          {hide && (
            <Timeline style={{ overflowY: "auto", height: "400px" }}>
              {value?.map((data, index) => {
                return (
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="success" />
                      {value.length > 1 && index != value.length - 1 && (
                        <TimelineConnector />
                      )}
                    </TimelineSeparator>
                    <TimelineContent>
                      <div>
                        <Typography sx={{ fontSize: "11px" }}>
                          {data.date.toUpperCase()}
                        </Typography>
                        <img
                          src="/Ring.PNG"
                          alt="work"
                          style={{ height: "30px", wedth: "25px" }}
                        />
                        <Typography
                          sx={{
                            fontSize: "11px",
                            marginTop: "-30px",
                            marginLeft: "28px",
                          }}
                        >
                          {data.fullName}
                        </Typography>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline>
          )}

          {/* <Timeline>
            {value2?.map((data, index) => {
              return (
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="success" />
                    {index != value.length - 1 ||
                      (!(value.length == 1) && <TimelineConnector />)}
                  </TimelineSeparator>
                  <TimelineContent>
                    <div>
                      <Typography sx={{ fontSize: "11px" }}>
                        {data.date.toUpperCase()}
                      </Typography>
                      <img
                        src="/Ring.PNG"
                        alt=""
                        style={{ height: "30px", wedth: "25px" }}
                      />
                      <Typography
                        sx={{
                          fontSize: "11px",
                          marginTop: "-30px",
                          marginLeft: "28px",
                        }}
                      >
                        {data.fullName}
                      </Typography>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline> */}

          {hide2 && (
            <Timeline style={{ overflowY: "auto", height: "400px" }}>
              {value2?.map((data, index) => {
                return (
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="success" />
                      {value2.length > 1 && index != value2.length - 1 && (
                        <TimelineConnector />
                      )}
                    </TimelineSeparator>
                    <TimelineContent>
                      <div>
                        <Typography sx={{ fontSize: "11px" }}>
                          {data.date.toUpperCase()}
                        </Typography>
                        <img
                          src="/Ring.PNG"
                          alt="M.Anv"
                          style={{ height: "30px", wedth: "25px" }}
                        />
                        <Typography
                          sx={{
                            fontSize: "11px",
                            marginTop: "-30px",
                            marginLeft: "28px",
                          }}
                        >
                          {data.fullName}
                        </Typography>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline>
          )}

          {hide3 && (
            <Timeline
              style={{
                overflowY: "auto",
                height: "400px",
                // maxHeight: "100vh",
              }}
            >
              {value3?.map((data, index) => {
                return (
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="success" />
                      {value3.length > 1 && index != value3.length - 1 && (
                        <TimelineConnector />
                      )}
                    </TimelineSeparator>
                    <TimelineContent>
                      <div>
                        <Typography sx={{ fontSize: "11px" }}>
                          {data.date.toUpperCase()}
                        </Typography>
                        <img
                          src="/cack.PNG"
                          alt="BDY"
                          style={{ height: "30px", wedth: "25px" }}
                        />
                        <Typography
                          sx={{
                            fontSize: "11px",
                            marginTop: "-30px",
                            marginLeft: "28px",
                          }}
                        >
                          {data.fullName}
                        </Typography>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline>
          )}

          {hide4 && (
            <Timeline style={{ overflowY: "auto", height: "400px" }}>
              {value4?.map((data, index) => {
                return (
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="success" />
                      {value4.length > 1 && index != value4.length - 1 && (
                        <TimelineConnector />
                      )}
                    </TimelineSeparator>
                    <TimelineContent>
                      <div>
                        <Typography sx={{ fontSize: "11px" }}>
                          {data.date.toUpperCase()}
                        </Typography>
                        <img
                          src="/Ring.PNG"
                          alt="Releving"
                          style={{ height: "30px", wedth: "25px" }}
                        />
                        <Typography
                          sx={{
                            fontSize: "11px",
                            marginTop: "-30px",
                            marginLeft: "28px",
                          }}
                        >
                          {data.fullName}
                        </Typography>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline>
          )}

          {hide5 && (
            <Timeline
              style={{
                overflowY: "auto",
                height: "400px",
                // maxHeight: "100vh",
              }}
            >
              {value5?.map((data, index) => {
                return (
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="success" />
                      {value5.length > 1 && index != value5.length - 1 && (
                        <TimelineConnector />
                      )}
                    </TimelineSeparator>
                    <TimelineContent>
                      <div>
                        <Typography sx={{ fontSize: "11px" }}>
                          {data?.date?.toUpperCase()}
                        </Typography>
                        <img
                          src="/Ring.PNG"
                          alt="All"
                          style={{ height: "30px", wedth: "25px" }}
                        />
                        <Typography
                          sx={{
                            fontSize: "11px",
                            marginTop: "-30px",
                            marginLeft: "28px",
                          }}
                        >
                          {data.fullName && data.fullName}
                        </Typography>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
