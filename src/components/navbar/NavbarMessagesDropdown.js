import React, { useRef, useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";

import {
  Avatar as MuiAvatar,
  Badge,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover as MuiPopover,
  Tooltip,
  Typography,
} from "@mui/material";
import { MessageSquare } from "react-feather";

const Popover = styled(MuiPopover)`
  .MuiPaper-root {
    width: 150px;
    ${(props) => props.theme.shadows[1]};
    border: 1px solid ${(props) => props.theme.palette.divider};
  }
`;

const Indicator = styled(Badge)`
  .MuiBadge-badge {
    background: ${(props) => props.theme.header.indicator.background};
    color: ${(props) => props.theme.palette.common.white};
  }
`;

const Avatar = styled(MuiAvatar)`
  background: ${(props) => props.theme.palette.main};
`;

const MessageHeader = styled(Box)`
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.palette.divider};
`;

function Message({ title, description, image }) {
  return (
    <Link href="/">
      <ListItem divider>
        <ListItemAvatar>
          <Avatar src={image} alt="Avatar" />
        </ListItemAvatar>
        <ListItemText
          primary={title}
          primaryTypographyProps={{
            variant: "subtitle2",
            color: "textPrimary",
          }}
          secondary={description}
        />
      </ListItem>
    </Link>
  );
}

function NavbarMessagesDropdown() {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Tooltip title="">
        <IconButton color="inherit" ref={ref} onClick={handleOpen}>
          {/* <p style={{fontSize:"13px",marginTop:"-6px"}}> <span style={{marginBottom:"-7px"}}><img src="/bluone-icon.png" alt="" style={{width:"25px",height:"25px"}} /></span>  BluOne India</p> */}
          <img
            src="/bluone-icon.png"
            alt=""
            style={{ width: "25px", height: "25px", marginTop: "-8px" }}
          />{" "}
          <span style={{ fontSize: "13px", marginTop: "-7px" }}>
            BluOne India
          </span>
          {/* <MessageSquare /> */}
        </IconButton>
      </Tooltip>
      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
      >
        <MessageHeader p={0}>
          <Typography variant="subtitle1" color="textPrimary">
            3 New Messages
          </Typography>
        </MessageHeader>
        <React.Fragment>
          <List disablePadding>
            <Message
              // title="Lucy Lavender"
              // description="Nam pretium turpis et arcu. Duis arcu tortor."
              image="/static/img/avatars/bluone-icon.png"
              description="Bluone India"
            />
            <Message
              // title="Remy Sharp"
              // description="Curabitur ligula sapien euismod vitae."
              // image="/static/img/avatars/avatar-2.jpg"
              description="RED Thoughts LLP"
              image="/static/img/avatars/red-icon.png"
            />
            <Message
              // title="Cassandra Mixon"
              // description="Pellentesque auctor neque nec urna."
              description="HOM India"
              image="/static/img/avatars/hom-icon.png"
              // image="/static/img/avatars/avatar-3.jpg"
            />
            <Message
              // title="Cassandra Mixon"
              // description="Pellentesque auctor neque nec urna."
              // image="/static/img/avatars/avatar-3.jpg"
              description="BluOne Ink"
              image="/static/img/avatars/bluone-ink-icon.png"
            />
          </List>
          <Box p={1} display="flex" justifyContent="center">
            <Link href="/">
              <Button size="10px">Show all messages</Button>
            </Link>
          </Box>
        </React.Fragment>
      </Popover>
    </React.Fragment>
  );
}

export default NavbarMessagesDropdown;
