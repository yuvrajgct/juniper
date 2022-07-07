import * as React from "react";
import styled from "@emotion/styled";
// import { Power } from "react-feather";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";

import {
  Tooltip,
  Menu,
  MenuItem,
  IconButton as MuiIconButton,
} from "@mui/material";

import useAuth from "../../hooks/useAuth";
import { position } from "polished";
import { textAlign } from "@mui/system";

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

function NavbarUserDropdown() {
  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const router = useRouter();
  const { signOut } = useAuth();

  const toggleMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorMenu(null);
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/auth/sign-in");
  };

  return (
    <React.Fragment>
      <Tooltip title="">
        <IconButton
          aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={toggleMenu}
          color="inherit"
          size="large"
          sx={{
            marginRight: "20px",
            marginBottom: "15px",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0)",
            },
          }}
        >
          <div
            style={{
              fontSize: "14px",
              position: "relative",
              marginBottom: "15%",
            }}
          >
            admin@bluone.in
            <div style={{ position: "absolute", marginLeft: "58%" }}>
              <b>ADMIN</b>
            </div>
          </div>

          <Avatar alt="" src="/profile.png" sx={{ marginBottom: "25px" }} />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu}>Password reset</MenuItem>
        <MenuItem onClick={handleSignOut}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default NavbarUserDropdown;
