import React from "react";
import styled from "@emotion/styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { Button as MuiButton, Grid, Menu, MenuItem } from "@mui/material";
import {
  Loop as LoopIcon,
  FilterList as FilterListIcon,
} from "@mui/icons-material";
import { spacing } from "@mui/system";
import SettingsIcon from "@mui/icons-material/Settings";

const Button = styled(MuiButton)(spacing);

const SmallButton = styled(Button)`
  padding: 4px;
  min-width: 0;

  svg {
    width: 0.9em;
    height: 0.9em;
  }
`;

function Actions() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* <SmallButton size="small" mr={2}> */}
      {/* <LoopIcon /> */}
      {/* </SmallButton> */}
      <SmallButton
        // variant="dark"
        onClick={handleClick}
        // style={{ fontSize: "large" }}
        // mr={2}
        sx={{
          marginTop: "10px",
          width: "48px",
          height: "16px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "16px",
          color: " #494949",
          flex: " Right",
          order: "0",
          flexGrow: "0",
        }}
      >
        Presets
        <KeyboardArrowDownIcon />
      </SmallButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Today</MenuItem>
        <MenuItem onClick={handleClose}>Yesterday</MenuItem>
        <MenuItem onClick={handleClose}>Last 7 days</MenuItem>
        <MenuItem onClick={handleClose}>Last 30 days</MenuItem>
        <MenuItem onClick={handleClose}>This month</MenuItem>
        <MenuItem onClick={handleClose}>Last month</MenuItem>
      </Menu>
      <Button
        sx={{ marginLeft: "20px" }}
        variant="contained"
        color="secondary"
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
      >
        <SettingsIcon />
        Setting
      </Button>
    </div>
  );
}

export default Actions;
